import {FlexWrapper} from '../../../components/FlexWrapper'
import {ContactButton} from '../../../components/ContactButton'
import {Icon} from '../../../components/Icon/Icon'
import {Container} from '../../../components/Container'
import {S} from './Main-Styled'
import Typewriter from 'typewriter-effect'
import {Link} from 'react-scroll'
import mainImage from '../../../assets/images/profileImage.webp'
import React from "react";

export const Main: React.FC = () => {
	return (
		<S.Main id='home'>
			<Container>
				<FlexWrapper alignItems='flex-start' justify='space-around' gap='78px'>
					<S.MainBody>
						<FlexWrapper
							direction='column'
							alignItems='flex-start'
							justify='flex-start'
						>
							<S.MainTitle>
								<p>A WEB DEVELOPER.</p>
								<Typewriter
									options={{
										strings: ['A WEB DEVELOPER.'],
										autoStart: true,
										loop: true,
									}}
								/>
							</S.MainTitle>
							<S.Name>Влад Юреня</S.Name>
							<S.Description>
								Создаю с душой, расту без границ.
								Мой код — мой путь. Мой путь — развитие.
								Вперёд, к лучшему, строчка за строчкой.
							</S.Description>
							<ContactButton as={Link} to='contact' smooth={true} offset={-100}>
								Связаться
							</ContactButton>
						</FlexWrapper>
					</S.MainBody>
					<S.ProfileImage src={mainImage} alt="My profile image"/>
				</FlexWrapper>
				<S.IconWrapper as={Link} to='about' smooth={true} offset={-100}>
					<Icon
						iconSrc='arrow'
						height='50px'
						width='50px'
						viewbox='0 0 50 10'
					/>
				</S.IconWrapper>
			</Container>
		</S.Main>
	)
}
