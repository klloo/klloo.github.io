import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import Common from './common';

config.autoAddCss = false;

export const SearchInputForm = styled.form`
  position: relative;
  & input {
    width: 180px;
    height: 32px;
    border: 0;
    outline: none;
    text-decoration: none;
    padding-left: ${Common.spacing[7]};
    border-bottom: 1px solid var(--color-text);
    margin-top: ${Common.spacing[12]};
    background: transparent;
  }
`;

export const PostListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const PostListWrapper = styled.div`
  margin-top: ${Common.spacing[4]};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  width: 15px;
  position: absolute;
  left: ${Common.spacing[2]};
  bottom: 0;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const CenterPos = styled.div`
  margin-top: ${Common.spacing[20]};
  margin-bottom: ${Common.spacing[20]};
  margin-left: calc(50% - 100px);
`;