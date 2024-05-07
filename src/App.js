import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandonColor from './components/accordian/randon-color';
import StarRating from './components/accordian/star-rating';
import ImageSlider from './components/accordian/image-slider';


function App() {
  return (
    <div className="App">
      <Accordian />
     
      <RandonColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
