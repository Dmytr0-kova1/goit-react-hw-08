import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <h1>Phonebook</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
