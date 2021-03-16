import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Images from './data/data'


function App() {
  return (
    <>
      <Hero image={Images[0].url} />
      <Slider />
    </>
  );
}

export default App;
