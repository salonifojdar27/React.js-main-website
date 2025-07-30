
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'


const Product = () => {
  const [products, setProducts] = useState([])


  // Create function for fetching data //
  async function fetchProducts() {
    try {
      const response = await axios.get('http://localhost:3000/products')
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  // using UseEffect //
  useEffect(() => {
    fetchProducts()
  }, [])


  //Handle delete //
  const handleDelete = (id) => {
    console.log(id)
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {products.map((product) => (
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <ProductCard key={product.id} {...product} onDelete={() => handleDelete(product.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product