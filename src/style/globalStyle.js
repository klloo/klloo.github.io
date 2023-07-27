import React from 'react';
import { Global, css } from '@emotion/react';
import Common from './common';

const fontFamilySerif = '"Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif';

// 기본 스타일
const baseStyle = css`
    /* Colors */
    :root {
      /* Color 값을 CSS 변수로 설정 */
      --color-primary: ${Common.lightColor.primary};
      --color-text: ${Common.lightColor.text};
      --color-textLight: ${Common.lightColor.textLight};
      --color-heading: ${Common.lightColor.heading};
      --color-headingBlack: ${Common.lightColor.headingBlack};
      --color-accent: ${Common.lightColor.accent};
      --color-tag: ${Common.lightColor.tag};
      --color-link: ${Common.lightColor.link};
      --color-background: ${Common.lightColor.background};
    }

    @font-face {
        font-family: 'IBMPlexSansKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    /* HTML elements */
    *,
    :after,
    :before {
        box-sizing: border-box; 
    }

    html {
        line-height: 1.75;
        font-size: ${Common.fontSize.root};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.02rem;
        word-break: keep-all;
    }

    body {
        font-family: 'IBMPlexSansKR-Regular';
        font-size: ${Common.fontSize[1]};
        color: var(--color-text);
        background-color: var(--color-background);
    }

    hr {
        background: var(--color-accent);
        height: 1px;
        border: 0;
    }

    /* Heading */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: ${Common.spacing[3]};
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: ${Common.fontWeight.bold};
        color: var(--color-heading);
    }

    h1 {
        font-weight: ${Common.fontWeight.black};
        font-size: ${Common.fontSize[5]};
        color:var(--color-headingBlack);
    }

    h2 {
        font-size: ${Common.fontSize[4]};
    }

    h3 {
        font-size: ${Common.fontSize[3]};
    }

    h4 {
        font-size: ${Common.fontSize[2]};
    }

    h5 {
        font-size: ${Common.fontSize[1]};
    }

    h6 {
        font-size: ${Common.fontSize[0]};
    }

    h1 > a {
        color: inherit;
        text-decoration: none;
    }

    h2 > a,
    h3 > a,
    h4 > a,
    h5 > a,
    h6 > a {
        text-decoration: none;
        color: inherit;
    }

    /* Prose */
    p {
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        margin:${Common.spacing[0]} ${Common.spacing[0]} ${Common.spacing[7]} ${Common.spacing[0]};
        padding: ${Common.spacing[0]};
    }

    ul,
    ol {
        margin-left: ${Common.spacing[0]};
        margin-right: ${Common.spacing[0]};
        padding: ${Common.spacing[0]};
        margin-bottom: ${Common.spacing[8]};
        list-style-position: outside;
        list-style-image: none;
    }

    ul li,
    ol li {
        padding-left: ${Common.spacing[0]};
        margin-bottom: calc(${Common.spacing[4]} / 2);
    }

    li > p {
        margin-bottom: calc(${Common.spacing[4]} / 2);
    }

    li *:last-child {
        margin-bottom: ${Common.spacing[0]};
    }

    li > ul {
        margin-left: ${Common.spacing[8]};
        margin-top: calc(${Common.spacing[8]} / 2);
    }

    /* Link */
    a {
        color: var(--color-link);
        text-decoration: none;
    }

    a:hover,
    a:focus {
        text-decoration: none;
    }

    deckgo-highlight-code {
        --deckgo-highlight-code-font-size: 15px;
        padding: 15px 2px 10px 2px;
        border-radius: 6px;
        font-family: ${fontFamilySerif};
    }
`;

// 다크 모드 스타일
const darkStyle = css`
    /* Colors */
    :root {
      /* Color 값을 CSS 변수로 설정 */
      --color-primary: ${Common.darkColor.primary};
      --color-textLight: ${Common.darkColor.textLight};
      --color-accent: ${Common.darkColor.accent};
      --color-link: ${Common.darkColor.link};
      --color-heading: ${Common.darkColor.heading};
      --color-headingBlack: ${Common.darkColor.headingBlack};
      --color-tag: ${Common.darkColor.tag};
      --color-text: ${Common.darkColor.text};
      --color-background: ${Common.darkColor.background};
    }
`;

const GlobalStyle = () => {
	// body 클래스에 따라 다른 스타일 선택
	const currentStyle = css`
    ${baseStyle};
    ${document.body.classList.contains('dark') ? darkStyle : null};
  `;

	return <Global styles={currentStyle} />;
};

export default GlobalStyle;
