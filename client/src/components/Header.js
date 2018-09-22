import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    constructor() {
        super();
        this.renderContent = this.renderContent.bind(this);
    }

    renderContent() {
        const { auth } = this.props;

        switch(auth) {
            case null:
                return;
            case false:
                return (<li><a href="/auth/google">Login with Google</a></li>);
            default:
                return [
                    <li key="2" ><Payments /></li>,
                    <li key="1" style={{ margin: '0 10px' }}>Credits: {auth.credits} </li>,
                    <li key="3" ><a href="/api/logout">Log out</a></li>
                ]
        }
    }

    render () {
        const { auth } = this.props;

        return (
            <nav>
                <div className="nav-wrapper">
                <Link 
                    to={auth ? '/surveys' : '/'}
                    className="left brand-logo">
                    Emaily
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { this.renderContent() }
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, null)(Header);