import React from 'react'
import CategoryModal from "../components/CategoryModal"

function Category() {
    return (
        <div>
            <div className='row pt-3'>
                <div className="col-md-9 col-sm-9">
                    <h4>All Categories</h4>
                </div>
                <div className="col-md-3 col-sm-3">
                    <CategoryModal/>
                </div>
            </div>
            <div className="pt-3">
                <table className="table">
                    <thead>
                    <tr className="text-muted">
                        <th>#</th>
                        <th>Category Title</th>
                        <th>Category Description</th>
                        <th>Total Courses</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Category
