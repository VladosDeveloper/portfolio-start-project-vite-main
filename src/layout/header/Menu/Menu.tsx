import { FlexWrapper } from '../../../components/FlexWrapper'
import { MenuBody } from '../../../components/MenuBody'
import { S } from '../Menu_Styled'
import React from "react";

export const Menu: React.FC = () => {
	return (
		<S.Menu>
			<FlexWrapper justify='space-between' alignItems='center'>
				<MenuBody closeMenu={() => {}}/>
			</FlexWrapper>
		</S.Menu>
	)
}
