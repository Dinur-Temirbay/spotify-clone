import { IoShuffle, IoPauseCircle } from 'react-icons/io5';
import {
	TbPlayerSkipBackFilled,
	TbPlayerSkipForwardFilled,
	TbMicrophone2
} from 'react-icons/tb';
import { FaPlayCircle } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import {
	ImVolumeMute2,
	ImVolumeMute,
	ImVolumeLow,
	ImVolumeMedium
} from 'react-icons/im';

import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentTrack } from '../context/CurrentTrackContext';
import { useFavorites } from '../context/FavoritesContext';
import { FaCheckCircle } from 'react-icons/fa';

export function FullScreen() {
	const { currentTrack } = useCurrentTrack();
	const { addFavorite, favorites } = useFavorites();
	const navigate = useNavigate();
	const [isPlayerVisible, setIsPlayerVisible] = useState(true);
	const [isAnimated, setIsAnimated] = useState(false);
	let inactivityTimer;

	const handleExitFullScreenClick = () => {
		navigate('/');
		if (document.fullscreenElement) {
			document.exitFullscreen();
		}
	};

	const handleAddToFavorite = currentTrack => {
		if (currentTrack) {
			addFavorite(currentTrack);
		}
	};

	// Функция для сброса таймера при движении мыши
	const handleMouseMove = () => {
		clearTimeout(inactivityTimer);
		setIsPlayerVisible(true);
		setIsAnimated(true); // поднимает изображение

		inactivityTimer = setTimeout(() => {
			setIsPlayerVisible(false);
		}, 3000); // скрытие через 3 секунды бездействия
	};

	// Установка обработчика движения мыши
	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		// Автоматический подъем изображения через 1 секунду после загрузки
		const initialTimer = setTimeout(() => {
			setIsAnimated(true);
		}, 1000);

		return () => {
			clearTimeout(inactivityTimer);
			clearTimeout(initialTimer);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			className='h-screen w-full bg-gradient-to-b from-transparent '
			style={{
				backgroundImage: `url(${currentTrack.artistImg})`,
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<div className='absolute inset-0 bg-black h-full opacity-70'></div>
			<div className='flex flex-col w-full py-14 px-24'>
				<div className='flex items-start'>
					<img src='/public/Logo.png' alt='trackLogo' />
					<div className='pl-4'>
						<h3 className='text-white'>PLAYING FROM ARTIST</h3>
						<p className='text-white font-semibold text-lg'>
							{currentTrack.artist}
						</p>
					</div>
				</div>
				<div className='flex items-end gap-10 mt-24 transition-transform duration-500'>
					<img
						src={currentTrack.imgSrc}
						alt='playerImgFull'
						className={`h-96 w-96 rounded-lg transition-transform duration-1000 ease-in-out ${
							isAnimated && currentTrack.artistImg
								? 'scale-50 && -translate-x-24 && translate-y-36'
								: '-translate-x-0'
						}`}
					/>
					<div
						className={`transition-transform duration-1000 ease-in-out ${
							isAnimated && currentTrack.artistImg
								? '-translate-x-52 && translate-y-14'
								: 'translate-y-0'
						}`}
					>
						<p className='text-white text-4xl font-medium'>
							{currentTrack.title}
						</p>
						<p className='text-[#b3b3b3] text-lg font-semibold pt-5'>
							{currentTrack.artist}
						</p>
					</div>
				</div>
				<div
					className={`fixed bottom-20 px-24 left-0 flex flex-col w-full mt-20 transition-opacity duration-300 ${
						isPlayerVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div className='w-full flex items-center gap-2'>
						<p className='text-[#b3b3b3] text-xs'>0:00</p>
						<div className='flex-1 h-1 bg-[#4b5563] rounded-full'>
							<div className='h-1 bg-white hover:bg-green-500 w-1/2 rounded-full'></div>
						</div>
						<p className='text-[#b3b3b3] text-xs'>3:24</p>
					</div>
					<div className='flex justify-between items-center gap-6 mt-10'>
						<div className='w-1/3'>
							{favorites.some(fav => fav.title === currentTrack.title) ? (
								<FaCheckCircle size={25} className='text-green-500' />
							) : (
								<CiCirclePlus
									size={25}
									className='hover:scale-105 text-white cursor-pointer'
									onClick={() => handleAddToFavorite(currentTrack)}
								/>
							)}
						</div>
						<div className='flex justify-center items-center gap-6 w-1/3'>
							<IoShuffle
								size={20}
								className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							/>
							<TbPlayerSkipBackFilled
								size={20}
								className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							/>
							<FaPlayCircle
								color='white'
								size={55}
								className='cursor-pointer hover:scale-110'
							/>
							<TbPlayerSkipForwardFilled
								size={20}
								className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							/>
							<FaRepeat
								size={15}
								className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							/>
						</div>
						<div className='flex justify-end items-center gap-4 w-1/3'>
							<div className='pr-4'>
								<Link to='/fullScreenTrackLyric'>
									<TbMicrophone2
										size={25}
										className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110 '
									/>
								</Link>
							</div>
							<ImVolumeMute2
								size={25}
								className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							/>
							<div className='h-1 bg-[#4b5563] rounded-full'>
								<div className='h-1 bg-white hover:bg-green-500 w-24 rounded-full'></div>
							</div>
							<Link to='/'>
								<AiOutlineFullscreenExit
									size={25}
									className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
									onClick={handleExitFullScreenClick}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
