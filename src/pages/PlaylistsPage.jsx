import { MusicCategoryList } from '../components/Playlists/MusicCategoryList';
import { LatestPlaylists } from '../components/Playlists/LatestPlaylists';
import { ArtistCategoryList } from '../components/Playlists/ArtistCategoryList';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function PlaylistsPage() {
	const { user } = useContext(UserContext);

	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div className='absolute inset-0 h-1/2 bg-gradient-to-b from-teal-600 to-transparent'></div>
			<div className='p-6 flex items-center justify-between relative z-10'>
				<h1 className='text-white text-3xl font-semibold'>С возвращением!</h1>
				<div className='bg-white/10 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-105'>
					<Link to='/profile' className='flex items-center gap-2'>
						{user.imgSrc ? (
							<img
								src={user.imgSrc}
								alt='User'
								className='rounded-full w-9 h-9 cursor-pointer hover:scale-110'
							/>
						) : (
							<div className='flex items-center justify-center w-9 h-9 rounded-full bg-orange-500'>
								<span className='text-white font-semibold text-base'>
									{user.name.charAt(0).toUpperCase()}
								</span>
							</div>
						)}
					</Link>
				</div>
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
