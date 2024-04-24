import React, { useEffect, useState } from "react";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import GenreSlider from "../../components/organisms/genreslider/genreSlider";
import MovieSlider from "../../components/organisms/movieSlider/movieSlider";

function App() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUyN2JkNzEwNzZiZmEyNGUyNzRmYTBlMjYwMmNkZSIsInN1YiI6IjY1ZmIwMmE1NWJlMDBlMDE3YzZlNzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uobQko1bJFBY3XyqYAWmJ5Fs-CJPMpqqjU7l9ZSnS6w'
    }
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    .then(response => response.json())
    .then(response => setMovieGenres(response.genres))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => setPopularMovies(response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => setTopMovies(response.results))
    .catch(err => console.error(err));

  }, [])

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__hero">
        <HeroCarousel />
      </div>
      <div className="App__movies">
        <GenreSlider title="Genres" movieGenres={movieGenres}/>
        <MovieSlider title='Populaires' movies={popularMovies || []} />
        <MovieSlider title='Mieux notés' movies={topMovies || []}/>
      </div>
    </div>
  );
}

export default App;
