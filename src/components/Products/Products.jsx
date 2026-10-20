import { Check } from 'lucide-react';
import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ productsPromise, carts, setCarts }) => {
    const products = use(productsPromise)
    // console.log(products);  // [{...}, {...}]


    return (
        <section className='products-section w-[95%] md:w-[88%] lg:w-[75%] mb-12 md:mb-18 lg:mb-30  mx-auto'>

            <div className="products-card-container mx-auto grid w-11/12 max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {
                    products.map(product => {
                        return <ProductCard key={product.id}
                            product={product}
                            carts={carts}
                            setCarts={setCarts}
                        ></ProductCard>
                    })
                }
            </div>


        </section>
    );
};

export default Products;