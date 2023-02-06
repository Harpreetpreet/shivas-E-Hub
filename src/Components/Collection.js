import React from 'react';
import CardContent from './CardContent';

const data = [
  {
    image: '/images/shop01.png.webp',
    title: 'Laptop Collection',
    button: 'SHOP NOW',
  },
  {
    image: '/images/shop02.png.webp',
    title: 'Cameras Collection',
    button: 'SHOP NOW',
  },
  {
    image: '/images/shop03.png.webp',
    title: 'Accessories Collection',
    button: 'SHOP NOW',
  },
];
const Collection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data.map((item) => (
          <CardContent
            key={item.id}
            image={item.image}
            title={item.title}
            button={item.button}
          ></CardContent>
        ))}
      </div>
    </div>
  );
};

export default Collection;
