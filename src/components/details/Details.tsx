import type { FC } from 'react';

interface IDetailsProps {
	start: () => void;
}

const Details: FC<IDetailsProps> = ({ start }) => (
	<div>
		<p className="p-14">
			In this game , we have a table of numbers less than 25 , <br /> the player must select cells whose sum is 25 in a
			precise duration.
		</p>
		<button className="border-2 rounded-md p-3 bg-amber-500 w-72 hover:bg-indigo-500" onClick={start}>
			Start
		</button>
	</div>
);

export default Details;
