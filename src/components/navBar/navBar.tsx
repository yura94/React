import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, color: "transparent" }}>
      <AppBar position="static" sx={{ background: "wheat" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", color: " brown" }}
          >
            Beer for you
          </Typography>
          <ShoppingBasketIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
