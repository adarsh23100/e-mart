import React, { Fragment,useEffect } from 'react'
import {CgMouse} from "react-icons/all";
import "./Home.css"
import Product from "./Product.js"
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import {useSelector,useDispatch} from 'react-redux'

const product = {
    name: "Blue T-Shirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "₹3000",
    _id: "adarsh"
}

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);    

  return (
    <Fragment>
        <MetaData title="E-Mart | India's No.1 Ecommerce Website" />
        <div className='banner'>
            <p>Welcome to E-Mart</p>
            <h1>Find Amazing Products</h1>

            <a href='#container'>
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Products</h2>
        <div className='container' id='container'>
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
        </div>
    </Fragment>
  )
}

export default Home;