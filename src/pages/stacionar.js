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

const Page = () => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">Услуги стационарного лечения</Typography>
                </Breadcrumbs>

                <h2>Стационарное лечение</h2>
                <p></p>
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

export default Page
