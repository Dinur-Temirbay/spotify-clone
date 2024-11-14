import { createContext, useContext, useState } from 'react';
import { user as initialUserData } from '../data';

const PlaylistContext = createContext();

export const usePlaylist = () => useContext(PlaylistContext);

export function PlaylistProvider({ children }) {
	const [playList, setPlaylist] = useState(initialUserData.playLists);

	const addPlaylist = newPlaylist => {
		setPlaylist(prevPlaylist => [...prevPlaylist, newPlaylist]);
	};

	const removePlaylist = playlistId => {
		setPlaylist(prevPlaylist =>
			prevPlaylist.filter(p => p.playlistId !== playlistId)
		);
	};

	return (
		<PlaylistContext.Provider value={{ playList, addPlaylist, removePlaylist }}>
			{children}
		</PlaylistContext.Provider>
	);
}
