import type { FC } from 'react';

interface IModalProps {
	score: number;
	handleClickReset: () => void;
}

const Modal: FC<IModalProps> = ({ score, handleClickReset }) => (
	<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-full p-4 text-center">
				<div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-lg w-full">
					<div className="bg-white px-4 pt-5 pb-4">
						<h1 className="justify-center items-center text-black font-extrabold pb-4">
							Your score is: {score} points
						</h1>
						<div className="justify-center items-center">
							<button
								className="border-2 rounded-md p-3 w-36 bg-indigo-600 hover:bg-indigo-700"
								onClick={handleClickReset}
							>
								Play again
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Modal;
