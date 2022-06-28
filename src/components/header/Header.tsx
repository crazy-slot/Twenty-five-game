import dynamic from 'next/dynamic';
import type { FC } from 'react';
import { useTimer } from '~components/header/services';
import type { IHeaderProps } from '~components/header/types';

const Modal = dynamic(async () => import('~components/modal'));

const Header: FC<IHeaderProps> = ({ score, reset, gameOver }) => {
	const [timer, setTimer] = useTimer({ score, reset, gameOver });

	const handleClickReset = () => {
		reset();
		setTimer(25);
	};

	const isGameOver = timer === 0;

	return (
		<>
			{isGameOver && <Modal handleClickReset={handleClickReset} score={score} />}
			<div className="flex justify-between items-center pb-4 text-gray-50">
				<div className="border-2 rounded-md p-3 bg-amber-500 w-36">{score} Points</div>
				<div>{timer} Seconds</div>
			</div>
		</>
	);
};

export default Header;
