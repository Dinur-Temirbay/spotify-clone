import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

export function Footer() {
	return (
		<div className='mt-20 px-10'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10'>
				<div>
					<ul>
						<li className='text-white font-bold'>Компания</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								О нас
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Вакансии
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								For the Record
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='text-white font-bold'>Сообщества</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								Для исполнителей
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Для разработчиков
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								Реклама
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Для инвесторов
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								Для вендоров
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='text-white font-bold'>Полезные ссылки</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								Справка
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Бесплатное мобильное приложение
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='text-white font-bold leading-8'>Планы Spotify</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Индивидуальная подписка Spotify Premium
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								Premium для двоих
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Premium для семьи
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white leading-10'>
							<a href='#' className='cursor-pointer hover:underline'>
								Premium для студентов
							</a>
						</li>
						<li className='text-[#b3b3b3] font-medium hover:text-white'>
							<a href='#' className='cursor-pointer hover:underline'>
								Бесплатная версия Spotify
							</a>
						</li>
					</ul>
				</div>
				<div className='flex gap-4'>
					<div className='w-10 h-10 bg-white/20 rounded-full flex justify-center items-center hover:bg-white/35'>
						<a
							href='https://www.linkedin.com/in/dinur-temirbay-295662274/'
							className='cursor-pointer'
						>
							<FaLinkedinIn className='text-white' />
						</a>
					</div>
					<div className='w-10 h-10 bg-white/20 rounded-full flex justify-center items-center hover:bg-white/35'>
						<a
							href='https://github.com/Dinur-Temirbay#'
							className='cursor-pointer'
						>
							<FaGithub className='text-white' />
						</a>
					</div>
					<div className='w-10 h-10 bg-white/20 rounded-full flex justify-center items-center hover:bg-white/35'>
						<a href='#' className='cursor-pointer'>
							<FaInstagram className='text-white' />
						</a>
					</div>
				</div>
			</div>
			<div className='h-[1px] bg-gray-500 rounded-full'></div>
			<div className='mt-10 mb-44 flex flex-col sm:flex-row justify-between items-center sm:items-start'>
				<div className='w-full sm:w-5/6'>
					<ul className='flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2'>
						<li className='text-[#b3b3b3] font-medium text-sm hover:text-white'>
							<a href='#'>Юридическая информация</a>
						</li>
						<li className='text-[#b3b3b3] font-medium text-sm hover:text-white'>
							<a href='#'>Центр безопасности и конфиденциальности</a>
						</li>
						<li className='text-[#b3b3b3] font-medium text-sm hover:text-white'>
							<a href='#'>Политика конфиденциальности</a>
						</li>
						<li className='text-[#b3b3b3] font-medium text-sm hover:text-white'>
							<a href='#'>Файлы cookie</a>
						</li>
						<li className='text-[#b3b3b3] font-medium text-sm hover:text-white'>
							<a href='#'>О рекламе</a>
						</li>
						<li className='text-[#b3b3b3] font-medium text-sm hover:text-white'>
							<a href='#'>Специальные возможности</a>
						</li>
					</ul>
				</div>
				<span className='text-[#b3b3b3] text-sm font-medium mt-4 sm:mt-0'>
					© 2024 Spotify AB
				</span>
			</div>
		</div>
	);
}
