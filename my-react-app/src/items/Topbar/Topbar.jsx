import React, { use } from 'react'
import "./Topbar.css"
import { useState,useEffect } from "react";

function Topbar() {
    const[time,setTime] = useState(new Date());
    useEffect(()=> {
        // interval ktery requestuje cas kazdych 1000ms
        const intervalid = setInterval(() => {
            setTime(new Date())
        }, 1000);
        // vycisteni kdyz prestane fungovat (prob zbytecny)
        return () => {
            clearInterval(intervalid);
        }
    }, []);
    //format casu
    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        return `${pridaniNuly(hours)}:${pridaniNuly(minutes)}:${pridaniNuly(seconds)}`
    }
    // napriklad kdyz je 17:04:03 tak aby output nebyl 17:3:4
    function pridaniNuly(cislo){
        return (cislo < 10? "0" : "") + cislo
    }
  return (
    <div className='Wrapper-topbar'>
        <span className="clock text">{formatTime()}</span>
        <div className="info">
            <span className="studentName infotext text">Jan Novák</span>
            <span className="class infotext text">1.A </span>
            <span className="status infotext text">Žák</span>
        </div>
        <div className="tools">
            {/* pridat tootltips */}
            <svg xmlns="http://www.w3.org/2000/svg" className="settingsicon"width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" ><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
        </div>

    </div>
  )
}

export default Topbar