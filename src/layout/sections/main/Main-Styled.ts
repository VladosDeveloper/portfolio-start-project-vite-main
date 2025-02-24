import { styled } from "styled-components"
import { Theme } from "../../../styles/Theme"
import { Font } from "../../../styles/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"

const Main = styled.section`
	margin-top: 215px;
	margin-bottom: 263px;
	position: relative;

	@media ${Theme.media.tablet} {
		& {
			margin-top: 123px;
			margin-bottom: 72px;
		}
		${Container} > ${FlexWrapper} {
			flex-wrap: wrap-reverse;
			gap: 63px;
		}
	}
`
const MainBody = styled.div`
	max-width: 50%;
	margin-bottom: 90px;


	@media ${Theme.media.tablet} {
		& > ${FlexWrapper} {
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		& {
			max-width: 100%;
			min-height: 0;
			margin-bottom: 0;
		}
	}
`

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;

	@media ${Theme.media.tablet} {
		display: none;
	}
`

const MainTitle = styled.h1`
	${Font({
		family: "'Tinos', sans-serif",
		weight: 400,
		Fmax: 20,
		Fmin: 16,
	})}
	p {
		display: none;
	}
`

const Name = styled.h2`
	${Font({
		Fmin: 40,
		Fmax: 72,
		weight: 600,
	})}
	background: ${Theme.colors.gradient};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 10px 0;
	@media ${Theme.media.mobile} {
		& {
			margin: 16px 0;
		}
	}
`

const Description = styled.span`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	letter-spacing: 0.04em;
	margin-bottom: 30px;
`
const ProfileImage = styled.img`
    max-width: 350px;
		border-radius: 50px;
    width: 100%;
`

export const S = {
	Main,
	MainBody,
	IconWrapper,
	MainTitle,
	Name,
	Description,
	ProfileImage
}
