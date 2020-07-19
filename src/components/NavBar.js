import React, {useState} from 'react'
import {Button, Modal, Navbar} from "react-bootstrap"
import avatarImg from '../assets/avatar.png'
import styled from "styled-components"
import {
    faHome,
    faUser,
    faFileAlt,
    faCubes,
    faDatabase,
    faSearch,
    faComments,
    faBell, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Layout from "../pages/Layout"
import Home from "./Home"
import Category from "../pages/Category"
import Course from "../pages/Course"
import Topic from "../pages/Topic"
import User from "../pages/User"

const options = [
    {name: 'Dashboard', icon: faHome},
    {name: 'Categories', icon: faCubes},
    {name: 'Courses', icon: faDatabase},
    {name: 'Topics', icon: faFileAlt},
    {name: 'Users', icon: faUser}
]

function NavBar() {

    const [showModal, setShowModal] = useState(false)
    const [option, setOption] = useState('')

    const itemClick = option => {
        setOption(option)
    }

    const renderOptions = options.map((option, index) => (
        <li className="nav-item sidebar-link" key={index} onClick={() => itemClick(option.name)}>
            <a href="#" className="nav-link">
                <FontAwesomeIcon icon={option.icon} className='text-light'/>
                <span className='text-white p-3'>{option.name}</span>
            </a>
        </li>
    ))

    const handleClose = () => setShowModal(false)

    const renderOption = (() => {
        switch (option) {
            case "Dashboard": return <Home/>
            case "Categories": return <Category/>
            case "Courses": return <Course/>
            case "Topics": return <Topic/>
            case "Users": return <User/>
            default: return <Home/>
        }
    })()

    return (
        <div>
            <Styles>
                <Navbar expand='md' variant='light' style={{padding: 0, margin: 0}}>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='ml-auto'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <div className="container-fluid">
                            <div className="row">
                                {/*sidebar*/}
                                <div className="col-xl-2 col-lg-3 col-md-4 side-bar fixed-top">
                                    <div className="bottom-border py-2 mb-2">
                                        <a href="#"
                                           className="navbar-brand  text-white d-block ml-auto text-center">
                                            <span style={{fontSize: 16}}>EdTrum</span>
                                        </a>
                                    </div>
                                    <div className='bottom-border pb-2'>
                                        <img src={avatarImg} alt="avatar" className='rounded-circle mr-3'
                                             width='40'/>
                                        <a href="#" className="text-white">John Doe</a>
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
                                                <li className="nav-item icon-parent">
                                                    <a href="#" className="nav-link icon-bullet">
                                                        <FontAwesomeIcon icon={faComments} className='text-muted'/>
                                                    </a>
                                                </li>
                                                <li className="nav-item icon-parent">
                                                    <a href="#" className="nav-link icon-bullet">
                                                        <FontAwesomeIcon icon={faBell} className='text-muted'/>
                                                    </a>
                                                </li>
                                                <li className="nav-item ml-md-auto"
                                                    onClick={() => setShowModal(true)}>
                                                    <a href="#" className="nav-link" data-toggle='modal'
                                                       data-target='sign-out'>
                                                        <FontAwesomeIcon icon={faSignOutAlt}
                                                                         className='text-danger'/>
                                                    </a>
                                                </li>
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
            <Layout>
                {renderOption}
            </Layout>
        </div>
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
