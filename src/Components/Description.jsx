import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import "../Description.css"

const Description = () => {

    const [products, setProducts] = useState({})
    const { id } = useParams()


    // Create function for fetching data //
    async function fetchProducts() {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`)
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])


    return (

        <div className="product-card-container container" style={{ marginTop: "5%" }}>
            <Card className="p-4 shadow">
                <div className="row align-items-center">
                    <div className="product-card-container container" style={{ marginTop: "5%" }}>
                        <Card className="p-4 shadow">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center">
                                    <Link to={"/Description"}> <Card.Img variant="top" src={products.image} className="img-fluid product-image" style={{ maxHeight: "400px", objectFit: "contain" }} /></Link>
                                </div>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title className="title mb-3">{products.title}</Card.Title>
                                        <Card.Text className="description mb-3">{products.description}</Card.Text>
                                        <Card.Text className="category">Category: {products.category}</Card.Text>
                                        <Card.Text className="price">Price: ₹{products.price}</Card.Text>
                                        <Card.Text className="rate">Rating: {products?.rating?.rate}</Card.Text>
                                        <Button variant="primary" className="Product-button mt-3">Add to Cart</Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    )
}


export default Description;
