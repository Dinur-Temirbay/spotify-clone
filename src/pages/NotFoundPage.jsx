import { Link } from 'react-router-dom';

export function NotFoundPage() {
	return (
		<div className='h-screen w-full flex justify-center items-center bg-gray-800'>
			<div className='flex w-1/2 h-1/2 items-center'>
				<img
					src='/public/notFoundPageImg.png'
					alt='notFoundPageImg'
					className='rounded-full w-1/2'
				/>
				<div className='pl-5'>
					<h1 className='text-white text-2xl'>
						Ой! Похоже, вы сбились с пути. Похоже, страница, которую вы ищете,
						не существует. Давайте направим вас в то место, которое легче найти!
					</h1>
					<Link to='/'>
						<button className='text-white p-2 rounded-md bg-green-500 mt-5 transition duration-300 transform hover:scale-105 hover:bg-green-400'>
							Вернуться на главную
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
