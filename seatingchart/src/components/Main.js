import React from 'react'
import { useState } from 'react';
import {DndContext} from '@dnd-kit/core';
import { Droppable } from '../actions/droppable';
import { Grid } from '@mui/material';
import { Draggable } from '../actions/draggable';

export const Main = ({seats, studentList}) => {
  const [seatDiv, setSeatDiv] = useState(seats);


  return (
    <div style={{margin:'20px', borderStyle:'solid', borderColor:'blue', borderRadius:'5px', borderWidth:'5px'}}>
      <Grid container spacing={4} style={{position:'relative'}}>
        {seatDiv.map((value) => (
          <Grid item md={4} key={value}>
            <Droppable id={value}>
              {studentList.forEach(student => {
                {student['id'] === value && (
                  <Draggable id={student['id']} firstName={student['first_name']} lastName={student['last_name']} image={student['image']}/>
                )
              }})}
            </Droppable>
            {/* it should be a list of droppable elements. with an id of the value. */}
          </Grid>

        ))}
      </Grid>
    </div>
  )
}
