import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Piece from './Piece';
import '../App.css';

//inverser les position des pieces


class MobiPuzz extends React.Component {
  constructor(props) {
    super(props);
    this._onTouchStart = this._onTouchStart.bind(this);

    const { level } = props;
    const cells = level * level;
    this.state = { positions: [...Array(cells).keys(),],
        startdrag: false,
        dropPositions: [...Array(cells).keys(),],
        boxtable: [...Array(cells).keys(),],
        container:[...Array(cells).keys(),],
        source:"",
        start: false,
        drop:"",
    };
  }


  shuffle(a) {
    const b = a.slice();
  
    for (let i = b.length - 1; i > 0; i--) {
      const j = 1 +Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }
  stuffle(a) {
    const b = a.slice();
  
    for (let i = b.length - 1; i > 0; i--) {
      const j = 1 +Math.floor(Math.random() * (i + 1));
     
      [b[i], b[j]] = [b[j], b[i]];
    }
    console.log("B",b);
    return b;
  }
  
  componentDidMount() {
    console.log('container',this.state.container);
     const { positions } = this.state;
    this.setState({ positions: this.stuffle(positions) });
   this.renderOrganizedPuzzle.bind(this);
  }
 onDragStart(e,pos){
   e.dataTransfer.setData('pos',pos);
 }

  _onhandleClick(e){
 const table =this.state.positions.slice(); //tableau non organisé
 const boxOrdered = this.state.boxtable.slice();
   let newvalue =[];
  for (let i in table) {
    let value = table[i];
    let count =boxOrdered[i];
   // console.log("v",value);
   // console.log("tt",count);
 
     if (value ===count) {
       newvalue =boxOrdered;
     // this.setState({start: true});
      boxOrdered[i]=count;
    } else if (value !==count) {
     i++;
    }
  }
    this.state.positions.push(boxOrdered);
  
const items = this.state.boxtable.map((i) => {
  console.log('boxtable',i);
     return (
         <div className="cellule"
         id={i}
        />
       );
   })
 return items;
  }

  _onTouchStart(e) {
    alert(e.clientX+" "+e.clientY);
    let initX = Math.floor(e.clientX/50);
    let initY= Math.floor(e.clientY/50);
    localStorage.setItem("initx",initX);
    localStorage.setItem("inity",initY);
    let xx = initX +initY;
  this.setState({start : this.state.start});
  const initpositions = this.state.positions.slice();
  const orgtable = initpositions.slice();

  for(let i in initpositions){
    let value = initpositions[i];
    if(value === xx){
      //alert("position x et y :"+initX+" "+initY);
    }

   
  }
  this.setState({ positions: orgtable });
}
  
       renderOrganizedPuzzle(e){
        let items = this.state.container.slice();
        let images =this.state.positions.slice();
        for(let i in items){
          let value = this.state.positions[i];
          if(value === i){
            this.setState({start:true});
           images= this.state.positions.slice(i,1);
           images.push(value);
          }
          else{
           // alert("try again")
           this.setState({start:false});
              }
          this.setState({container:images});
        }
        
       }

  renderSquares() {
    const {  image,size, level} = this.props;
    const { positions } = this.state;
    const squares = positions.map((i) => {
  // console.log('ind',i%level*50);
      return (
          <Cell
          id="cell"
          key={i}
          size={size}
          image={image}
          level={level}
          position={i}
           draggable
           onSwap={(e)=> this.renderOrganizedPuzzle(e)}
        />
        );
    }
    )
  return squares;
  }
  onDragOver(ev){
    ev.preventDefault();
  }
onDrop(ev,cat){
  let pos = ev.dataTransfer.getData('pos');
  let images =[];
  let items = this.state.container.slice();
  for(let i in items){
    let value = this.state.positions[i];
    if(value === pos){
      this.images=this.state.positions.slice(i,1);
     // this.state.container[i]=this.state.positions.slice(pos,1);
      this.state.container[pos].position="fixed";
    }
    else{
     // alert("try again")
    }
    this.setState({positions:this.images});
  }

}



  render() {
    const isOver= this.state.start;
  const { size,level ,image} = this.props;
  let list = this.state.container;
  let side = 300/level;
  console.log('side',side);
   return (
      <div style={{position:'fixed',width:'98%',height:'98%',marginRight:'5px',marginLeft:'5px' , border:'1px solid #8190CC'}}>
         <div className="puzzle"
           onMouseUp={this._onTouchStart.bind(this)}
            style={{
              zIndex:100,
            marginLeft:'25px',
            marginTop:'5px',
            marginBottom:'10px',
          display: 'flex',
          flexWrap: 'wrap',
          padding: 1,
          width: `${size}px`,
          height: `${size}px`
        }}>
      {this.renderSquares()}
        
      </div>
    
 <div  
 draggable
  style={{width:300,
   height: 300,
    
   position:'relative',
    left:'25px',
    display: 'flex',
    flexWrap: 'wrap',
   marginLeft:'5px',
   marginTop:'5px',
   marginBottom:'30px',
   backgroundColor:"#F9D1DE",
   margin: '0 -1px -1px',
   border: '1px solid black',
  backgroundSize: `150px 150px`,
   backgroundPosition: `0px 0px`,
   cursor: 'pointer',
     }}>
   
{
  this.state.container.map((i)=>(
    <>
     <div
     onDragOver={(e)=>this.onDragOver(e)}
     onDrop={(e)=>this.onDrop(e,'complete')}
        style={{
       backgroundColor:`${isOver ? '#f00' : '#0ff'}`,
       backdropFilter: 'blur(20px)',
       width:`${side}px`,
      height:`${side}px`,
      backgroundColor:"#9D84F9",
      margin: '0 -1px -1px',
      border: '1px solid black',
     backgroundPosition: `${i%level*side}px ${Math.floor(i/level)*side}px`,
      cursor: 'pointer',
        }}>

      </div>
      </>
  ))
}
    </div>
    </div>
    );
  }
};


/**  <div style={{display:"flex"}}>
     <div  
  style={{width:150,
   height: 150,
   backgroundColor:"#9D84F9",
   margin: '0 -1px -1px',
   border: '1px solid black',
  backgroundSize: `150px 150px`,
   backgroundPosition: `0px 0px`,
   cursor: 'pointer',
     }}></div>
 <div  
  style={{width:150,
   height: 150,
   backgroundColor:"#9D84F9",
   margin: '0 -1px -1px',
   border: '1px solid black',
  backgroundSize: `150px 150px`,
   backgroundPosition: `0px 50px`,
   cursor: 'pointer',
     }}></div>
    </div>


     <div  style={{display:"flex"}}>
      <div  
  style={{width:150,
   height: 150,
   backgroundColor:"#9D84F9",
   margin: '0 -1px -1px',
   border: '1px solid black',
  backgroundSize: `150px 150px`,
   backgroundPosition: `50px 0px`,
   cursor: 'pointer',
     }}></div>
<div  
  style={{width:150,
   height: 150,
   backgroundColor:"#9D84F9",
   margin: '0 -1px -1px',
   border: '1px solid black',
  backgroundSize: `150px 150px`,
   backgroundPosition: `50px 50px`,
   cursor: 'pointer',
     }}></div>

     </div>
 */

MobiPuzz.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  level: PropTypes.number,
  onDone: PropTypes.func,
};

MobiPuzz.defaultProps = {
  size: 300,
  level: 3,
  onDone: () => {},
};

export default MobiPuzz;