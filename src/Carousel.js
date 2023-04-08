import React, { useState, useEffect } from 'react';
import './Carousel.css';
import './App.css'
import Support from './support.png'
import Conversions from './conversions.png'
import Quality from './quality.png'
import BullsEye from './bullseye.png'
import Campaigns from './campaigns.png'

function Carousel() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.pageYOffset);     
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const items = [
    {
      id: 1,
      color: '#fbfbfb',
      text:'Choose Your Local Targeting',
      text2:'Our targeted and tracked calls are tailored to your business needs, audience and geolocation.',
      image:BullsEye
    },
       {
      id: 2,
      color: '#fbfbfb',
      text:'Choose Your Local Targeting',
      text2:'Our targeted and tracked calls are tailored to your business needs, audience and geolocation.',
      image:Conversions,
    },
       {
      id: 3,
      color: '#fbfbfb',
      text:'Choose Your Local Targeting',
      text2:'Our targeted and tracked calls are tailored to your business needs, audience and geolocation.',
      image:Campaigns
    },
       {
      id: 4,
      color: '#fbfbfb',
      text:'Choose Your Local Targeting',
      text2:'Our targeted and tracked calls are tailored to your business needs, audience and geolocation.',
      image:Support
    },
       {
      id: 5,
      color: '#fbfbfb',
      text:'Choose Your Local Targeting',
      text2:'Our targeted and tracked calls are tailored to your business needs, audience and geolocation.',
      image:Quality
    },
     
    
  ];

  return (
    <>
    <div className='hero'></div>
 
    <div className="carousel-wrapper">
      <div
        className="carousel"
        style={{transform: `translateX(-${scrollPos}px)`  }}
      >
        {items.map((item) => (
          <div key={item.id} className="item" style={{ backgroundColor: item.color}}>
          <img src={item.image} className='mob-img'/>
          <h5 className='head1'>{item.text}</h5>
          <p className='head2'>{item.text2}</p>
          </div>
        ))}
      </div>
    </div>
   <div style={{backgroundColor:'#4682B4',marginTop:'-370px',display:'flex',flexDirection:'column',padding:'20px',height:'500px'}}>
    <h3 style={{fontSize:'30px',color:'white',textAlign:'start'}}>Work Together</h3>
    <p style={{fontSize:'25px',color:'white',marginTop:'-10px'}}>Lets All make it work Together</p>
    <p style={{color:'white',fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
   </div>
    </>
  );
}

export default Carousel;
