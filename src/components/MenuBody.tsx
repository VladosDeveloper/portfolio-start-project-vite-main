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

type MenuBodyProps = {
		closeMenu: () => void
}

export const MenuBody: React.FC<MenuBodyProps> = ({closeMenu} ) => {
	return (
		<>
			<S.NavLink smooth={true} offset={-306} to='home' onClick={closeMenu}>
				Домой
			</S.NavLink>
			<S.NavList>
				{NavData.map((s,i) => {
					return (
						<S.NavListItem key={i} >
							<S.NavLink smooth={true} offset={-100} to={s.link} onClick={closeMenu}>
								{s.projectName}
							</S.NavLink>
						</S.NavListItem>
					)
				})}
				<S.NavListItem>
					<ContactButton smooth={true} offset={-100} as={Link} to='contact' onClick={closeMenu}>
						Связаться
					</ContactButton>
				</S.NavListItem>
			</S.NavList>
		</>
	)
}
