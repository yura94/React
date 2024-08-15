import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import {
  decrement,
  deleteAllOrders,
  deleteOrder,
  increment,
} from "../../store/cocktailsSlice";

type basketProp = {
  isBasketOpen: boolean;
  onClose: () => void;
};
const Basket = ({ isBasketOpen, onClose }: basketProp) => {
  const cocktails = useSelector((state: RootState) => state.cocktails);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {}, [cocktails]);

  const totalCountOrder = cocktails.reduce((accumulator, currentOrder) => {
    return accumulator + currentOrder.countOrder;
  }, 0);
  const totalOrderPrice = cocktails.reduce((accumulator, currentOrder) => {
    return currentOrder.countOrder
      ? accumulator + Number(currentOrder.price) * currentOrder.countOrder
      : accumulator;
  }, 0);

  const closeBasket = () => {
    onClose();
  };

  const deleteAll = () => {
    dispatch(deleteAllOrders());
    onClose();
  };

  return (
    <div>
      <Drawer anchor="right" open={isBasketOpen} onClose={onClose}>
        <Container sx={{ width: "500px", height: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "400", fontSize: "18px" }}>
              Basket
            </Typography>
            <Button
              onClick={() => {
                closeBasket();
              }}
              sx={{ color: "grey" }}
            >
              X
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography> {totalCountOrder} orders</Typography>
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                deleteAll();
              }}
            >
              Delete all
            </Button>
          </Box>
          {cocktails.map((el) => {
            return el.countOrder > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "150px",
                  border: "1px solid grey",
                  padding: "20px",
                }}
              >
                <Box>
                  <img src={el.img} height={"100%"} alt="alcoholItem" />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: "10px",
                    }}
                  >
                    <Typography>{el.name}</Typography>
                    <DeleteIcon
                      onClick={() => {
                        dispatch(deleteOrder(el.id));
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      p: "10px",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Button
                        sx={{ background: "#f5f4f9", color: "#371f5e" }}
                        onClick={() => {
                          dispatch(decrement(el.id));
                        }}
                      >
                        -
                      </Button>
                      <Typography>{el.countOrder}</Typography>
                      <Button
                        sx={{ background: "#f5f4f9", color: "#371f5e" }}
                        onClick={() => {
                          dispatch(increment(el.id));
                        }}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      p: "10px",
                      color: "red",
                    }}
                  >
                    {Number(el.price) * el.countOrder} $
                  </Typography>
                </Box>
              </Box>
            ) : null;
          })}
          {totalCountOrder ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "40px",
              }}
            >
              <Box>
                <Typography>{`Total count order: ${totalCountOrder}`}</Typography>
                <Typography>{`Total Price: ${totalOrderPrice} $`}</Typography>
              </Box>
              <Button color="primary" variant="contained">
                Create Order
              </Button>
            </Box>
          ) : null}
        </Container>
      </Drawer>
    </div>
  );
};

export default Basket;
