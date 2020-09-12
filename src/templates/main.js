import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Block from "../components/block"
import Content from "../components/content"
import Map2gis from "../components/interactiv/map2gis"
import Sidemenu from "../components/interactiv/sidemenu"

import CallIcon from '@material-ui/icons/Call'
import MapIcon from '@material-ui/icons/Map'
import EmailIcon from '@material-ui/icons/Email'

import Breadcrumbs from '../components/breadcrumbs'
import Typography from '@material-ui/core/Typography'

// disable warning
import { setConfig } from 'react-hot-loader'
import { checkPropTypes } from "prop-types"
setConfig({
    showReactDomPatchNotification: false
})

const MainTemplate = (props) => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">{props.breadcrumbs}</Typography>
                </Breadcrumbs>

                {props.children}
                

            </Content>

            <Sidebar>
                <Block>
                    <b>Дополнительная информация</b>
                    <Sidemenu />


                </Block>
                <Block>
                    <b>Наш адрес</b>
                    <p>
                        <div class="txtIconed"><MapIcon /><span>Республика Бурятия,<br />Улан-Удэ,<br />пр.Строителей, д.12</span></div>
                        <div class="txtIconed"><CallIcon /><span>+7 (3012) 45-68-45</span></div>
                        <div class="txtIconed"><EmailIcon /><span><a href="mailto:info@dianmed.ru">info@dianmed.ru</a></span></div>
                    </p>


                </Block>

            </Sidebar>

            <Map2gis />

        </Layout>
    )
}

export default MainTemplate
