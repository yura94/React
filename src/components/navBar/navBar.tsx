import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Basket from "./basket";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logoutUser } from "../../store/usersSlice";

type NavBar = {
  isLoggedIn: boolean;
  showRegistrationForm: () => void;
  showLoginForm: () => void;
  isLogout: () => void;
};

export default function NavBar({
  isLoggedIn,
  showRegistrationForm,
  showLoginForm,
  isLogout,
}: NavBar) {
  const cocktails = useSelector((state: RootState) => state.cocktails);
  const user = useSelector((state: RootState) => state.user);
  const [ordersCount, setOrdersCount] = useState(0);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logoutUser());
    isLogout();
  };

  useEffect(() => {
    let cocktailsOrderCount: number = 0;
    for (const item of cocktails) {
      setOrdersCount((cocktailsOrderCount += item.countOrder));
    }
  }, [cocktails, user]);

  return (
    <Box sx={{ flexGrow: 1, color: "transparent" }}>
      <AppBar position="static" sx={{ background: "wheat" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", color: " brown" }}
          >
            Coctails
          </Typography>

          <Typography sx={{ pr: "10px", color: "black" }}>
            {user.name}
          </Typography>
          {isLoggedIn ? (
            <Box sx={{ display: " flex" }}>
              <ShoppingBasketIcon
                sx={{ cursor: " pointer" }}
                onClick={() => {
                  setIsBasketOpen(true);
                }}
              />
              {ordersCount ? (
                <Typography
                  sx={{
                    ml: "5px",
                  }}
                >
                  {ordersCount}
                </Typography>
              ) : null}
            </Box>
          ) : null}

          <Basket
            isBasketOpen={isBasketOpen}
            onClose={() => {
              setIsBasketOpen(false);
            }}
          />
          {isLoggedIn ? (
            <Button
              sx={{ background: "#f5f4f9", color: "#371f5e", ml: "10px" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                sx={{ background: "#f5f4f9", color: "#371f5e", ml: "10px" }}
                onClick={showLoginForm}
              >
                Login
              </Button>
              <Button
                sx={{ background: "#f5f4f9", color: "#371f5e", ml: "10px" }}
                onClick={showRegistrationForm}
              >
                Registration
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
