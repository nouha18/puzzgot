import React,{useRef,useState,useEffect} from 'react';
import { ListManager } from "react-beautiful-dnd-grid";
import PropTypes from 'prop-types';
import move from 'lodash-move';
import './App.css';
const list = [
  {
    id: "0",
    order: 0,
    mv: false,
    x:0,y:0
  },
  {
    id: "1",
    order: 1,
    mv: false,
    x:0,y:1,
  },
  {
    id: "2",
    order: 2,
    mv: false,
    x:0,y:2
  },
  {
    id: "3",
    order: 3,
    mv: false,
    x:1,y:0
  },
  {
    id: "4",
    order: 4,
    mv: false,
    x:1,y:2
  },
  {
    id: "5",
    order: 5,
    mv: false,
    x:1,y:3
  },
  {
    id: "6",
    order: 6,
    mv: false,
    x:2,y:0
  },
  {
    id: "7",
    order: 7,
    mv: false,
    x:2,y:1
  },
  {
    id: "8",
    order: 8,
    mv: false,
    x:2,y:2
  },
 
  
];

export default class DragGrid extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      sortedList: shufleList(list),
      comparedTable:list,
      isfinished:false,
    }
  }

  sortList = () => {
    this.setState({
      ...this.state,
      sortedList: sortList(this.state.sortedList)
    })
  }
