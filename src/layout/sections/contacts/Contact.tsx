import { SectionTitle } from '../../../components/SectionTitle'
import { ContactButton } from '../../../components/ContactButton'
import { Container } from '../../../components/Container'
import { S } from './Contact_Styled'
import React, {ElementRef, FormEvent, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {SuccessMessage} from "../../../components/SuccessMessage.tsx";

export const Contact: React.FC = () => {
		const [showHide,setShowHide] = useState(false);
		
		if (showHide) {
				setTimeout(() => setShowHide(false), 5000)
		}
		
		const form = useRef<ElementRef<'form'>>(null);
		
		const sendEmail = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				
				if (!form.current) {
						return
				}
				
				emailjs
						.sendForm('service_e120c1o', 'template_vb0lnx2', form.current, {
								publicKey: 'i7Ul-tVrFkIXiBL8g',
						})
						.then(
								() => {
										setShowHide(true)
								},
								(error) => {
										console.log('FAILED...', error.text);
								},
						);
				e.currentTarget.reset()
		};
		
	return (
		<S.Contact id='contact'>
			<Container>
				<SectionTitle marginBottom='28px'>Связаться</SectionTitle>
				<S.Form ref={form} onSubmit={sendEmail}>
					<S.Label htmlFor='name'>
						Имя
						<S.Field placeholder='Name' id='name' required type='text' name={'user_name'}/>
						<S.RequiredText>Поле обязательно для заполнения</S.RequiredText>
					</S.Label>
					<S.Label htmlFor='email'>
						Email
						<S.Field placeholder='Email' id='email' required type='email' name={'user_email'}/>
						<S.RequiredText>Поле обязательно для заполнения</S.RequiredText>
					</S.Label>
					<S.Label htmlFor='message'>
						Ваше сообщение
						<S.Field as={'textarea'} placeholder='Ваше сообщение' id='message' name={'message'}/>
					</S.Label>
					<ContactButton>Отправить</ContactButton>
				</S.Form>
					<SuccessMessage showHide={showHide} />
			</Container>
		</S.Contact>
	)
}
