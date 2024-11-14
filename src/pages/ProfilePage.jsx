import { Footer } from '../components/Footer/Footer';
import { Modal } from '../components/Modal/Modal';
import { useState, useContext } from 'react';
import { Subscribe } from '../components/Profile/Subscribe';
import { FaUser } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
	const { user, updateUserImage } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	const handleSaveProfileImage = newImage => {
		updateUserImage(newImage);
		toggleModal();
	};

	const handleLogout = () => {
		navigate('/signIn');
	};

	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div className='absolute inset-0 h-[43%] bg-gradient-to-b from-zinc-600 to-zinc-800'></div>
			<div className='px-6 pt-28 pb-5'>
				<div className='z-10 relative flex items-center gap-5'>
					{user.imgSrc ? (
						<img
							src={user.imgSrc}
							alt='User'
							className='w-44 h-44 rounded-full object-cover'
						/>
					) : (
						<div className='w-44 h-44 rounded-full bg-zinc-800/80 flex justify-center items-center shadow-md shadow-black'>
							<FaUser size={70} className='text-zinc-500' />
						</div>
					)}
					<div>
						<p className='text-white text-sm font-semibold pl-1'>Профиль</p>
						<h1 className='text-white text-8xl font-bold py-4'>{user.name}</h1>
						{user.subscribe.length >= 1 ? (
							<span className='text-white text-sm font-semibold pl-1'>
								• {user.subscribe.length} подписка
							</span>
						) : null}
					</div>
				</div>
			</div>
			<div className='absolute top-[302px] inset-0 h-1/5 w-full bg-gradient-to-b from-neutral-800/80 to-transparent'></div>
			<div className='px-6 py-10 flex gap-4'>
				<button
					className='p-2 bg-white rounded-md cursor-pointer z-10 relative hover:scale-105'
					onClick={toggleModal}
				>
					Редактировать
				</button>
				<button
					className='p-2 bg-white rounded-md cursor-pointer z-10 relative hover:scale-105'
					onClick={handleLogout}
				>
					Выйти
				</button>
			</div>
			{isModalOpen && (
				<div className='fixed inset-0 bg-black opacity-50 z-20'></div>
			)}
			{isModalOpen && (
				<Modal onClose={toggleModal} onSave={handleSaveProfileImage} />
			)}
			<Subscribe />
			<Footer />
		</div>
	);
}
