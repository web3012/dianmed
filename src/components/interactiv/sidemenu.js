import React from "react"
import { Link } from 'gatsby'

const Sidemenu = () => {
    return (
        <ul>
            <li><Link href="/about">О нашем центре</Link></li>
            <li><Link href="/price">Узнать стоимость</Link></li>
            <li><Link href="/reviews">Отзывы и предложения</Link></li>
            <li><Link href="/questions">Задать вопрос</Link></li>
        </ul>
    )
}

export default Sidemenu
