import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-black text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='white-80'>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" className='white-80' />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" className='white-80' />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" className='white-80' />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" className='white-80' />
          </a>
          {/* <a href='https://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a> */}
          {/* <a href='https://github.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 white-80'>
                <MDBIcon icon="gem" className="me-3" />
                Eleanor & Co
              </h6>
              <p className='white-80'>
                Unveil Your Inner Elegance - Eleanor & Co.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 white-80'>Products</h6>
              <p>
                <a href='#!' className='text-reset white-80'>
                  Diamond
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset white-80'>
                  Ring
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset white-80'>
                  Chain
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset white-80'>
                  Earing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 white-80'>Useful links</h6>
              <p>
                <a href='/' className='text-reset white-80'>
                  Home
                </a>
              </p>
              <p>
                <a href='about' className='text-reset white-80'>
                  About
                </a>
              </p>
              <p>
                <a href='contact' className='text-reset white-80'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset white-80'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 white-80'>Contact</h6>
              <p className='white-80'>
                <MDBIcon icon="home" className="me-2" />
                Thu Duc City, Ho Chi Minh
              </p>
              <p className='white-80'>
                <MDBIcon icon="envelope" className="me-3" />
                eleanorandco@gmail.com
              </p>
              <p className='white-80'>
                <MDBIcon icon="phone" className="me-3" /> + 09 999 999 99
              </p>
              <p className='white-80'>
                <MDBIcon icon="print" className="me-3" /> + 09 999 999 99
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='localhost:3000'>
          Eleanor & Co
        </a>
      </div>
    </MDBFooter>
  );
}
