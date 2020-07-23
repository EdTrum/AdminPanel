import React from "react";
import CourseModal from "../components/CourseModal";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Course() {
  const courses = [
    {
      no: 1,
      name: "Coursera",
      provider: "Stanford University Computer Science",
      totalHours: 30,
    },
    {
      no: 2,
      name: "Udemy",
      provider: "UCLA",
      totalHours: 35,
    },
    {
      no: 3,
      name: "Khan Academy",
      provider: "Khan Academy",
      totalHours: 27,
    },
  ];

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
        <table className='table'>
          <thead>
            <tr className='text-muted'>
              <th>#</th>
              <th>Course Title</th>
              <th>Course Provider</th>
              <th>Total Hours</th>
              <th>Actions</th>
            </tr>
          </thead>
          {courses.map((course) => (
            <tbody key={course.no}>
              <tr>
                <th>{course.no}</th>
                <td>{course.name}</td>
                <td>{course.provider}</td>
                <td>{course.totalHours}</td>
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
      </div>
    </div>
  );
}

export default Course;
