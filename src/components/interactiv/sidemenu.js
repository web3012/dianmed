import React from "react"
import { Link } from 'gatsby'

const Sidemenu = () => {
    return (
        <ul>
            <li><Link to="/about">О нашем центре</Link></li>
            <li><Link to="/price">Узнать стоимость</Link></li>
            <li><Link to="/reviews">Отзывы и предложения</Link></li>
            <li><Link to="/questions">Задать вопрос</Link></li>
        </ul>
    )
}

export default Sidemenu
