import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit'

const Profile = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"))  // localStorge user value

  //CapitalizeFirstLetter Function
  const capitalizeFirstLetter = (word) => {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1)
  }
  return (
    <div className="container col-md-6 my-4">
      <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Name: {capitalizeFirstLetter(loggedUser.name)}</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>

  )
}
export default Profile