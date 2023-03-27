import React, {useEffect} from 'react';
import Card from '../widgets/Card';
import {fetchProducts} from '../../utils/api';
import {Product} from '../../../types/product';
import Footer from '../sections/Footer';

function Products() {
    const [products, setProducts] = React.useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((res) => {
            setProducts(res);
        })

    }, [])
    return (

        
        <div className='flex flex-wrap items-center align-middle mt-3 overflow-x-hidden  justify-center'>
            {
                products.map((item, index) => {
                    return <Card key={index} title={item.title} image={item.image} description={item.description} id={item.id} category={item.category} tag={item.tag} />
                })
            }

        </div>
       )
}
export default Products;