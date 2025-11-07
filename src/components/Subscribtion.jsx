import Title from "./generals/Title"
import Text from "./generals/Text"
import Span from "./generals/Span"
import ActionButton from "./generals/ActionButton"
import Input from "./generals/Input"
import { Form } from "react-router-dom"

function Subscribtion() {
    return (
        <div className="bg-[#cbcbcb33] py-11 w-full">
            <Title
                variant="h1">Подписывайся<br/>на наши обновления</Title>
            <Text>Узнай первым о старте<br/>скидок и специальных предложений!</Text>
            <Form method="POST" action="/"
                className="flex flex-row justify-center items-center gap-3">
                <Input type="email" name="email" placeholder="Введите email"/>
                <ActionButton type="submit">Подписаться</ActionButton>
            </Form>
            <Span>Подписываясь рассылку, вы соглашаетесь<br />с <a href="#">Политикой конфиденциальности</a>.</Span>
        </div>
    )
}

export default Subscribtion
