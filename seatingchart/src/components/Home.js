import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { Button, Typography, Container, Grid } from '@mui/material';
import {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {Draggable} from '../actions/draggable';
import {Droppable} from '../actions/droppable';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import studentList from '../mock-data/student-data.json';
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimation
} from "@dnd-kit/core";

const Home = () => {
  const [seats, setSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [list, setList] = useState(studentList["students"]);
  // this should set list as an array of student objects
  const [activeTaskId, setActiveTaskId] = useState('');

  const handleDragStart = ({active}) => {
    setActiveTaskId(active.id);
  };

  // need to add the handle drag over and handle drag end events

  function updateSeatList(prop){
    setSeats(prop);
  };

  function updateStudentList(prop){
    setList(prop);
  };

  function handleDragEnd({active, over}) {
    console.log("this is current");
    console.log(list);
    const temp = list;
    for(var i = 0; i < temp.length; i++){
      if(temp[i]['id'] === active['id']){
        temp[i]['seat'] = over['id'];
      }
    };
    setList(temp);
    console.log("this is updated: ");
    console.log(list);

    // active is the draggable box, gives back the student ID
    // over is the droppable div that it is over, gives the seat id number
    // update the student 'active''s seat to be the value 'over'
  }

  return (
    <div id='main' name='container' style={{height:"100vh", width:"100vw", backgroundColor:'#D3D3D3'}}>
      {/* have 3 sections in here, for each part*/}
      <Header />
      <DndContext onDragEnd={handleDragEnd}>
        {/* DND context placed here at the top of the tree */}
        <Grid container>
          <Grid item md={3} style={{backgroundColor:'D3D3D3', height:'92vh'}}>
            <Sidebar seatNo={0} studentList={list} updateStudentList={updateStudentList}/>
          </Grid>
          <Grid item md={9} style={{backgroundColor:'white', height:'92vh'}}>
            <Main seats={seats} studentList={list}/>
          </Grid>
        </Grid>
      </DndContext>
    </div>
  )
}

export default Home;
