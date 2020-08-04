import React from "react"
import CategoryModal from "../components/CategoryModal"
import {DropdownButton, Dropdown} from "react-bootstrap"
import {connect} from "react-redux"

function Category({categoryData: {loading, categories, error}}) {

    return (
        <div>
            <div className='row pt-3'>
                <div className='col-md-9 col-sm-9'>
                    <h4>All Categories</h4>
                </div>
                <div className='col-md-3 col-sm-3'>
                    <CategoryModal/>
                </div>
            </div>
            <div className='pt-3'>
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : (
                        error ? (
                            <p style={{color: 'red'}}>Failed to load. Try again</p>
                        ) : (
                            categories !== undefined && categories.length > 0 ? (
                                <table className='table'>
                                    <thead>
                                    <tr className='text-muted'>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    {
                                        categories.map((cat, index) => (
                                            <tbody key={index}>
                                            <tr>
                                                <th>{index + 1}.</th>
                                                <td>{cat.name}</td>
                                                <td>{cat.description.substring(0, 50)}...</td>
                                                <td>
                                                    <img src={cat.avatar} alt={cat.name} className='rounded-circle mr-3'
                                                         width='50'
                                                         height='50'/>
                                                </td>
                                                <td>
                                                    <DropdownButton id='dropdown-basic-button' title='View'>
                                                        <Dropdown.Item>Edit</Dropdown.Item>
                                                        <Dropdown.Item href='#/action-2'>Delete</Dropdown.Item>
                                                    </DropdownButton>
                                                </td>
                                            </tr>
                                            </tbody>
                                        ))
                                    }
                                </table>
                            ) : (
                                <p>No Categories found</p>
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    categoryData: state.categoryData
})

const mapActionsToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionsToProps)(Category)
