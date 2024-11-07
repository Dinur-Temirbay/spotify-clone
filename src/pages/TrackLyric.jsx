import { playlists } from '../data';

export function TrackLyric() {
	if (
		!playlists[0].track || // Проверяем, существует ли массив track
		playlists[0].track.length === 0 || // Проверяем, что массив не пустой
		!playlists[0].track[0].lyrics || // Проверяем, существуют ли lyrics у первого трека
		playlists[0].track[0].lyrics.length === 0 // Проверяем, что lyrics не пустые
	) {
		return (
			<p className='text-[#b3b3b3] text-3xl'>
				Текст этой песни пока недоступен.
			</p>
		);
	}

	return (
		<div className='h-full w-full mt-2 mr-2 relative rounded-md bg-transparent'>
			<div className='px-16 pt-14 pb-36 w-full text-left h-screen overflow-y-scroll custom-scrollbar'>
				{playlists[0].track[0].lyrics.map((item, sectionIndex) => (
					<div key={sectionIndex} className='mb-4'>
						{item.lines.map((line, lineIndex) => (
							<p
								key={lineIndex}
								className='text-[#b3b3b3] text-3xl hover:text-white leading-[50px]'
							>
								{line}
							</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
