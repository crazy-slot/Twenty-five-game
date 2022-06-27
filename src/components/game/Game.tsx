import type { FC } from 'react';
import Cell from '~components/cell';
import { usePlay } from '~components/game/services';
import Header from '~components/header';

const Game: FC = () => {
	const [{ grid, score }, play, reset, gameOver] = usePlay();

	return (
		<div className="bg-slate-800 rounded-lg p-8 font-medium text-white text-center">
			<Header reset={reset} gameOver={gameOver} score={score} />
			<div className="grid grid-cols-5 gap-4">
				{grid.map((cell, index) => (
					<Cell cell={cell} key={index} index={index} play={play} />
				))}
			</div>
		</div>
	);
};

export default Game;
