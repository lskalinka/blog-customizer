import React, { useEffect } from 'react';

type UseOptionForm = {
	clickOverlay: (event: MouseEvent) => void;
	formRef: React.MutableRefObject<HTMLFormElement | null>;
};

export const useClickOverlayForm = ({
	clickOverlay,
	formRef,
}: UseOptionForm) => {
	useEffect(() => {
		if (formRef.current) return;

		window.addEventListener('mousedown', clickOverlay);

		return () => {
			window.removeEventListener('mousedown', clickOverlay);
		};
	}, [clickOverlay, formRef]);
};
