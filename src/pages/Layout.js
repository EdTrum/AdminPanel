import React from 'react'

function Layout(props) {
    return (
        <div className='container-fluid'>
            <div className="row pt-md-5 mt-md-3">
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12 ml-auto">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
