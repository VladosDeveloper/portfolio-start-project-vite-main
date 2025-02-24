import { styled } from "styled-components";

type FlexWrapperPropsType = {
	direction?: string
	justify?: string
	alignItems?: string
	wrap?: string
	gap?: string
	height?: string

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
	display: flex;
	flex-direction: ${props => props.direction || undefined};
	justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.alignItems || "stretch"};
    flex-wrap: ${props => props.wrap || "no-wrap"};
    gap: ${props => props.gap || "0"};
	height: ${props => props.height || "100%"}
`