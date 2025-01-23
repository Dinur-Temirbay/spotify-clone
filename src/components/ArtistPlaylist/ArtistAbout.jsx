import { useState } from 'react';
import { artist } from '../../data';
import { useParams } from 'react-router-dom';
import { ArtistAboutModal } from './ArtistAboutModal';

export function ArtistAbout() {
	const { artistId } = useParams();
	const artistPage = artist.find(p => p.artistId === parseInt(artistId));
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='py-10 w-3/4'>
			<h2 className='text-white text-2xl font-sans font-medium'>
				Об исполнителе
			</h2>
			<div
				className='mt-5 relative hover:scale-[1.02] transition duration-700 ease-in-out cursor-pointer'
				onClick={() => setIsOpen(true)}
			>
				<div className='absolute inset-0 bg-black/50 bg-opacity-50'></div>
				<img
					src={artistPage.artistImg}
					alt='ArtistAboutImg'
					className='rounded-md shadow-sm'
				/>
				<div className='absolute bottom-10 left-10'>
					<p className='text-white text-sm font-semibold'>
						{artistPage.track
							.flatMap(track => track.listened || [])
							.reduce((acc, curr) => acc + curr, 0)
							.toLocaleString('ru-RU')}{' '}
						слушателей за месяц
					</p>
					<p className='text-white text-wrap w-3/4 pt-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
						nesciunt quia repudiandae placeat impedit nemo repellendus facere
						sed veritatis dolores.
					</p>
				</div>
			</div>
			{isOpen && <div className='fixed inset-0 bg-black opacity-50 z-20'></div>}
			{isOpen && <ArtistAboutModal onClose={() => setIsOpen(!isOpen)} />}
		</div>
	);
}
