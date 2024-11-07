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
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCurrentTrack } from './CurrentTrackContext';

export function AudioPlayer() {
	const [isLyricVisible, setIsLyricVisible] = useState(false);
	const { currentTrack } = useCurrentTrack();

	const handleFullScreenClick = () => {
		document.documentElement.requestFullscreen();
	};

	const toggleLyrics = () => {
		setIsLyricVisible(prev => !prev);
	};

	return (
		<div className='bg-black fixed bottom-0 w-full h-[90px] py-2 px-4 flex justify-between items-center'>
			<div className='flex items-center gap-4 w-1/3'>
				{currentTrack ? (
					<>
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
						<CiCirclePlus
							size={20}
							className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
						/>
					</>
				) : (
					<p className='text-[#b3b3b3]'>Выберите трек</p>
				)}
			</div>

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
					<p className='text-[#b3b3b3] text-xs'>Конец</p>
				</div>
			</div>

			<div className='flex justify-end items-center gap-4 w-1/3'>
				<Link to='/trackLyric'>
					<TbMicrophone2
						size={20}
						className={`${
							isLyricVisible
								? 'text-teal-500'
								: 'cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
						}`}
						onClick={toggleLyrics}
					/>
				</Link>
				<ImVolumeMute2
					size={20}
					className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
				/>
				<div className='h-1 bg-[#4b5563] rounded-full'>
					<div className='h-1 bg-white hover:bg-green-500 w-24 rounded-full'></div>
				</div>
				<Link to='/fullscreen'>
					<AiOutlineFullscreen
						size={20}
						className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
						onClick={handleFullScreenClick}
					/>
				</Link>
			</div>
		</div>
	);
}