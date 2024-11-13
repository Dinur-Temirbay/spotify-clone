import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { settings } from '../Playlists/slider-settings';
import { user } from '../../data';

export function Subscribe() {
	return (
		<>
			{user.subscribe.length >= 1 ? (
				<div>
					<h2 className='text-white text-2xl font-semibold pl-5'>
						<a href='#' className='hover:underline'>
							Уже подписаны
						</a>
					</h2>
					<div className='mt-3 px-3'>
						<Slider {...settings}>
							{user.subscribe.map((item, index) => (
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
											<p className='text-[#b3b3b3] text-sm'>Профиль</p>
										</div>
									</Link>
								</div>
							))}
						</Slider>
					</div>
				</div>
			) : null}
		</>
	);
}
