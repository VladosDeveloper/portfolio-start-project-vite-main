import { Container } from '../../components/Container'
import { Menu } from './Menu/Menu'
import { S } from './Menu_Styled'
import { MobileHeader } from './mobileHeader/MobileHeader'
import React from "react";

export const Header: React.FC = () => {
	return (
		<S.Header>
			<Container>
				<Menu />
				<MobileHeader />
			</Container>
		</S.Header>
	)
}
