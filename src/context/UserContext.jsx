import { createContext, useState } from 'react';
import { user as initialUserData } from '../data';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialUserData);

	const updateUserImage = imgSrc => {
		setUser(prevUser => ({ ...prevUser, imgSrc }));
	};

	const updateUserName = name => {
		setUser(prevUser => ({ ...prevUser, name }));
	};

	return (
		<UserContext.Provider value={{ user, updateUserImage, updateUserName }}>
			{children}
		</UserContext.Provider>
	);
};
