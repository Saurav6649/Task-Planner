import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, setOpen, setSelectedDate }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Navbar setOpen={setOpen} setSelectedDate={setSelectedDate} />
      <main className="flex-1 overflow-y-auto w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
