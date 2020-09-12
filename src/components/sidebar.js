import React from "react"
import "./sidebar.scss"

let Sidebar = (props) => {
    return (
        <div className="pageSidebar">

            {props.children}

        </div>
    )
}
export default Sidebar