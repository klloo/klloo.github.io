import React from 'react';
import { Link } from 'gatsby';
import { PostList, PostListItem, PostItemHeader } from './style';
import { PostTag } from '../../pages/blog-post/style';

const PostItem = ({post, title}) => {
	return (
		<PostList>
			<Link to={post.fields.slug} itemProp="url">
				<PostListItem
					itemScope
					itemType="http://schema.org/Article"
				>
					<header>
						<h4>
							<span itemProp="headline">
								{title} {post.frontmatter.icon}
							</span>
						</h4>
						<PostItemHeader>
							<PostTag>
								{post.frontmatter.category}
							</PostTag>
							<small>{post.frontmatter.date}</small>
						</PostItemHeader>
					</header>
					<section>
						<p>{post.frontmatter.description || post.excerpt}</p>
					</section>
				</PostListItem>
			</Link>
		</PostList>
	);
};

export default PostItem;