componentWillMount(){
    const iterator = this.state.sortedList.keys();
    for (const key of iterator) {
        console.log(key);
      }      
    
}
  
      reorderList = (sourceIndex, destinationIndex) => {
        let tabs = this.state.sortedList.slice();
       
        let op =0;
       
        if (destinationIndex === sourceIndex) {
          return;
        }
        console.log("data",sourceIndex+" "+destinationIndex);
        const list = this.state.sortedList;
        let count=1;
        let orgtab=[];
        for(let k=0;k<tabs.length;k++){ 
            if(tabs[k].mv==true){
              count=count+1;
            }  
            if(count==9){
                alert("finished you win");
            }
        }

        for(let k=0;k<tabs.length;k++){
            if(tabs[k].id==k){
                tabs[k].mv=true;
            }

            else{
                if (destinationIndex === 0) {
                    tabs[destinationIndex].order = tabs[destinationIndex].order + 0.75;
                     move(tabs[destinationIndex], sourceIndex);
                        console.log(tabs);
                  return;
                }
               else{

               if (destinationIndex === tabs.length - 1) {
                  console.log('case 54');
                  tabs[sourceIndex].order=tabs[destinationIndex-1].order+8.5
                  move(tabs[tabs.length - 1], sourceIndex);
                  tabs[destinationIndex].mv=true;
                  
                  console.log(tabs);
               // this.sortList();
                  return;
                }
                else{
                if ( sourceIndex == 0 && destinationIndex==2){
                    console.log('case 87');
                   // tabs[destinationIndex].order=tabs[sourceIndex+1].order-0.5
                   move(tabs[sourceIndex], destinationIndex);
                   tabs[destinationIndex].mv=true;
                
                    console.log(tabs);
                    return;
            
                    }
                    else{
                    if ( sourceIndex == 8 && destinationIndex==2){
                        console.log('case 2 &8');
              // tabs[sourceIndex].order=tabs[sourceIndex].order +(tabs[destinationIndex-1].order +tabs[destinationIndex+1].order)/2;
                      move(tabs[8], destinationIndex);
                      tabs[destinationIndex].mv=true;
                
                        console.log(tabs);
                           return;
                    }
                    else{
                    if ( sourceIndex == 2 && destinationIndex==5){
                        console.log('case 93');
                         move(tabs[2], destinationIndex);
                         tabs[destinationIndex].mv=true;
                
                        console.log(tabs);
                           return;
                    }

                    if ( sourceIndex == 2 && destinationIndex==7){
                        console.log('case 999');
                       move(tabs[2], destinationIndex);
                       tabs[destinationIndex].mv=true;
                
                        console.log(tabs);
                           return;
                    }
                   else{
                    if ( sourceIndex == 5 && destinationIndex==3){
                        console.log('case 111');
                        move(tabs[5], destinationIndex);
                        tabs[destinationIndex].mv=true;
                
                        console.log(tabs);
                           return;
                    }
                    else{
                     if ( sourceIndex == 3 && destinationIndex==5){
                        console.log('case 111');
                         move(tabs[3], destinationIndex);
                         tabs[destinationIndex].mv=true;
                
                        console.log(tabs);
                           return;
                    }
             else{
                    if ( sourceIndex == 6 && destinationIndex==8){
                        console.log('case 111');
                         move(tabs[6], 8);
                         tabs[destinationIndex].mv=true;
                
                        console.log(tabs);
                           return;
                    }
                    else{
                    if ( sourceIndex == destinationIndex-1) {
                        console.log('case src == des-1');
                       // tabs[sourceIndex].order = tabs[sourceIndex].order + (tabs[sourceIndex].order+tabs[sourceIndex+1].order)/2;
                        //tabs[destinationIndex].order = tabs[destinationIndex].order - (tabs[destinationIndex].order+tabs[destinationIndex-1].order)/2;
           
                        move(tabs[sourceIndex], destinationIndex);
                        tabs[destinationIndex].mv=true;
                
                        //this.sortList();
                      console.log(tabs);
                      return;
                      }

                           
                 if (destinationIndex== sourceIndex-1) {
                    console.log('destination == source-1');
                    //tabs[destinationIndex].order = tabs[destinationIndex].order +(tabs[destinationIndex].order ) / 2;
                    move(tabs[sourceIndex], destinationIndex);
                    tabs[destinationIndex].mv=true;
                
                   //this.sortList();
                     return;
                    }else{
                      tabs[sourceIndex].order = (tabs[destinationIndex].order + tabs[destinationIndex + 1].order) / 2;
                      this.sortList();
                 
                    }
                  
                  }
                  }
                  }
                  }
                
                  }

                  }
                  }

                  }
                    tabs[sourceIndex].order = (tabs[destinationIndex].order + tabs[destinationIndex + 1].order) / 2;
                   
        
            }
        }
      
    
        }
     
    
     render = () => (
      <div className="gridBox3">
      <ListManager
        items={this.state.sortedList}
        direction="horizontal"
        maxItems={3}
        render={item => <ListElement item={item} />}
        onDragEnd={this.reorderList}
      />
      
    </div >
  );
}

function shufleList(list) {
     const b = list.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
   
      [b[i], b[j]] = [b[j], b[i]];
      
               console.log("table 240",[b[i], b[j]])
    }
   
  
    return b;
}



function sortList(list) {
  return list.slice().sort((first, second) => first.order - second.order);
}

function ListElement({ item: { id } }) {
   // const itemRefs = React.createRef();
    const image ='https://i.pinimg.com/originals/c6/ee/8a/c6ee8a676819253150c1e99080c7463e.jpg';
    const size=300;
    const level =3;
    const side =Math.floor(size/level);
    //console.log('refs 158',this.itemRefs.style.backgroundPosition);
    const x = id%level*side;
    const y = Math.floor(id/level)*side;
//on ajoute switch case a listElement 
  return <div  className="item" style={{width:'100px', height:'100px',border: '1px solid black',
  backgroundImage: `url(${image})`,
  backgroundSize: `${300}px ${300}px`,
  backgroundPosition: `-${x}px -${y}px`,
  margin:'2px',alignItems:'center',alignContent:'center'}}>{id}</div>;
}
DragGrid.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.number,
    level: PropTypes.number,
    onDone: PropTypes.func,
  };
  
  DragGrid.defaultProps = {
    size: 300,
    level: 3,
    onDone: () => {},
  };