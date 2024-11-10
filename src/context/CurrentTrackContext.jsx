import { createContext, useState, useContext } from 'react';

const CurrentTrackContext = createContext();

export function CurrentTrackProvider({ children }) {
	const [currentTrack, setCurrentTrack] = useState(null);

	return (
		<CurrentTrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
			{children}
		</CurrentTrackContext.Provider>
	);
}

export function useCurrentTrack() {
	return useContext(CurrentTrackContext);
}
