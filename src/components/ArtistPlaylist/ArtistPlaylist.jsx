import { Footer } from '../Footer/Footer';
import { artist } from '../../data';
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6';
import { ArtistTrackList } from './ArtistTrackList';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

export function ArtistPlaylist() {
	const { artistId } = useParams();
	const artistPage = artist.find(p => p.artistId === parseInt(artistId));

	if (!artistPage) {
		return <div className='text-white'>Artist not found</div>;
	}

	return (
		<div className='h-screen mt-2 mr-2 relative overflow-y-scroll custom-scrollbar rounded-md bg-[#121212]'>
			<div
				className='px-6 pt-20 pb-7'
				style={{
					backgroundImage: `url(${artistPage.artistImg})`,
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<div className='z-10 relative flex items-center gap-5'>
					<div className='flex flex-col'>
						<div className='flex items-center'>
							<BsFillPatchCheckFill size={25} className='text-blue-400' />
							<p className='text-white text-sm font-semibold pl-2'>
								Подтвержденный исполнитель
							</p>
						</div>
						<h1 className='text-white text-8xl mt-5 font-extrabold'>
							{artistPage.artistName}
						</h1>
						<p className='text-white text-sm font-medium ml-2 mt-8'>
							{
								artistPage.track
									.flatMap(track => track.listened || []) // Объединяем массивы `listened`
									.reduce((acc, curr) => acc + curr, 0) // Суммируем все элементы
									.toLocaleString('ru-RU') // Форматируем число с пробелами
							}{' '}
							слушателей за месяц
						</p>
					</div>
				</div>
			</div>
			<div className='absolute inset-0 bg-black/50 h-[42.8%] opacity-50'></div>
			<div className='absolute top-[301px] inset-0 h-1/3 w-full bg-gradient-to-b from-white/5 to-transparent'></div>
			<div className='px-6'>
				<div className='flex items-center gap-6 mt-5 z-10 relative'>
					<FaCirclePause
						size={60}
						color='LimeGreen'
						className='cursor-pointer hover:scale-110'
					/>
					<button className='text-white text-sm font-semibold px-4 py-1 border-[1px] border-[#b3b3b3] hover:border-white hover:scale-105 rounded-full'>
						Подписаться
					</button>
				</div>
				<ArtistTrackList />
			</div>
			<Footer />
		</div>
	);
}
