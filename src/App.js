import React,{useState} from "react";
import {Card,CardContent,Grid,Button} from "@mui/material"
function App() {
  const[count,setCount]=useState(0);
  return (
  
 <Grid container spacing={4}> 
     <Grid item xs={12} sx={{textAlign:"center", color:"red"}}>
         <h1>Counter</h1>
         </Grid>
      <Grid item xs={3} > 
         
        </Grid>

        <Grid item xs={6} > 
        <Button
          onClick={()=> setCount(count +2 )}
          fullWidth
          variant="contained" color="secondary"
        > 
         Increment +2</Button>
        </Grid>

        <Grid item xs={3} > 
         
         </Grid>

        <Grid item xs={3} > 
        <Button   onClick={()=> setCount(count +5)}
        variant="contained" color="primary" fullWidth>
         Incement +5
         </Button> 
         </Grid>

         <Grid item xs={6} sx={{textAlign:"center", fontSize:25}} > 
          {count}
         </Grid>

         
        <Grid item xs={3} > 
        <Button    onClick={()=> setCount(count -5 )}variant="contained" fullWidth color="primary"> 
         Decrement -5</Button> 
         </Grid>


         <Grid item xs={3} > 
         

         </Grid>

         <Grid item xs={6} > 
         <Button   onClick={()=> setCount(count -2 )}  variant="contained" fullWidth color="warning"> 
         Decrement -2</Button> 
         </Grid>


         <Grid item xs={3} > 
         

         </Grid>

         </Grid>




  );
}

export default App;
