import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function TopicsModal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleClose = () => setShowModal(false);

  const handleSubmit = () => {
    const category = { name, description, avatar };
    console.log(category);
  };

  return (
    <Fragment>
      <Button className='btn-sm' onClick={() => setShowModal(true)}>
        Add Topics
      </Button>
      <Modal show={showModal} onHide={handleClose} size='md' centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 16 }}>Add a Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              name='name'
              type='text'
              id='name'
              className='form-control'
              placeholder='Name'
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <br />
            <textarea
              name='description'
              className='form-control'
              id='description'
              cols='10'
              rows='4'
              placeholder='Description'
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
            <br />
            <input
              name='avatar'
              id='avatar'
              type='text'
              className='form-control'
              placeholder='Image Url'
              onChange={(event) => setAvatar(event.target.value)}
              value={avatar}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' size='sm' onClick={handleSubmit}>
            Save Topic
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default TopicsModal;
