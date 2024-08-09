import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './home.css';
import GiftCard from "./GiftCard";
import {getBrands, getProducts, getTopProducts, getTrendingProducts} from "../../service/Api";
import Trending2 from "../../Components/Trending2/Trending2";
import Footer from "../../Components/Footer/Footer";
import QuickLinks from "../../Components/quicksLinks/QuickLinks";
import TopQuickLinks from "../../Components/TopQuickLinks";
import Banner from "../../PortalComponents/Banner";
import Brands from "../../PortalComponents/Brands";



const SearchBar = () => (
    <div className="search-bar-container d-flex align-items-center justify-content-left p-3 rounded-pill" style={{ backgroundColor: 'var(--primary-color)', marginTop: '40px' }}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="var(--secondary-text-color)" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21.5306 20.4694L16.8366 15.7762C19.6629 12.383 19.3204 7.36693 16.0591 4.38935C12.7978 1.41176 7.77134 1.526 4.64867 4.64867C1.526 7.77134 1.41176 12.7978 4.38935 16.0591C7.36693 19.3204 12.383 19.6629 15.7762 16.8366L20.4694 21.5306C20.7624 21.8237 21.2376 21.8237 21.5306 21.5306C21.8237 21.2376 21.8237 20.7624 21.5306 20.4694ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25C6.77379 17.2459 3.75413 14.2262 3.75 10.5Z"/>
        </svg>
        <span className="search-bar-text ms-3 " style={{ fontSize: '1.8rem' }}>Find a gift card</span>
    </div>
);


export default function Home() {
    const navigate = useNavigate();
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };
    const [specialOffers, setSpecialOffers] = useState([]);
    const [typedText, setTypedText] = useState('');
    const userInput = "Gift cards for everyone on your list";
    const [TopProducts, setTopProducts] = useState([]);
    const [TrendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        let index = -1;
        const interval = setInterval(() => {
            if (index < userInput.length-1) {
                setTypedText(prevTypedText => prevTypedText + userInput[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 70);

        return () => clearInterval(interval);
    }, [userInput]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setSpecialOffers(products);
        };

        const fetchTopProducts = async () => {
            const topProducts = await getTopProducts();
            setTopProducts(topProducts);
        };

        const fetchTrendingProducts = async () => {
            const trendingProducts = await getTrendingProducts();
            setTrendingProducts(trendingProducts);
        };
        const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Health & Beauty', 'Toys & Games', 'Travel'];

        fetchProducts();
        fetchTopProducts();
        fetchTrendingProducts();

    }, []);

    function filterByBrand(brand) {
        console.log("Filtering by brand:", brand);
    }
    const trendingProducts2 = [
        {
            id: 1,
            name: 'HelloFresh 15GBP eGift',
            description: 'HelloFresh delivers all the fresh, seasonal ingredients and recipes you need to make delicious meals.',
            image: 'apple.png',
            price: '15 GBP',
            discount: '9% OFF'
        },
        {
            id: 2,
            name: 'Ask Italian 10GBP eGift',
            description: 'Enjoy authentic Italian cuisine with a 10GBP eGift Card at any Ask Italian restaurant.',
            image: 'starbucks.png',
            price: '10 GBP',
            discount: '2% OFF'
        },
        {
            id: 3,
            name: 'Adidas eGift',
            description: 'Adidas is the brand with the Three Stripes, the icon. From the stadium to the streets. From the courts',
            image: 'apple.png',
            price: 'Variable',
            discount: '7% OFF'
        },
        {
            id: 4,
            name: 'HelloFresh 15GBP eGift Again',
            description: 'HelloFresh delivers all the fresh, seasonal ingredients and recipes you need to make delicious meals .',
            image: 'apple.png',
            price: '15 GBP',
            discount: '9% OFF'
        },
        {
            id: 5,
            name: 'Ask Italian 10GBP eGift Again',
            description: 'Enjoy authentic Italian cuisine with a 10GBP eGift Card at any Ask Italian restaurant.',
            image: 'starbucks.png',
            price: '10 GBP',
            discount: '2% OFF'
        }
    ];
    return (
        <div className="main">
            <Banner text={typedText}/>
            <div className="title-top-gift-cards">Trending</div>
            <Trending2 products={trendingProducts2}/>
            {/*<SearchBar/>*/}
            {/*<TopQuickLinks/>*/}
            <div className="title-top-gift-cards">Top Gift Cards</div>
            <div className="row">
                {TrendingProducts.map((card, index) => (
                    <GiftCard key={index} card={card} onClick={() => handleProductClick(card.id)}/>
                ))}
            </div>
            <div className="title-top-gift-cards">Brands</div>
            <Brands/>
            <div className="title-top-gift-cards">Special offers</div>
            <div className="row">
                {TopProducts.map((offer, index) => (
                    <GiftCard key={index} card={offer} onClick={() => handleProductClick(offer.id)}/>
                ))}
            </div>
            <div className="title-top-gift-cards">Quick Links</div>
            <Footer/>
            <QuickLinks/>
        </div>
    );
};
