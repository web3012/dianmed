import React from "react"
import Button from '@material-ui/core/Button'
import CallIcon from '@material-ui/icons/Call'

const Callback = () => {
    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" startIcon={<CallIcon/>}>Заказать звонок</Button>
        </React.Fragment>
    )
}

export default Callback
