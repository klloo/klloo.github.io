import styled from '@emotion/styled';
import Common from '../../style/common';

export const BlogPost = styled.article`
    & header h1 {
        margin: 0 0 ${Common.spacing[2]} 0;
        font-weight: ${Common.fontWeight.bold};
    }
    & header p {
        font-size: ${Common.fontSize[4]};
    }

`;

export const BlogPostNav = styled.nav`
    & ul {
        display: flex;
        padding: 0;
        margin: 0;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
    }
`;