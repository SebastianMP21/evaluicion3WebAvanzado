import { useState, useEffect } from 'react'
import './App.css'
import { get } from "./services"
import { CardMovies } from "./components"
function App() {

  const [title, setTitle] = useState("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.%22");
  
  const [titles, setTitles] = useState([]);
  
  const [movies, setMovies] = useState([]);


  async function getMovies() {
    const movies = await get();
    setMovies(movies.entries);
    console.log(movies)
  }



  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
      <h1>Peliculas Populares</h1>
      {movies?.map((movie, index) => (
        <CardMovies key={index} pelicula={movie}/>
      ))}
    </div>
  )
}

export default App
