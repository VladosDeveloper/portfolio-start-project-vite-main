import React, {useEffect, useState} from 'react'
import {Icon} from '../Icon/Icon'
import {animateScroll as scroll} from 'react-scroll'
import {Theme} from '../../styles/Theme'
import {AnimatePresence, motion} from 'motion/react'
import {styled} from 'styled-components'

export const GoTop: React.FC = () => {
	const [showBtn, setShowBtn] = useState(false)
	
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setShowBtn(true)
			} else {
				setShowBtn(false)
			}
		})
	}, [])
	
	return (
		<>
			<AnimatePresence>
				{showBtn && (
					<motion.div
						style={{position: 'fixed'}}
						layout
						initial={{bottom: '-100px', right: '20px'}}
						animate={{bottom: '20px', right: '20px'}}
						exit={{bottom: '-100px', right: '20px'}}
					>
						<StyledGoTopBtn
							onClick={() => {
								scroll.scrollToTop()
							}}
						>
							<Icon iconSrc='top' width='20' height='20' viewbox='3 10 18 3'/>
						</StyledGoTopBtn>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

const StyledGoTopBtn = styled.button`
    box-shadow: 2px 2px 32px 0 rgba(255, 255, 255, 0.312),
    inset 0 0 4px 2px rgba(5, 5, 5, 0.25);
    background: #f5f2fd;
    padding: 6px 8px;
    z-index: 222;
    border-radius: 30px;
    cursor: pointer;
    transition: ${Theme.animations.transition};
`
