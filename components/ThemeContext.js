import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  // Start with light theme for server-side rendering to avoid hydration mismatch
  const [theme, setTheme] = useState('light');
  // Track if component is mounted to avoid hydration issues
  const [mounted, setMounted] = useState(false);

  // Only run after component mounts on client-side
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    
    // Use saved theme or fallback to system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only change theme if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    // Add event listener with compatibility for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
      // Legacy support
      mediaQuery.addListener(handleSystemThemeChange);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else {
        // Legacy support
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    if (!mounted) return;
    
    // First, remove transition classes to make changes instant
    document.documentElement.classList.remove('theme-transition-ready');
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Remove any existing transition timeouts
    if (window._themeTransitionTimeout) {
      clearTimeout(window._themeTransitionTimeout);
    }
    
    // For better synchronization, first apply all color changes without transitions
    if (theme === 'dark') {
      // Apply dark mode instantly
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#121f30';
      document.body.style.backgroundColor = '#121f30';
      
      // Apply dark mode to all specific components that might lag
      const elementsToUpdate = document.querySelectorAll('.theme-sync');
      elementsToUpdate.forEach(el => {
        el.style.backgroundColor = '#121f30';
        if (el.classList.contains('theme-sync-text')) {
          el.style.color = '#f5f5f5';
        }
      });
    } else {
      // Apply light mode instantly
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f5f5f0';
      document.body.style.backgroundColor = '#f5f5f0';
      
      // Apply light mode to all specific components that might lag
      const elementsToUpdate = document.querySelectorAll('.theme-sync');
      elementsToUpdate.forEach(el => {
        el.style.backgroundColor = '#f5f5f0';
        if (el.classList.contains('theme-sync-text')) {
          el.style.color = '#0f172a';
        }
      });
    }
    
    // Force browser to immediately apply all these changes
    document.body.offsetHeight; // This triggers a reflow
    
    // Add transitions back after a very short delay (next frame essentially)
    window._themeTransitionTimeout = setTimeout(() => {
      document.documentElement.classList.add('theme-transition-ready');
      
      // Remove direct styles after transitions are enabled (let CSS take over)
      setTimeout(() => {
        const elementsToUpdate = document.querySelectorAll('.theme-sync');
        elementsToUpdate.forEach(el => {
          el.style.backgroundColor = '';
          if (el.classList.contains('theme-sync-text')) {
            el.style.color = '';
          }
        });
      }, 300); // After transitions should be complete
    }, 16); // Wait for next frame (approx 16ms)
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Render the provider without any theme logic until mounted
  // This ensures server-rendered HTML matches initial client render
  return (
    <ThemeContext.Provider value={{ 
      theme: mounted ? theme : 'light', // Always use 'light' until mounted
      toggleTheme: mounted ? toggleTheme : () => {} 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}