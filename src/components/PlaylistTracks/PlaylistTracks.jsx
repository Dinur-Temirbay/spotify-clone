import { Footer } from '../Footer/Footer';
import { PlaylistTrackList } from './PlaylistTrackList';
import { playlists } from '../../data';
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { useCurrentTrack } from '../../context/CurrentTrackContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function PlaylistTracks() {
	const [isPlaying, setIsPlaying] = useState(false);
	const { playlistId } = useParams();
	const { artistId } = useParams();
	const { setCurrentTrack } = useCurrentTrack();
	const playlist = playlists.find(p => p.playlistId === parseInt(playlistId));

	if (!playlist) {
		return <div className='text-white'>Playlist not found</div>;
	}

	const handlePlayPause = () => {
		if (!isPlaying && playlist.track.length > 0) {
			setCurrentTrack(playlist.track[0]);
			setIsPlaying(!isPlaying);
		}
	};

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
							{playlist.playListDescription.map((item, index) => (
								<span key={index}>
									<Link
										to={
											item.artistId ? `/artistPlaylist/${item.artistId}` : '#'
										}
										className='cursor-pointer hover:underline'
									>
										{item.artist}
									</Link>
									{index < playlist.playListDescription.length - 1 && ', '}
								</span>
							))}
						</p>
						<div className='flex items-center gap-2 mt-3 ml-2'>
							<img src='/public/Logo.png' alt='PlayListTracksLogo' width={20} />
							<p className='text-white text-sm font-bold'>Spotify</p>
							<p className='text-[#b3b3b3] text-sm font-semibold'>
								• {playlist.track.length} треков, примерно 2 ч. 30 мин.
							</p>
						</div>
					</div>
				</div>
				<div className='absolute top-60 inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent'></div>
				<div className='flex items-center gap-6 mt-10 z-10 relative'>
					{isPlaying ? (
						<FaCirclePause
							size={60}
							color='LimeGreen'
							className='cursor-pointer hover:scale-110'
							onClick={handlePlayPause}
						/>
					) : (
						<FaCirclePlay
							size={60}
							color='LimeGreen'
							className='cursor-pointer hover:scale-110'
							onClick={handlePlayPause}
						/>
					)}
					<CiCirclePlus size={35} className='text-white cursor-pointer' />
				</div>
				<PlaylistTrackList />
			</div>
			<Footer />
		</div>
	);
}
