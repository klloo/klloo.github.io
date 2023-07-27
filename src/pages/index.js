import React, {useCallback, useEffect, useState} from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import CategoryList from '../components/category-list';
import PostItem from '../components/post-item';
import { SearchInputForm, SearchIcon, PostListHeader, PostListWrapper, CenterPos } from '../style/blogMainStyle';

const ALL_NAME = 'ALL';

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || 'Title';
	const allPosts = data.allMarkdownRemark.nodes;
	const categories = [{fieldValue: ALL_NAME, totalCount: allPosts.length}, ...data.categories.group];

	const [posts, setPosts] = useState([...allPosts]);
	const [curCategory, setCurCategory] = useState(ALL_NAME);
	const [keyword, setKeyword] = useState('');

	const onChangeKeyword = useCallback((e) => {
		setKeyword(e.target.value);
	}, []);

	const onClickCategory = useCallback((e) => {
		setCurCategory(e.target.innerText);
	}, []);

	const searchProc = useCallback((e) => {
		e.preventDefault();
		if(!keyword || !keyword.trim()) {
			setCurCategory(ALL_NAME);
			setPosts([...allPosts]);
			return;
		}
		setPosts([...allPosts.filter((post)=> {
			if ((post.frontmatter.title?.includes(keyword) || post.frontmatter.description?.includes(keyword))) {
				if (curCategory !== ALL_NAME) 
					return post.frontmatter.category === curCategory;
				return true;
			}
		})]);
	}, [keyword, curCategory]);

	useEffect(() => {
		if (curCategory === ALL_NAME)
			setPosts([...allPosts]);
		else
			setPosts([...allPosts.filter((post)=>post.frontmatter.category === curCategory)]);
	}, [curCategory]);

	return (
		<Layout location={location} title={siteTitle}>
			<CategoryList categoryList={categories} onClickCategory={onClickCategory} curCategory={curCategory}/>
			<h4>{curCategory}</h4>
			<PostListHeader>
				<span>{posts.length} 개의 글</span>
				<SearchInputForm onSubmit={searchProc}>
					<input type="text" value={keyword} onChange={onChangeKeyword}/>
					<SearchIcon icon={faSearch}/>
				</SearchInputForm>
			</PostListHeader>
			<PostListWrapper style={{ listStyle: 'none' }}>
				{posts.length === 0 && <CenterPos>포스트가 존재하지 않습니다.</CenterPos>}
				{posts.map(post => {
					const title = post.frontmatter.title || post.fields.slug;
					return (
						<PostItem key={post.fields.slug} title={title} post={post}/>
					);
				})}
			</PostListWrapper>
		</Layout>
	);
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Huiy's Blog" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 150, truncate:true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          icon
        }
      }
    }
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;