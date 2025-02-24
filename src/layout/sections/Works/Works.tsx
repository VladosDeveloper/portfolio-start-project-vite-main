import {SectionTitle} from '../../../components/SectionTitle'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Work} from './work/Work'
import Batmen from '../../../assets/batmen.webp'
import Active from '../../../assets/active.webp'
import Delivery from '../../../assets/delivery.webp'
import Chief from '../../../assets/chief.webp'
import {Container} from '../../../components/Container'
import {S} from './Works_Styled'
import React from "react";


const WorksData = [
		{
				src: Batmen,
				text: 'Это лендинговая страница, созданная с использованием HTML, CSS и JavaScript, посвящённая фильму' +
						' "Бэтмен" (The Batman). Дизайн минималистичный, с тёмной цветовой гаммой, акцентом на визуальный контент и интерактивные элементы, такие как кнопки и форма. ',
				title: 'Сайт Landing',
				technologies: ['HTML', "CSS", "JS", 'Git']
		},
		{
				src: Active,
				text: 'Верхний раздел с сеткой из 6 изображений, показывающих творческие инструменты, книги, камеры и еду на деревянных поверхностях. Средний раздел с четырьмя профильными карточками команды. Дизайн минималистичный, с акцентом на визуальный контент и простоту навигации. ',
				title: 'Верстка проекта',
				technologies: ['HTML', "CSS", "JS", 'Git']
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
]

export const Works: React.FC = () => {
		return (
				<S.Works id='works'>
						<Container>
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
										{/* <WorkButtonWrapper>
				<ContactButton width='307px'>SEE ALL PROJECTS</ContactButton>
				</WorkButtonWrapper> */}
								</FlexWrapper>
						</Container>
				</S.Works>
		)
}

