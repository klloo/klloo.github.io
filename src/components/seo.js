/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, title, children })  => {
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<>
			<title>{title} </title>
			<meta name="google-site-verification" content="G2a8iASYaLpR88psrhVEz2g0p4IgIihncfRi8gKFrNg" />
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary" />
			{children}
		</>
	);
};

export default Seo;
