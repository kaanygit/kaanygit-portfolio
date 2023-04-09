import styled from 'styled-components';

export const ProjectCardContainer=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;
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

export const Footer=styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 0;
`;

export const ProjectName=styled.span`
  font-size: 25px;
  font-weight: 500;
`;
export const GithubLink=styled.h1`
  color: black;
  font-size: 50px;
`;
export const WebsiteLink=styled.h1`
  color: #0a66c2;
  font-size: 50px;
`;
export const ReactIcon=styled.span`
  color: #087ea4;
  padding-right: 15px;
  font-size: 20px;
  padding-top: 10px;
`;