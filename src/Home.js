import React from 'react';
import Carousel from './Carousel';
import './App.css';
import Support from './support.png'
import Conversions from './conversions.png'
import Quality from './quality.png'
import BullsEye from './bullseye.png'
import Campaigns from './campaigns.png'
import { useMediaQuery } from 'react-responsive'

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 624px)' })
  return (
    <div className="App">
      <div className='inner-block1'>
        <div className='inner-block1-1'>
          <p className='header2'>Why Choose Us?</p>
          <h3 className='header1'>Why the Industry Chooses Clickdee?</h3>
          <p className='text1'>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth.Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships</p>
        </div>
        <div className='inner-block1-2'>
          <img src={BullsEye} className='inner-img'/>
          <h3 className='text2'>Choose Your Local Targeting</h3> 
            <div id="hover-content">
              <p>Our targeted and tracked calls are tailored to your business needs, audience and geolocation.</p>
      </div>
        </div>
        <div className='inner-block1-3'>
          <img src={Conversions} className='inner-img'/>
          <h3 className='text2'>Track Your Conversion</h3>
          <div id="hover-content">
       <p>We use the most progressive and analytics technology to ensure all calls can be tracked and evaluated</p>
    </div>
        </div>
      </div>
      <div className='inner-block2'>
        <div className='inner-block1-4'></div>
        <div className='inner-block1-2'>
        <img src={Campaigns} className='inner-img'/>
          <h3 className='text2'>Customized Campaigns</h3>
          <div id="hover-content">
        <p>Audiences, budgets and goals: you decide the criteria for your digital ad campaign, and we'll do the rest</p>
    </div>
        </div>
        <div className='inner-block1-3'>
        <img src={Support} className='inner-img'/>
          <h3 className='text2'>Get Dedicated Support Team</h3>
          <div id="hover-content">
          <p>We constantly monitor quality control! Our affiliate network of publishers are digital ad experts, that have been vetted</p>
        </div>
        </div>
        <div className='inner-block1-2'>
        <img src={Quality} className='inner-img'/>
          <h3 className='text2'>Quality Assurance</h3>
          <div id="hover-content">
          <p>We constantly monitor quality control! Our affiliate network of publishers are digital ad experts, that have been vetted</p>
    </div>
        </div>
      </div>
      {isTabletOrMobile && <Carousel/>}
    </div>
  );
}

export default Home;
