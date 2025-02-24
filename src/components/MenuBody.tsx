import { Link } from 'react-scroll'
import { S } from '../layout/header/Menu_Styled'
import { ContactButton } from './ContactButton'
import React from "react";

const NavData = [
	{
		link: 'works',
		projectName: 'Проекты',
	},
	{
		link: 'about',
		projectName: 'Обо мне',
	},
	{
		link: 'skills',
		projectName: 'Навыки',
	},
]

export const MenuBody: React.FC = () => {
	return (
		<>
			<S.NavLink smooth={true} offset={-306} to='home'>
				Домой
			</S.NavLink>
			<S.NavList>
				{NavData.map(s => {
					return (
						<S.NavListItem>
							<S.NavLink smooth={true} offset={-100} to={s.link}>
								{s.projectName}
							</S.NavLink>
						</S.NavListItem>
					)
				})}
				<S.NavListItem>
					<ContactButton smooth={true} offset={-100} as={Link} to='contact'>
						Связаться
					</ContactButton>
				</S.NavListItem>
			</S.NavList>
		</>
	)
}
