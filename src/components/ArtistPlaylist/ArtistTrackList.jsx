import { useState } from 'react';
import { artist } from '../../data';
import { CiCirclePlus } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { useCurrentTrack } from '../../context/CurrentTrackContext';
import { useFavorites } from '../../context/FavoritesContext';
import { FaCheckCircle } from 'react-icons/fa';

export function ArtistTrackList() {
	const { setCurrentTrack } = useCurrentTrack();
	const { artistId } = useParams();
	const { addFavorite, favorites } = useFavorites();

	const artistTracks = artist.find(p => p.artistId === parseInt(artistId));

	if (!artistTracks) {
		return <div className='text-white'>Artist Tracks not found</div>;
	}

	const [visibleTracks, setVisibleTracks] = useState(5);
	const tracks = artistTracks.track;

	const handleShowMore = () => {
		setVisibleTracks(prevVisibleTracks => (prevVisibleTracks === 5 ? 10 : 5));
	};

	// Add favorite without resetting previous selections
	const handleAddToFavorite = item => {
		addFavorite(item);
	};

	return (
		<>
			<h2 className='text-white mt-10 text-2xl font-semibold z-10 relative'>
				Популярные треки
			</h2>
			<table className='text-[#b3b3b3] mt-5 relative w-full z-10'>
				<tbody>
					{tracks.slice(0, visibleTracks).map((item, index) => (
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
								</div>
							</td>
							<td>{item.listened.toLocaleString('ru-RU')}</td>
							<td className='w-1'>
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
							<td className='text-center rounded-r-md'>{item.duration}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button
				onClick={handleShowMore}
				className='pl-2 mt-5 text-sm text-[#b3b3b3] hover:text-white'
			>
				{visibleTracks === 5 ? 'Еще' : 'Свернуть'}
			</button>
		</>
	);
}
