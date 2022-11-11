import { Card, Box, Grid } from "@mui/material";

const CardMovies =({pelicula})=>{

    return(

        <Box>
            <Grid container spacing={5} mt={5}>
            <div className="card" style={{width: "18rem"}}>
                <img src={pelicula.images.posterArt.url} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text">{pelicula.title}</p>
            </div>
        </div>
            </Grid>
        </Box>
        
        

    )
}

export default CardMovies