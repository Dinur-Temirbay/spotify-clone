import { FaUserCircle } from 'react-icons/fa';
import { MusicCategoryList } from '../components/Playlists/MusicCategoryList';
import { LatestPlaylists } from '../components/Playlists/LatestPlaylists';
import { ArtistCategoryList } from '../components/Playlists/ArtistCategoryList';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

export function PlaylistsPage() {
	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div className='absolute inset-0 h-1/2 bg-gradient-to-b from-teal-600 to-transparent'></div>
			<div className='p-6 flex items-center justify-between relative z-10'>
				<h1 className='text-white text-3xl font-semibold'>С возвращением!</h1>
				<Link to='/profile'>
					<FaUserCircle
						size={35}
						className='cursor-pointer text-white hover:scale-110'
					/>
				</Link>
			</div>
			<div className='relative z-10'>
				<LatestPlaylists />
				<MusicCategoryList />
				<ArtistCategoryList />
				<Footer />
			</div>
		</div>
	);
}
