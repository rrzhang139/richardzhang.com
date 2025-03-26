const Callout = ({ children, type = "default", theme }) => {
  const lightStyles = {
    default: "bg-gray-100 border-gray-500 text-black",
    info: "bg-blue-50 border-blue-500 text-black",
    warning: "bg-yellow-50 border-yellow-500 text-black",
    error: "bg-red-50 border-red-500 text-black",
    success: "bg-green-50 border-green-500 text-black"
  };

  const darkStyles = {
    default: "bg-gray-900 border-gray-400 text-white",
    info: "bg-blue-950 border-blue-400 text-white",
    warning: "bg-yellow-950 border-yellow-400 text-white",
    error: "bg-red-950 border-red-400 text-white",
    success: "bg-green-950 border-green-400 text-white"
  };

  const styles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <div className={`p-4 my-6 border-l-4 rounded-r-lg ${styles[type]}`}>
      <div className={`prose prose-sm ${theme === 'dark' ? 'prose-invert' : ''}`}>{children}</div>
    </div>
  );
};

export default Callout;