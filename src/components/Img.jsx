import product from "../product"


const Image = () => {
    return (
        <div>
            <img src={product.img} alt={product.name} className="product-img"/>
        </div>
    )
}

export default Image