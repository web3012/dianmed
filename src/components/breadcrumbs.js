import React from "react"
import "./breadcrumbs.scss"
import { Breadcrumbs as Bc } from '@material-ui/core'
//import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import HomeIcon from '@material-ui/icons/Home'

const Breadcrumbs = (props) => {
    return (
        <Bc aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} className="pageBreadcrumbs">
            <Link color="inherit" to="/">
                <HomeIcon />&nbsp;Главная
            </Link>
            {props.children}
        </Bc>
    )
}

export default Breadcrumbs
