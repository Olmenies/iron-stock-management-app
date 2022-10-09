// React components
import { useEffect, useState, useRef } from "react";
// React Bootstrap components
import { useParams } from "react-router";
// React Router Dom components
import { Modal, Button, Form } from "react-bootstrap";
// Custom components
import { ProductDetail } from '../index';
// Mock data
import { PRODUCTS } from "../../utils/products";

//
// Component start
//
const ProductDetailContainer = () => {

    const [selectedProduct, setSelectedProduct] = useState({});
    const [isStockModalVisible, setIsStockModalVisible] = useState(false);
    const [isProductModalVisible, setIsProductModalVisible] = useState(false);
    const [updatedStock, setUpdatedStock] = useState();
    const stockInputRef = useRef(null);
    const codeInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const alarmInputRef = useRef(null);

    const { id } = useParams();

    useEffect(() => {
        const tempSelectedProduct = PRODUCTS.find(el => el.code === id);
        setSelectedProduct(tempSelectedProduct);
    }, [id]);

    const showStockModal = () => {
        setIsStockModalVisible(true);
    }

    const showProductModal = () => {
        setIsProductModalVisible(true);
    }

    const handleOnCloseModal = () => {
        setIsStockModalVisible(false);
        setIsProductModalVisible(false);
    }

    const handleOnSave = () => {
        setUpdatedStock(stockInputRef.current.value);
    }

    const renderStockModal = () => {
        return (
            <Modal show={isStockModalVisible} onHide={handleOnCloseModal}>
                <Modal.Header>
                    <Modal.Title>Modificación de stock</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Definir stock: <i style={{color:'grey'}} >(actual: {selectedProduct.stock})</i></Form.Label>
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
        )
    }

    const renderProductModal = () => {
        return (
            <Modal show={isProductModalVisible} onHide={handleOnCloseModal}>
                <Modal.Header>
                    <Modal.Title>Modificación del producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nuevo código: <i style={{color:'grey'}}>(actual: {selectedProduct.code})</i></Form.Label>
                            <Form.Control
                                ref={codeInputRef}
                                type="text"
                                defaultValue={selectedProduct.code}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Definir producto: <i style={{color:'grey'}}>(actual: {selectedProduct.name})</i></Form.Label>
                            <Form.Control
                                ref={nameInputRef}
                                type="text"
                                defaultValue={selectedProduct.name}
                                autoFocus
                                min='0'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Definir stock: <i style={{color:'grey'}}>(actual: {selectedProduct.stock})</i></Form.Label>
                            <Form.Control
                                ref={stockInputRef}
                                type="number"
                                defaultValue={selectedProduct.stock}
                                autoFocus
                                min='0'
                            />

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Definir alarma: <i style={{color:'grey'}}>(actual: {selectedProduct.alarm})</i></Form.Label>
                                <Form.Control
                                    ref={stockInputRef}
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

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <ProductDetail
                    selectedProduct={selectedProduct}
                    showStockModal={showStockModal}
                    showProductModal={showProductModal}
                />
            </div>
            <div>
                {isStockModalVisible && renderStockModal()}
                {isProductModalVisible && renderProductModal()}
            </div>
        </div >
    );
}

export default ProductDetailContainer;