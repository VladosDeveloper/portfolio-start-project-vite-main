import { styled } from 'styled-components'
import { Theme } from '../styles/Theme'

type ContactButtonPropsType = {
	borderRadius?: string
	width?: string
}

export const ContactButton = styled.button<ContactButtonPropsType>`
	border-radius: ${props => props.borderRadius || '6px'};
	border: none;
	padding: 12px 20px 13px 20px;
	height: 45px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 16px;
	text-align: center;
	/* letter-spacing: 1.5px; */
	color: ${Theme.colors.fontForButton};
	cursor: pointer;
	background-image: ${Theme.colors.gradient};
	width: ${props => props.width};
	transition: all ${Theme.animations.transition};

	&:hover {
		letter-spacing: 1.1px;
	}
`
