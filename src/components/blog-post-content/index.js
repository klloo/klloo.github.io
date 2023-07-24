import React from 'react';
import { Link } from 'gatsby';
import Giscus from '@giscus/react';
import { BlogPost, BlogPostNav } from './style';

const BlogPostContent = ({post, previous, next}) => {
	return (
		<div>
			<BlogPost
				itemScope
				itemType="http://schema.org/Article"
			>
				<section
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
				/>
				<br />
				<br />
				<br />
			</BlogPost>
			<BlogPostNav>
				<ul>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
                  ←
								{' '}
								{previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title}
								{' '}
                  →
							</Link>
						)}
					</li>
				</ul>
			</BlogPostNav>
			<br />
			<br />
			<Giscus
				id="comments"
				repo="klloo/blog-comments"
				repoId="R_kgDOJ8WpOQ"
				category="General"
				categoryId="DIC_kwDOJ8WpOc4CX7sW"
				mapping="pathname"
				strict="0"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="bottom"
				theme="preferred_color_scheme"
				lang="ko"
				crossorigin="anonymous"
				async
			/>
		</div>
	);
};

export default BlogPostContent;