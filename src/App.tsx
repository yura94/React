import "./App.css";
import Catalog from "./components/catalog/Catalog";
import CoctailCategory from "./components/coctailsCategory/category";
import Filters from "./components/filters/filters";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <>
      <NavBar />
      <CoctailCategory />
      <Catalog />
      <Filters />
    </>
  );
}

export default App;
