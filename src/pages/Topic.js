import React from "react";
import TopicsModal from "../components/TopicsModal";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Topic() {
  const topics = [
    {
      no: 1,
      name: "Artificial Intelligence",
      description: "Creating machines that mimic human behavior",
      importance: "4.7 / 5",
    },
    {
      no: 2,
      name: "Supervised Learning",
      description: "Mapping input to output based on input/output pairs",
      importance: "4.6 / 5",
    },
    {
      no: 3,
      name: "Neural Network",
      description: "Learning from observational data",
      importance: "4.5 / 5",
    },
  ];

  return (
    <div>
      <div className='row pt-3'>
        <div className='col-md-9 col-sm-9'>
          <h4>All Topics</h4>
          <DropdownButton id='dropdown-basic-button' title='Machine Learning'>
            <Dropdown.Item href='#/action-1'>Python</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Java</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Data Science</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='col-md-3 col-sm-3'>
          <TopicsModal />
        </div>
      </div>
      <div className='pt-3'>
        <table className='table'>
          <thead>
            <tr className='text-muted'>
              <th>#</th>
              <th>Topic Title</th>
              <th>Topic Description</th>
              <th>Topic Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          {topics.map((topic) => (
            <tbody key={topic.no}>
              <tr>
                <th>{topic.no}</th>
                <td>{topic.name}</td>
                <td>{topic.description}</td>
                <td>{topic.importance}</td>
                <td>
                  <DropdownButton id='dropdown-basic-button' title='Actions'>
                    <Dropdown.Item href='#/action-1'>
                      View Courses
                    </Dropdown.Item>
                    {/* <Dropdown.Item href='#/action-2'>
                      Delete Course
                    </Dropdown.Item> */}
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

export default Topic;
