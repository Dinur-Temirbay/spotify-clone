// Настройки для Slick Slider
export const settings = {
	dots: false, // Показать точки навигации
	infinite: false, // Зацикливать слайды
	speed: 500, // Скорость перехода
	slidesToShow: 6, // Количество видимых слайдов
	slidesToScroll: 1, // Количество слайдов для прокрутки
	arrows: false, // Показать стрелки навигации
	responsive: [
		// Настройки для адаптивности
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
		}
	]
};
