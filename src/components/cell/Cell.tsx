import type { FC } from 'react';
import type { ICell } from '~components/game/types';

interface ICellProps {
	cell: ICell;
	index: number;
	play: (index: number) => void;
}

const Cell: FC<ICellProps> = ({ cell, index, play }) => (
	<div
		className={`p-8 rounded-md border-2 w-24 h-24 text-center text-gray-50 cursor-pointer select-none ${
			cell.isSelected ? 'bg-amber-500' : 'bg-indigo-500'
		}`}
		onClick={() => {
			play(index);
		}}
	>
		{cell.value}
	</div>
);

export default Cell;
