const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-1.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-2.jpg',
=======
      isFavorite: true,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-3.jpg',
=======
      isFavorite: false,
      isCompare: true,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-4.jpg',
=======
      isFavorite: true,
      isCompare: true,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: process.env.PUBLIC_URL + '/images/beds/bed-5.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-6.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-7.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-8.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-2.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-1.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-4.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-3.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-6.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-5.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-8.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-7.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-8.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-7.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-6.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-5.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-4.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-3.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-2.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
<<<<<<< HEAD
      image: process.env.PUBLIC_URL + '/images/beds/bed-1.jpg',
=======
      isFavorite: false,
      isCompare: false,
>>>>>>> 98c79d9 (add styles to favorite/compare buttons when they are active)
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
