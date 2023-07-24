import styled from '@emotion/styled';
import Common from '../../style/common';

export const PostList = styled.div`
  border: 1px solid ${Common.color.accent};
  background-color: white;
  border-radius: 10px;
  width: calc(50% - 7px);
  padding: 0 ${Common.spacing[8]} ${Common.spacing[5]} ${Common.spacing[8]};
  margin-bottom: ${Common.spacing[5]};
  :hover {
    /* box-shadow: 0 0 15px rgb(230, 230, 230); */
    h4 {
        background-size: 100% 1px;
    }
  }
  & h4 {
    text-decoration: none; /* 링크 밑줄 없애기 */
    /* background-image: linear-gradient(to right, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%); */
    background-image: linear-gradient(to left, #868f96 0%, #596164 100%);
    background-size: 0% 1px; /* 너비 0%로 변경 (Hover되기 전엔 밑줄 안보이게 */
    background-repeat: no-repeat; /* 배경 중복 제거 */
    background-position: left bottom;
    transition: background-size 300ms ease; /* background-size를 0.3초동안 서서히 나타냄 */
  }
  @media (max-width: ${Common.media.mobile}) {
    width: 100%;
  }
`;

export const PostListItem = styled.article`
  margin-bottom: ${Common.spacing[8]};
  margin-top: ${Common.spacing[8]};
  color: black;
  p {
    margin-bottom: ${Common.spacing[0]};
  }
  h2 {
    font-size: ${Common.fontSize[4]};
    margin-bottom: ${Common.spacing[2]};
    margin-top: ${Common.spacing[0]};
  }
  header {
    margin-bottom: ${Common.spacing[4]};
  }
`;

export const PostItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;