import { styled } from "styled-components"

const About = styled.section`
	min-height: 169px;
	margin-bottom: 120px;
	`

const AboutBody = styled.div`
	padding-left: 29px;
`

const Description = styled.p`
	position: relative;
	font-size: 18px;
	max-width: 843px;
	min-height: 123px;
	line-height: 1.5;
	letter-spacing: 0.04em;
	&::after {
		content: '';
		position: absolute;
		border-radius: 2px;
		width: 5px;
		height: 116px;
		background: linear-gradient(#00f5a0 0%, #00d9f5 100%);
		transform: rotate(180deg);
		left: -17px;
		top: 5px;
	}
`

export const S = {
	About,
	AboutBody,
	Description,
}
