import { styled } from 'styled-components'
import { Theme } from '../../../styles/Theme'

const Works = styled.section`
	margin-bottom: 154px;
	position: relative;
	
	& > div {
        max-height: 47rem;
		height: 100%;
		overflow: hidden;
		transition: all 0.2s linear;
	}
	& > div.allContent {
		max-height: fit-content;
        transition: all 0.2s linear;
	}
`
const WorkButtonWrapper = styled.article`
	display: flex;
	justify-content: center;
	margin-top: 37px;
`

const Work = styled.article`
	max-width: 522px;
	width: 100%;
	background-color: ${Theme.colors.cardBackgroundColor};
`

const WorkWrapper = styled.div`
	padding: 29px 9px 31px 26px;
`

const Image = styled.img`
	width: 100%;
	height: 388px;
	object-fit: contain;
`
const WorksButton = styled.span`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 10px;
	line-height: 1.4;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	text-align: center;
	border-radius: 4px;
	padding: 8px 16px;
	height: 30px;
	color: #1f2626;
	background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
`

const Title = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 20px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: ${Theme.colors.cardTitleText};
	margin-bottom: 11px;
`

const Text = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	letter-spacing: 0.04em;
	margin-top: 19px;
`

export const S = {
	Works,
	Work,
	WorkWrapper,
	Image,
	WorksButton,
	Title,
	Text,
	WorkButtonWrapper,
}
