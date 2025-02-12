import './Rozvrh.css'

function Rozvrh() {
    function Dnesnidatum() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Měsíce jsou od 0 do 11
        const year = today.getFullYear();
        
        return `${day}.${month}.${year}`;
    }
    function Zitrejsidatum() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const day = String(tomorrow.getDate()).padStart(2, '0');
        const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Měsíce jsou od 0 do 11
        const year = tomorrow.getFullYear();
        
        return `${day}.${month}.${year}`;
    }
  return (
    <div className='Wrapper-rozvrh'>
        <div className="today radek">
            <div className="date"><h1>{Dnesnidatum()}</h1></div>
            <div className="dnesnirozvrh rozvrh">
                <div className="blurry-circle jedna"></div>
                <div className="hodina">
                    <div className="subject"><h1>Z</h1></div>
                    <div className="teacher"><h1>Z</h1></div>
                </div>
                <div className="blurry-circle dva"></div>
                <div className="hodina">
                    <div className="subject"><h1>Tv</h1></div>
                    <div className="teacher"><h1>Tv</h1></div>
                </div>
                <div className="blurry-circle tri"></div>
                <div className="hodina">
                    <div className="subject"><h1>ČJ</h1></div>
                    <div className="teacher"><h1>ČJ</h1></div>
                </div>
                <div className="blurry-circle ctyri"></div>
                <div className="hodina">
                    <div className="subject"><h1>M</h1></div>
                    <div className="teacher"><h1>M</h1></div>
                </div>
                <div className="blurry-circle pet"></div>
                <div className="active-circle"></div>
                <div className="hodina active">
                    <div className="subject"><h1>BI</h1></div>
                    <div className="teacher"><h1>BI</h1></div>
                </div>
                <div className="blurry-circle sest"></div>
                <div className="hodina">
                    <div className="subject"><h1>D</h1></div>
                    <div className="teacher"><h1>D</h1></div>
                </div>
                <div className="hodina">
                    <div className="subject"><h1>CH</h1></div>
                    <div className="teacher"><h1>CH</h1></div>
                </div>
            </div>
        </div>
        <div className="tomorrow radek">
            <div className="date"><h1>{Zitrejsidatum()}</h1></div>
            <div className="zitrejsirozvrh rozvrh">
                <div className="inactive-circle inactive-jedna jedna"></div>
                <div className="hodina">
                    <div className="subject"><h1>Z</h1></div>
                    <div className="teacher"><h1>Z</h1></div>
                </div>
                <div className="inactive-circle inactive-dva dva "></div>
                <div className="hodina">
                    <div className="subject"><h1>Tv</h1></div>
                    <div className="teacher"><h1>Tv</h1></div>
                </div>
                <div className="inactive-circle inactive-tri tri"></div>
                <div className="hodina">
                    <div className="subject"><h1>ČJ</h1></div>
                    <div className="teacher"><h1>ČJ</h1></div>
                </div>
                <div className="inactive-circle inactive-ctyri ctyri"></div>
                <div className="hodina">
                    <div className="subject"><h1>M</h1></div>
                    <div className="teacher"><h1>M</h1></div>
                </div>
                <div className="inactive-circle inactive-pet pet"></div>
                <div className="active-circle"></div>
                <div className="hodina">
                    <div className="subject"><h1>BI</h1></div>
                    <div className="teacher"><h1>BI</h1></div>
                </div>
                <div className="inactive-circle inactive-sest sest"></div>
                <div className="hodina">
                    <div className="subject"><h1>D</h1></div>
                    <div className="teacher"><h1>D</h1></div>
                </div>
                <div className="hodina">
                    <div className="subject"><h1>CH</h1></div>
                    <div className="teacher"><h1>CH</h1></div>
                </div>
                
                
            </div>
            
        </div>
    </div>
  )
}

export default Rozvrh

