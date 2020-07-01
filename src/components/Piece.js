import React from 'react';
import { useGesture } from 'react-with-gesture';


 const Piece = (props) => {
  const [bind, { local }] = useGesture();
  const [a, b] = local;
 //const [[a, b], set] = React.useState([20, 20])
 //const [bind] = useGesture({ onDrag: ({ local }) => set(local) })

  const { image, size, side, x, y, isOver } = props;
 return(
    <div
    {...bind()}
    draggable
       style={{
        transform: `translate3d(${a}px,${b}px,0)`,
        width: `${side}px`,
        height: `${side}px`,
        margin: '0 -1px -1px',
        border: '1px solid black',
        backgroundImage: `url(${image})`,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: `-${x}px -${y}px`,
        opacity: `${isOver ? '0.2' : '1'}`,
        cursor: 'pointer',
      }}
    />
  );
};




export default Piece;
