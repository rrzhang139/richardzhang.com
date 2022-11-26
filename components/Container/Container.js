const Container = ({ title, children, classnames = "" }) => {
  if (!classnames.includes("space-y")) {
    classnames = [classnames || [], "space-y-8"].join(" ");
  }
  return (
    <section className={`max-w-2xl p-4 mx-auto mt-14 ${classnames}`}>
      <h2 className="text-3xl font-title text-colortitle font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Container;
