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

const KodiPage = () => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">Услуги кодирования от алкоголизма</Typography>
                </Breadcrumbs>

                <h2>Кодирование от алкоголизма</h2>
                <p>Алкогольная кодировка — это завершающий этап лечения в стационаре и хорошее профилактическое средство от запоев. Ее нужно проводить, когда продукты распада этанола полностью выведены из организма.</p>
                <p>В нашем наркологическом центре сделать кодировку от алкоголизма недорого и анонимно может каждый. Учитывая риски, противопоказания, особенности клинической ситуации, мы составим ту схему лечения, которая подойдет и не вызовет осложнений со стороны работы внутренних органов. </p>
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

export default KodiPage
