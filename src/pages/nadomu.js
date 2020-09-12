import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Sidebar from "../components/sidebar"
import Sidemenu from "../components/interactiv/sidemenu"
import Block from "../components/block"
import Breadcrumbs from '../components/breadcrumbs'
import Callback from '../components/interactiv/callback'
import Programms from '../components/interactiv/programms'
import Typography from '@material-ui/core/Typography'
//import { Link } from 'gatsby'

const NadomPage = () => {
    return (
        <Layout>
            <Content>
                <Breadcrumbs>
                    <Typography color="textPrimary">Услуги врача на дом</Typography>
                </Breadcrumbs>

                <h2>Врач на дом</h2>
                <p>
                    Мы стараемся сделать наши услуги качественнее и удобнее.
                </p>
                <img src="/images/foto/dian-droppers.jpeg" alt="Врач на дом"/>
                <p>
                    Ситуации бывают разные. Если Вы вчера позволили себе отдохнуть, дали себе волю и выпили лишнего, а сегодня ищете способ в кратчайшие сроки восстановить свое состояние.
                    Может быть у Вас серьёзная деловая встреча или просто необходимо быть в форме, мы предлагаем вызов врача нарколога на дом.
                </p>
                <p>
                    Квалифицированный врач подберет оптимальную программу восстановления с наименьшим ущербом для организма и окажет необходимую помощь прямо у Вас на дому
                </p>
                <p>
                    <Callback />
                </p>

            </Content>

            <Sidebar>
                <Block>
                    <b><b>Дополнительная информация</b></b>
                    <Sidemenu />
                </Block>
                <Block>
                    <div className="promo1">
                        <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="lifesaver"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"></path></svg>
                        <span>Безопасно</span>
                    </div>
                    <p>
                        Сбалансированный комплекс питательных веществ
                    </p>
                </Block>

                <Block>
                    <div className="promo1">
                        <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>
                        <span>Анонимно</span>
                    </div>
                    <p>
                        Конфиденциальность и защита персональных данных
                    </p>
                </Block>

                <Block>
                    <div className="promo1">
                        <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="happy"><circle cx="13" cy="7" r="1"></circle><circle cx="7" cy="7" r="1"></circle><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"></circle><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"></path></svg>
                        <span>Эффективно</span>
                    </div>
                    <p>
                        Достаточно одного вызова и вы снова в форме
                    </p>
                </Block>

                
            </Sidebar>

            <Programms />

        </Layout>
    )
}

export default NadomPage
