import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';



function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzY4NzliMDFkNzExMzhlZWVhZDM2NmE1ZTQ2YTQyNCIsIm5iZiI6MTcyNDM5OTI5MC44Mjc3MzEsInN1YiI6IjY2YmYwZTJjMmU2N2U5MzIwMzlhZDkwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvqu9-3PLG5269Q21CwZDXQvFYurzgZ9Avedn8b82Os',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setApiData(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category, options]);

  return (
    <div className="title-cards">
      <h2>{title ? title : 'Popular Movies'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 &&
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default TitleCards;