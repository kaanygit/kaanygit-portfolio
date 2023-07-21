import styled from 'styled-components';

export const ImgUrl=styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  z-index: 1;
  display: block;
  transition: opacity 0.5s;
  border-radius: 15px;
`;

export const GitLink=styled.div`
  position: absolute;
  padding: 24px;
  opacity: 0;
  top: 50%;
  left: 50%;
  transition:opacity 0.5s;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageLinks=styled.div`
  position: relative;
  &:hover ${ImgUrl}{
    opacity: 0.32;
  };
  &:hover ${GitLink}{
    opacity: 1;
  };
`;

export const WebLink=styled.span`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  color: black;
  font-weight:500;
`;

export const GithubLink=styled.h1`
  color: black;
  font-size: 50px;
  `;
export const WebsiteLink=styled.h1`
  color: #0a66c2;
  font-size: 50px;
  `;


