import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandonColor from './components/accordian/randon-color';
import StarRating from './components/accordian/star-rating';
import ImageSlider from './components/accordian/image-slider';
import LoadMoreData from './components/accordian/load-more-data';
import TreeView from './components/accordian/tree-view';
import menus from './components/accordian/tree-view/data';
import QrCodeGenerator from './components/accordian/qr-code-generator';
import LightDarkMode from './components/accordian/light-dark-mode';


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
      <LoadMoreData />
      <TreeView menus={menus} />
      <QrCodeGenerator />
      < LightDarkMode/>
      
    </div>
  );
}

export default App;
