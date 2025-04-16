import { styled } from 'styled-components'
import { Theme } from '../../styles/Theme'
import { Link } from 'react-scroll'

const Header = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 999;
	background-color: ${Theme.colors.primaryBG};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 100px;
`

const Menu = styled.nav`
	min-width: 100%;
	@media ${Theme.media.mobile} {
		& {
			display: none;
		}
	}
`

const NavList = styled.ul`
	display: flex;
	align-items: stretch;
	gap: 60px;

	@media ${Theme.media.tablet} {
		& {
			gap: 32px;
		}
	}
`

const NavLink = styled(Link)`
	position: relative;
	font-weight: 500;
	font-size: 16px;
	color: ${Theme.colors.font};
	display: flex;
	align-items: center;
	height: 100%;
	padding-bottom: 15px;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -110px;
		border-radius: 4px;
		width: 100%;
		height: 11px;
		background: ${Theme.colors.gradient};
		transition: ${Theme.animations.transition};
	}
	&:hover {
		&::after {
			background: ${Theme.colors.gradient};
			bottom: 0;
		}
		cursor: pointer;
		transition: ${Theme.animations.transition};
	}
`

const NavListItem = styled.li`
`

export const S = {
	Header,
	Menu,
	NavList,
	NavListItem,
	NavLink,
}
