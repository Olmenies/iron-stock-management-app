import { Button } from "react-bootstrap";

const ProductListItem = ({ item }) => {
    return (
        <tr>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>{item.cost}</td>
            <td><Button>Detalle</Button></td>
            <td><Button>Ingreso</Button></td>
            <td><Button>Egreso</Button></td>
        </tr>
    );
}

export default ProductListItem;