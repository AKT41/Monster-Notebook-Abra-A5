import React, { Component }  from 'react'
import Tophead from './components/tophead'
import Logovs from './components/logovs'
import Allproducts from './components/allproducts'
import Navigation from './components/navigation'
import Slider from './components/Slider/Slider'
import SliderText from './components/sliderText'


function App() {

  return (
    <div>
       <Tophead  />
       <Logovs />
      <div className='rainbown-line'/>
      <Allproducts/>
      <Navigation/>   
      <hr className='m-0'/>
      <Slider/>
      <SliderText/>
      
      </div>
  );
}

export default App;
