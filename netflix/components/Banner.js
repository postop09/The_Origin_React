import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import requests from '../api/requests';
import styled from 'styled-components';
import './Banner.css';

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    // 현재 상영중인 영화
    const req = await axios.get(requests.fetchNowPlaying);
    // console.log(req.data.results);
    // 영화 id값 무작위 추출
    const movieId = req.data.results[
      Math.floor(Math.random() * req.data.results.length)
    ].id
    console.log(movieId);
    // id값에 해당하는 영화 정보 추출
    const movieDetail = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: 'videos'},
    })
    // console.log(movieDetail.data);
    setMovie(movieDetail.data);
    // console.log(movie);
  }
  useEffect(() => {
    fetchData();
  },[]);

  const [clicked, setClicked] = useState(false);
  if (!clicked) {
    return (
      <section
        className='sec_banner'
        style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}}
      >
        <h2 className='txt_hide'>현재 상영중인 영화 정보 목록</h2>
        <div className='wrap_contents'>
          <strong className='txt_title'>{movie.title || movie.original_title || movie.name}</strong>
          <div className='wrap_btn'>
            <button type='button' className='btn_banner btn_play' onClick={() => setClicked(true)}>play</button>
            <button type='button' className='btn_banner btn_more'>More Information</button>
          </div>
          <p className='txt_overview'>{movie.overview}</p>
        </div>
        <div className='sec_fade'></div>
      </section>
    )
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playList=${movie.videos.results[0].key}`}
            width='640'
            height='360'
            title='Youtube Video Player'
            allow='autoplay; fullscreen'
          ></Iframe>
        </HomeContainer>
      </Container>
    )
  }
}
// movie.videos.results.length = 0 인 경우
const Iframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .85;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  width: 100%;
  height: 100vh;
`
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`