const products = [
    {
        id: 1,
        title: 'Шапка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 1500,
        colors: ['rgba(0, 0, 0, 1)', 'rgba(217, 217, 217, 1)', 'rgba(106, 111, 89, 1)', 'rgba(190, 255, 0, 1)', 'rgba(255, 100, 90, 1)'],
        image: [
            'https://i.ibb.co/6W1RVZD/hat-Black.png',
            'https://i.ibb.co/6W1RVZD/hat-Gray.png',
            'https://i.ibb.co/6W1RVZD/hat-Brown.png',
            'https://i.ibb.co/6W1RVZD/hat-Acid.png',
            'https://i.ibb.co/6W1RVZD/hat-Pink.png'
        ]
    },
    {
        id: 2,
        title: 'Футболка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 1850,
        colors: ['rgba(0, 0, 0, 1)', 'rgba(217, 217, 217, 1)', 'rgba(106, 111, 89, 1)', 'rgba(190, 255, 0, 1)', 'rgba(255, 100, 90, 1)'],
        sizes: ['S', 'M', 'L', 'XL', 'XLL'],
        image: [
            'https://i.ibb.co/6W1RVZD/shirt-Black.png',
            'https://i.ibb.co/6W1RVZD/shirt-Gray.png',
            'https://i.ibb.co/6W1RVZD/shirt-Brown.png',
            'https://i.ibb.co/6W1RVZD/shirt-Acid.png',
            'https://i.ibb.co/6W1RVZD/shirt-Pink.png'
        ]
    },
    {
        id: 3,
        title: 'Худи',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 2750,
        colors: ['rgba(0, 0, 0, 1)', 'rgba(217, 217, 217, 1)', 'rgba(106, 111, 89, 1)', 'rgba(190, 255, 0, 1)', 'rgba(255, 100, 90, 1)'],
        sizes: ['S', 'M', 'L', 'XL', 'XLL'],
        image: [
            'https://i.ibb.co/6W1RVZD/hoodie-Black.png',
            'https://i.ibb.co/6W1RVZD/hoodie-Gray.png',
            'https://i.ibb.co/6W1RVZD/hoodie-Brown.png',
            'https://i.ibb.co/6W1RVZD/hoodie-Acid.png',
            'https://i.ibb.co/6W1RVZD/hoodie-Pink.png'
        ]
    },
    {
        id: 4,
        title: 'Кепка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 1250,
        colors: ['rgba(0, 0, 0, 1)', 'rgba(217, 217, 217, 1)', 'rgba(106, 111, 89, 1)', 'rgba(190, 255, 0, 1)', 'rgba(255, 100, 90, 1)'],
        image: [
            'https://i.ibb.co/6W1RVZD/cap-Black.png',
            'https://i.ibb.co/6W1RVZD/cap-Gray.png',
            'https://i.ibb.co/6W1RVZD/cap-Brown.png',
            'https://i.ibb.co/6W1RVZD/cap-Acid.png',
            'https://i.ibb.co/6W1RVZD/cap-Pink.png'
        ]
    },
    {
        id: 5,
        title: 'Шопер',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 950,
        colors: ['rgba(0, 0, 0, 1)', 'rgba(217, 217, 217, 1)', 'rgba(106, 111, 89, 1)', 'rgba(190, 255, 0, 1)', 'rgba(255, 100, 90, 1)'],
        image: [
            'https://i.ibb.co/6W1RVZD/shopper-Black.png',
            'https://i.ibb.co/6W1RVZD/shopper-Gray.png',
            'https://i.ibb.co/6W1RVZD/shopper-Brown.png',
            'https://i.ibb.co/6W1RVZD/shopper-Acid.png',
            'https://i.ibb.co/6W1RVZD/shopper-Pink.png'
        ]
    },
    {
        id: 6,
        title: 'Термокружка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 700,
        colors: ['rgba(0, 0, 0, 1)', 'rgba(217, 217, 217, 1)', 'rgba(106, 111, 89, 1)', 'rgba(190, 255, 0, 1)', 'rgba(255, 100, 90, 1)'],
        image: [
            'https://i.ibb.co/6W1RVZD/cup-Black.png',
            'https://i.ibb.co/6W1RVZD/cup-Gray.png',
            'https://i.ibb.co/6W1RVZD/cup-Brown.png',
            'https://i.ibb.co/6W1RVZD/cup-Acid.png',
            'https://i.ibb.co/6W1RVZD/cup-Pink.png'
        ]
    }
]

export default products