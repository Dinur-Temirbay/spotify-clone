import { createContext, useContext, useState } from 'react';
import { user as initialUserData } from '../data';

const SubscribeContext = createContext();

export const useSubscribe = () => useContext(SubscribeContext);

export function SubscribeProvider({ children }) {
	const [subscribe, setSubscribe] = useState(initialUserData.subscribe);

	const addSubscription = artist => {
		if (
			!subscribe.some(
				subscribedArtist => subscribedArtist.artistId === artist.artistId
			)
		) {
			setSubscribe([...subscribe, artist]);
		}
	};

	const removeSubscription = artistId => {
		setSubscribe(subscribe.filter(artist => artist.artistId !== artistId));
	};

	return (
		<SubscribeContext.Provider
			value={{ subscribe, addSubscription, removeSubscription }}
		>
			{children}
		</SubscribeContext.Provider>
	);
}
