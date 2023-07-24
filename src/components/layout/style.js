import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Common from '../../style/common';

export const GlobalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: ${Common.maxWidth.full};
    margin-bottom:  ${Common.spacing[12]};
    padding: ${Common.spacing[5]} ${Common.spacing[10]};
    background-color: white;
    top: 0px;
    position: sticky;
    backdrop-filter: blur(20px);
    opacity: 0.9;
    z-index: 999;
    border-bottom: 1px solid ${Common.color.accent};
    & div {
        cursor: pointer;
    }
`;

export const TitleLink = styled(Link)`
    font-weight: ${Common.fontWeight.bold};
    text-decoration: none;
    color: black;
    font-size: ${Common.fontSize[2]};
`;

export const GlobalWrapper = styled.div`
    margin:  ${Common.spacing[0]} auto;
    max-width: ${Common.maxWidth['5xl']};
    padding: ${Common.spacing[10]} ${Common.spacing[10]};
    margin-bottom: ${props => props.isRootPath ? Common.spacing[20] : '0'};
    padding: ${props => !props.isRootPath ? `${Common.spacing[10]} ${Common.spacing[10]}` : ''};
    max-width: ${props => !props.isRootPath ? Common.maxWidth['2xl'] : ''};

    @media (max-width: ${Common.media.mobile}) {
        padding: ${Common.spacing[10]} ${Common.spacing[3]};
    }
`;

export const GlobalFooter = styled.div`
    max-width: ${Common.maxWidth.full};
    margin-bottom: ${Common.spacing[12]};
    padding: ${Common.spacing[15]} ${Common.spacing[10]};

    @media (max-width: ${Common.media.mobile}) {
        padding: ${Common.spacing[10]} ${Common.spacing[3]};
    }
`;