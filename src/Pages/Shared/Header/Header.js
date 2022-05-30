import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const {user,logout}=useFirebase()

    return (
        <div>
          <Navbar expand="lg">
                    <Container fluid>
                        {/* <Navbar.Brand ><i className='text-warning'>Sunshine Hospital</i></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mx-auto my-5 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link ><Link className="ms-5"to='/home'>Home</Link></Nav.Link>
                        { user?.email && <Nav.Link ><Link to='/photogallery'>My Photogallery</Link></Nav.Link>}
                               
                 
                               


                                {user.email ? <div><span>{user.displayName}  </span><button onClick={logout} style={{backgroundColor:"green",marginLeft:'auto'}}className=' text-white fw-bold'>Logout</button></div> :
                                    <Link to='/login'><button  style={{backgroundColor:'purple',marginLeft:'auto'}}>Login</button></Link>}

                            </Nav>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;