import { Button } from "react-bootstrap";

const ProductListItem = ({ item, handlerOnDetail, handlerOnIngress, handlerOnEgress}) => {
    return (
        <tr>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>{item.cost}</td>
            <td>
                <Button
                    onClick={(e) => handlerOnDetail(e)}
                >
                    Detalle
                </Button>
            </td>
            <td>
                <Button
                    onClick={(e) => handlerOnIngress(e)}
                >
                    Ingreso
                </Button>
            </td>
            <td>
                <Button
                    onClick={(e) => handlerOnEgress(e)}
                >
                    Egreso
                </Button>
            </td>
        </tr>
    );
}

export default ProductListItem;