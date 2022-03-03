import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div
      className='min-h-screen'
      style={{ fontFamily: "Nanum Gothic, sans-serif" }}
    >
      <div className='md:px-0 max-w-2xl mx-auto'>
        <Navbar />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
