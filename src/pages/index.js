import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Block from "../components/block"
import Content from "../components/content"
import Map2gis from "../components/interactiv/map2gis"
import Sidemenu from "../components/interactiv/sidemenu"
import Uslugi from "../components/interactiv/uslugi"

import CallIcon from '@material-ui/icons/Call'
import MapIcon from '@material-ui/icons/Map'
import EmailIcon from '@material-ui/icons/Email'

// disable warning
import { setConfig } from 'react-hot-loader'
setConfig({
    showReactDomPatchNotification: false
})

const MainPage = () => {
    return (
        <Layout>
            <Content>
                <p>Специалисты подсчитали, что в связи с режимом самоизоляции, в России очень сильно повысился спрос на алкогольные напитки.</p>
                <p>Если человек начал понимать, что он употребляет алкоголя выше нормы, то ему стоит начать контролировать себя. Если этого не делать, то обычный бокал вина за ужином может перерасти в настоящий алкоголизм.</p>
                <p>Как только человек начинает искать для себя глупые поводы выпить, то это уже является первым признаком, что ситуация начинает выходить из под контроля.</p>
                <p>Лучше не пускать все на самотек и сразу же обращаться к специалистам, чтобы быстро и без каких-либо последствий устранить первые признаки алкогольной зависимости. В противном случае придется потратить несколько лет на избавление от тяжелого алкоголизма.</p>
            </Content>

            <Sidebar>
                <Block>
                    <b>Дополнительная информация</b>
                    <Sidemenu />
                </Block>
                <Block>
                    <b>Наш адрес</b>
                    <p>
                        <div class="txtIconed"><MapIcon /><span>Республика Бурятия,<br/>Улан-Удэ,<br/>пр.Строителей, д.12</span></div>
                        <div class="txtIconed"><CallIcon /><span>+7 (3012) 45-68-45</span></div>
                        <div class="txtIconed"><EmailIcon /><span><a href="mailto:info@dianmed.ru">info@dianmed.ru</a></span></div>
                    </p>
                    
                    
                </Block>

            </Sidebar>

            <Uslugi/>

            <Map2gis />

        </Layout>
    )
}

export default MainPage
