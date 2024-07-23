import "./App.css";
import Catalog from "./components/beerCatalog/Catalog";
import Breweries from "./components/breweries/breweries";
import Filters from "./components/filters/filters";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Breweries />
      <Catalog />
      <Filters />
    </>
  );
}

export default App;
