
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { toast } from 'react-toastify'


const Product = () => {
  const [products, setProducts] = useState([])
  console.log("I am from product")

  // Create function for fetching data //
  async function fetchProducts() {
    try {
      const response = await axios.get('http://localhost:3000/products')
      console.log(response)
      setProducts(response.data)
      toast.success("product fetch")
    } catch (error) {
      console.log(error)
      toast.error("product not fetch")
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
      {/* Category Filter Dropdown */}
      <div className="mb-4 text-center">
        <label className="me-2 fw-bold">Filter by Category:</label>
        <select className="form-select w-auto d-inline-block" >
          <option value="">Mens</option>
          <option value="">Jackets</option>
          <option value="">Jewellery</option>
          <option value="">Electronics</option>
        </select>
      </div>
      <div className="col-md-4" style={{ marginLeft: "35%", marginTop: "2%" }}>
        <input type="text" placeholder="Search by product name" className="form-control" />
      </div>

      {/* Product Grid */}
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 d-flex justify-content-center mb-4">
            <ProductCard {...product} onDelete={() => handleDelete(product.id)} />
          </div>
        ))}
      </div>
    </div>


    // <div className="container mt-4">
    //   <div className="row justify-content-center">
    //     {products.map((product) => (
    //       <div className="col-md-4 d-flex justify-content-center mb-4">
    //         <ProductCard key={product.id} {...product} onDelete={() => handleDelete(product.id)} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default Product