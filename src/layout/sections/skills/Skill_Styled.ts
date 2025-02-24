import { styled } from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Theme } from "../../../styles/Theme"
import { SectionTitle } from "../../../components/SectionTitle"
import { Font } from "../../../styles/Common"

const Skills = styled.section`
	margin-bottom: 140px;
	position: relative;

	@media ${Theme.media.tablet} {
		${FlexWrapper} {
			gap: 45px;
		}
		${SectionTitle} {
			margin-bottom: 46px;
		}
	}
`
const SkillsBody = styled.div`
	max-width: 100%;
`

const SkillWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
`

const Skill = styled.div`
	max-width: 120px;
	min-height: 164px;

	@media ${Theme.media.tablet} {
		& {
			max-width: 84px;
			min-height: 120px;
		}
		svg {
			width: 84px;
			height: 88px;
		}
		${SkillWrapper} {
			gap: 16px;
		}
	}
`

const SkillTitle = styled.h3`
	${Font({
		weight: 400,
		Fmax: 16,
		Fmin: 12,
		letterSpacing: '0.14em',
	})}
	text-transform: uppercase;
	text-align: center;
`


export const S = {
	Skills,
	SkillsBody,
	Skill,
	SkillTitle,
	SkillWrapper,
}