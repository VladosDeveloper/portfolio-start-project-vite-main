import iconsSprite from '../../assets/images/linkedin.svg'

type IconPropsType = {
	iconSrc: string
	width?: string
	height?: string
	viewbox?: string
	fill?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		<svg
			width={props.width || '120'}
			height={props.height || '120'}
			fill={props.fill || 'none'}
			viewBox={props.viewbox || '0 0 120 120'}
			xmlns='http://www.w3.org/2000/svg'
		>
			<use xlinkHref={`${iconsSprite}#${props.iconSrc}`} />
		</svg>
	)
}


