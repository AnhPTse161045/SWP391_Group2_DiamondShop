import React ,{Component}from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import diamond1 from './assets/diamond1.png';
import diamond2 from './assets/diamond2.png';
import diamond3 from './assets/diamond3.png';
import diamond4 from './assets/diamond4.jpg';
import diamond5 from  './assets/diamond5.jpg';
import Hero from './hero/Hero';
import Feature from './test/Feature';
export default class Home extends Component {
  render(){

  return (
    <div>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={diamond1} className='d-block w-100'  alt='This Is Image 1' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={diamond2} className='d-block w-100' alt='This Is Image 2' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={diamond3} className='d-block w-100' alt='This is Image 3' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={diamond4} className='d-block w-100' alt='This is Image 4' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src={diamond5} className='d-block w-100' alt='This is image 5' />
      </MDBCarouselItem>
    </MDBCarousel>
    <div>
      <Hero/>
      <Feature/>
    </div>
    </div>
  )
};
}