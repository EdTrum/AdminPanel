import React from 'react'
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import styled from "styled-components"

function NotFound() {
    return (
        <Styles>
            <div className='text-center pt-5'>
                <h3>Oops!</h3>
                <h3>Error 404 Not Found</h3>
                <p>Sorry, the page you requested was not found</p>
                <Link to='/'>
                    <Button variant='outline-primary' className='btn-style'>Home</Button>
                </Link>
                <Link to='/contact'>
                    <Button variant='outline-info' className='btn-style'>Support</Button>
                </Link>
            </div>
        </Styles>
    )
}

export default NotFound

const Styles = styled.div`
    .btn-style {
        margin: 5px;
        min-width: 100px;
        text-transform: uppercase
    }
`
