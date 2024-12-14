import React from 'react'
import {
    MDBNavbar,
    MDBBtn,
    MDBContainer
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
<MDBNavbar light bgColor='light'>
  <MDBContainer tag="form" fluid className='justify-content-end'>
    <MDBBtn class="btn btn-primary m-2" type='button'>
      Register
    </MDBBtn>
    <MDBBtn class="btn btn-primary m-2" type='button'>
      Login
    </MDBBtn>
  </MDBContainer>
</MDBNavbar>
    </div>
  )
}

export default Header