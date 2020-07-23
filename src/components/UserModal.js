import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function UserModal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [avatar, setAvatar] = useState("");

  const handleClose = () => setShowModal(false);

  const handleSubmit = () => {
    const user = { name, email };
    console.log(user);
  };

  return (
    <Fragment>
      <Button className='btn-sm' onClick={() => setShowModal(true)}>
        Add User
      </Button>
      <Modal show={showModal} onHide={handleClose} size='md' centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 16 }}>Add a User</Modal.Title>
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
              name='email'
              className='form-control'
              id='email'
              cols='10'
              rows='4'
              placeholder='Email Address'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <br />
            {/* <input
              name='avatar'
              id='avatar'
              type='text'
              className='form-control'
              placeholder='Image Url'
              onChange={(event) => setAvatar(event.target.value)}
              value={avatar}
            /> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' size='sm' onClick={handleSubmit}>
            Save User
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default UserModal;
