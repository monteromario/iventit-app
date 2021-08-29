import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
    return(
        <Navbar className="navbar">
            <Navbar.Brand href="/">
            <div className="d-inline-block align-top mr-2 navLogo" />
                <span className="c4 navText"> i · v e n t </span>· <strong><span className="c3">i t </span></strong>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <small><a href="/map"><span className="c4"><i className="fas fa-map-marker mr-2"></i></span><span className="text--navbar">Map</span></a></small>
                </Navbar.Text>
                <Navbar.Text>
                    <small><a href="/favs"><span className="c4"><i className="fas fa-star ml-3 mr-2"></i></span><span className="text--navbar">Favorites</span></a></small>
                </Navbar.Text>
                <Navbar.Text>
                    <small><a href="/city"><span className="c4"><i className="fas fa-user ml-3 mr-2"></i></span><span  className="text--navbar">Madrid</span></a></small>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
 