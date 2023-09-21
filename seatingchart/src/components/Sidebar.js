import React, { useState } from 'react'
import { Student } from './Student'
import {Draggable} from '../actions/draggable';
import { Droppable } from '../actions/droppable';
import { useDroppable } from '@dnd-kit/core';
import { Typography } from '@mui/material';
import {Grid} from '@mui/material';

export const Sidebar = ({seatNo, studentList, updateStudentList}) => {

  const { setNodeRef } = useDroppable({
    id: seatNo,
  });

  const seat = seatNo;

    const draggable = (
        <Draggable id="draggable">
          <Student />
        </Draggable>
      );

  // studentList.map((student) => (
  //   console.log(student['first_name'])
  // ))

  return (
    <div style={{margin: '1vh'}} ref={setNodeRef}>
        <p>Students : test</p>
        {/* this is just the declaration of teh "seat 0" that will have all the students by default */}
        <Grid container spacing={4}>
          {studentList === 0 && (
            <p>test</p>
          )}
          {studentList.map((student) => (
            student['seat'] === 0
            ? 
            <Grid item xs={6} key={student['id']}>
              {/* put a draggable object here? */}
              <Draggable id={student['id']} firstName={student['first_name']} lastName={student['last_name']} image={student['image']} />
            </Grid>
            : null
          ))}
        </Grid>
    </div>
  )
}
