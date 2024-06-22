import { CSSProperties, useState } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';
import styles from 'src/styles/index.module.scss';

export const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const [articleStyle, setArticleStyle] =
		useState<ArticleStateType>(defaultArticleState);
	const resetArticleState = () => {
		setArticleState(defaultArticleState);
	};
	const applyArticleStyle = () => {
		setArticleStyle(articleState);
	};
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleStyle.fontFamilyOption.value,
					'--font-size': articleStyle.fontSizeOption.value,
					'--font-color': articleStyle.fontColor.value,
					'--container-width': articleStyle.contentWidth.value,
					'--bg-color': articleStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
				resetArticleState={resetArticleState}
				applyArticleStyle={applyArticleStyle}
			/>
			<Article />
		</main>
	);
};
