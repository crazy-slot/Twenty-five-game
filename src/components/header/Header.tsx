import type { FC } from 'react';
import { useTimer } from '~components/header/services';
import type { IHeaderProps } from '~components/header/types';

const Header: FC<IHeaderProps> = ({ score, reset, gameOver }) => {
	const [timer, setTimer] = useTimer({ score, reset, gameOver });

	const handleClickReset = () => {
		reset();
		setTimer(25);
	};

	const isInProgress = timer > 0;

	return (
		<div className="flex justify-between items-center pb-4 text-gray-50">
			<div className="border-2 rounded-md p-3 bg-amber-500 w-24">{score} Points</div>
			<div>{timer} Seconds</div>
			<button
				className={`border-2 rounded-md p-3 w-24 ${isInProgress ? 'bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
				disabled={isInProgress}
				onClick={handleClickReset}
			>
				Reset
			</button>
		</div>
	);
};

export default Header;
