// React Router Dom components
import { Modal, Button, Form } from "react-bootstrap";

//
// Component start
//
const ProductModal = ({ selectedProduct, codeInputRef, nameInputRef, alarmInputRef, stockInputRef, isProductModalVisible, handleOnCloseModal, handleOnSave }) => {
    return (
        <Modal show={isProductModalVisible} onHide={handleOnCloseModal}>
            <Modal.Header>
                <Modal.Title>Modificación del producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nuevo código: <i style={{ color: 'grey' }}>(actual: {selectedProduct.code})</i></Form.Label>
                        <Form.Control
                            ref={codeInputRef}
                            type="text"
                            defaultValue={selectedProduct.code}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Definir producto: <i style={{ color: 'grey' }}>(actual: {selectedProduct.name})</i></Form.Label>
                        <Form.Control
                            ref={nameInputRef}
                            type="text"
                            defaultValue={selectedProduct.name}
                            autoFocus
                            min='0'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Definir stock: <i style={{ color: 'grey' }}>(actual: {selectedProduct.stock})</i></Form.Label>
                        <Form.Control
                            ref={stockInputRef}
                            type="number"
                            defaultValue={selectedProduct.stock}
                            autoFocus
                            min='0'
                        />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Definir alarma: <i style={{ color: 'grey' }}>(actual: {selectedProduct.alarm})</i></Form.Label>
                            <Form.Control
                                ref={alarmInputRef}
                                type="number"
                                defaultValue={selectedProduct.alarm}
                                autoFocus
                                min='0'
                            />
                        </Form.Group>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleOnCloseModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleOnSave}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductModal;