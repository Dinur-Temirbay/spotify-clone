import Slider from 'react-slick';
import { FaCirclePlay } from 'react-icons/fa6';
import { playlists } from '../../data';
import { settings } from './slider-settings';
import { Link } from 'react-router-dom';
import { user } from '../../data';

export function MusicCategoryList() {
	return (
		<div className='mt-6'>
			<h2 className='text-white text-2xl font-semibold pl-5'>
				<a href='#' className='hover:underline'>
					Начни с этой музыки
				</a>
			</h2>
			<div className='mt-3 px-3'>
				<Slider {...settings}>
					{playlists.map((item, index) => (
						<div key={index}>
							<Link to={`/playlistTracks/${item.playlistId}`}>
								<div
									className='p-2 rounded-md hover:bg-[#1f1f1f] cursor-pointer relative group'
									onClick={() => {
										if (
											!user.latest.playList.some(
												playlist => playlist.playlistId === item.playlistId
											)
										) {
											user.latest.playList.unshift(item);
										}
									}}
								>
									<img
										src={item.playlistImgSrc}
										alt='artist'
										className='rounded-md'
									/>
									<p className='text-[#b3b3b3] text-sm font-normal mt-2 line-clamp-2'>
										{item.playListDescription?.join(', ')}
									</p>
									<FaCirclePlay
										size={45}
										color='SpringGreen'
										className='absolute bottom-[68px] right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110'
									/>
								</div>
							</Link>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
