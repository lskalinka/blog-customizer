import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

type ArrowButtonProps = {
	value: boolean;
	handleClick?: () => void;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	const nameStyleForm = props.value === false ? null : styles.container_open;
	const nameStyleArrow = props.value === false ? null : styles.arrow_open;
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={props.handleClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${nameStyleForm} ${styles.container}`}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${nameStyleArrow} ${styles.arrow}`}
			/>
		</div>
	);
};
