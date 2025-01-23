import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer';
import { CurrMusicInfo } from './CurrMusicInfo/CurrMusicInfo';
import { TrackLyric } from './TrackLyric/TrackLyric';
import { useState } from 'react';

export function Layout() {
	const [musicDetails, setMusicDetails] = useState({
		isMusicInfoVisible: false,
		isLyricVisible: false
	});

	return (
		<div className='flex flex-col h-screen'>
			<div className='flex flex-1 overflow-hidden'>
				<aside className='w-[25%] min-w-[380px]'>
					<Sidebar />
				</aside>
				<main className='flex-1 overflow-hidden'>
					<Outlet />
				</main>
				{musicDetails.isMusicInfoVisible && <CurrMusicInfo />}
				{musicDetails.isLyricVisible && <TrackLyric />}
			</div>
			<div className='fixed bottom-0 w-full z-10'>
				<AudioPlayer
					musicDetails={musicDetails}
					setMusicDetails={setMusicDetails}
				/>
			</div>
		</div>
	);
}
