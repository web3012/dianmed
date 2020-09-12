import React from "react"
import "./menu.scss"

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Menu = (props) => {

    return (
        <div className="pageMenu">
            <div>
                <div>
                    <ul className="menu1">
                        <li><a href="/nadomu">Снятие похмелья<br/>на дому</a></li>
                        <li><a href="/kodirovanie">Кодирование<br/>от алкоголизма</a></li>
                        <li><a href="/reabil">Реабилитация<br/>нарко и алко зависимых</a></li>
                        <li><a href="/pterapia">Психотерапия всех<br/>видов зависимостей</a></li>
                        <li><a href="/vip">VIP<br/>обслуживание</a></li>
                    </ul>
                    <ul className="menu2">
                        <li><IconButton><MenuIcon/></IconButton></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu