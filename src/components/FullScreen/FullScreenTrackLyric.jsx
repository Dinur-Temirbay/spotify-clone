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
import { playlists } from '../../data';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrackLyric } from '../TrackLyric/TrackLyric';

export function FullScreenTrackLyric() {
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

	const handleMouseMove = () => {
		clearTimeout(inactivityTimer);
		setIsPlayerVisible(true);
		setIsAnimated(true);

		inactivityTimer = setTimeout(() => {
			setIsPlayerVisible(false);
		}, 3000);
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
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
		<div className='h-screen w-full bg-blue-500'>
			<div className='flex flex-col w-full pt-14 px-24'>
				<div className='flex items-center gap-5 transition-transform duration-500'>
					<img
						src={playlists[0].track[0].imgSrc}
						alt='playerImgFull'
						className={`h-20 w-20 transition-transform duration-1000 ease-in-out ${
							isAnimated ? 'translate-y-0' : '-translate-y-36'
						}`}
					/>
					<div
						className={`transition-transform duration-1000 ease-in-out ${
							isAnimated ? 'translate-y-0' : '-translate-y-32'
						}`}
					>
						<p className='text-white text-sm font-medium'>
							{playlists[0].track[0].title}
						</p>
						<p className='text-[#b3b3b3] text-sm font-semibold pt-2'>
							{playlists[0].track[0].artist}
						</p>
					</div>
				</div>
				<div className='flex justify-center h-[640px] overflow-hidden px-4'>
					<div
						className={`transition-transform duration-1000 ease-in-out${
							isAnimated ? 'translate-y-0' : 'translate-y-[600px]'
						}`}
					>
						<TrackLyric />
					</div>
				</div>

				<div
					className={`fixed bottom-20 px-24 left-0 flex flex-col w-full transition-opacity duration-300 ${
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
							<CiCirclePlus
								size={25}
								className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
							/>
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
