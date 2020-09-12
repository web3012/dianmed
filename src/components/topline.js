import React from "react"
import "./topline.scss"

import withWidth from '@material-ui/core/withWidth'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CallIcon from '@material-ui/icons/Call'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'

const Topline = (props) => {

    let width = props.width

    return (
        <div className="topline">

            <Container maxWidth="md" className="pageTopline">
                <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                    <Grid item md={6} className="_left">
                        <a href="/" class="_t"><CallIcon/> Вызвать врача на дом</a>
                    </Grid>

                    <Grid item md={6} className="_right">
                        &nbsp;/&nbsp;<a href="/"><WhatsAppIcon/> WHATSAPP</a>&nbsp;/&nbsp;<a href="/contacts" title="Все контакты"><CallIcon/> +7 (924) 652-60-60</a>&nbsp;/&nbsp;<DesktopWindowsIcon/> {width}
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default withWidth()(Topline)