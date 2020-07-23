import React from "react";
import CategoryModal from "../components/CategoryModal";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Category() {
  const categories = [
    {
      no: 1,
      name: "Machine Learning",
      description: "Computer algorithms",
      totalCourses: 14,
    },
    {
      no: 2,
      name: "Python",
      description: "Programming in Python",
      totalCourses: 15,
    },
    {
      no: 3,
      name: "Java",
      description: "Object oriented programming",
      totalCourses: 21,
    },
  ];

  return (
    <div>
      <div className='row pt-3'>
        <div className='col-md-9 col-sm-9'>
          <h4>All Categories</h4>
        </div>
        <div className='col-md-3 col-sm-3'>
          <CategoryModal />
        </div>
      </div>
      <div className='pt-3'>
        <table className='table'>
          <thead>
            <tr className='text-muted'>
              <th>#</th>
              <th>Category Title</th>
              <th>Category Description</th>
              <th>Total Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          {categories.map((category) => (
            <tbody key={category.no}>
              <tr>
                <th>{category.no}</th>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{category.totalCourses}</td>
                <td>
                  <DropdownButton id='dropdown-basic-button' title='Categories'>
                    <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>
                      Something else
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

export default Category;
