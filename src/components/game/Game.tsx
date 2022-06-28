import type { FC } from 'react';
import Cell from '~components/cell';
import { usePlay } from '~components/game/services';
import Header from '~components/header';

const Game: FC = () => {
	const [{ grid, score }, play, reset, gameOver] = usePlay();

	return (
		<>
			<Header reset={reset} gameOver={gameOver} score={score} />
			<div className="grid grid-cols-5 gap-4">
				{grid.map((cell, index) => (
					<Cell cell={cell} key={index} index={index} play={play} />
				))}
			</div>
		</>
	);
};

export default Game;
