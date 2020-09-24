import React from "react"

import "./layout.scss"
import CssBaseline from '@material-ui/core/CssBaseline'

import Topline from "./topline"
import Page from "./page"
import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"


// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(()=>resolve(), ms)
//     })
// }

const Shtorka = () => (<div className="shtorka w"></div>)

const Layout = (props) => {

    let {children} = props

    let [init, setInit] = React.useState(false)

    React.useEffect(() => {
        if(!init){
        }
        setInit(true)
    }, [init])

    return (
        <div className="pageWrapper">
            <CssBaseline/>
            <Shtorka/>
            
            <Topline/>
            
            <Page>
                <Header siteTitle="Дианмед"/>
                <Menu/>
                <div className="pageMain">
                    {children}
                </div>
                <Footer/>
            </Page>
            
        </div>
    )
}

export default Layout

