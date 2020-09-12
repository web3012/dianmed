import React from "react"
import "./map2gis.scss"

let Map2gis = (props) => {

    let [init, setInit] = React.useState(false)

    React.useEffect(() => {
        if(!init){
            let DG = require('2gis-maps')
            let map = DG.map("map2gis", {
                'center': [51.807604, 107.643739],
                'zoom': 12,
                    // "pos":{"lat":51.8473909698961,"lon":107.60833740234376,"zoom":14},
                    // "opt":{"city":"ulanude"},
                    // "org":[{"id":"5207815350130309"},{"id":"5207815350291825"}]
            })
            DG.marker([51.807604, 107.643739], {title: "Наркологический центр ДИАН"}).addTo(map)
        }
        setInit(true)
    }, [init])

    return (
        <div id="map2gis" className="map2gis">
            
        </div>
    )
}
export default Map2gis