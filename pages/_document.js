import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    // Start with light theme for SSR to ensure matching client-side initial render
    return (
      <Html lang="en">
        <Head>
          {/* Add meta theme-color for browser UI */}
          <meta name="theme-color" content="#121f30" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" content="#f5f5f0" media="(prefers-color-scheme: light)" />
        </Head>
        <body>
          {/* 
            The script below helps prevent flash of wrong theme
            BUT DOESN'T affect the React hydration - it just improves UX
            while waiting for React to hydrate and run the proper theme logic
          */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    // Transitions are now handled by ThemeContext directly

                    // This is just a visual improvement before React hydrates
                    // The actual theme state is controlled by React after hydration
                    if (localStorage.getItem('theme') === 'dark' || 
                        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      // Apply dark theme visually
                      document.documentElement.classList.add('dark');
                      // Don't apply background colors here to avoid hydration mismatch
                    }
                  } catch (e) {
                    // Fail silently - React will handle theming after hydration
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;