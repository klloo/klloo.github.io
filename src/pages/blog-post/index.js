import * as React from 'react';
import { graphql } from 'gatsby';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import BlogPostContent from '../../components/blog-post-content';
import { PostTag, TableOfContents, PostIcon, PostDate } from './style';

function BlogPostTemplate({
	data: {
		previous, next, site, markdownRemark: post,
	},
	location,
}) {
	const siteTitle = site.siteMetadata?.title || 'Title';

	console.log(post.tableOfContents);

	deckDeckGoHighlightElement();

	return (
		<Layout location={location} title={siteTitle}>
			<TableOfContents
				dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
				itemProp="articleBody"
			/>
			<header>
				<PostIcon>
					{post.frontmatter.icon}
				</PostIcon>
				<PostTag>
					{post.frontmatter.category}
				</PostTag>
				<h3 itemProp="headline">{post.frontmatter.title}</h3>
				<PostDate>{post.frontmatter.date}</PostDate>
				<p>{post.frontmatter.description}</p>
				<hr />
				<br />
				<br />
			</header>
			<BlogPostContent previous={previous} next={next} post={post}/>
		</Layout>
	);
}

export function Head({ data: { markdownRemark: post } }) {
	return (
		<Seo
			title={post.frontmatter.title}
			description={post.frontmatter.description || post.excerpt}
		/>
	);
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        icon
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
