import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer';

export function Layout() {
	return (
		<div className='flex flex-col h-screen'>
			<div className='flex flex-1 overflow-hidden'>
				<aside className='w-[25%] min-w-[380px]'>
					<Sidebar />
				</aside>
				<main className='flex-1 overflow-hidden'>
					<Outlet />
				</main>
			</div>
			<div className='fixed bottom-0 w-full z-10'>
				<AudioPlayer />
			</div>
		</div>
	);
}
