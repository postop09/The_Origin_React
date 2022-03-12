import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterWrap>
      <FooterContainerInfo>
        <FooterTxtInfo>넷플릭스 대한민국</FooterTxtInfo>
        <FooterListInfo>
          <FooterItemInfo><FooterItemLink href='#'>넷플릭스 소개</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>고객 센터</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>미디어 센터</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>이용약관</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>개인정보</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>회사정보</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>문의하기</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>법적 고지</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>투자 정보</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>입사 정보</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>속도 테스트</FooterItemLink></FooterItemInfo>
          <FooterItemInfo><FooterItemLink href='#'>오직 넷플릭스에서</FooterItemLink></FooterItemInfo>
        </FooterListInfo>
        <FooterTxtRights>Netflix RIGHTS RESERVED.</FooterTxtRights>
      </FooterContainerInfo>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  padding: 20px 0;
  color: #3e3e3e;
  background-color: #111;
`
const FooterContainerInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-top: 1px solid #1e1e1e;
`
const FooterTxtInfo = styled.h2`
  margin: 20px 0 ;
`
const FooterListInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 600px;

  @media screen and (max-width: 768px) {
    width: fit-content;
    font-size: .9rem
  }
`
const FooterItemInfo = styled.li`
  width: 25%;
  padding: 10px 0;
`
const FooterItemLink = styled.a`
  color: #3e3e3e;
  &:hover {
    text-decoration: underline;
  }
`
const FooterTxtRights = styled.small`
  margin-top: 20px;
  font-size: 16px;
  color: #5e5e5e;
`