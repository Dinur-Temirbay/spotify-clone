import { artist } from '../../data';
import { useParams } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

export function ArtistAboutModal({ onClose }) {
	const { artistId } = useParams();
	const artistPage = artist.find(p => p.artistId === parseInt(artistId));

	return (
		<div className='fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='bg-zinc-900 rounded-lg w-1/2 relative'>
				<div
					className='h-96 bg-black rounded-md relative'
					style={{
						backgroundImage: `url(${artistPage.artistImg})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover'
					}}
				>
					<RxCross2
						size={25}
						className='text-gray-400 cursor-pointer absolute right-4 top-4 hover:text-white bg-black rounded-full'
						onClick={onClose}
					/>
				</div>
				<div className='mt-10 px-6 flex justify-between'>
					<div className='flex flex-col gap-10 w-1/4'>
						<div>
							<p className='text-white text-2xl font-semibold'>Сколько XZ</p>
							<p className='text-[#b3b3b3] text-sm font-sans font-medium'>
								Подписчики
							</p>
						</div>
						<div>
							<p className='text-white text-2xl font-semibold'>
								{artistPage.track
									.flatMap(track => track.listened || [])
									.reduce((acc, curr) => acc + curr, 0)
									.toLocaleString('ru-RU')}
							</p>
							<p className='text-[#b3b3b3] text-sm font-sans font-medium'>
								Слушателей за месяц
							</p>
						</div>
					</div>
					<div className='w-3/4'>
						<p className='text-[#b3b3b3] font-sans font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
							odio commodi nam vel a ipsum laudantium quod, eos perferendis,
							iure sed excepturi ratione quos necessitatibus officia. Pariatur,
							aspernatur eius fuga, at beatae deleniti autem nisi voluptates
							eligendi nam, fugiat temporibus.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
