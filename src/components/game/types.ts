export interface ICell {
	value: number;
	isSelected: boolean;
}

export interface IGame {
	score: number;
	sum: number;
	grid: ICell[];
	isGameOver: boolean;
}

export type PlayHookType = [IGame, (index: number) => void, () => void, () => void];
