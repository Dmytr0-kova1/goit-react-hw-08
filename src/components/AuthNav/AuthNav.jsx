import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex gap-2">
      <NavLink class="link link-hover" to="/register">
        Register
      </NavLink>
      <NavLink class="link link-hover" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
