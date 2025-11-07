import Title from "./Title"
import Text from "./Text"
import Span from "./Span"
import ActionButton from "./ActionButton"
import Input from "./Input"
import { Form } from "react-router-dom"

function Subscribtion() {
    return (
        <div className="bg-[#cbcbcb33] py-11 w-full">
            <Title
                variant="h1">Подписывайся<br/>на наши обновления</Title>
            <Text>Узнай первым о старте<br/>скидок и специальных предложений!</Text>
            <form method="POST" action="/"
                className="flex flex-row justify-center items-center gap-3">
                <Input type="text" placeholder="Введите email"/>
                <ActionButton type="submit">Подписаться</ActionButton>
            </form>
            <Span>Подписываясь рассылку, вы соглашаетесь<br />с <a href="#">Политикой конфиденциальности</a>.</Span>
        </div>
    )
}

export default Subscribtion
