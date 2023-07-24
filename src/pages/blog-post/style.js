import styled from '@emotion/styled';
import Common from '../../style/common';

export const TableOfContents = styled.aside`
  position: fixed;
  top: 100px;
  left: calc(50% + 400px);
  font-size: ${Common.fontSize[0]};
  & ul {
    list-style: none;
    padding-left: ${Common.spacing[3]};
    border-left: 4px solid ${Common.color.tag};
  }
  & a {
    padding: ${Common.spacing[3]};
    border-radius: 5px;
    text-decoration: none;
    color: ${Common.color.text};
    cursor: pointer;
    /* background-image: linear-gradient(to left, #90969a 0%, #8d9496 100%);
    background-size: 0% 1px; 
    background-repeat: no-repeat; 
    background-position: left bottom;
    transition: background-size 300ms ease;  */
    /* :hover {
        background-size: 100% 1px; 
        background-color: var(--color-tag);
    } */
  }
  @media (max-width: 80rem) {
    display: none;
  }
`;

export const PostIcon = styled.div`
    font-size: ${Common.fontSize[10]};
`;
export const PostTag = styled.span`
    background-color: ${Common.color.tag};
    font-size: ${Common.fontSize[0]};
    border-radius: 5px;
    padding: ${Common.spacing[1]} ${Common.spacing[3]};
    border: none;
`;
export const PostDate = styled.p`
    font-size: ${Common.fontSize[0]};
`;