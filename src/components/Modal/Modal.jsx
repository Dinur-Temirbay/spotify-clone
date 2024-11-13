import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export function Modal({ onClose, onSave }) {
	const { user, updateUserName } = useContext(UserContext);
	const [value, setValue] = useState(user.name || '');
	const [profileImage, setProfileImage] = useState(user.imgSrc || '');

	const handleImageChange = event => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setProfileImage(imageUrl);
		}
	};

	const handleSave = () => {
		updateUserName(value);
		onSave(profileImage);
	};

	return (
		<div className='fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='bg-zinc-800 rounded-lg p-6 w-[35%] relative'>
				<div className='flex items-center justify-between'>
					<h2 className='text-white text-xl font-bold'>Данные профиля</h2>
					<div className='hover:bg-white/10 rounded-full p-2'>
						<RxCross2
							size={20}
							className='text-gray-400 cursor-pointer'
							onClick={onClose}
						/>
					</div>
				</div>
				<div className='mt-4 flex items-center gap-4 relative'>
					{profileImage ? (
						<img
							src={profileImage}
							alt='User'
							className='w-44 h-44 rounded-full cursor-pointer'
						/>
					) : (
						<div className='w-44 h-44 rounded-full bg-zinc-800/80 flex justify-center items-center shadow-md shadow-black'>
							<FaUser size={70} className='text-zinc-500' />
						</div>
					)}

					<div className='absolute inset-0 w-44 h-44 flex flex-col items-center justify-center rounded-full opacity-0 hover:opacity-100'>
						<input
							type='file'
							className='opacity-0 absolute inset-0 cursor-pointer'
							accept='image/*'
							onChange={handleImageChange}
						/>
						<span className='text-white'>Выбрать фото</span>
						<FiEdit2 size={45} className='text-white ' />
					</div>

					<div className='flex flex-col gap-2 w-[60%]'>
						<input
							type='text'
							value={value}
							placeholder={user.name}
							className='p-3 rounded-md bg-zinc-700 text-white text-xs font-semibold placeholder-white'
							onChange={e => setValue(e.target.value)}
						/>
						<button
							className='bg-white py-2 px-6 rounded-full text-black font-semibold hover:scale-105 ml-auto'
							onClick={handleSave}
						>
							Сохранить
						</button>
					</div>
				</div>
				<p className='mt-4 text-[11px] text-white font-semibold'>
					Продолжая, ты предоставляешь Spotify доступ к выбранному изображению.
					Пожалуйста, не загружай файлы, которые ты не имеешь права
					распространять.
				</p>
			</div>
		</div>
	);
}
