// sidebar widget

import React from "react"
import "./block.scss"

let Block = (props) => {
    return (
        <div className="_block">
            {props.children}
        </div>
    )
}
export default Block