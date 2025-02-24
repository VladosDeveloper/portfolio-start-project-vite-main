import { styled } from "styled-components";

type SectionTitlePropsType = {
	marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
	font-weight: 600;
	font-size: 24px;
	line-height: 1;
	letter-spacing: 0.04em;
	text-align: left;
	margin-bottom: ${props => props.marginBottom || "0"}
`