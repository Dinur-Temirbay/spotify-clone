import { FaUserCircle } from 'react-icons/fa';
import { Footer } from '../components/Footer/Footer';
import { user } from '../data';

export function ProfilePage() {
	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div className='absolute inset-0 h-1/2 bg-gradient-to-b from-gray-600 to-transparent'></div>
			<div className='px-6 pt-32'>
				<div className='z-10 relative flex items-center gap-5'>
					{user.imgSrc ? (
						<img src={user.imgSrc} alt='User' />
					) : (
						<FaUserCircle size={200} className='text-gray-400' />
					)}
					<div>
						<p className='text-white text-sm font-semibold pl-1'>Профиль</p>
						<h1 className='text-white text-8xl font-bold'>{user.name}</h1>
					</div>
				</div>
			</div>
			<div className='absolute top-[350px] inset-0 h-1/5 w-full bg-gradient-to-b from-white/5 to-transparent'></div>
			<div className='px-6 pt-16 flex gap-4'>
				<button className='p-2 bg-white rounded-md cursor-pointer z-10 relative hover:scale-105'>
					Редактировать
				</button>
				<button className='p-2 bg-white rounded-md cursor-pointer z-10 relative hover:scale-105'>
					Выйти
				</button>
			</div>
			<Footer />
		</div>
	);
}
