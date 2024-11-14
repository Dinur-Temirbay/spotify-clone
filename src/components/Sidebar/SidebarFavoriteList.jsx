import { FaHeart } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import { TbPinnedFilled } from 'react-icons/tb';

export function SidebarFavoriteList() {
	const { favorites } = useFavorites();

	return (
		<>
			<Link to={`/favoritePlaylist`}>
				<div className='flex mt-4 p-2 cursor-pointer rounded-sm hover:bg-[#1f1f1f] group'>
					<div className='relative rounded-sm w-[14%] h-12 flex justify-center items-center bg-gradient-to-br from-blue-700 to-white'>
						<FaHeart color='white' />
						<FaPlay
							color='white'
							className='absolute opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200'
						/>
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-sm'></div>
					</div>
					<div className='pl-3'>
						<h3 className='font-medium text-white'>Любимые треки</h3>
						<div className='flex items-center'>
							<TbPinnedFilled size={20} color='green' />
							<span className='text-sm text-[#b3b3b3] font-medium pl-1'>
								Плейлист {favorites.length} треков
							</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
