import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import './detail.css';

export default function DetailPage() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(req.data);
    }
    fetchData();
  },[movieId])
  console.log(movie);

  if (!movie) {
    return (
      <section>
        <h3>영화 정보가 없습니다.</h3>
      </section>
    )
  } else {
    return (
      <section className='sec_detail'>
        <h3 className='txt_hide'>{movie.title || movie.name} 상세 정보</h3>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=''
          className='img_detail'
        />
        <div className='wrap_txtDetail'>
          <strong className='txt_title'>{movie.title || movie.name}</strong>
          <strong className='txt_tagline'>{movie.tagline}</strong>
          <small className='txt_date'>{movie.release_date}</small>
          <p className='txt_overview'>{movie.overview}</p>
        </div>
      </section>
    )
  }
}
