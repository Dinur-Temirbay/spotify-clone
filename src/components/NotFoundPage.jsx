import { Link } from 'react-router-dom';

export function NotFoundPage() {
	return (
		<div className='h-screen w-full flex justify-center items-center bg-gray-800'>
			<div className='flex flex-col items-center'>
				<h1 className='text-white text-4xl animate-bounce transition-transform transform hover:scale-110'>
					Страница не найдена
				</h1>
				<Link to='/'>
					<button className='border-2 text-white p-2 rounded-md bg-green-500 mt-5 transition duration-300 transform hover:scale-105 hover:bg-green-400'>
						Назад
					</button>
				</Link>
			</div>
		</div>
	);
}
