// React components
import { useEffect, useState, useRef } from "react";
// React Router Dom components
import { useParams } from "react-router";
// Custom components
import { ProductDetail, ProductModal, StockModal } from '../index';
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

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ProductDetail
                    selectedProduct={selectedProduct}
                    showStockModal={showStockModal}
                    showProductModal={showProductModal}
                />
            </div>
            <div>
                {isStockModalVisible &&
                    <StockModal
                        isStockModalVisible={isStockModalVisible}
                        handleOnCloseModal={handleOnCloseModal}
                        selectedProduct={selectedProduct}
                        handleOnSave={handleOnSave}
                        stockInputRef={stockInputRef}

                    />
                }
                {isProductModalVisible &&
                    <ProductModal
                        handleOnCloseModal={handleOnCloseModal}
                        handleOnSave={handleOnSave}
                        isProductModalVisible={isProductModalVisible}
                        selectedProduct={selectedProduct}
                        codeInputRef={codeInputRef}
                        nameInputRef={nameInputRef}
                        alarmInputRef={alarmInputRef}
                        stockInputRef={stockInputRef}
                    />
                }
            </div>
        </div >
    );
}

export default ProductDetailContainer;