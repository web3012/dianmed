import React from "react"
//import {pageMiddle} from "./page.module.scss"
import "./page.scss"
import Container from '@material-ui/core/Container'
//import Grid from '@material-ui/core/Grid'

const Page = (props) => {
    
    let {children} = props

    return (
        <Container maxWidth="md" className="pageMiddle">
            <div className="shadowLeft"></div>
            <div className="shadowRight"></div>

            {children}
        </Container>
    )
}

export default Page