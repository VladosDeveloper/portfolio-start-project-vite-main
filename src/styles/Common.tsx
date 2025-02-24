import { Theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    fontSize?: number
    letterSpacing?: string
    Fmin?: number
    Fmax?: number
}

export const Font = ({
	family,
	weight,
	color,
	lineHeight,
	Fmax,
	Fmin,
	letterSpacing,
}: FontPropsType) => `
    font-family: ${family || 'Montserrat'};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.font};
    line-height: ${lineHeight || 1.2};
    letter-spacing: ${letterSpacing || '0,04em'};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
