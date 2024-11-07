import { useState } from 'react';
import { artist } from '../../data';
import { CiCirclePlus } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { useCurrentTrack } from '../AudioPlayer/CurrentTrackContext';

export function ArtistTrackList() {
	const { setCurrentTrack } = useCurrentTrack();

	const { artistId } = useParams();
	const artistTracks = artist.find(p => p.artistId === parseInt(artistId));

	if (!artistTracks) {
		return <div className='text-white'>Artist Tracks not found</div>;
	}

	const [visibleTracks, setVisibleTracks] = useState(5);
	const tracks = artistTracks.track;

	const handleShowMore = () => {
		setVisibleTracks(prevVisibleTracks => (prevVisibleTracks === 5 ? 10 : 5));
	};

	return (
		<>
			<h2 className='text-white mt-10 text-2xl font-semibold z-10 relative'>
				Популярные треки
			</h2>
			<table className='text-[#b3b3b3] mt-5 relative w-full z-10'>
				<tbody>
					{tracks.slice(0, visibleTracks).map((item, index) => (
						<tr key={index} className='hover:bg-white/15 hover:text-white'>
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
										<a
											href='#'
											className='cursor-pointer hover:underline'
											onClick={() => setCurrentTrack(item)}
										>
											{item.title}
										</a>
									</p>
								</div>
							</td>
							<td>{item.listened.toLocaleString('ru-RU')}</td>
							<td className='w-1'>
								<CiCirclePlus
									size={20}
									className='hover:scale-105 hover:text-white cursor-pointer'
								/>
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
