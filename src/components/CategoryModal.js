import React, {Fragment, useState} from "react"
import {Button, Modal} from "react-bootstrap"
import {connect} from 'react-redux'
import {addCategory, clearErrors} from "../api"

function CategoryModal({addCategory, clearErrors, categoryData: {errors, loading}}) {
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState({name: '', description: '', avatar: ''})

    const handleClose = () => {
        clearErrors()
        setShowModal(false)
    }

    const handleChange = e => {
        setCategory({...category, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addCategory(category)
        setCategory({name: '', description: '', avatar: ''})
    }

    return (
        <Fragment>
            <Button className='btn-sm' onClick={() => setShowModal(true)}>
                Add Category
            </Button>
            <Modal show={showModal} onHide={handleClose} size='md' centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize: 16}}>Add a Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input name='name' type='text' id='name' className='form-control' placeholder='Name'
                               value={category.name} onChange={handleChange} required/>
                        <div>
                            {errors && <span className='error-msg'>{errors.name}</span>}
                        </div>
                        <br/>
                        <textarea name='description' className='form-control' id='description' cols='10' rows='4'
                                  placeholder='Description' onChange={handleChange} value={category.description}
                                  required/>
                        <div>
                            {errors && <span className='error-msg'>{errors.description}</span>}
                        </div>
                        <br/>
                        <input name='avatar' id='avatar' type='text' className='form-control' placeholder='Image Url'
                               onChange={handleChange} value={category.avatar} required/>
                        <div>
                            {errors && <span className='error-msg'>{errors.avatar}</span>}
                        </div>
                        <br/>
                        <div className="text-center">
                            <button type='submit' className="btn btn-success form-control">Save Category</button>
                            {loading && (
                                <div>
                                    <div className='spinner-border text-center m-2' role='status'/>
                                    <p>Please wait...</p>
                                </div>
                            )}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    categoryData: state.categoryData
})

const mapActionsToProps = dispatch => ({
    addCategory: (category) => dispatch(addCategory(category)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapActionsToProps)(CategoryModal)
