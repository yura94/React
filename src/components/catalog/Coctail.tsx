import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/cocktailsSlice";
import { AppDispatch } from "../../store";

type DataType = {
  alcohol: {
    id: number;
    name: string;
    is_alcohol: boolean;
    img: string;
    ml: string;
    price: string;
    countOrder?: number;
  };
};

export default function Coctail({ alcohol }: DataType) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      sx={{
        border: "2px solid grey",
        position: "relative",
        display: "flex",
        height: "200px",
        boxSizing: "border-box",
      }}
    >
      <img src={alcohol.img} height={"100%"} alt="alcoholItem" />
      <Box>
        <Typography>{`Name: ${alcohol.name}`}</Typography>
        <Typography>{`ML: ${alcohol.ml}`}</Typography>
        <Typography>{`Price: ${alcohol.price}`}</Typography>
        {alcohol.countOrder ? (
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{ background: "#f5f4f9", color: "#371f5e" }}
              onClick={() => {
                dispatch(decrement(alcohol.id));
              }}
            >
              -
            </Button>
            <Typography>{alcohol.countOrder}</Typography>
            <Button
              sx={{ background: "#f5f4f9", color: "#371f5e" }}
              onClick={() => {
                dispatch(increment(alcohol.id));
              }}
            >
              +
            </Button>
          </Box>
        ) : (
          <Button
            sx={{ background: "#7CB9E8", color: "white", width: "100px" }}
            onClick={() => {
              dispatch(increment(alcohol.id));
            }}
          >
            Сhoose
          </Button>
        )}
      </Box>
    </Box>
  );
}
