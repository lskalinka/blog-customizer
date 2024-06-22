import React, { useEffect } from 'react';

type UseOptionForm = {
	clickOverlay: (event: MouseEvent) => void;
	formRef: React.MutableRefObject<HTMLFormElement | null>;
	isMenuOpen: boolean;
};

export const useClickOverlayForm = ({
	clickOverlay,
	formRef,
	isMenuOpen,
}: UseOptionForm) => {
	useEffect(() => {
		if (!isMenuOpen) return;

		window.addEventListener('mousedown', clickOverlay);

		return () => {
			window.removeEventListener('mousedown', clickOverlay);
		};
	}, [clickOverlay, formRef, isMenuOpen]);
};
