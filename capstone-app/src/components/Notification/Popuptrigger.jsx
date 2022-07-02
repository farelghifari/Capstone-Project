import React, {useState} from 'react'
import Popup from "./Popup"

function Popuptrigger() {
    const [openPopup, setOpenPopup] = useState(false)
    return (
        <div>
            <button className="popupBtn" onClick={() => setOpenPopup(true)}>Button</button>
            <Popup open={openPopup} onClose={() => setOpenPopup(false)}/>
        </div>   
    )
}
 
export default Popuptrigger