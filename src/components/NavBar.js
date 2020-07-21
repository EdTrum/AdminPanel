import React, {useState} from 'react'
import {Button, Modal, Navbar} from "react-bootstrap"
import avatarImg from '../assets/avatar.png'
import styled from "styled-components"
import {
    faHome, faUser, faFileAlt, faCubes, faDatabase, faSearch, faComments, faBell, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link, NavLink} from "react-router-dom"

const options = [
    {name: 'Dashboard', icon: faHome, route: ''},
    {name: 'Categories', icon: faCubes, route: 'categories'},
    {name: 'Courses', icon: faDatabase, route: 'courses'},
    {name: 'Topics', icon: faFileAlt, route: 'topics'},
    {name: 'Users', icon: faUser, route: 'users'}
]

function NavBar() {
    const [showModal, setShowModal] = useState(false)

    const renderOptions = options.map((option, index) => (
        <NavLink className="nav-item sidebar-link nav-link" key={index} to={`/${option.route}`}>
            <FontAwesomeIcon icon={option.icon} className='text-light'/>
            <span className='text-white p-3'>{option.name}</span>
        </NavLink>
    ))

    const handleClose = () => setShowModal(false)

    return (
        <>
            <Styles>
                <Navbar expand='md' variant='light' style={{padding: 0, margin: 0}}>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='ml-auto'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <div className="container-fluid">
                            <div className="row">
                                {/*sidebar*/}
                                <div className="col-xl-2 col-lg-3 col-md-4 side-bar fixed-top">
                                    <div className="bottom-border py-2 mb-2">
                                        <Link to='/'
                                              className="navbar-brand  text-white d-block ml-auto text-center">
                                            <span style={{fontSize: 16}}>EdTrum</span>
                                        </Link>
                                    </div>
                                    <div className='bottom-border pb-2'>
                                        <img src={avatarImg} alt="avatar" className='rounded-circle mr-3'
                                             width='40'/>
                                        <span className="text-white">John Doe</span>
                                    </div>
                                    <ul className="navbar-nav flex-column mt-4">
                                        {renderOptions}
                                    </ul>
                                </div>
                                {/*end of side-bar*/}
                                {/*top-nav*/}
                                <div
                                    className="col-xl-10 col-lg-9 col-md-8 bg-dark ml-auto fixed-top py-2 top-navbar">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <h5 className='text-light text-uppercase mb-0'>Dashboard</h5>
                                        </div>
                                        <div className="col-md-5">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control search-input"
                                                           placeholder='Search'/>
                                                    <button type='button' className='btn btn-light search-button'>
                                                        <FontAwesomeIcon icon={faSearch} className='text-danger'/>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-3">
                                            <ul className="navbar-nav">
                                                <NavLink className="nav-item icon-parent nav-link icon-bullet" to='/'>
                                                    <FontAwesomeIcon icon={faComments} className='text-muted'/>
                                                </NavLink>
                                                <NavLink className="nav-item icon-parent nav-link icon-bullet" to='/'>
                                                    <FontAwesomeIcon icon={faBell} className='text-muted'/>
                                                </NavLink>
                                                <NavLink className="nav-item ml-md-auto nav-link" to='/'
                                                         onClick={() => setShowModal(true)} data-toggle='modal'
                                                         data-target='sign-out'>
                                                    <FontAwesomeIcon icon={faSignOutAlt} className='text-danger'/>
                                                </NavLink>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*end of top-nav*/}
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
            {/*Modal*/}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize: 16}}>Want to leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click on Logout button to leave otherwise click on Cancel</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavBar

const Styles = styled.div`
    .side-bar {
        height: 100vh;
        background: #424242;
        box-shadow: 5px 7px 25px #999
    }
    .bottom-border {
        border-bottom: 1px groove #eee
    }
    .sidebar-link:hover {
        background-color: #777;
        border-radius: 5px
    }
    .sidebar-link {
        transition: all .4s
    }
    .search-input {
        background: transparent;
        border-radius: 0;
        border: none;
        border-bottom: 2px solid #999;
        transition: all .4s;
    }
    .search-input:focus {
        background: transparent;
        box-shadow: none;
        border-bottom: 2px solid #dc3545;
    }
    .search-button {
        border-radius: 50%;
        padding: 8px 12px;
        transition: all .4s
    }
    .search-button:hover {
        background-color: #eee;
        transform: translateY(-1px);
    }
    .icon-parent {
        position: relative;
    }
    .icon-bullet::after {
        content: "";
        position: absolute;
        top: 7px;
        left: 15px;
        height: 12px;
        width: 12px;
        background-color: #f44336;
        border-radius: 50%
    }
`
