import React, {Fragment, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addCourse, clearErrors} from '../api';

function CourseModal({categories, addCourse, clearErrors, courseData: {errors, loading}}) {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('')
  const [catError, setCatError] = useState('')
  const [course, setCourse] = useState({
    name: '', description: '', avatar: '', courseLink: '',
    rating: '', certification: '', fee: 0, duration: 0, provider: '',
    progLanguages: '',
  });

  const handleClose = () => {
    clearErrors();
    setShowModal(false);
  };

  const handleChange = e => {
    setCourse({...course, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    course.categoryId = category
    if (course.categoryId !== ''){
      addCourse(course, course.categoryId)
    } else {
      setCatError('Please select a category first')
    }
    // addCourse(course, course.categoryId);
    // setCourse({name:'', description: '', avatar: '', courseLink: '',
    //   rating: '', certification: '', fee: 0, duration: 0, provider: '', progLanguages: ''})
  };

  return (
      <Fragment>
        <Button className='btn-sm' onClick={() => setShowModal(true)}>
          Add Course
        </Button>
        <Modal show={showModal} onHide={handleClose} size='md' centered>
          <Modal.Header closeButton>
            <Modal.Title style={{fontSize: 16}}>Add a Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <select name="categoryId" className="form-control"
                      onChange={e => setCategory(e.target.value)}>
                <option value="#">Select a Category</option>
                {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                ))}
              </select>
              <div>
                {catError && (
                    <span className='error-msg'>{catError}</span>
                )}
              </div>
              <br/>
              <input name='name' type='text' id='name' className='form-control' placeholder='Name'
                  onChange={handleChange} value={course.name} required/>
              <br/>
              <div>
                {errors && <span className='error-msg'>{errors.name}</span>}
              </div>
              <textarea
                  name='description' className='form-control' id='provider' cols='10' rows='4'
                  placeholder='Description' onChange={handleChange} value={course.description}
                  required
              />
              <div>
                {errors && <span
                    className='error-msg'>{errors.description}</span>}
              </div>
              <br/>
              <input name='avatar' id='avatar' type='text'
                     className='form-control' placeholder='Image Url'
                     onChange={handleChange} value={course.avatar}
                     required/><br/>
              <input
                  name='courseLink'
                  id='courseLink'
                  type='text'
                  className='form-control'
                  placeholder='Course Link'
                  onChange={handleChange}
                  value={course.courseLink}
                  required
              />
              <div>
                {errors &&
                <span className='error-msg'>{errors.courseLink}</span>}
              </div>
              <br/>
              <input
                  name='rating'
                  id='rating'
                  type='text'
                  className='form-control'
                  placeholder='Rating'
                  onChange={handleChange}
                  value={course.rating}
                  required
              />
              <div>
                {errors && <span className='error-msg'>{errors.rating}</span>}
              </div>
              <br/>
              <input
                  name='certification'
                  id='certification'
                  type='boolean'
                  className='form-control'
                  placeholder='Certification'
                  onChange={handleChange}
                  value={course.certification}
                  required
              />
              <div>
                {errors &&
                <span className='error-msg'>{errors.certification}</span>}
              </div>
              <br/>
              <input
                  name='fee'
                  id='fee'
                  type='number'
                  className='form-control'
                  placeholder='Fee'
                  onChange={handleChange}
                  value={course.fee}
                  required
              />
              <div>
                {errors && <span className='error-msg'>{errors.fee}</span>}
              </div>
              <br/>
              <input
                  name='duration'
                  id='duration'
                  type='number'
                  className='form-control'
                  placeholder='Duration'
                  onChange={handleChange}
                  value={course.duration}
                  required
              />
              <div>
                {errors && <span className='error-msg'>{errors.fee}</span>}
              </div>
              <br/>
              <input
                  name='provider'
                  id='provider'
                  type='text'
                  className='form-control'
                  placeholder='Provider'
                  onChange={handleChange}
                  value={course.provider}
                  required
              />
              <div>
                {errors && <span className='error-msg'>{errors.provider}</span>}
              </div>
              <br/>
              <input
                  name='progLanguages'
                  id='progLanguages'
                  type='text'
                  className='form-control'
                  placeholder='Programming Languages'
                  onChange={handleChange}
                  value={course.progLanguages}
                  required
              />
              <div>
                {errors &&
                <span className='error-msg'>{errors.progLanguages}</span>}
              </div>
              <br/>
              <div className="text-center">
                <button type='submit'
                        className="btn btn-success form-control">Save Course
                </button>
                {loading && (
                    <div>
                      <div className='spinner-border text-center m-2'
                           role='status'/>
                      <p>Please wait...</p>
                    </div>
                )}
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Fragment>
  );
}

const mapStateToProps = state => ({
  categories: state.categoryData.categories,
  courseData: state.courseData,
});

const mapActionsToProps = dispatch => ({
  addCourse: (course, categoryId) => dispatch(addCourse(course, categoryId)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapActionsToProps)(CourseModal);

