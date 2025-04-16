import {FlexWrapper} from '../../../../components/FlexWrapper'
import {S} from '../Works_Styled'
import React from "react";

type WorkPropsType = {
	title: string
	text: string
	src: string
	technologies: string[]
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
	return (
		<S.Work>
			<S.Image alt='' src={props.src}/>
			<S.WorkWrapper>
				<S.Title>{props.title}</S.Title>
				<FlexWrapper gap='10px' wrap='wrap'>
					{props.technologies.map((t, i) => {
						return <S.WorksButton key={i}>{t}</S.WorksButton>
					})}
				</FlexWrapper>
				<S.Text>{props.text}</S.Text>
			</S.WorkWrapper>
		</S.Work>
	)
}

