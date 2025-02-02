import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
