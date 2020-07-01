import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import Piece from './Piece';
import '../App.css';


function onclickItem (){

}

function changeBackground(e) {
  
}


const Cell = (props) => {
  const [isShown, setIsShown] = React.useState(false);
  const { image, size, level, position, isOver } = props;
  const side = (size / level);
  const x = (position % level) * side;
  const y = Math.floor(position / level) * side;
  //const [{ local }, set] = useSpring(() => ({ local: [0, 0] }));
  //const bind = useGesture({ onDrag: ({ local }) => set({ local }) });
  const [{ local }, set] = useSpring(() => ({ local: [0, 0] }))
  //const bind = useGesture({ onDrag: ({ local }) => set({ local }) })
  const bind = useGesture({
  onDrag: ({ initial: [x,y], delta: [dx,dy] }) => {
      const nextX = x + dx;
      const nextY = y +dy;
      set([nextX, nextY]);
    },
  });

   return ( 
    <animated.div className='piece'
    {...bind} style={{  transform: local.interpolate((nextX, nextY) => `translate3d(${nextX}px,${nextY}px,0)`) }}
   >
      <Piece
        position={position}
        draggable
        image={image}
        size={size}
        side={side}
        x={x}
        y={y}
        isOver={isOver}
      />

    </animated.div>
  );
};

const squareTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const sourcePosition = item.position;
    const dropPosition = props.position;
    props.onSwap(sourcePosition, dropPosition);
  }
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export default Cell;
