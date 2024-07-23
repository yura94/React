import {
  Slider,
  Typography,
  Container,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

export default function Filters() {
  const [price, setPrice] = useState([0, 200]);
  const [percentage, setPercentage] = useState([0, 7]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChangePercentage = (event: any, newValue: any) => {
    setPercentage(newValue);
  };

  const handleChangePrice = (event: any, newValue: any) => {
    setPrice(newValue);
  };

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        gap: "10px",
      }}
    >
      <Container sx={{ border: "2px solid grey", height: "100px" }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          price range
        </Typography>
        <Slider
          value={price}
          onChange={handleChangePrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => `${value}`}
          marks={[
            { value: 0, label: "0" },
            { value: 100, label: "100" },
            { value: 200, label: "200" },
          ]}
          min={0}
          max={200}
        />
      </Container>
      <Container sx={{ border: "2px solid grey", height: "100px" }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          % alcohol
        </Typography>
        <Slider
          value={percentage}
          onChange={handleChangePercentage}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => `${value}`}
          marks={[
            { value: 0, label: "0" },
            { value: 7, label: "7" },
          ]}
          min={0}
          max={7}
        />
      </Container>

      <Container>
        <Typography variant="h5" gutterBottom>
          Sort by:
        </Typography>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Select an Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedOption}
            onChange={handleChange}
            label="Select an Option"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="price">price</MenuItem>
            <MenuItem value="option2">% of alcohol</MenuItem>
            <MenuItem value="popularity">Popularity or Rating</MenuItem>
            <MenuItem value="color">Color</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
}
