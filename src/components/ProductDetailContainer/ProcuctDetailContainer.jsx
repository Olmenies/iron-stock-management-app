// React components
import { useEffect, useState } from "react";
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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const tempSelectedProduct = PRODUCTS.find(el => el.code === id);
        setSelectedProduct(tempSelectedProduct);
    }, [id]);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOnCloseModal = () => {
        setIsModalVisible(false)
    }

    const renderModal = () => {
        return (
            <Modal show={isModalVisible} onHide={handleOnCloseModal}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <p>Stock actual: {selectedProduct.stock}</p>
                  <Form.Label>Definir stock:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={selectedProduct.stock}
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleOnCloseModal}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleOnCloseModal}>
                Guardar cambios
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }

    return (
        <div>
            <div>
                <ProductDetail
                    selectedProduct={selectedProduct}
                    showModal={showModal}
                />
            </div>
            <div>
                {isModalVisible && renderModal()}
            </div>
        </div >
    );
}

export default ProductDetailContainer;