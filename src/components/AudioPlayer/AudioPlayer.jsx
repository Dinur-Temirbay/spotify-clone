import { IoShuffle, IoPauseCircle } from 'react-icons/io5';
import {
	TbPlayerSkipBackFilled,
	TbPlayerSkipForwardFilled,
	TbMicrophone2
} from 'react-icons/tb';
import { FaPlayCircle } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { ImVolumeMute2 } from 'react-icons/im';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import { CgPlayButtonR } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useCurrentTrack } from '../../context/CurrentTrackContext';
import { useFavorites } from '../../context/FavoritesContext';

export function AudioPlayer({ musicDetails, setMusicDetails }) {
	const { currentTrack } = useCurrentTrack();
	const { addFavorite, favorites } = useFavorites();

	const handleFullScreenClick = () => {
		if (currentTrack) {
			document.documentElement.requestFullscreen();
		}
	};

	const toggleLyrics = () => {
		setMusicDetails(prev => ({
			...prev,
			isLyricVisible: !prev.isLyricVisible
		}));
	};

	const toggleMusicInfo = () => {
		setMusicDetails(prev => ({
			...prev,
			isMusicInfoVisible: !prev.isMusicInfoVisible
		}));
	};

	const handleAddToFavorite = currentTrack => {
		if (currentTrack) {
			addFavorite(currentTrack);
		}
	};

	return (
		<>
			{currentTrack ? (
				<div className='bg-black fixed bottom-0 w-full h-[90px] py-2 px-4 flex justify-between items-center'>
					{/* Left Section */}
					<div className='flex items-center gap-4 w-1/3'>
						<img
							src={currentTrack.imgSrc}
							alt='playerImg'
							className='h-14 w-14 rounded-md'
						/>
						<div>
							<p className='text-white text-sm font-medium'>
								<a href='#' className='cursor-pointer hover:underline'>
									{currentTrack.title}
								</a>
							</p>
							<p className='text-[#b3b3b3] text-xs'>
								<a href='#' className='cursor-pointer hover:underline'>
									{currentTrack.artist}
								</a>
							</p>
						</div>
						{favorites.some(fav => fav.title === currentTrack.title) ? (
							<FaCheckCircle size={20} className='text-green-500' />
						) : (
							<CiCirclePlus
								size={20}
								className='hover:scale-105 text-white cursor-pointer'
								onClick={() => handleAddToFavorite(currentTrack)}
							/>
						)}
					</div>

					{/* Center Section */}
					<div className='flex flex-col w-1/3'>
						<div className='flex justify-center items-center gap-6'>
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
								size={30}
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
						<div className='w-full mt-3 flex items-center gap-2'>
							<p className='text-[#b3b3b3] text-xs'>0:00</p>
							<div className='flex-1 h-1 bg-[#4b5563] rounded-full'>
								<div className='h-1 bg-white hover:bg-green-500 w-1/2 rounded-full'></div>
							</div>
							<p className='text-[#b3b3b3] text-xs'>{currentTrack.duration}</p>
						</div>
					</div>

					{/* Right Section */}
					<div className='flex justify-end items-center gap-4 w-1/3'>
						<CgPlayButtonR
							size={20}
							className={`${
								musicDetails.isMusicInfoVisible
									? 'cursor-pointer text-teal-500 hover:text-teal hover:scale-110'
									: 'cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							}`}
							onClick={toggleMusicInfo}
						/>
						<TbMicrophone2
							size={20}
							className={`${
								musicDetails.isLyricVisible
									? 'cursor-pointer text-teal-500 hover:text-teal hover:scale-110'
									: 'cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							}`}
							onClick={toggleLyrics}
						/>
						<ImVolumeMute2
							size={20}
							className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
						/>
						<div className='h-1 bg-[#4b5563] rounded-full'>
							<div className='h-1 bg-white hover:bg-green-500 w-24 rounded-full'></div>
						</div>
						<Link to={currentTrack ? '/fullscreen' : '#'}>
							<AiOutlineFullscreen
								size={20}
								className={`${
									currentTrack
										? 'cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
										: 'text-[#4b5563] cursor-default'
								}`}
								onClick={handleFullScreenClick}
							/>
						</Link>
					</div>
				</div>
			) : (
				<div className='fixed bottom-0 w-full h-[90px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 transition-transform'>
					{Array(5)
						.fill('Выберите трек')
						.map((text, index) => (
							<p
								key={index}
								className='text-white text-xl animate-slide-in w-full'
							>
								{text}
							</p>
						))}
				</div>
			)}
		</>
	);
}
