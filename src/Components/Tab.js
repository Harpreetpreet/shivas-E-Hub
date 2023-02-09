import { useState, useEffect } from 'react';
import ProductCards from './NewProducts/ProductCards';
import { products } from '../utils/products';
const categories = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Laptop',
    value: 'laptop',
  },
  {
    label: 'Tab',
    value: 'tab',
  },
  {
    label: 'Headphone',
    value: 'headphone',
  },
];
const Tab = () => {
  const [category, setCategory] = useState('all');
  const [productsList, setProductsList] = useState(products);

  useEffect(() => {
    if (category && category === 'all') {
      setProductsList(products);
    } else {
      setProductsList(
        products.filter((product) => product.category === category),
      );
    }
  }, [category]);

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between ">
        <h1
          className="text-2xl font-bold
        "
        >
          NEW PRODUCTS
        </h1>
        <ul
          className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 "
          id="tabs-tab"
          role="tablist"
        >
          {categories.map((item) => (
            <li key={item.id} className="nav-item" role="presentation">
              <button
                className={`
      nav-link
      block
      font-bold
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:text-red-700
      focus:border-transparent ${
        category === item.value ? 'active' : 'border-transparent '
      }
    `}
                active={category === item.value}
                onClick={() => setCategory(item.value)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-4 ">
          {productsList.map((data1) => (
            <ProductCards key={data1.id} product={data1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
