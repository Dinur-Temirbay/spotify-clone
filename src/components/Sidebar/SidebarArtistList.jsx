import { useSubscribe } from '../../context/SubscribeContext';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

export function SidebarArtistList() {
	const { subscribe } = useSubscribe();

	return (
		<>
			{subscribe.map(item => (
				<Link to={`/artistPlaylist/${item.artistId}`} key={item.artistId}>
					<div className='flex p-2 cursor-pointer rounded-sm hover:bg-[#1f1f1f] group'>
						<div className='relative w-[14%] flex justify-center items-center'>
							<img
								src={item.artistPlaylistImg}
								alt='sidebarArtistImg'
								className='rounded-sm'
							/>
							<FaPlay
								color='white'
								className='absolute opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200'
							/>
							<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-sm'></div>
						</div>
						<div className='pl-3'>
							<h3 className='font-medium text-white'>{item.artistName}</h3>
							<div className='flex items-center'>
								<span className='text-sm text-[#b3b3b3] font-medium '>
									Исполнитель
								</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	);
}
