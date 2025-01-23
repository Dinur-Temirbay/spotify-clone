import { Routes, Route } from 'react-router-dom';
import { PlaylistTracks } from './components/PlaylistTracks/PlaylistTracks';
import { NotFoundPage } from './pages/NotFoundPage';
import { PlaylistsPage } from './pages/PlaylistsPage';
import { ArtistPlaylist } from './components/ArtistPlaylist/ArtistPlaylist';
import { FavoritePlaylist } from './components/FavoritePlaylist/FavoritePlaylist';
import { ProfilePage } from './pages/ProfilePage';
import { HomePage } from './pages/HomePage';
import { FullScreen } from './pages/FullScreen';
import { CurrMusicInfo } from './components/CurrMusicInfo/CurrMusicInfo';
import { FullScreenTrackLyric } from './components/FullScreen/FullScreenTrackLyric';
import { AuthPage } from './pages/AuthPage';
import { Layout } from './components/Layout';
import { CurrentTrackProvider } from './context/CurrentTrackContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { UserProvider } from './context/UserContext';
import { SubscribeProvider } from './context/SubscribeContext';
import { PlaylistProvider } from './context/PlaylistContext';
import { SignUpForm } from './components/Auth/SignUpForm';

function App() {
	return (
		<UserProvider>
			<SubscribeProvider>
				<FavoritesProvider>
					<PlaylistProvider>
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
									<Route
										path='favoritePlaylist'
										element={<FavoritePlaylist />}
									/>
									<Route path='currentMusicInfo' element={<CurrMusicInfo />} />
								</Route>
								<Route path='fullscreen' element={<FullScreen />} />
								<Route
									path='fullScreenTrackLyric'
									element={<FullScreenTrackLyric />}
								/>
								<Route path='*' element={<NotFoundPage />} />
								<Route path='signIn' element={<AuthPage />} />
								<Route path='signUp' element={<SignUpForm />} />
							</Routes>
						</CurrentTrackProvider>
					</PlaylistProvider>
				</FavoritesProvider>
			</SubscribeProvider>
		</UserProvider>
	);
}

export default App;
