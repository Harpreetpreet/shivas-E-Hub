import React from 'react';
import CardContent from './CardContent';

const data = [
  {
    image: '/images/shop01.png.webp',
    title: 'haale luiaa',
    description: 'ajhdiq',
    button: 'shop',
  },
  {
    image: '/images/shop02.png.webp',
    title: 'haale luiaa',
    description: 'ajhdiq',
    button: 'shop',
  },
  {
    image: '/images/shop03.png.webp',
    title: 'haale luiaa',
    description: 'ajhdiq',
    button: 'shop',
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
            description={item.description}
          ></CardContent>
        ))}
      </div>
    </div>
  );
};

export default Collection;
