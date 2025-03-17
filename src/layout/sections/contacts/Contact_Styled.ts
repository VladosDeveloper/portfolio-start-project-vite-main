import {styled} from "styled-components"
import {Theme} from "../../../styles/Theme"

const Contact = styled.section`
    margin-bottom: 190px;
`
const Form = styled.form`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin: 0 auto;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 14px;
    position: relative;

    & + & {
        margin-top: 3px;
    }

`

const RequiredText = styled.span`
    content: 'input required';
    position: absolute;
    display: inline-block;
    right: 0;
    bottom: -20px;
    height: 15px;
    z-index: 1;
    color: #c05353;
`

const Field = styled.input`
    position: relative;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid #ffff;
    color: ${Theme.colors.font};
    border-radius: 6px;
    max-width: 100%;
    height: 48px;
    background-color: transparent;
    padding: 15px 5px 16px 18px;
    margin-top: 6px;

    &#message {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        width: 100%;
        height: 168px;
        border: 1px solid transparent;
        border-radius: 6px;
        background: linear-gradient(
                ${Theme.colors.primaryBG},
                ${Theme.colors.primaryBG} 0
        ) padding-box,
        linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%) border-box;
        overflow: auto;
        resize: none;
    }
`
export const S = {
		Contact,
		Form,
		Label,
		Field,
		RequiredText,
}
