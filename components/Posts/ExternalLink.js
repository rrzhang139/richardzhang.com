const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
