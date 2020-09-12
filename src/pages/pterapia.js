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

const pterPage = () => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">Услуги психотерапии</Typography>
                </Breadcrumbs>

                <h2>Психотерапия<br/>всех видов зависимостей</h2>
                <p>Зависимость – это болезнь, которая имеет биопсихосоциальную природу, так как вызывает нарушения сразу в трех сферах – в здоровье, в психике человека и его в его положении в социуме. Зависимостей существует очень много: алкогольная, наркотическая, никотиновая и более «социально приемлемые» - привычка заедать тревогу, нездоровая тяга к сладкому и другие.</p>
                <p>В нашем центре есть много методов лечения зависимостей – от работы с психологом и психотерапевтом до гипноза, кодирования, капельниц и медикаментозной терапии. И, что важно, человек получает нужную поддержку на этом непростом пути. Не упустите время помочь себе или близким – звоните!</p>
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

export default pterPage
