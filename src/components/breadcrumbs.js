import React from "react"
import { Breadcrumbs as Bc } from '@material-ui/core'
//import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import HomeIcon from '@material-ui/icons/Home'

const Breadcrumbs = (props) => {
    return (
        <div className="pageBreadcrumbs" style={{ display: "none" }}>
            <Bc aria-label="breadcrumb" separator={` / `}>
                <Link color="inherit" to="/">
                    Главная
                </Link>
                {props.children}
            </Bc>
        </div>
    )
}

export default Breadcrumbs
