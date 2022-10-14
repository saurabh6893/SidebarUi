import React, { useContext } from 'react'
import { ZipContext } from '../Zipply'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Flowstats = () => {
  const { pushtext, text, setText, selected, setSideArr, sideArr } =
    useContext(ZipContext)
  const [show, setShow] = useState(false)

  const save = (selected: any, text: any) => {
    let edited = sideArr.map((s: any) => {
      if (s.id === selected) {
        s.title = text
      }
      return sideArr
    })
    setSideArr(edited)
  }

  const Yes = (e) => {}

  return (
    <div className='flowstats'>
      <div className='btx'>
        <Button className='delete' variant='danger'>
          Delete
        </Button>
        <Button variant='primary' onClick={() => save(selected, text)}>
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
          <Button variant='primary' onClick={(e) => Yes(e)}>
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
            onChange={(e) => pushtext(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Flowstats
