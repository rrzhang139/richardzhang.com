const ExternalLink = ({ href, children }) => {
  return (
    <span>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </span>
  );
};

export default ExternalLink;
