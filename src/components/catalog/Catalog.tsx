import Box from "@mui/material/Box";
import Coctail from "./Coctail";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../../store/cocktailsSlice";
import { AppDispatch, RootState } from "../../store";

type DataType = {
  id: number;
  name: string;
  is_alcohol: boolean;
  img: string;
  ml: string;
  price: string;
  countOrder?: number;
};

export default function Catalog() {
  const cocktails = useSelector((state: RootState) => state.cocktails);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<DataType[]> = await axios.get<DataType[]>(
          "http://localhost:5000/cocktails"
        );

        dispatch(
          fetchCocktails(
            response.data.map((el) => {
              return { ...el, countOrder: 0 };
            })
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {
        <Box
          height={"72vh"}
          width={"90vw"}
          sx={{
            border: "2px solid grey",
            margin: "auto",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cocktails.map((el) => {
              return (
                <Grid key={el.id} item xs={2} sm={3} md={4}>
                  <Coctail alcohol={el} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      }
    </>
  );
}
