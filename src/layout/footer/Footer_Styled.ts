import { styled } from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
	display: flex;
	min-height: 200px;
	background-color: ${Theme.colors.primaryBG};
	margin-bottom: 100px;
	color: ${Theme.colors.font};
`
const SocialList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 72px;

	@media ${Theme.media.mobile} {
		& {
			gap: 50px;
		}
	}
`
const SocialItem = styled.li`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	span {
		font-weight: 400;
		font-size: 12px;
		line-height: 0.9;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-align: center;
	}
`
const SocialLink = styled.a`
	color: ${Theme.colors.font};
	padding: 10px;
	cursor: pointer;
`
const References = styled.div`
	font-weight: 400;
	font-size: 14px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	/* gap: 48px; */

	@media ${Theme.media.mobile} {
		gap: 0;
		margin: 10px 0;
	}
`
const Copyright = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 1.9;
	letter-spacing: 0.04em;
	text-align: center;
`
export const S = {
	Footer,
	SocialList,
	SocialItem,
	SocialLink,
	References,
	Copyright,
}
