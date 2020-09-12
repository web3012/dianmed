import React from "react"
import "./uslugi.scss"
import {Link} from 'gatsby'

const Uslugi = () => {
    return (
        <div className="intUslugi">
            <Link href="/nadomu" className="p1">
                <img src="/images/foto/home-doctor.png" alt=""/>
                <span>Врач на дом</span>
            </Link>
            <Link href="/stacionar" className="p2">
                <img src="/images/foto/stationary.png" alt=""/>
                <span>Стационарное лечение</span>
            </Link>
            <Link href="/reabil" className="p3">
                <img src="/images/foto/rehab.png" alt=""/>
                <span>Реабилитация</span>
            </Link>
            <Link href="/blist" className="p4">
                <img src="/images/foto/list.png" alt=""/>
                <span>Больничный лист</span>
            </Link>
        </div>
    )
}

export default Uslugi
