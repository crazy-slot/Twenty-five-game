import { useEffect, useState } from 'react';
import type { FC } from 'react';

interface IHeaderProps {
	gameOver: () => void;
	reset: () => void;
	score: number;
}

const Header: FC<IHeaderProps> = ({ score, reset, gameOver }) => {
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

	return (
		<div className="flex justify-between items-center pb-4 text-gray-50">
			<div>{score} Points</div>
			<div>{timer} seconds</div>
			<button
				className={`border-2 rounded-md p-3  ${timer > 0 ? 'bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
				disabled={timer > 0}
				onClick={() => {
					reset();
					setTimer(25);
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default Header;
