import "./App.css";
import GenreMovieList from "./Component/GenreMovieList";
import Header from "./Component/Header";
import ProductionHouse from "./Component/ProductionHouse";
import Slider from "./Component/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default App;
