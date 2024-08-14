import { Button } from "@mui/material";
import Box from "@mui/material/Box";

export default function CoctailCategory() {
  const breweries: string[] = [
    "Alcoholic",
    "Non Alcoholic",
    "Ordinary Drink",
    "Cocktail",
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {breweries.map((coctail, index) => {
        return (
          <Button key={index} variant="outlined">
            {coctail}
          </Button>
        );
      })}
    </Box>
  );
}
