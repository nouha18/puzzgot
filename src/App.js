import React from 'react';
//import DragNDrop from "./Download";
import './App.css';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Noop from './Noop'
//import Puzzle from 'react-image-puzzle';


//react-draggable
function App() {
  if (isBrowser) {
      return(
  //<MobiPuzz className="puzz" level={2} image="https://kpdpblog.files.wordpress.com/2017/05/images-pocahontas-5.jpg?w=640"/> 
    <Noop/>
   )
  }
if (isMobile) {
  return (
    <Noop/>
  //<MobiPuzz className="puzz" level={6} image="https://kpdpblog.files.wordpress.com/2017/05/images-pocahontas-5.jpg?w=640"/> 
  )

}

  return (
    <div className="container">
    <h2 style={{color:"#484858" , fontFamily:"Roboto"}}>Puzzle Game</h2>
    <BrowserView>
    <h1> This puzzle is rendered only in browser </h1>
   </BrowserView>
   <MobileView>
    <h1> This puzzle is rendered only on mobile </h1>
   </MobileView>
 </div>
  );
}


export default App;
