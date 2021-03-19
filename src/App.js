import Hero from "./components/Hero/Hero";
import Middle from "./components/Middle/Middle";
import Sliders from "./components/Slider/Slider";
import Images from './data/data'


function App() {
  
  return (
    <>
      <Hero image={Images[0].url} />
      <Sliders images={Images} />
      <Middle />
    </>
  );
}

export default App;
