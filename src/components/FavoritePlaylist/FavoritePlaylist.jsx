import { Footer } from '../Footer/Footer';
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6';
import { FavoriteTrackList } from './FavoriteTrackList';
import { user } from '../../data';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../components/FavoritePlaylist/FavoritesContext';

export function FavoritePlaylist() {
	const { favorites } = useFavorites();

	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div className='absolute inset-0 h-1/2 bg-gradient-to-b from-teal-600 to-transparent'></div>
			<div className='px-6 py-8'>
				<div className='z-10 relative flex items-center gap-5'>
					<div className='relative rounded-sm w-40 h-40 flex justify-center items-center bg-gradient-to-br from-blue-700 to-white'>
						<FaHeart color='white' size={40} />
					</div>
					<div className='flex flex-col'>
						<p className='text-white text-sm font-semibold pl-1'>Плейлист</p>
						<h1 className='text-white text-7xl font-extrabold py-6'>
							Любимые треки
						</h1>
						<div className='flex items-center gap-2'>
							<p className='text-white text-sm font-bold'>{user.name}</p>
							<p className='text-[#b3b3b3] text-sm font-medium'>
								{favorites.length} трека
							</p>
						</div>
					</div>
				</div>
				<div className='absolute top-56 inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent'></div>
				<div className='flex items-center mt-12 z-10 relative'>
					<FaCirclePause
						size={60}
						color='LimeGreen'
						className='cursor-pointer hover:scale-110'
					/>
				</div>
				<FavoriteTrackList />
			</div>
			<Footer />
		</div>
	);
}
