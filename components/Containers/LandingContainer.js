const LandingContainer = ({ children, style, classnames = "" }) => {
  if (!classnames.includes("space-y")) {
    classnames = [classnames || [], "space-y-8"].join(" ");
  }
  return (
    <div
      className={`max-w-xl p-4 mx-auto ${classnames}`}
      style={(style, { fontFamily: "Nanum Myeongjo, serif" })}
    >
      {children}
    </div>
  );
};

export default LandingContainer;
