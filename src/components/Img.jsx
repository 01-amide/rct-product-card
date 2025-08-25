// Displays the product image using shared product data
import product from "../product"


const Image = () => {
    return (
        // .product-img is styled to show full image without cropping
        <div>
            <img src={product.img} alt={product.name} className="product-img"/>
        </div>
    )
}

export default Image