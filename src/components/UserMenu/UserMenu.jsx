import { useDispatch, useSelector } from "react-redux";
// import clsx from "clsx";

import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>;
    </div>
  );
};

export default UserMenu;
