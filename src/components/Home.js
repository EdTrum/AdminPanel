import React, {Component} from 'react'
import {faChargingStation, faCubes, faDatabase, faSync, faUsers} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const cardItems = [
    {name: 'Categories', count: 100, icon: faCubes, appearance: 'text-warning fa-2x'},
    {name: 'Courses', count: 200, icon: faDatabase, appearance: 'text-primary fa-2x'},
    {name: 'Users', count: 300, icon: faUsers, appearance: 'text-muted fa-2x'},
    {name: 'New Users', count: 50, icon: faChargingStation, appearance: 'text-success fa-2x'},
]

const admins = [
    {no: 1, name: 'John Doe', email: 'john@test.com', regDate: '01/01/1900'},
    {no: 2, name: 'Jane Doe', email: 'jane@test.com', regDate: '02/02/1900'},
    {no: 3, name: 'Cisco Ramon', email: 'ramon@test.com', regDate: '03/03/1900'},
]

class Home extends Component {

    render() {

        const renderCardItems = cardItems.map(item => (
            <div className='col-sm-6 col-lg-3 p-2' key={item.name}>
                <div className="card card-common">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <FontAwesomeIcon icon={item.icon} className={item.appearance}/>
                            <div className="text-right text-secondary">
                                <h6>{item.name}</h6>
                                <h4>{item.count}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className="card-action">
                            <FontAwesomeIcon icon={faSync}/>
                            <span className="ml-2">Refresh</span>
                        </span>
                    </div>
                </div>
            </div>
        ))

        return (
            <Styles>
                <div className="row">
                    {renderCardItems}
                </div>
                <div>
                    <h5 className="text-muted m-3">Admins</h5>
                    <table className="table table-striped bg-light text-center">
                        <thead>
                        <tr className="text-muted">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Reg Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        {admins.map(admin => (
                            <tbody key={admin.no}>
                            <tr>
                                <th>{admin.no}</th>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.regDate}</td>
                                <td>
                                    <button className="btn btn-sm btn-outline-success btn-appearance">View</button>
                                </td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </Styles>
        )
    }
}

export default Home

const Styles = styled.div`
    .card-action {
        cursor: pointer
    }
    .card-common {
        box-shadow: 1px 2px 5px #999;
        transition: all .4s
    }
    .card-common:hover {
        box-shadow: 2px 3px 15px #999;
        transform: translateY(-1px);
        cursor: pointer
    }
    .btn-appearance {
        width: 70px;
    }
`
