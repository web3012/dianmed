import React from "react"
import "./content.scss"

let Content = (props) => {
    return (
        <div className="pageContent">
            {props.children}
        </div>
    )
}
export default Content