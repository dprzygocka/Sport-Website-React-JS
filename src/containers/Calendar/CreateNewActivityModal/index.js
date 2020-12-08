import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

class CreateNewActivityModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { onHide } = this.props
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Create New Activity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Create</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CreateNewActivityModal;