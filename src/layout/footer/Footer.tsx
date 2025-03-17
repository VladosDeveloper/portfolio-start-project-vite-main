import {Icon} from '../../components/Icon/Icon'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'
import {S} from './Footer_Styled'
import {Link} from 'react-scroll'
import React from "react";


const SocialIconData = [
		{
				iconSrc: 'habr',
				to: 'https://career.habr.com/vladosdeveloper',
		},
		{
				iconSrc: 'linkedIn',
				to: 'https://www.linkedin.com/in/vlad-yurenya-1670b92ba/'
		},
		{
				iconSrc: 'gitHub',
				to: 'https://github.com/VladosDeveloper'
		},
]

export const Footer: React.FC = () => {
		return (
				<S.Footer>
						<Container>
								<FlexWrapper
										direction='column'
										alignItems='center'
										justify='space-between'
										wrap='wrap'
								>
										<S.SocialList>
												{SocialIconData.map((s, index) => {
														return (
																<S.SocialItem key={index} >
																		<S.SocialLink href={s.to} >
																				<Icon
																						iconSrc={s.iconSrc}
																						width='40px'
																						height='40px'
																						viewbox='0 0 40 40'
																				/>
																				<span>{s.iconSrc}</span>
																		</S.SocialLink>
																</S.SocialItem>
														)
												})}
										</S.SocialList>
										<S.References>
												<S.SocialLink as={Link} to='works' smooth={true} offset={-100}>Projects</S.SocialLink>
												<S.SocialLink as={Link} to='contact' smooth={true} offset={-100}>Contact</S.SocialLink>
										</S.References>
										<S.Copyright>WEB DEVELOPER 2024</S.Copyright>
								</FlexWrapper>
						</Container>
				</S.Footer>
		)
}

