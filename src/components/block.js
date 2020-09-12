// sidebar widget

import React from "react"
import "./block.scss"

let Block = (props) => {
    return (
        <div class="_block">
            {props.children}
        </div>
    )
}
export default Block