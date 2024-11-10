import { playlists } from '../../data';
import { CiCirclePlus } from 'react-icons/ci';
import { CgTime } from 'react-icons/cg';
import { Link, useParams } from 'react-router-dom';
import { useCurrentTrack } from '../../context/CurrentTrackContext';
import { useFavorites } from '../../context/FavoritesContext';
import { FaCheckCircle } from 'react-icons/fa';

export function PlaylistTrackList() {
	const { setCurrentTrack } = useCurrentTrack();
	const { addFavorite, favorites } = useFavorites();

	const { playlistId } = useParams();
	const playlistTracks = playlists.find(
		p => p.playlistId === parseInt(playlistId)
	);

	if (!playlistTracks) {
		return <div className='text-white'>Tracks not found</div>;
	}

	const handleAddToFavorite = item => {
		addFavorite(item);
	};

	return (
		<>
			<table className='text-[#b3b3b3] mt-10 relative w-full z-10'>
				<thead className='text-left text-sm'>
					<tr>
						<th className='text-center min-w-12'>#</th>
						<th className='w-1/3'>Название</th>
						<th className='w-1/3'>Альбом</th>
						<th className='w-4/5'>Дата добавления</th>
						<th></th>
						<th className='pl-2'>
							<CgTime size={20} />
						</th>
					</tr>
				</thead>
				<tbody>
					{playlistTracks.track.map((item, index) => (
						<tr
							key={index}
							className='hover:bg-white/15 hover:text-white'
							onClick={() => setCurrentTrack(item)}
						>
							<td className='text-center rounded-l-md'>{index + 1}</td>
							<td className='flex items-center gap-3 p-2'>
								<img
									src={item.imgSrc}
									alt='trackList'
									width={40}
									className='rounded-md'
								/>
								<div>
									<p className='text-white truncate w-60'>
										<a href='#' className='cursor-pointer hover:underline'>
											{item.title}
										</a>
									</p>
									<p className='text-sm font-medium '>
										<Link
											to=''
											className='cursor-pointer hover:underline hover:text-white'
										>
											{item.artist}
										</Link>
									</p>
								</div>
							</td>
							<td className='truncate w-40'>
								<a href='#' className='hover:text-white hover:underline'>
									{item.album}
								</a>
							</td>
							<td></td>
							<td className='pr-10'>
								{favorites.some(fav => fav.title === item.title) ? (
									<FaCheckCircle size={20} className='text-green-500' />
								) : (
									<CiCirclePlus
										size={20}
										className='hover:scale-105 hover:text-white cursor-pointer'
										onClick={() => handleAddToFavorite(item)}
									/>
								)}
							</td>
							<td className='text-center rounded-r-md pr-6'>{item.duration}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
