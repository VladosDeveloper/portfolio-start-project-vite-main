import {AnimatePresence, motion} from "motion/react";
import React from "react";
import {styled} from "styled-components";

type SuccessMessageType = {
		showHide: boolean
}

export const SuccessMessage: React.FC<SuccessMessageType> = ({showHide}) => {
		return (
				<>
						<AnimatePresence>
								{showHide && (
										<motion.div
												style={{position: 'fixed'}}
												layout
												initial={{bottom: '-22%', left: '50%'}}
												animate={{bottom: '2%', left: '50%'}}
												exit={{bottom: '-22%', left: '50%'}}
										>
												<SuccessBlock>
														Success!
												</SuccessBlock>
										
										</motion.div>
								
								)}
						</AnimatePresence>
				</>
		);
};

const SuccessBlock = styled.div`

    transform: translateX(-50%);
    padding: 10px 70px;
    max-width: 300px;
    width: 100%;
    min-height: 40px;
    background-color: #2e4476;
    color: white;
    border-radius: 5px;
`
