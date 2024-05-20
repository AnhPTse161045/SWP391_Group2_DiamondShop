import React ,{Component}from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import diamond1 from './assets/diamond1.png';
import diamond2 from './assets/diamond2.png';
import diamond3 from './assets/diamond3.png';
export default class Home extends Component {
  render(){
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={diamond1} className='d-block w-100' alt='This Is Image 1' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={diamond2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={diamond3} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  )
};
}