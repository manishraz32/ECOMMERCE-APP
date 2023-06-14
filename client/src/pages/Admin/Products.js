import React, { useState, useEffect } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    //lifecycle mehtod
    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <Layout>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1 className="text-center">
                        All Products List
                    </h1>
                    <div className="d-flex flex-wrap">
                        {
                            products.map((p) => (
                                <Link 
                                    key={p._id} 
                                    to={`/dashboard/admin/product/${p.slug}`}
                                    className="product-Link"
                                >
                                    <div className="card m-2" style={{ width: "18rem" }} >
                                        <img
                                            src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                                            className="card-img-top"
                                            alt={p.name}
                                        />
                                        <div className="card-body">
                                            <div className="card-title">{p.name}</div>
                                            <div className="card-text">{p.description}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products