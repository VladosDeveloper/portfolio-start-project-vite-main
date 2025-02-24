import { styled } from "styled-components";
import { Theme } from "../styles/Theme";


export const Container = styled.div`
    max-width: 1110px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;


    @media ${Theme.media.mobile} {
        & {
            padding: 0 25px;
        }
    }
`