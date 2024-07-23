import Box from "@mui/material/Box";
import BeerItem from "./BeerItem";

interface IProps {
  description: string;
  name: string;
  percentage: string;
  price: string;
}

export default function Catalog() {
  const beers: IProps[] = [
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
    {
      description: "description",
      name: "name",
      percentage: "percentage of alcohol",
      price: "price",
    },
  ];

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
            flexWrap: "wrap",
          }}
        >
          {beers.map((beer: IProps) => {
            return (
              <BeerItem
                description={beer.description}
                name={beer.name}
                percentage={beer.percentage}
                price={beer.price}
              />
            );
          })}
        </Box>
      }
    </>
  );
}
