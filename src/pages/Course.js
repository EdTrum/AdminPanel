import React from "react";
import CourseModal from "../components/CourseModal";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {connect} from 'react-redux';

function Course({courseData: {loading, courses, error}}) {
  // const courses = [
  //   {
  //     no: 1,
  //     name: "Coursera",
  //     provider: "Stanford University Computer Science",
  //     totalHours: 30,
  //   },
  //   {
  //     no: 2,
  //     name: "Udemy",
  //     provider: "UCLA",
  //     totalHours: 35,
  //   },
  //   {
  //     no: 3,
  //     name: "Khan Academy",
  //     provider: "Khan Academy",
  //     totalHours: 27,
  //   },
  // ];

  return (
      <div>
        <div className='row pt-3'>
          <div className='col-md-9 col-sm-9'>
            <h4>All Courses</h4>
            <DropdownButton id='dropdown-basic-button' title='Machine Learning'>
              <Dropdown.Item href='#/action-1'>Python</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Java</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Data Science</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className='col-md-3 col-sm-3'>
            <CourseModal />
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
                    courses !== undefined && courses.length > 0 ? (
                        <table className='table'>
                          <thead>
                          <tr className='text-muted'>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Avatar</th>
                            <th>Link</th>
                            <th>Rating</th>
                            <th>Certification</th>
                            <th>Fee</th>
                            <th>Duration</th>
                            <th>Provider</th>
                            <th>Languages</th>
                          </tr>
                          </thead>
                          {courses.map((course, index) => (
                              <tbody key={index}>
                              <tr>
                                <th>{index+1}.</th>
                                <td>{course.name}</td>
                                <td>{course.provider.substring(0, 50)}...}</td>
                                <td>{course.avatar}</td>
                                <td>{course.courseLink}</td>
                                <td>{course.rating}</td>
                                <td>{course.certification}</td>
                                <td>{course.fee}</td>
                                <td>{course.duration}</td>
                                <td>{course.provider}</td>
                                <td>{course.progLanguages}</td>
                                <td>
                                  <DropdownButton id='dropdown-basic-button' title='Actions'>
                                    <Dropdown.Item href='#/action-1'>
                                      View Course Info
                                    </Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'>
                                      Delete Course
                                    </Dropdown.Item>
                                  </DropdownButton>
                                </td>
                              </tr>
                              </tbody>
                          ))}
                        </table>
                    ) : (
                        <p>No Courses found</p>
                    )
                )
            )
          }
        </div>
      </div>
  );
}

const mapStateToProps = state => ({
  courseData: state.courseData
})

const mapActionsToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionsToProps)(Course)
