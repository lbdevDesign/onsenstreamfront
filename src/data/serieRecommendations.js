import { useState, useEffect } from "react";

function useSerieRecommendationsData(param) {
  const [serieRecommendations, setSerieRecommendations] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${param}/recommendations?language=fr-FR&page=1`, options);
        const data = await response.json();
        setSerieRecommendations(data.results);
      } 
      fetchData();
  }, [param]);

  return serieRecommendations;
}

export default useSerieRecommendationsData;