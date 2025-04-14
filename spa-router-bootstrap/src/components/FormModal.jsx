import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormModal = ({ user, submitted, showModal, handleCloseModal }) => {

    return (
        <>
            {/* The Modal component in React-Bootstrap uses the 'show' prop internally to render or hide the modal. When show 
            is true, the modal is added to the DOM and displayed. When show is false, the modal is removed from the DOM or hidden. 
            in this case, the show prop is controlled by {showModal} from the UserForm component*/}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Form Submitted!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {submitted &&
                    <>
                    <p>Nice job!  Here is the information returned from the API:</p>
                    <p><b>Name: </b>{user.name}</p>
                    <p><b>Email: </b>{user.email}</p>
                    <p><b>Phone: </b>{user.phone}</p>
                    <p><b>Food: </b>{user.food}</p>
                    <p><b>Communication: </b>{user.communication}</p>
                    </>
                }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FormModal;