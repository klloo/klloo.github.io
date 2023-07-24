import * as React from 'react';
import { GlobalHeader, GlobalWrapper, GlobalFooter, TitleLink } from './style';
import GlobalStyle from '../../style/globalStyle';

const Layout = ({ location, title, children }) => {
	// eslint-disable-next-line no-undef
	const rootPath = `${__PATH_PREFIX__}/`;
	const isRootPath = location.pathname === rootPath;

	return (
		<div>
			<GlobalStyle/>
			<GlobalHeader>
				<div>
					<TitleLink to="/">
						{title} &#x2728;
					</TitleLink>
				</div>
				<div>about</div>
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
