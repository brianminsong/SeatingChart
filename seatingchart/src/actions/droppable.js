import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import Box from '@mui/material/Box';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <Box ref={setNodeRef} sx={{width:'100px', height:'120px', backgroundColor:'gray', justifyContent:'center', alignItems:'center'}}>
      {props.children}
      {props.id}
    </Box>
  );
}
  