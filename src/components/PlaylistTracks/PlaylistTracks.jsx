import { Footer } from '../Footer/Footer';
import { PlaylistTrackList } from './PlaylistTrackList';
import { playlists } from '../../data';
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { useParams } from 'react-router-dom';

export function PlaylistTracks() {
	const { playlistId } = useParams();
	const playlist = playlists.find(p => p.playlistId === parseInt(playlistId));

	if (!playlist) {
		return <div className='text-white'>Playlist not found</div>;
	}

	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div className='absolute inset-0 h-1/2 bg-gradient-to-b from-teal-600 to-transparent'></div>
			<div className='px-6 py-8'>
				<div className='z-10 relative flex items-center gap-5'>
					<img
						src={playlist.playlistImgSrc}
						alt='PlaylistTrack'
						width={180}
						className='rounded-md'
					/>
					<div className='flex flex-col'>
						<p className='text-white text-sm font-semibold pl-1'>Плейлист</p>
						<h1 className='text-white text-6xl font-extrabold'>
							{playlist.playlistTitle}
						</h1>
						<p className='text-white mt-5 ml-2'>
							<a href='#' className='cursor-pointer hover:underline'>
								{playlist.playListDescription.join(', ')}
							</a>
						</p>
						<div className='flex items-center gap-2 mt-3 ml-2'>
							<img src='/public/Logo.png' alt='PlayListTracksLogo' width={20} />
							{/* Тута динамика */}
							<p className='text-white text-sm font-bold'>Spotify</p>
							<p className='text-[#b3b3b3] text-sm font-medium'>
								{playlist.track.length} треков, примерно 2 ч. 30 мин.
							</p>
						</div>
					</div>
				</div>
				<div className='absolute top-60 inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent'></div>
				<div className='flex items-center gap-6 mt-10 z-10 relative'>
					<FaCirclePause
						size={60}
						color='LimeGreen'
						className='cursor-pointer hover:scale-110'
					/>
					<CiCirclePlus
						size={35}
						className='cursor-pointer text-[#b3b3b3] hover:text-white hover:scale-110'
					/>
				</div>
				<PlaylistTrackList />
			</div>
			<Footer />
		</div>
	);
}
