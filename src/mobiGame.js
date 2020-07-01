import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import styles from './styles.css';
export default class MobiGame extends React.Component{

constructor(props){
    super(props);
this.state={

    isOver:false,
    boardState: [
        [1,2,3,4,5,0],
        [2,0,0,0,0,0],
        [3,0,0,0,0,0],
        [4,0,0,0,0,0],
        [5,0,0,0,0,0]
    ],
    items: [],
    positions: [...Array(6*6).keys()],
    startmove:false,
}
}

handleswipe(event){
    const rowindex = parseInt(event.target.getAttribute('rowindex'));
    const tileindex = parseInt(event.target.getAttribute('tileindex'));
    const tileText = this.state.boardState[rowindex][tileindex];
    console.log('tile value: ', tileText);

}
componentDidMount(){


    const { positions } = this.state;
    this.setState({ positions: this.stuffle(positions) });
 
}
componentWillMount(){
    var items=new Array(3);
    for (let i=0; i <3; i++){
  items[i]=new Array(3);
  this.state.items.push(i);
    }
}
_onTouchStart(e) {
    alert(e.clientX+" "+e.clientY);
    if(e.clientX!==null ){
        this.setState({startmove:true});
    }
    if(e.clientX===null ){
        this.setState({startmove:false});
    }
    let initX = Math.floor(e.clientX/50);
    let initY= Math.floor(e.clientY/50);
    localStorage.setItem("initx",initX);
    localStorage.setItem("inity",initY);
    let xx = initX +initY-1;
  this.setState({start : this.state.start});
  const initpositions = this.state.positions.slice();
  const orgtable = initpositions.slice();

  for(let i in initpositions){
    let value = initpositions[i];
    if(value === xx){
      alert("position x et y :"+initX+" "+initY);
    }

   
  }
  this.setState({ positions: orgtable });
}
  
_handleChange(ev,tab){
    const items = tab.keys().slice();
    let olditems =items;
    for(let i = 0; i<300;i++){
if(items[i]=== ev.clientX/50){
        olditems[i] = items[i];
        items[i] = items[ev.clientX/50];

}
         this.setState({positions:items});
    }
}
shuffle(a) {
    const b = a.slice();
  
    for (let i = b.length - 1; i > 0; i--) {
      const j = 1 +Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }



render(){
  const {list} = this.state;
  list = this.state.items;
   return(
     <div>
    test Puzzle
    {this.list.map((index,j) => (
        <p key={index,j}>div 
        </p>

      ))
    }
    
       </div>
    );

}
}
      