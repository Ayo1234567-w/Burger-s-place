import React from 'react'

const BurgerList = () => {
    
    const burgers = [
      {
        _id: 1,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-1_xwvwpo.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 2,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087331/burger-img-2_vjfta9.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 3,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 4,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-4_wvhmpj.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 5,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-5_qojpzu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 6,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-6_thliix.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 7,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087335/burger-img-7_izw9qc.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 8,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087337/burger-img-8_usiqfb.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
      {
        _id: 9,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-9_n2spg6.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
      },
    ];
  
    return (
      <div>
        {burgers.map((burger) => (
          <div key={burger._id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <img src={burger.image} alt={burger.title} width="100" />
            <h3>{burger.title}</h3>
            <p>Rating: {burger.rating}</p>
            <p>Price: {burger.price}</p>
            <p>Duration: {burger.duration}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BurgerList;
  