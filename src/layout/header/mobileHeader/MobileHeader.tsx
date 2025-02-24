import { css, styled } from 'styled-components'
import { Theme } from '../../../styles/Theme'
import { MenuBody } from '../../../components/MenuBody'
import { useState } from 'react'

export const MobileHeader = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const OnBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
		const closeMenu = () => {
				setMenuIsOpen(false)
		}

	return (
		<StyledMobileHeader>
			<BurgerButton isOpen={menuIsOpen} onClick={OnBurgerBtnClick}>
				<span></span>
			</BurgerButton>
			<MobileHeaderPopup isOpen={menuIsOpen}>
				<MenuBody closeMenu={closeMenu}/>
			</MobileHeaderPopup>
		</StyledMobileHeader>
	)
}

const StyledMobileHeader = styled.header`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.08333;
    letter-spacing: 0.04em;
    display: none;

    @media ${Theme.media.mobile} {
        display: block;
    }
`

const MobileHeaderPopup = styled.div<{ isOpen: boolean }>`
	position: fixed;
	background-color: ${Theme.colors.cardBackgroundColor};
	top: 0;
	left: 0;
	right: 100%;
	bottom: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: ${Theme.animations.transition};
	overflow: hidden;

	ul {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 15px;
	}
	a {
		height: 3rem;
	}

	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			right: 0;
		`}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;
	width: 200px;
	height: 200px;
	top: -110px;
	right: -75px;
	z-index: 999999;
    cursor: pointer;

	span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${Theme.colors.font};
		position: absolute;
		left: 40px;
		bottom: 50px;

		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: '';
			width: 36px;
			height: 2px;
			background-color: ${Theme.colors.font};
			position: absolute;
			transform: translateY(-10px);
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: translateY(0) rotate(-45deg);
				`}
		}

		&::after {
			content: '';
			width: 30px;
			height: 2px;
			background-color: ${Theme.colors.font};
			position: absolute;
			transform: translateY(10px);
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: translateY(0) rotate(45deg);
					width: 36px;
				`}
		}
	}
`
