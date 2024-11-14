import { Link } from 'react-router-dom';
import { usePlaylist } from '../../context/PlaylistContext';
import { FaPlay } from 'react-icons/fa';

export function SidebarPlayList() {
	const { playList } = usePlaylist();

	return (
		<>
			{playList.map(item => (
				<Link to={`/playListTracks/${item.playlistId}`} key={item.playlistId}>
					<div className='flex p-2 cursor-pointer rounded-sm hover:bg-[#1f1f1f] group'>
						<div className='relative w-[14%] flex justify-center items-center'>
							<img
								src={item.playlistImgSrc}
								alt='sidebarPlayListImg'
								className='rounded-sm'
							/>
							<FaPlay
								color='white'
								className='absolute opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200'
							/>
							<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-sm'></div>
						</div>
						<div className='pl-3'>
							<h3 className='font-medium text-white'>{item.playlistTitle}</h3>
							<div className='flex items-center'>
								<span className='text-sm text-[#b3b3b3] font-medium '>
									Плейлист
								</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	);
}
