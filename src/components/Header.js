import React from 'react';
import { Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

const Header = () => {
    return(
        <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <h4 className="text-center">Tic-Tac-Toe</h4>
                    </NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-2">
                            <NavbarBrand className="mr" href="/">
                                <img src="./images/1.png" height="80" width="80"
                                    alt="0x0" />
                            </NavbarBrand>
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Tic-Tac-Toe</h1>
                            <p>Enjoy this wonderful game with your partner</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Header;