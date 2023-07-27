import React, { useState, useCallback, useEffect } from 'react';
import { GlobalHeader, GlobalWrapper, GlobalFooter, TitleLink, DarkModeButton, FlexWrapper } from './style';
import GlobalStyle from '../../style/globalStyle';

const Layout = ({ location, title, children }) => {
	// eslint-disable-next-line no-undef
	const rootPath = `${__PATH_PREFIX__}/`;
	const isRootPath = location.pathname === rootPath;

	const [theme, setTheme] = useState(null);

	let isDarkMode = false;
	if (typeof window !== 'undefined')  
		isDarkMode = theme === window.__DARK;

	const onClickDarkModeButton = useCallback(() => {
		const newTheme = isDarkMode ? window.__LIGHT : window.__DARK;
		window.__setTheme(newTheme);
		setTheme(newTheme);
	}, [isDarkMode]);

	useEffect(() => {
		setTheme(window.__theme);
	}, []);

	if (!theme) {
		return null;
	}

	return (
		<div>
			<GlobalStyle/>
			<GlobalHeader>
				<div>
					<TitleLink to="/">
						{title}
					</TitleLink>
				</div>
				<FlexWrapper>	
					<span>about</span>
					<DarkModeButton onClick={onClickDarkModeButton}>{isDarkMode ? '☀️' : '🌙'}</DarkModeButton>
				</FlexWrapper>
			</GlobalHeader>
			<GlobalWrapper isRootPath={isRootPath}>
				<main>{children}</main>
				<br/><br/><br/>
			</GlobalWrapper>
			<GlobalFooter>
				<hr/>
				<br/>
				© {new Date().getFullYear()}, Built with
				{' '}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
			</GlobalFooter>
		</div>
	);
};

export default Layout;
