import Slider from 'react-slick';
import { FaCirclePlay } from 'react-icons/fa6';
import { artist } from '../../data';
import { settings } from './slider-settings';
import { Link } from 'react-router-dom';
import { user } from '../../data';

export function ArtistCategoryList() {
	return (
		<div className='mt-6'>
			<h2 className='text-white text-2xl font-semibold pl-5'>
				<a href='#' className='hover:underline'>
					Рекомендованные исполнители
				</a>
			</h2>
			<div className='mt-3 px-3'>
				<Slider {...settings}>
					{artist.map((item, index) => (
						<div key={index}>
							<Link to={`/artistPlaylist/${item.artistId}`}>
								<div
									className='p-2 rounded-md hover:bg-[#1f1f1f] cursor-pointer relative group'
									onClick={() => {
										if (
											!user.latest.artistPlayList.some(
												artist => artist.artistId === item.artistId
											)
										) {
											user.latest.artistPlayList.unshift(item);
										}
									}}
								>
									<img
										src={item.artistPlaylistImg}
										alt='artist'
										className='rounded-full'
									/>
									<h3 className='text-white text-base font-medium mt-2'>
										{item.artistName}
									</h3>
									<p className='text-[#b3b3b3] text-sm'>Исполнитель</p>
									<FaCirclePlay
										size={45}
										color='LimeGreen'
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
