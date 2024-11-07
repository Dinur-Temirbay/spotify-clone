import React, { createContext, useContext, useEffect, useState } from 'react';
import { user } from '../../data';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		user.favorites = favorites;
	}, [favorites]);

	const addFavorite = track => {
		if (!favorites.some(favTrack => favTrack.title === track.title)) {
			const updatedFavorites = [...favorites, track];
			setFavorites(updatedFavorites);
		}
	};

	return (
		<FavoritesContext.Provider value={{ favorites, addFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}
