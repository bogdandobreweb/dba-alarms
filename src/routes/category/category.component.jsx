import './category.styles.jsx';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector.js';

import Spinner from '../../components/spinner/spinner.component.jsx';
import ProductCard from '../../components/product-card/product.card.component';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {

    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(()=> {
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

    return(
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? 
                (<Spinner /> ) 
                :
               ( <CategoryContainer>
                {products &&
                    products.map((product)=> 
                    <ProductCard key={product.id} product={product}/>)
                }
                </CategoryContainer> )
            }
        </>
    )
}

export default Category;