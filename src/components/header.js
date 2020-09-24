import React from "react"

import "./header.scss"
//import Container from '@material-ui/core/Container'
//import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import { Helmet } from "react-helmet"

// import InstagramIcon from '@material-ui/icons/Instagram'
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import TwitterIcon from '@material-ui/icons/Twitter'
// import PhoneIcon from '@material-ui/icons/Phone'
// import MenuIcon from '@material-ui/icons/Menu'


const Header = (props) => {
    let { siteTitle } = props

    return (

        <React.Fragment>
            <Helmet
                style={[{
                    "cssText": `
                        .pageWrapper  {
                            display: none;
                        }
                    `
                }]} />
                
            <Helmet>
                <meta charSet="utf-8" />
                <title>{siteTitle}</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="stylesheet" href="/start.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>

            <header className="pageHeader">
                <a href="/" className="logotip"><h1>ДИАНМЕД</h1></a>
                <Hidden only={['xs', 'sm']}>

                    <div className="_txt _txt1">
                        <p><b>ЧАСЫ РАБОТЫ</b></p>
                        <p className="pleft40">Без обедов и выходных<br />С 8:00 до 24:00</p>
                    </div>
                </Hidden>
            </header>

        </React.Fragment>

    )

}

export default Header
// <div className="_txt _txt2">
// </div>

// <Hidden only={['xs', 'sm']}>

// </Hidden>
