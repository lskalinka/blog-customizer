import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const [articleStyle, setArticleStyle] = useState<CSSProperties>({
		'--font-family': articleState.fontFamilyOption.value,
		'--font-size': articleState.fontSizeOption.value,
		'--font-color': articleState.fontColor.value,
		'--container-width': articleState.contentWidth.value,
		'--bg-color': articleState.backgroundColor.value,
	} as CSSProperties);
	const resetArticleState = () => {
		setArticleState(defaultArticleState);
	};
	const applyArticleStyle = () => {
		setArticleStyle({
			'--font-family': articleState.fontFamilyOption.value,
			'--font-size': articleState.fontSizeOption.value,
			'--font-color': articleState.fontColor.value,
			'--container-width': articleState.contentWidth.value,
			'--bg-color': articleState.backgroundColor.value,
		} as CSSProperties);
	};
	return (
		<div className={clsx(styles.main)} style={articleStyle}>
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
				resetArticleState={resetArticleState}
				applyArticleStyle={applyArticleStyle}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
