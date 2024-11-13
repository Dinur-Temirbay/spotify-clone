import { Routes, Route } from 'react-router-dom';
import { PlaylistTracks } from './components/PlaylistTracks/PlaylistTracks';
import { NotFoundPage } from './pages/NotFoundPage';
import { PlaylistsPage } from './pages/PlaylistsPage';
import { ArtistPlaylist } from './components/ArtistPlaylist/ArtistPlaylist';
import { FavoritePlaylist } from './components/FavoritePlaylist/FavoritePlaylist';
import { ProfilePage } from './pages/ProfilePage';
import { HomePage } from './pages/HomePage';
import { FullScreen } from './pages/FullScreen';
import { TrackLyric } from './pages/TrackLyric';
import { FullScreenTrackLyric } from './components/FullScreen/FullScreenTrackLyric';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Layout } from './components/Layout';
import { CurrentTrackProvider } from './context/CurrentTrackContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { UserProvider } from './context/UserContext';

function App() {
	return (
		<UserProvider>
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
						<Route path='login' element={<LoginPage />} />
						<Route path='register' element={<RegisterPage />} />
					</Routes>
				</CurrentTrackProvider>
			</FavoritesProvider>
		</UserProvider>
	);
}

export default App;
