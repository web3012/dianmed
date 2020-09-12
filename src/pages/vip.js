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

const vipPage = () => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">VIP</Typography>
                </Breadcrumbs>

                <h2>VIP обслуживание</h2>
                <p>VIP-лечение в нашем центре это наличие индивидуальной палаты, индивидуальное лечение и круглосуточным наблюдением личного доктора и психолога. Весь курс лечения максимально нацелен на скорейшее выздоровление пациента и возвращение его к нормальной жизни.</p>
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

export default vipPage