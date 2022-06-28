import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { IHeaderProps } from '~components/header/types';

export const useTimer = ({ score, reset, gameOver }: IHeaderProps): [number, Dispatch<SetStateAction<number>>] => {
	const [timer, setTimer] = useState(25);

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer(timer - 1);
			}, 1000);
			const clearTimer = () => {
				clearInterval(interval);
			};
			return clearTimer;
		}
		gameOver();
		return reset;
	}, [gameOver, reset, timer]);

	useEffect(() => {
		if (score > 0) {
			setTimer(timer + 5);
		}
	}, [score]);

	return [timer, setTimer];
};
