//React Router Dom components
import { useParams } from "react-router";
//Custom components
import { ProductDetail } from '../index';

const ProductDetailContainer = () => {

    const {id} = useParams();

    return (
        <div>
            <ProductDetail data={id} />
        </div>
    );
}

export default ProductDetailContainer;