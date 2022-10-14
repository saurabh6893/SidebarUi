import React, { useContext } from 'react'
import { ZipContext } from '../Zipply'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Flowstats = () => {
  const { selected, setSideArr, sideArr, active, setActive } =
    useContext(ZipContext)
  const [show, setShow] = useState(false)
  const [alpha, setAlpha] = useState('')
  console.log(selected)

  const save = (text: any) => {
    let editedObj = {
      id: selected.id,
      title: alpha,
    }
    let edited = sideArr.map((item) => {
      return item.id === selected.id ? editedObj : item
    })
    setSideArr(edited)
    setShow(false)
    setActive(false)
  }

  const deletee = (selected: any) => {
    let edited = sideArr.filter((item: any) => {
      return item.id !== selected.id && item
    })

    let a = edited
    setSideArr(a)
    setShow(false)
    setActive(false)
  }

  const Yes = () => {
    alpha && setShow(true)
  }

  return (
    <div className='flowstats'>
      <div className='btx'>
        <Button
          className='delete'
          variant='danger'
          onClick={() => deletee(selected)}
        >
          Delete
        </Button>
        <Button variant='primary' onClick={() => Yes()}>
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

          <Button variant='primary' onClick={() => save(selected)}>
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
            onChange={(e) => setAlpha(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Flowstats
