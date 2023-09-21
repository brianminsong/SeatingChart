import { Box } from '@mui/material'
import React from 'react'
import studentList from '../mock-data/student-data.json'

export const Student = () => {
    console.log(studentList['students'][0]);

  return (
    <Box style={{backgroundColor:'white', width:'50px', height:'50px'}}>
        <img src={studentList['students'][0]["image"]} />
    </Box>
  )
}
