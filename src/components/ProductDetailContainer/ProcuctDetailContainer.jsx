// React components
import { useEffect, useState } from "react";
// React Router Dom components
import { useParams } from "react-router";
// Custom components
import { ProductDetail } from '../index';
// Mock data
import { PRODUCTS } from "../../utils/products";

//
// Component start
//
const ProductDetailContainer = () => {

    const [selectedProduct, setSelectedProduct] = useState({});
    const {id} = useParams();

    /*
    const fetchData = async () => {
        const response = await fetch('./ProductDetailContainer.jsx',
        {
            method: 'GET',
        });
        
        const data = await response.text();
        console.log(data);
    }
    

    useEffect(() => {
        fetchData();
    })

    */

    useEffect(() => {
        const tempSelectedProduct = PRODUCTS.find(el => el.code === id);
        setSelectedProduct(tempSelectedProduct);
    },[id]);

    return (
        <div>
            <ProductDetail selectedProduct={selectedProduct} />
        </div>
    );
}

export default ProductDetailContainer;