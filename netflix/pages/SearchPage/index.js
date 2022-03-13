import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css';

export default function SearchPage() {
  // console.log(useLocation());
  const [serchData, setSerchData] = useState([])
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchValue = query.get('q');
  const fetchSearchData = async (searchValue) => {
    try {
      const req = await axios.get(
        `/search/multi?include_adult=false&query=${searchValue}`
      )
      // console.log(req);
      setSerchData(req.data.results);
    } catch (error) {
      console.log('error', error);
    }
  }
  useEffect(() => {
    if(searchValue) {
      fetchSearchData(searchValue)
    };
  },[searchValue]);

  return (
    <section className='sec_searchMovie'>
      <h2 className='txt_search'>{searchValue} 검색 결과</h2>
      <ul className='list_searchMovie'>
        {serchData.map((searchedMovie) => {
          if(searchedMovie.poster_path !== null && searchedMovie.media_type !== 'person') {
            return (
                <li className='item_searchMovie'>
                  <img src={`https://image.tmdb.org/t/p/original/${searchedMovie.poster_path}`} className='img_searchMovie' />
                </li>
            )
          };
        })}
      </ul>
    </section>
  )
}
