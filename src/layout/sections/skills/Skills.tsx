import {FlexWrapper} from '../../../components/FlexWrapper'
import {SectionTitle} from '../../../components/SectionTitle'
import {Skill} from './skill/Skill'
import {Container} from '../../../components/Container'
import {S} from './Skill_Styled'
import {Fade} from 'react-awesome-reveal'
import React from "react";

const SkillsData = [
		{
				iconId: 'javascript',
				skillTitle: 'JavaScript',
		},
		{
				iconId: 'typeScript',
				skillTitle: 'TypeScript',
		},
		{
				iconId: 'jest',
				skillTitle: 'Jest',
		},
		
		{
				iconId: 'react',
				skillTitle: 'React JS',
		},
		{
				iconId: 'reactNative',
				skillTitle: 'React Native',
				skillViewBox: '15 0 125 105',
		},
		{
				iconId: 'styledComponent',
				skillTitle: 'Styled Component',
		},
		{
				iconId: 'redux',
				skillTitle: 'Redux',
		},
		{
				iconId: 'git',
				skillTitle: 'Git',
				skillViewBox: '0 0 50 50',
		},
]

export const Skills: React.FC = () => {
		return (
				<S.Skills id='skills'>
						<Container>
								<SectionTitle marginBottom='28px'>Навыки</SectionTitle>
								<S.SkillsBody>
										<FlexWrapper wrap='wrap' justify='center' gap='65px 118px'>
												<Fade>
														{SkillsData.map((s, i) => {
																return (
																		<Skill
																				key={i}
																				iconId={s.iconId}
																				skillTitle={s.skillTitle}
																				skillViewBox={s.skillViewBox}
																		/>
																)
														})}
												</Fade>
										</FlexWrapper>
								</S.SkillsBody>
						</Container>
				</S.Skills>
		)
}

