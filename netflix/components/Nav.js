import React, { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
    return (
      window.removeEventListener('scroll', () => {})
    )
  }, [])
  
  return (
    <header className={`header ${show && 'header_black'}`}>
      <h1 className='txt_hide'>넷플릭스에 오신 것을 환영합니다.</h1>
      <nav>
        <ul className='list_nav'>
          <li>
            <button>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png'
                alt='넷플릭스 로고, 클릭 시 콘텐츠 새로고침'
                className='img_netflix'
                onClick={() => window.location.reload()}
              />
            </button>
          </li>
          <li>
            <button className='btn_user'>
              <img
                src={require('../img/img_user.png')}
                alt='사용자 계정 확인'
                className='img_user'
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

// <a href="https://www.flaticon.com/kr/free-icons/" title="삼촌 아이콘">삼촌 아이콘  제작자: Freepik - Flaticon</a>