// React components
import { useEffect, useState } from 'react';
// Custom components
import { ProductItem } from '../index';

//
// Component start
//
const ProductItemContainer = ({ item }) => {

    const handlerOnDetail = (e) => {
        console.log(e);
    }

    const handlerOnIngress = (e) => {
        console.log(e);
    }

    const handlerOnEgress = (e) => {
        console.log(e);
    }

    return (
        <ProductItem
            item={item}
            handlerOnDetail={handlerOnDetail}
            handlerOnIngress={handlerOnIngress}
            handlerOnEgress={handlerOnEgress}
        />
    );
}

export default ProductItemContainer;