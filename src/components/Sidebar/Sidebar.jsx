import { IoMdHome, IoIosSearch } from 'react-icons/io';
import { TbPlaylist } from 'react-icons/tb';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { SidebarArtistList } from './SidebarArtistList';
import { SidebarFavoriteList } from './SidebarFavoriteList';
import { SidebarPlayList } from './SidebarPlayList';

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

				<div>
					<SidebarFavoriteList />
					<SidebarPlayList />
					<SidebarArtistList />
				</div>
			</div>
		</div>
	);
}
