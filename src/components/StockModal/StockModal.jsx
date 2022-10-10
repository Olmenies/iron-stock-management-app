// React Bootstrap components
import { Modal, Button, Form } from "react-bootstrap";

//
//Component start
//
const StockModal = ({isStockModalVisible, handleOnCloseModal, selectedProduct, handleOnSave, stockInputRef}) => {
    return (
        <Modal show={isStockModalVisible} onHide={handleOnCloseModal}>
            <Modal.Header>
                <Modal.Title>Modificación de stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Definir stock: <i style={{ color: 'grey' }} >(actual: {selectedProduct.stock})</i></Form.Label>
                        <Form.Control
                            ref={stockInputRef}
                            type="number"
                            defaultValue={selectedProduct.stock}
                            autoFocus
                            min='0'
                        />
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

export default StockModal