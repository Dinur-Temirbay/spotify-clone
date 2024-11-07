import { IoMdHome, IoIosSearch } from 'react-icons/io';
import { TbPlaylist, TbPinnedFilled } from 'react-icons/tb';
import { GoPlus } from 'react-icons/go';
import { FaHeart } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Sidebar() {
	return (
		<div className='h-screen p-2'>
			<div className='py-2 px-4 bg-[#121212] rounded-md flex flex-col gap-4'>
				<Link to='/'>
					<div className='flex items-center'>
						<IoMdHome size={30} color='white' />
						<p className='text-[#b3b3b3] hover:text-white cursor-pointer pl-2'>
							Главная
						</p>
					</div>
				</Link>
				<div className='flex items-center'>
					<IoIosSearch size={30} color='white' className='absolute' />
					<input
						type='text'
						placeholder='Поиск'
						className='w-full py-2 pl-10 text-white rounded-md bg-[#121212] cursor-pointer'
					/>
				</div>
			</div>
			<div className='py-4 px-2 bg-[#121212] mt-2 rounded-md h-full'>
				<div className='flex items-center justify-between px-2'>
					<TbPlaylist size={30} color='white' />
					<h2 className='text-[#b3b3b3] hover:text-white cursor-pointer relative right-16'>
						Ваша медиатека
					</h2>
					<div className='rounded-full hover:bg-white/5'>
						<GoPlus
							size={25}
							className='cursor-pointer text-[#b3b3b3] hover:text-white'
						/>
					</div>
				</div>
				<div className='flex mt-4 p-2 cursor-pointer rounded-sm hover:bg-[#1f1f1f] group'>
					<div className='relative rounded-sm w-[14%] flex justify-center items-center bg-gradient-to-br from-blue-700 to-white'>
						<FaHeart color='white' />
						<FaPlay
							color='white'
							className='absolute opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200'
						/>
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-sm'></div>
					</div>
					<Link to={`/playlistTracks/`}>
						<div className='pl-3'>
							<h3 className='font-medium text-white'>Любимые треки</h3>
							<div className='flex items-center'>
								<TbPinnedFilled size={20} color='green' />
								<span className='text-sm text-[#b3b3b3] font-medium pl-1'>
									Плейлист {4} треков
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
