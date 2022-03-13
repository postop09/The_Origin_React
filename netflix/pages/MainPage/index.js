import React from 'react'
import requests from '../../api/requests';
import Banner from '../../components/Banner';
import Row from '../../components/Row';

export default function MainPage() {
  return (
    <main>
      <Banner />
      <Row title='NETFLIX ORIGINALS' id='NO' url={requests.fetchNetflixOriginals} largeRow/>
      <Row title='Now Playing' id='NP' url={requests.fetchNowPlaying} />
      <Row title='Trending Now' id='TN' url={requests.fetchTrending} />
      <Row title='Top Rated' id='TR' url={requests.fetchTopRated} />
      <Row title='Action Movies' id='AM' url={requests.fetchActionMovies} />
      <Row title='Comedy Movies' id='CM' url={requests.fetchComedyMovies} />
      <Row title='Romance Movies' id='RM' url={requests.fetchRomanceMovies} />
      <Row title='Horror Movies' id='HM' url={requests.fetchHorrorMovies} />
      <Row title='Documentaries' id='DC' url={requests.fetchDocumentaries} />
    </main>
  )
}