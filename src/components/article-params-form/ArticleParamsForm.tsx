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
import clsx from 'clsx';
import { useClose } from './hooks/useClose';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: Dispatch<SetStateAction<ArticleStateType>>;
	resetArticleState: () => void;
	applyArticleStyle: () => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleClick = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
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
		setIsMenuOpen((value) => !value);
	};

	const menuRef = useRef<HTMLDivElement | null>(null);

	useClose({
		isOpen: isMenuOpen,
		onClose: handleClick,
		rootRef: menuRef,
	});

	return (
		<div ref={menuRef}>
			<ArrowButton value={isMenuOpen} handleClick={handleClick} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={submit}>
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
		</div>
	);
};
