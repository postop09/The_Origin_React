import React from 'react';
import styled from 'styled-components';

export default function MovieModal({id, backdrop_path, first_air_date, release_date, name, title, vote_average, overview, setModalOpen}) {
  
  return (
    <Modal key={id}>
      <ModalContainer>
        <h3 className='txt_hide'>{name || title} 자세히 보기 모달창</h3>
        <ModalImgMovie src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt='' />
        <ModalWrapTxt>
          <ModalTxtDate>출시일: {first_air_date || release_date || '정보 없음'}</ModalTxtDate>
          <ModalTxtTitle>{name || title}</ModalTxtTitle>
          <ModalTxtVote>평점: {vote_average}</ModalTxtVote>
          {overview || '설명 정보 없음'}
        </ModalWrapTxt>
        <ModalListBtn>
          <li>
            <ModalBtn type='button'>PLAY</ModalBtn>
          </li>
          <ModalItemListShow>
            <ModalBtn type='button'>회차 목록 보기</ModalBtn>
          </ModalItemListShow>
          <li>
            <ModalBtn type='button' onClick={() => setModalOpen(false)}>닫기</ModalBtn>
          </li>
        </ModalListBtn>
      </ModalContainer>
    </Modal>
  )
}

const Modal = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 15px 2px rgb(0, 0, 0, 0.8);
  border-radius: 5px;
  width: 70vw;
  min-height: 75vh;
  background-color: #111;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
const ModalImgMovie = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  object-fit: cover;
`
const ModalWrapTxt = styled.p`
  padding: 20px;
  font-size: 18px;
  color: rgb(200, 200, 200);
`
const ModalTxtDate = styled.small`
  display: block;
  font-size: 16px;
`
const ModalTxtTitle = styled.strong`
  display: block;
  padding: 10px 0 20px;
  font-size: 32px;
  color: white;
`
const ModalTxtVote = styled.small`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`
const ModalListBtn = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: auto;
  padding: 20px;
`
const ModalItemListShow = styled.li`
  margin-left: 20px;
  margin-right: auto;
`
const ModalBtn = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(110, 110, 110, 0.8);
  transition: all .25s;
  cursor: pointer;
  &:hover {
    background-color: rgb(50, 50, 50);
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 7px 10px;
    font-size: 14px;
  }
`