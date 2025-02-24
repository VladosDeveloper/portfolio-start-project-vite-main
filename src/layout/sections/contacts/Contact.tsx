import { SectionTitle } from '../../../components/SectionTitle'
import { ContactButton } from '../../../components/ContactButton'
import { Container } from '../../../components/Container'
import { S } from './Contact_Styled'
import React from "react";

export const Contact: React.FC = () => {
	return (
		<S.Contact id='contact'>
			<Container>
				<SectionTitle marginBottom='28px'>Связаться</SectionTitle>
				<S.Form>
					<S.Label htmlFor='name'>
						Имя
						<S.Field placeholder='Name' id='name' required type='text' />
						<S.RequiredText>Поле обязательно для заполнения</S.RequiredText>
					</S.Label>
					<S.Label htmlFor='email'>
						Email
						<S.Field placeholder='Email' id='email' required type='email' />
						<S.RequiredText>Поле обязательно для заполнения</S.RequiredText>
					</S.Label>
					<S.Label htmlFor='message'>
						Ваше сообщение
						<S.Field as={'textarea'} placeholder='Ваше сообщение' id='message' />
					</S.Label>
					<ContactButton>Отправить</ContactButton>
				</S.Form>
			</Container>
		</S.Contact>
	)
}
