import { Outlet, Link } from "react-router-dom";
import SideNav from "../../generic/SideNav/SideNav";

const MainLayout = () => {
  return (
    <>
      <SideNav />

      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
