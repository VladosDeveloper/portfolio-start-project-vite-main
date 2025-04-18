import {SectionTitle} from '../../../components/SectionTitle'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Work} from './work/Work'
import Batmen from '../../../assets/batmen.webp'
import Active from '../../../assets/active.webp'
import Delivery from '../../../assets/delivery.webp'
import Chief from '../../../assets/chief.webp'
import amazon from '../../../assets/amazon.webp'
import rest from '../../../assets/rest.webp'
import ice from '../../../assets/icecream.webp'
import {Container} from '../../../components/Container'
import {S} from './Works_Styled'
import React, {useState} from "react";
import {ContactButton} from '../../../components/ContactButton'
import {scroller} from "react-scroll";

type WorksDataType = {
	src: string,
	text: string,
	title: string,
	technologies: string[]
}

const WorksData: WorksDataType[] = [
	{
		src: Batmen,
		text: 'Это лендинговая страница, созданная с использованием HTML, CSS и JavaScript, посвящённая фильму' +
			' "Бэтмен" (The Batman). Дизайн минималистичный, с тёмной цветовой гаммой, акцентом на визуальный контент и интерактивные элементы, такие как кнопки и форма. ',
		title: 'Сайт Landing',
		technologies: ['HTML', "CSS", "JS", 'Git']
	},
	{
		src: rest,
		text: 'Сайт ресторана на MERN-стеке с админ-панелью\n' +
			'Веб-приложение для ресторана с возможностью просмотра меню, оставления комментариев и админ-панелью для управления блюдами и редактирования рецептов. Используются React, Node.js, Express и MongoDB.',
		title: 'Ресторанный сайт на MERN',
		technologies: ['HTML', "CSS", "TS", 'React', 'AI', 'Git']
	},
	{
		src: amazon,
		text: 'Amazon Clone на MERN-стеке с интеграцией Firebase\n' +
			'Многостраничное веб-приложение, реализующее функциональность интернет-магазина: регистрация и авторизация пользователей через Firebase, управление корзиной, оформление заказов, защищённые маршруты и взаимодействие с базой данных через MongoDB. Интерфейс построен на React, серверная логика — на Node.js и Express.',
		title: 'Клон Amazon на MERN с Firebase',
		technologies: ['React', 'NodeJs', 'Express', 'MongoDb', 'Firebase']
	},
	{
		src: Delivery,
		text: 'Адаптивная верстка с использованием HTML, CSS и JavaScript. Добавлены анимации через animate.js для создания плавных переходов и привлекательного пользовательского интерфейса.',
		title: 'Сайт доставки (Верстка)',
		technologies: ['HTML', "CSS", "JS", 'Animate.js', 'Git']
	},
	{
		src: Chief,
		text: 'Приложение на React и TypeScript с использованием AI, которое генерирует рецепты на основе введённых ингредиентов. Реализовано с применением HTML, CSS и современных подходов к разработке интерфейсов.',
		title: 'Приложение для генерации рецептов',
		technologies: ['HTML', "CSS", "TS", 'React', 'AI', 'Git']
	},
	{
		src: Active,
		text: 'Верхний раздел с сеткой из 6 изображений, показывающих творческие инструменты, книги, камеры и еду на деревянных поверхностях. Средний раздел с четырьмя профильными карточками команды. Дизайн минималистичный, с акцентом на визуальный контент и простоту навигации. ',
		title: 'Верстка проекта',
		technologies: ['HTML', "CSS", "JS", 'Git']
	},
	{
		src: ice,
		text: 'Адаптивный сайт для продажи мороженого, разработанный с использованием React, TypeScript, HTML и CSS Modules. Реализована современная вёрстка с поддержкой всех размеров экранов. Для слайдеров использована библиотека Pure React Carousel.',
		title: 'Верстка проекта "Freeze"',
		technologies: ['HTML', "CSS", "TS", 'Git', 'React', 'Pure React Carousel']
	},
]

export const Works: React.FC = () => {
	const [showAll, setShowAll] = useState<boolean>(false)
	
	const showAllHandler = () => {
		setShowAll(prev => !prev)
		if (showAll) {
			scroller.scrollTo('works', {
				duration: 800,
				delay: 0,
				offset: -100,
				smooth: 'smooth'
			})
		}
	}
	
	return (
		<S.Works id='works'>
			<Container className={showAll ? 'allContent' : ''}>
				<SectionTitle marginBottom='32px'>Проекты</SectionTitle>
				<FlexWrapper
					justify='center'
					alignItems='flex-start'
					wrap='wrap'
					gap='25px'
				>
					{WorksData.map((s, index) => {
						return (
							
							<Work
								src={s.src} key={index}
								text={s.text}
								title={s.title}
								technologies={s.technologies}
							/>
						
						)
					})}
				</FlexWrapper>
			</Container>
			<S.WorkButtonWrapper>
				<ContactButton width='307px' onClick={showAllHandler}>
					{showAll ? 'СКРЫТЬ' : 'ПОКАЗАТЬ ВСЕ ПРОЕКТЫ'}
				</ContactButton>
			</S.WorkButtonWrapper>
		</S.Works>
	)
}
