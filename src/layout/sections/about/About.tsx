import {SectionTitle} from '../../../components/SectionTitle'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container'
import {S} from './About_Styled'
import React from "react";

export const About: React.FC = () => {
	return (
		<S.About id='about'>
			<Container>
				<S.AboutBody>
					<SectionTitle marginBottom='20px'>Обо мне</SectionTitle>
					<FlexWrapper alignItems='flex-start' justify='flex-start'>
						<S.Description>
							Я — веб-разработчик, специализируюсь на создании современных и
							удобных интерфейсов. Владею React, JavaScript, TypeScript, HTML, CSS и Styled-Components.
							Постоянно совершенствую свои навыки и изучаю новые технологии, чтобы создавать эффективные и
							производительные веб-приложения. Веду активный образ жизни и стремлюсь к постоянному
							развитию как в профессиональной сфере, так и за её пределами.
						</S.Description>
					</FlexWrapper>
				</S.AboutBody>
			</Container>
		</S.About>
	)
}

