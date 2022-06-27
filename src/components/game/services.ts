import { useEffect, useState } from 'react';
import type { ICell, IGame, PlayHookType } from '~components/game/types';

export const getInitialGrid = (): ICell[] => {
	const cells: ICell[] = [];

	for (let index = 0; index < 25; index++) {
		cells.push({ value: Math.ceil(Math.random() * 8), isSelected: false });
	}

	return cells;
};

const initialGame = { grid: [], sum: 0, score: 0, isGameOver: false };

const updateGame = (game: IGame, index: number) => {
	const newGame = { ...game };
	const cell = newGame.grid[index];
	cell.isSelected = !cell.isSelected;
	if (cell.isSelected) {
		newGame.sum += cell.value;
	} else {
		newGame.sum -= cell.value;
	}
	if (newGame.sum === 25) {
		newGame.score += 25;
		newGame.sum = 0;
		newGame.grid = getInitialGrid();
	}
	return newGame;
};

export const usePlay = (): PlayHookType => {
	const [game, setGame] = useState<IGame>(initialGame);

	const reset = () => {
		const grid = getInitialGrid();
		setGame({ ...initialGame, grid });
	};

	useEffect(() => {
		reset();
	}, []);

	const gameOver = () => {
		setGame({ ...game, isGameOver: true });
	};

	const play = (index: number) => {
		if (!game.isGameOver) {
			const newGame = updateGame(game, index);
			setGame(newGame);
		}
	};

	return [game, play, reset, gameOver];
};
