import React from 'react'
import './GridContent.css'

function GridContent() {
  return (
    <div className='Wrapper-Grid'>
        <div className="box box1">
            <div className="blurry-gradient circle1-1"></div>
            <svg className ="noiseFilter" xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence   type='fractalNoise'   baseFrequency='1.1'   numOctaves='3'   stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#noiseFilter)'/></svg>
        </div>
        <div className="box box2">
            <div className="blurry-circle circle2-1"></div>
        <svg className ="noiseFilter" xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence   type='fractalNoise'   baseFrequency='1.1'   numOctaves='3'   stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#noiseFilter)'/></svg>
        </div>
        <div className="box box3">
        <div className="blurry-gradient circle3-1"></div>
        <svg className ="noiseFilter" xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence   type='fractalNoise'   baseFrequency='1.1'   numOctaves='3'   stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#noiseFilter)'/></svg>
        </div>
        <div className="box box4"></div>
        <div className="box box5"></div>
        <div className="box box6"></div>

    </div>
    
  )
}

export default GridContent