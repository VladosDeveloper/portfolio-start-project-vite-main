import { useState, useEffect } from 'react'

const isScreenTablet = 768
const isScreenMobile = 576

export const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}
		
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		width,
		isScreenMobile: width >= isScreenMobile,
		isScreenTablet: width >= isScreenTablet,
	}
}
