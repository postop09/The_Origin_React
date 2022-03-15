import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SearchPage.css';
import useDebounce from '../../Hooks/useDebounce';

export default function SearchPage() {
  // console.log(useLocation());
  const [serchData, setSerchData] = useState([])
  const navigate = useNavigate()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchValue = query.get('q');
  const debounceSearchValue = useDebounce(searchValue, 500);
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
    if(debounceSearchValue) {
      fetchSearchData(debounceSearchValue)
    };
  },[debounceSearchValue]);

  if(serchData.length > 0) {
    return (
      <section className='sec_searchMovie'>
        <h2 className='txt_hide'>{searchValue} 검색 결과</h2>
        <ul className='list_searchMovie'>
          {serchData.map((searchedMovie) => {
            if(searchedMovie.poster_path !== null && searchedMovie.media_type !== 'person') {
              return (
                <li key={searchedMovie.id} className='item_searchMovie'>
                  <button type='button' onClick={() => navigate(`/${searchedMovie.id}`)} className='btn_searchMovie'>
                    <img src={`https://image.tmdb.org/t/p/original/${searchedMovie.poster_path}`} alt={`${searchedMovie.title || searchedMovie.name} 상세보기`} className='img_searchMovie' />
                  </button>
                </li>
              )
            };
          })}
        </ul>
      </section>
    )
  } else {
    return (
      <section className='sec_searchError'>
        <h2 className='txt_hide'>검색 실패 안내</h2>
        <div className='wrap_txtError'>
          <p className='txt_searchError'>{debounceSearchValue}에 대한 검색 결과가 없습니다.</p>
          <p className='txt_errorGuide'>검색창에서 단어를 다시 작성해주세요.</p>
        </div>
      </section>
    )
  }
}
