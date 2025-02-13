import React from 'react'
import "./Sidebar.css"
import { useState } from "react";

function Sidebar() {
  const [isOpen, changeOpen] = useState(true);

  // Funkce pro přepínání sidebaru
  const toggleSize = () => {
    changeOpen(prevState => !prevState);
  };
  return (
    <div className={`Wrapper-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className='Upper'>
        <h1 className="logo">Scholario</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#00000" width="30px" className='uppericon' viewBox="0 0 24 24" onClick={toggleSize}><path id="Union" fill="#E0E0E0" fill-rule="evenodd" d="m8 18 1.425 -1.4 -3.6 -3.6H18v-2H5.825L9.4 7.4 8 6l-6 6 6 6ZM20 6h2v12h-2V6Z" clip-rule="evenodd" stroke-width="1"></path></svg>
      </div>
      <div className="list">
        <div className="home">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          {isOpen && <h1 className='SidebarText'>Home</h1>}
          <svg xmlns="http://www.w3.org/2000/svg" className='redirectarrow' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div className="znamky">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><rect width="4" height="6" x="2" y="12" rx="2"/><path d="M10 12h2v6"/><path d="M10 18h4"/></svg>
        {isOpen &&<h1 className='SidebarText'>Známky</h1>}
        <svg xmlns="http://www.w3.org/2000/svg" className='redirectarrow' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div className="absence">
        <svg xmlns="http://www.w3.org/2000/svg" className='' width="30" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M2 21a8 8 0 0 1 11.873-7"/><circle cx="10" cy="8" r="5"/><path d="m17 17 5 5"/><path d="m22 17-5 5"/></svg>
        {isOpen &&<h1 className='SidebarText'>Absence</h1>}
        <svg xmlns="http://www.w3.org/2000/svg" className='redirectarrow' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div className="ukoly">
        <svg xmlns="http://www.w3.org/2000/svg" className='' width="30" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
        {isOpen &&<h1 className='SidebarText'>Úkoly</h1>}
        <svg xmlns="http://www.w3.org/2000/svg" className='redirectarrow' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div className="zpravy">
        <svg xmlns="http://www.w3.org/2000/svg" className='' width="30px" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg>
        {isOpen &&<h1 className='SidebarText'>Zprávy</h1>}
        <svg xmlns="http://www.w3.org/2000/svg" className='redirectarrow' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
