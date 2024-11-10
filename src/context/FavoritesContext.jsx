import { createContext, useContext, useEffect, useState } from 'react';
import { user } from '../data';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState(user.favorites);

	useEffect(() => {
		user.favorites = favorites;
	}, [favorites]);

	const addFavorite = track => {
		if (!favorites.some(favTrack => favTrack.title === track.title)) {
			setFavorites([...favorites, track]);
		}
	};

	const removeFavorite = trackToRemove => {
		const updatedFavorites = favorites.filter(item => item !== trackToRemove);
		setFavorites(updatedFavorites);
	};

	return (
		<FavoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			{children}
		</FavoritesContext.Provider>
	);
}
