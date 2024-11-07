import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer';

export function Layout() {
	return (
		<div className='flex h-screen'>
			<aside className='w-[25%] fixed left-0'>
				<Sidebar />
			</aside>
			<main className='w-[75%] fixed right-0'>
				<Outlet />
			</main>
			<AudioPlayer />
		</div>
	);
}
