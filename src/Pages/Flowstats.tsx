import React, { useContext } from 'react'
import { ZipContext } from '../Zipply'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Flowstats = () => {
  const { text, setText, flowbar, active, setActive, setFlowbars } =
    useContext(ZipContext)
  const [show, setShow] = useState(false)

  const texton = (e: any) => {
    setText(e.target.value)
  }

  const saveFlow = () => {
    if (!flowbar.includes(text)) {
      flowbar.pop()
      setFlowbars([...flowbar, text])
      setActive(!active)
    }

    console.log(flowbar)
  }

  return (
    <div className='flowstats'>
      <div className='btx'>
        <Button className='delete' variant='danger'>
          Delete
        </Button>
        <Button variant='primary' onClick={() => setShow(true)}>
          Save
        </Button>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Are u Sure u want to save ??</h1>
          <Button variant='primary' onClick={saveFlow}>
            Save
          </Button>
        </Modal.Body>
      </Modal>

      <div className='flowinfo'>
        <h2>Flow Info</h2>
        <div className='flowbox'>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter a name'
            onChange={(e) => texton(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Flowstats
