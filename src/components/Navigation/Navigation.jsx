import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
// import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

const Navigation = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <h1>Phonebook</h1>
      {isLoggedIn && <h2>Welcome, {user.name}</h2>}
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>

        {isLoggedIn ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
