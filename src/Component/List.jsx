
import { Box, Paper, Typography,Checkbox,IconButton} from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function List({note,deletenote,updatenote}) {
  return (
    <Paper sx={{p: 2,display:"flex",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",gap: 1,alignItems:"center"}}>
            <Checkbox checked={note.completed?true:false} onChange={()=>updatenote(note)}/>
       
        <Typography sx={{fontWeight:"600",textTransform:"capitalize", textDecoration:note.completed?"line-through":"none"}}>{note.title}</Typography>
      
         </Box>
         <IconButton onClick={()=>deletenote(note.id) }>
            <DeleteIcon sx={{color:"red"}}></DeleteIcon>
         </IconButton>
    </Paper>
  )
}
