import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SignUpForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Имя пользователя:', username, 'Пароль:', password);
	};

	return (
		<div className='h-screen flex justify-center items-center bg-teal-800'>
			<div className='shadow-lg shadow-fuchsia-500 w-1/4 h-[70%] rounded-lg animate-pulse absolute z-9'></div>
			<div className='px-6 py-10 bg-white/20 rounded-lg w-1/4 h-[70%] z-10'>
				<div className='flex flex-col justify-center items-center gap-4'>
					<img src='/public/Logo.png' alt='signUpLogo' />
					<h1 className='text-center text-white text-3xl font-bold'>
						Зарегистрироваться
					</h1>
				</div>
				<form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-2'>
					<label className='text-white'>Имя пользователя</label>
					<input
						type='text'
						name='username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						className='p-2 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
					<label className='text-white'>Пароль</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className='p-2 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
					<button
						type='submit'
						className='p-2 text-white bg-[#2a9d8f] rounded-full mt-6 shadow-lg hover:bg-[#264653] transition duration-300 ease-in-out'
					>
						Зарегистрироваться
					</button>
					<div className='flex justify-center mt-4'>
						<p className='text-xs mr-1 text-white'>Уже есть аккаунт?</p>
						<Link to='/signIn' className='text-xs text-white hover:underline'>
							Войти
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
