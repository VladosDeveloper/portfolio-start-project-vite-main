import { Icon } from '../../../../components/Icon/Icon'
import { S } from '../Skill_Styled'

type SkillPropsType = {
	iconId: string
	skillTitle: string
	skillViewBox?: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
	return (
		<S.Skill>
			<S.SkillWrapper>
				<Icon iconSrc={props.iconId} viewbox={props.skillViewBox} />
				<S.SkillTitle>{props.skillTitle}</S.SkillTitle>
			</S.SkillWrapper>
		</S.Skill>
	)
}

