import React from "react"
import "./footer.scss"
import CallIcon from '@material-ui/icons/Call'
//import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import MapIcon from '@material-ui/icons/Map'
import EmailIcon from '@material-ui/icons/Email'

const Footer = () => (
    <div className="pageFooter">
        <div className="_txt">
        <p>&copy; 2020<br/>ДИАН - Центр практической наркологии.<br/>Все права защищены.</p>
        <p>
            <MapIcon/> г. Улан-удэ, пр. Строителей, 12<br/>
            <CallIcon/> +7 (3012) 45-68-45
        </p>
        <p>
            <EmailIcon/> <a href="mailto:info@dianmed.ru">info@dianmed.ru</a>
        </p>
        </div>

    </div>
)

export default Footer
