import React from 'react'
import { Box, Grid2, Paper, Typography } from '@mui/material'
import Insertform from './Insertform'
import List from './List'
import { useState } from 'react'
export default function Home() {
    let initialValue;
    if (localStorage.getItem("notes")==null) {
        initialValue=[];
        
    } else {
        initialValue=JSON.parse(localStorage.getItem("notes"))
    }
    const [notes, setNotes] = useState(initialValue)
    const deletenote=(id)=>{
        console.log(id)
        let remainingnotes=notes.filter((item)=>item.id!=id)
        localStorage.setItem("notes",JSON.stringify(remainingnotes))
        setNotes(remainingnotes)
    }
    const updatenote=(note)=>{
        console.log(note)
        let status;
        if(note.completed){
            status=false;
        }else{
            status=true;
        }
        let modifiednote={...note,completed:status};
        console.log(modifiednote);
        let noteindex=notes.findIndex((item)=>item.id==note.id)
        console.log(noteindex)
        let modifiedcompletenote=[...notes];
        modifiedcompletenote.splice(noteindex,1,modifiednote)
        localStorage.setItem("notes",JSON.stringify(modifiedcompletenote))
        setNotes(modifiedcompletenote)
    };
    return (
        <Box  class="body" sx={{
            backgroundColor: "red",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
            <Paper sx={{ p: 2 }}>
                <Box>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                            <Typography sx={{ textAlign: "center", fontWeight: "600", color: "purple", textTransform: "uppercase" }}>
                                TO DO LIST
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <Insertform notes={notes} setNotes={setNotes}/>
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <Box sx={{maxHeight:"40vh",overflow:"auto"}}>

                                {notes.length>0?
                                notes.map((note,index)=>(

                                <List key={index} note={note} deletenote={deletenote} updatenote={updatenote}/>
                                )):(
                                    <Box>
                                    <Typography sx={{display:"flex",justifyContent:"center",marginTop:"20px",fontSize:"20px"}}>note not found</Typography>
                                </Box> 
                                )}
                            </Box>
            
                        </Grid2>
                    </Grid2>
                </Box>
                
            </Paper>
        </Box>
    )
}