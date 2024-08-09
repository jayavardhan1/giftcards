import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './ProductListing.css';
import { getProducts } from "../../service/Api";
import ReactPaginate from 'react-paginate';
import GiftCard2 from "../home/GiftCard2";
const ProductListing = () => {
    // on page load scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        cardType: [],
        brands: [],
    });
    const [openCategories, setOpenCategories] = useState({});

    const toggleCategory = category => {
        setOpenCategories(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 16;
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setAllProducts(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const applyFilters = useCallback(() => {
        const filteredProducts = allProducts.filter(product => {
            return Object.entries(selectedFilters).every(([key, values]) => {
                if (key === "brands") {
                    return values.length === 0 || values.map(v => v.toLowerCase()).includes(product.brand.toLowerCase());
                } else {
                    return values.length === 0 || values.includes(product[key]);
                }
            });
        });
        setProducts(filteredProducts);
    }, [allProducts, selectedFilters]);

    useEffect(() => {
        applyFilters();
    }, [selectedFilters, applyFilters]);

    const handleCheckboxChange = (filterCategory, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [filterCategory]: prevFilters[filterCategory].includes(value) ?
                prevFilters[filterCategory].filter(item => item !== value) :
                [...prevFilters[filterCategory], value]
        }));
    };

    const renderCheckboxes = (category, options) => (
        <div className="filter-category">
            <div className="d-flex align-items-center pb-1" onClick={() => toggleCategory(category)} style={{cursor: 'pointer'}}>
                {openCategories[category] ?
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16" style={{ marginLeft: '5px' }}>
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    )
                    :
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" style={{ marginLeft: '5px' }}>
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    )} &nbsp; &nbsp;{category}
            </div>
            {openCategories[category] && (
                <ul>
                     {options.map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        checked={selectedFilters[category].includes(option)}
                        onChange={() => handleCheckboxChange(category, option)}
                    />
                    {option}
                </label>
            ))}
                </ul>
            )}
        </div>
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const currentPageData = useMemo(() => {
        const start = currentPage * productsPerPage;
        console.log( products.slice(start, start + productsPerPage));
        return products.slice(start, start + productsPerPage);
    }, [products, currentPage]);

    return (
        <div className="product-listing-container">
            <div className="filter-section">
                <h4>Refined By</h4>
                {renderCheckboxes('cardType', ['Physical', 'Online'])}
                {renderCheckboxes('brands', ['Nike', 'Starbucks', 'Apple', 'Gap', 'Amazon'])}
            </div>
            <div className="products-section">
                <div className="row">
                    {currentPageData.map((product, index) => (
                        <GiftCard2 key={index} product={product} />
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={'← Prev'}
                    nextLabel={'Next →'}
                    pageCount={Math.ceil(products.length / productsPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    previousLinkClassName={'pagination__link'}
                    nextLinkClassName={'pagination__link'}
                    disabledClassName={'pagination__link--disabled'}
                    activeClassName={'pagination__link--active'}
                />
            </div>
        </div>
    );
};

export default ProductListing;
