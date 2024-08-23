import { useEffect, useState } from "react";
import "./App.css";
import Catalog from "./components/catalog/Catalog";
import CoctailCategory from "./components/coctailsCategory/category";
import Filters from "./components/filters/filters";
import NavBar from "./components/navBar/navBar";
import RegisterForm from "./components/registration/registrationForm";
import LoginForm from "./components/login/loginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        showRegistrationForm={() => setIsRegistering(true)}
        showLoginForm={() => setIsRegistering(false)}
        isLogout={() => setIsLoggedIn(false)}
      />
      {isLoggedIn ? (
        <>
          <CoctailCategory />
          <Catalog />
          <Filters />
        </>
      ) : (
        <>
          {isRegistering ? (
            <RegisterForm onRegister={handleRegister} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </>
      )}
    </>
  );
}

export default App;
