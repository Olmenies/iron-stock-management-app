// Custom components
import { ProductItem } from '../index';

//
// Component start
//
const ProductItemContainer = ({ item }) => {

    const handlerOnDetail = (e) => {
        console.log(e);
    }

    return (
        <ProductItem
            item={item}
            handlerOnDetail={handlerOnDetail}
        />
    );
}

export default ProductItemContainer;