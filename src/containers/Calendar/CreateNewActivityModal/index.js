import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import request from '../../../utils/request'

class CreateNewActivityModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                activityName: '',
                capacity: '',
                description: '',
                creator: {
                    userId: 1 //Get user id from login
                },
                activityType: "match",
                startAt: '',
                endAt: '',
                locationId: ''
            },
            date: '',
            locations: []
        }
    }

    findLocations = (startAt, endAt) => {
        const payload = request(`http://localhost:8181/api/locations/all`, {
            data: {
                startAt: startAt,
                endAt: endAt
            }
        }).then(value => this.setState({ locations: value }))
    }

    render() {
        const { onHide, createActivity } = this.props
        const { data, locations } = this.state

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
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Activity Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Type activity name"
                                onChange={e => {
                                    this.setState({ data: { ...data, activityName: e.target.value } })
                                }
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Activity Description
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Type activity description"
                                onChange={e => {
                                    this.setState({ data: { ...data, description: e.target.value } })
                                }
                                } />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Activity Type</Form.Label>
                            <Form.Control as="select"
                                onChange={e => {
                                    this.setState({ data: { ...data, activityType: e.target.value } })
                                }}>
                                <option>match</option>
                                <option>training</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Capacity
                            </Form.Label>
                            <Form.Control type="number" placeholder="Capacity"
                                onChange={e => {
                                    this.setState({ data: { ...data, capacity: e.target.value } })
                                }
                                } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Date
                            </Form.Label>
                            <Form.Control type="date"
                                onChange={e => {
                                    this.setState({ date: e.target.value })
                                }
                                } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Start Time
                            </Form.Label>
                            <Form.Control type="time"
                                onChange={e => {
                                    this.setState({ data: { ...data, startAt: this.state.date + 'T' + e.target.value + ':00' } })
                                }
                                } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                End Time
                            </Form.Label>
                            <Form.Control type="time"
                                onChange={e => {
                                    this.setState({ data: { ...data, endAt: this.state.date + 'T' + e.target.value + ':00' } })
                                }
                                } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.findLocations(this.state.date.startAt, this.state.date.endAt)}>
                        Find Free Locations
                        </Button>
                </Modal.Footer>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control as="select"
                                onChange={e => {
                                    this.setState({ data: { ...data, locationId: e.target.value } })
                                }}>
                                {locations && locations.map(l => (<option value={l.locationId}>{l.courtName}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => createActivity(this.state.data) && onHide()}>Create</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CreateNewActivityModal;