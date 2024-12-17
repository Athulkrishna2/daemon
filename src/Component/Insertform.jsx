import { Box, Button, Grid2, Icon, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Insertform({notes,setNotes}) {
    const [notitle,setnotitle]=useState("")
    const[notitleerror,setnotitleerror]=useState(null)
    const handleChange=(e)=>{
        setnotitleerror(null)
        setnotitle(e.target.value)
    }
    const handleSubmit=()=>{
if(notitle == ""){
    setnotitleerror("plaese entter a title")
}else{
    // console.log(notes)
    let noteId=notes.length==0?1:notes[notes.length-1].id+1;
let fullNote={id: noteId,title:notitle,completed:false}
let updatedNoData=[...notes,fullNote]
    console.log(updatedNoData)
    localStorage.setItem("notes",JSON.stringify(updatedNoData))
    setNotes(updatedNoData)
    setnotitle("")
}
    }
    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 10 }}>
                    <TextField 
                    value={notitle}

                    onChange={handleChange} 
                    fullWidth label="Enter the title" 
                    placeholder='enter note title here'
                    helperText={notitleerror && notitleerror}
                    error={!!notitleerror}
                     />
                </Grid2>
                <Grid2 size={{ xs: 2}}>
                    <Button onClick={handleSubmit} variant="contained" href="#contained-buttons" sx={{height:55}}>
                        ADD
                    </Button>
                </Grid2>
            </Grid2>
        </Box >
    )
}
