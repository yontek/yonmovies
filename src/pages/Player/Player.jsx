import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzY4NzliMDFkNzExMzhlZWVhZDM2NmE1ZTQ2YTQyNCIsIm5iZiI6MTcyNDM5OTI5MC44Mjc3MzEsInN1YiI6IjY2YmYwZTJjMmU2N2U5MzIwMzlhZDkwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvqu9-3PLG5269Q21CwZDXQvFYurzgZ9Avedn8b82Os',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setApiData(data.results[0] || { name: '', key: '', published_at: '', type: '' });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id, options]);

  return (
    <div className="player">

      <img src={back_arrow_icon} alt="" onClick={()=>{navigate('/')}} />
      {apiData.key && (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;