import React from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import move from 'lodash-move';
const list = [{ id: "0",mv:false }, { id: "1",mv:false }, { id: "2",mv:false }, { id: "3",mv:false }, { id: "4",mv:false },{ id: "5",mv:false },{ id: "6",mv:false },{ id: "7",mv:false },{ id: "8",mv:false }];
 
const ListElement = props => <div style={{width:'100px',height:'100px',alignContent:'center',color:'#fff',backgroundColor:'#b4b3ff',border:'2px solid #104b50',margin:'1px'}}>id: {props.item.id}</div>;

export default class Noop extends React.Component{

      constructor(props){
        super(props);
        this.noop= this.noop.bind(this);
        this.state={
        appy:list,
        isFinished:false,
        };
    }
componentDidUpdate(){

}

  Reorder (list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      };

  noop(sourceIndex,destinationIndex) {
   let tabs= list.slice();
   let result=[];
   let ress=[];
   let fixed=[];
if (destinationIndex === sourceIndex) {
    return;
  }
  if (destinationIndex === 0) {
      tabs[destinationIndex].mv=true;
      if(tabs[sourceIndex].mv==false){
        tabs[destinationIndex].mv=true;
            let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
        console.log("des 3 ",ress);
     
            this.state.appy=ress.slice();
            console.log(this.state.appy);
            this.setState({isFinished:true});
            this.state.appy=ress.slice();
 }
   
    //move(tabs[destinationIndex], sourceIndex);
    console.log('op1')   
    if (destinationIndex === 1 && sourceIndex==2) {
      if(tabs[destinationIndex].mv==false ){
       tabs[destinationIndex].mv=true;
     }
     if(tabs[sourceIndex].mv===false){
      tabs[sourceIndex].mv=true;
      let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
      console.log("des 3 ",ress);
          this.state.appy=ress.slice();
          console.log(this.state.appy);
          this.setState({isFinished:true});
          this.state.appy=ress.slice();
      }


      //move(tabs[destinationIndex], sourceIndex);
      console.log('op2')  
    }

 }
 if (destinationIndex === 2 ) {
  if(   tabs[destinationIndex].mv===false){
    tabs[destinationIndex].mv=true;
     }
 if(   tabs[sourceIndex].mv===false){
      let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
      console.log("des 3 ",ress);
          this.state.appy=ress.slice();
          console.log(this.state.appy);
          this.setState({isFinished:true});
          this.state.appy=ress.slice();
      }

  
  }
for (let i=0; i<tabs.length-1;i++){
  for(let j=0;j<tabs.length-1;j++){

    if (destinationIndex === i ) {
      if(   tabs[destinationIndex].mv===false){
        tabs[destinationIndex].mv=true;
         }
     if(   tabs[sourceIndex].mv===false){
          let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
          console.log("des i j ",ress);
              this.state.appy=ress.slice();
              console.log(this.state.appy);
              this.setState({isFinished:true});
              this.state.appy=ress.slice();
          }
    
      
      }

  }
}


 if (destinationIndex === 3 ) {
  if(   tabs[destinationIndex].mv===false){
    tabs[destinationIndex].mv=true;
     }
 if(   tabs[sourceIndex].mv===false){
      let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
      console.log("des 3 ",ress);
          this.state.appy=ress.slice();
          console.log(this.state.appy);
          this.setState({isFinished:true});
          this.state.appy=ress.slice();
      }

  
  }
       
    if (destinationIndex === 4 ) {
      if(   tabs[destinationIndex].mv===false){
        tabs[destinationIndex].mv=true;
         }
     if(   tabs[sourceIndex].mv===false){
          let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
          console.log("des 4 ",ress);
              this.state.appy=ress.slice();
              console.log(this.state.appy);
              this.setState({isFinished:true});
              this.state.appy=ress.slice();
          }

      
      }
      if (destinationIndex === 5 ) {
        if(   tabs[destinationIndex].mv===false){
          tabs[destinationIndex].mv=true;
           }
       if(   tabs[sourceIndex].mv===false){
            let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
            console.log("des 5",ress);
                this.state.appy=ress.slice();
                console.log(this.state.appy);
                this.setState({isFinished:true});
                this.state.appy=ress.slice();
            }
  
        
        }
        if (destinationIndex === 6 ) {
          if(   tabs[destinationIndex].mv===false){
            tabs[destinationIndex].mv=true;
             }
         if(   tabs[sourceIndex].mv===false){
              let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
              console.log("des 6",ress);
                  this.state.appy=ress.slice();
                  console.log(this.state.appy);
                  this.setState({isFinished:true});
                  this.state.appy=ress.slice();
              }
           }

   
           if (destinationIndex === 7 ) {
            if(tabs[destinationIndex].mv===false){
              tabs[destinationIndex].mv=true;
               }
           if( tabs[sourceIndex].mv===false){
                let ress=this.Reorder(tabs,sourceIndex,destinationIndex)
                console.log("des 6",ress);
                    this.state.appy=ress.slice();
                    console.log(this.state.appy);
                    this.setState({isFinished:true});
                    this.state.appy=ress.slice();
                }
             }


  
  };
 
 render(){
return (
  <ListManager
    items={this.state.isFinished==false?list:this.state.appy}
    direction="horizontal"
    maxItems={3}
    render={item => <ListElement item={item} />}
    onDragEnd={this.noop}
  />
);
 }
}