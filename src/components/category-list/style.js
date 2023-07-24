import styled from '@emotion/styled';
import Common from '../../style/common';

export const Tag = styled.div`
    display: flex;
    background-color: white;
    padding: ${Common.spacing[5]} ${Common.spacing[10]};
    border-radius: 7px;
`;

export const TagButton = styled.div`
    border-radius: 5px;
    border: none;
    background-color: white;
    margin-right: ${Common.spacing[5]};
    cursor: pointer;
    padding: ${Common.spacing[1]} ${Common.spacing[3]};
    font-size: ${Common.fontSize[0]};
    ${props => props.isSelected ? `background-color: ${Common.color.tag}; font-weight: ${Common.fontWeight.bold};` : ''}
`;