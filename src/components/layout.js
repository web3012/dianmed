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

const Shtorka = () => (
    <div className="shtorka" style={{
        width: "100%",
        background: "#fff",
        borderLeft: "1px solid #ccc",
        borderRight: "1px solid #ccc",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto"
    }}>
    </div>)

const Layout = (props) => {

    let { children } = props

    let [init, setInit] = React.useState(false)

    React.useEffect(() => {
        if (!init) {
        }
        setInit(true)
    }, [init])

    return (
        <React.Fragment>
            <Shtorka />
            <div className="pageWrapper">
                <CssBaseline />
                <Topline />

                <Page>
                    <Header siteTitle="Дианмед" />
                    <Menu />
                    <div className="pageMain">
                        {children}
                    </div>
                    <Footer />
                </Page>

            </div>

        </React.Fragment>
    )
}

export default Layout

