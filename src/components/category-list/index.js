import React from 'react';
import { Tag, TagButton } from './style';



const categoryList = ({categoryList, onClickCategory, curCategory}) => {
	return (<Tag>
		{categoryList.map(category => (
			<TagButton
				isSelected={curCategory===category.fieldValue}
				key={category.fieldValue}
				onClick={onClickCategory}
			>
				{category.fieldValue}
			</TagButton>
		))}
	</Tag>);
};

export default categoryList;