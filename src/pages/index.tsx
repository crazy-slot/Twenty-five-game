import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Game = dynamic(async () => import('~components/game'));
const Details = dynamic(async () => import('~components/details'));

const Home: NextPage = () => {
	const [isStartedGame, setIsStartedGame] = useState(false);

	const start = () => {
		setIsStartedGame(true);
	};

	return (
		<div className="bg-slate-800 rounded-lg p-8 font-medium text-white text-center">
			{isStartedGame ? <Game /> : <Details start={start} />}
		</div>
	);
};

export default Home;
