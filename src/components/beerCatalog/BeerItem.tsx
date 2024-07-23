import Box from "@mui/material/Box";
import beerImg from "../../images/beer.jpg";
import { Typography } from "@mui/material";

interface IProps {
  description: string;
  name: string;
  percentage: string;
  price: string;
}

export default function BeerItem(beer: IProps) {
  return (
    <Box
      sx={{
        border: "2px solid grey",
        position: "relative",
        display: "flex",
        height: "30%",
        width: "25%",
        boxSizing: "border-box",
      }}
    >
      <img src={beerImg} height={"100%"} alt="beer" />
      <Box>
        <Typography>- {beer.description}</Typography>
        <Typography>- {beer.name}</Typography>
        <Typography>- {beer.percentage}</Typography>
        <Typography>- {beer.price}</Typography>
      </Box>
    </Box>
  );
}
