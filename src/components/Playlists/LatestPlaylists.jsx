import { FaCirclePlay } from 'react-icons/fa6';
import { user } from '../../data';
import { Link } from 'react-router-dom';

export function LatestPlaylists() {
	const latestItems = [
		...user.latest.playList,
		...user.latest.artistPlayList
	].slice(-8);

	return (
		<div className='grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-2 px-6 py-4'>
			{latestItems.map((item, index) => (
				<Link
					key={index}
					to={
						item.playlistId
							? `/playlistTracks/${item.playlistId}`
							: `/artistPlaylist/${item.artistId}`
					}
				>
					<div className='flex items-center w-[270px] h-12 relative group cursor-pointer rounded-md bg-white/20 hover:bg-white/25'>
						<img
							src={item.playlistImgSrc || item.artistPlaylistImg}
							alt='latest'
							className='h-full rounded-l-md'
						/>
						<p className='text-white pl-2 font-semibold text-sm'>
							{item.playlistTitle || item.artistName}
						</p>
						<FaCirclePlay
							size={35}
							color='LimeGreen'
							className='absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110'
						/>
					</div>
				</Link>
			))}
		</div>
	);
}
