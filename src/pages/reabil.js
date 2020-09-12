import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Sidebar from "../components/sidebar"
import Sidemenu from "../components/interactiv/sidemenu"
import Block from "../components/block"
import Breadcrumbs from '../components/breadcrumbs'
import Callback from '../components/interactiv/callback'
import Variants from '../components/interactiv/variants'
import Typography from '@material-ui/core/Typography'
//import { Link } from 'gatsby'

const ReabilPage = () => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">Услуги реабилитации</Typography>
                </Breadcrumbs>

                <h2>Реабилитация<br/>нарко и алко зависимых</h2>
                <p>Реабилитация – это восстановление психического и физического здоровья зависимых. В основном с ними работают психологи, наркологи, психотерапевты, аддиктологи и психиатры, также пациенты могут взаимодействовать друг с другом.</p>
                <p></p>
                <p>
                    <Callback />
                </p>

            </Content>

            <Sidebar>
                <Block>
                    <b><b>Дополнительная информация</b></b>
                    <Sidemenu />
                </Block>
                
            </Sidebar>

            <Variants />

        </Layout>
    )
}

export default ReabilPage
