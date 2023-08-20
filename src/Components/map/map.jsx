import React from "react";
import '../map/map.css'

function Map () {
  return(
        <>
           <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=london eye&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </>
  )
}

export default Map;