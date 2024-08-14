import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

export default function NavBar() {
  const cocktails = useSelector((state: RootState) => state.cocktails);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    let cocktailsOrderCount: number = 0;
    for (const item of cocktails) {
      setOrdersCount((cocktailsOrderCount += item.countOrder));
    }
  }, [cocktails]);
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
          <Box sx={{ display: " flex" }}>
            <ShoppingBasketIcon />
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
