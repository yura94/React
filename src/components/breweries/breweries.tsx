import { Button } from "@mui/material";
import Box from "@mui/material/Box";

export default function Breweries() {
  const breweries: string[] = [
    "Pravda",
    "First Dnipro Brewery",
    "Fanatic Brewing Center",
    "CastleHill Brewery",
    "Kyiv Local Brewery",
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
      {breweries.map((brewery) => {
        return <Button variant="outlined">{brewery}</Button>;
      })}
    </Box>
  );
}
