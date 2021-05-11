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
                    <small><span className="c4"><i className="fas fa-user mr-2"></i></span><a href="/login">Mario Montero</a></small>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
 