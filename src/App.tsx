import { Routes, Route } from 'react-router-dom';
import { PlaylistTracks } from './components/PlaylistTracks/PlaylistTracks';
import { NotFoundPage } from './components/NotFoundPage';
import { PlaylistsPage } from './pages/PlaylistsPage';
import { ArtistPlaylist } from './components/ArtistPlaylist/ArtistPlaylist';
import { FavoritePlaylist } from './components/FavoritePlaylist/FavoritePlaylist';
import { ProfilePage } from './pages/ProfilePage';
import { HomePage } from './pages/HomePage';
import { FullScreen } from './pages/FullScreen';
import { TrackLyric } from './pages/TrackLyric';
import { FullScreenTrackLyric } from './components/FullScreen/FullScreenTrackLyric';
import { Layout } from './components/Layout';
import { CurrentTrackProvider } from './context/CurrentTrackContext';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
	return (
		<FavoritesProvider>
			<CurrentTrackProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='playlistPage' element={<PlaylistsPage />} />
						<Route
							path='playlistTracks/:playlistId'
							element={<PlaylistTracks />}
						/>
						<Route
							path='artistPlaylist/:artistId'
							element={<ArtistPlaylist />}
						/>
						<Route path='profile' element={<ProfilePage />} />
						<Route path='favoritePlaylist' element={<FavoritePlaylist />} />
						<Route path='trackLyric' element={<TrackLyric />} />
					</Route>
					<Route path='fullscreen' element={<FullScreen />} />
					<Route
						path='fullScreenTrackLyric'
						element={<FullScreenTrackLyric />}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</CurrentTrackProvider>
		</FavoritesProvider>
	);
}

export default App;
