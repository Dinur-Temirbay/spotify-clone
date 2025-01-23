import { RxCross2 } from 'react-icons/rx';
import { CiCirclePlus } from 'react-icons/ci';
import { FaCheckCircle } from 'react-icons/fa';
import { useCurrentTrack } from '../../context/CurrentTrackContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useSubscribe } from '../../context/SubscribeContext';
import { useState, useEffect } from 'react';

export function CurrMusicInfo() {
	const { currentTrack } = useCurrentTrack();
	const { addFavorite, favorites } = useFavorites();
	const { subscribe, addSubscription, removeSubscription } = useSubscribe();
	const [isSubscribed, setIsSubscribed] = useState(false);

	useEffect(() => {
		if (currentTrack) {
			setIsSubscribed(
				subscribe.some(sub => sub.artistId === currentTrack.artistId)
			);
		}
	}, [currentTrack, subscribe]);

	const handleAddToFavorite = currentTrack => {
		if (currentTrack) {
			addFavorite(currentTrack);
		}
	};

	const handleSubscriptionToggle = () => {
		if (isSubscribed) {
			removeSubscription(currentTrack.artistId);
		} else {
			addSubscription({
				artistId: currentTrack.artistId,
				name: currentTrack.artist,
				imgSrc: currentTrack.artistImg
			});
		}
		setIsSubscribed(!isSubscribed);
	};

	return (
		<div className='w-[25%] mt-2 mr-2 px-4 rounded-md bg-[#121212] overflow-y-scroll custom-scrollbar'>
			<div className='flex justify-between items-center my-5'>
				<p className='text-sm font-bold font-sans text-white hover:underline'>
					{currentTrack.title}
				</p>
				<RxCross2 size={20} className='text-gray-400 cursor-pointer' />
			</div>
			<img
				src={currentTrack.imgSrc}
				alt='musicInfoImg'
				className='rounded-md'
			/>
			<div className='my-5 flex justify-between items-center'>
				<div>
					<p className='text-lg font-semibold text-white hover:underline font-sans font-medium'>
						{currentTrack.title}
					</p>
					<p className='text-md text-[#b3b3b3] hover:underline font-sans font-medium'>
						{currentTrack.artist}
					</p>
				</div>
				{favorites.some(fav => fav.title === currentTrack.title) ? (
					<FaCheckCircle size={25} className='text-green-500' />
				) : (
					<CiCirclePlus
						size={25}
						className='hover:scale-105 text-white cursor-pointer'
						onClick={() => handleAddToFavorite(currentTrack)}
					/>
				)}
			</div>

			<div className='flex flex-col gap-5 mb-28'>
				<div className='w-full font-sans font-medium flex flex-col rounded-md bg-[#1f1f1f] p-4'>
					<div className='relative'>
						<img
							src={currentTrack.artistImg}
							alt='artistAbout'
							className='rounded-t-md'
						/>
						<p className='absolute top-3 left-3 text-white'>Об исполнителе</p>
					</div>
					<div className='px-4 pt-4'>
						<p className='text-white'>{currentTrack.artist}</p>
						<div className='flex justify-between items-center py-2'>
							<p className='text-[#b3b3b3]'>слушателей за месяц</p>
							<button
								className={`text-white text-sm font-semibold px-4 py-1 border-[1px] border-white/50
									${isSubscribed ? 'border-white/50' : 'hover:border-white'}
									hover:scale-105 rounded-full`}
								onClick={handleSubscriptionToggle}
							>
								{isSubscribed ? 'Уже подписаны' : 'Подписаться'}
							</button>
						</div>
						<p className='mt-2 text-[#b3b3b3] text-sm font-sans font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
							consequuntur nobis est
						</p>
					</div>
				</div>
				<div className='w-full font-sans font-medium flex flex-col gap-2 rounded-md bg-[#1f1f1f] p-4'>
					<p className='text-white pb-2'>Сведения</p>
					<div className='flex justify-between items-center'>
						<div>
							{currentTrack.artist > 1 ? (
								<p className='text-[#b3b3b3] text-sm'>Исполнители</p>
							) : (
								<p className='text-[#b3b3b3] text-sm'>Исполнитель</p>
							)}
							<p className='text-white text-sm font-normal pt-1'>
								{currentTrack.artist}
							</p>
						</div>
						<button
							className={`text-white text-sm font-semibold px-4 py-1 border-[1px] border-white/50
									${isSubscribed ? 'border-white/50' : 'hover:border-white'}
									hover:scale-105 rounded-full`}
							onClick={handleSubscriptionToggle}
						>
							{isSubscribed ? 'Уже подписаны' : 'Подписаться'}
						</button>
					</div>
					<p className='text-[#b3b3b3] text-sm'>Авторы</p>
					<p className='text-[#b3b3b3] text-sm'>Продюсеры</p>
				</div>
			</div>
		</div>
	);
}
