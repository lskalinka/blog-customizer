import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import { Text } from '../text';
import { Select } from '../select';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: Dispatch<SetStateAction<ArticleStateType>>;
	resetArticleState: () => void;
	applyArticleStyle: () => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [value, setValue] = useState(false);
	const nameStyle = value === false ? null : styles.container_open;
	const handleClick = () => {
		setValue((value) => !value);
	};
	const changeFontFamily = (value: OptionType) => {
		props.setArticleState({ ...props.articleState, fontFamilyOption: value });
	};
	const changeFontColor = (value: OptionType) => {
		props.setArticleState({ ...props.articleState, fontColor: value });
	};
	const changeBackgroundColor = (value: OptionType) => {
		props.setArticleState({ ...props.articleState, backgroundColor: value });
	};
	const changeContentWidth = (value: OptionType) => {
		props.setArticleState({ ...props.articleState, contentWidth: value });
	};
	const changeFontSizeOption = (value: OptionType) => {
		props.setArticleState({ ...props.articleState, fontSizeOption: value });
	};
	const submit = (e: FormEvent) => {
		e.preventDefault();
		props.applyArticleStyle();
		setValue((value) => !value);
	};

	const formRef = useRef<HTMLFormElement | null>(null);
	const clickOverlay = (event: MouseEvent) => {
		const { target } = event;
		if (target instanceof Node && !formRef.current?.contains(target)) {
			setValue((value) => !value);
		}
	};

	window.addEventListener('mousedown', clickOverlay);

	return (
		<>
			<ArrowButton value={value} handleClick={handleClick} />
			<aside className={`${nameStyle} ${styles.container}`}>
				<form className={styles.form} onSubmit={submit} ref={formRef}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						selected={props.articleState.fontFamilyOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={changeFontFamily}
					/>
					<RadioGroup
						name='размер шрифта'
						selected={props.articleState.fontSizeOption}
						options={fontSizeOptions}
						title='размер шрифта'
						onChange={changeFontSizeOption}
					/>
					<Select
						selected={props.articleState.fontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={changeFontColor}
					/>
					<Separator />
					<Select
						selected={props.articleState.backgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={changeBackgroundColor}
					/>
					<Select
						selected={props.articleState.contentWidth}
						options={contentWidthArr}
						title='ширина контента'
						onChange={changeContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={props.resetArticleState}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
