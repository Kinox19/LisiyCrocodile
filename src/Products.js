const products = [
    {
        id: 'hat',
        title: 'Шапка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 1500,
        colors: [
            {
                color: 'Black',
                value: 'rgba(0, 0, 0, 1)',
            },
            {
                color: 'White',
                value: 'rgba(217, 217, 217, 1)',
            },
            {
                color: 'Gray',
                value: 'rgba(106, 111, 89, 1)',
            },
            {
                color: 'Green',
                value: 'rgba(190, 255, 0, 1)',
            },
            {
                color: 'Pink',
                value: 'rgba(255, 100, 90, 1)',
            },
            
        ],
        image: [
            "https://i.ibb.co/Smgyk6c/hat-black.png",
            "https://i.ibb.co/ScTsmyj/hat-gray.png",
            "https://i.ibb.co/kmC225p/hat-green.png",
            "https://i.ibb.co/SQpr4kk/hat-pink.png",
            "https://i.ibb.co/C70wvsM/hat-white.png"
        ]
    },
    {
        id: 'shirt',
        title: 'Футболка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 1850,
        colors: [
            {
                color: 'Black',
                value: 'rgba(0, 0, 0, 1)',
            },
            {
                color: 'White',
                value: 'rgba(217, 217, 217, 1)',
            },
            {
                color: 'Gray',
                value: 'rgba(106, 111, 89, 1)',
            },
            {
                color: 'Green',
                value: 'rgba(190, 255, 0, 1)',
            },
            {
                color: 'Pink',
                value: 'rgba(255, 100, 90, 1)',
            },
            
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        image: [
            "https://i.ibb.co/wwrCsSj/shirt-black.png" ,
            "https://i.ibb.co/rc9hz50/shirt-gray.png",
            "https://i.ibb.co/zJWB4mX/shirt-green.png" ,
            "https://i.ibb.co/v1524Wk/shirt-pink.png",
            "https://i.ibb.co/QfK3Vt0/shirt-white.png"
        ]
    },
    {
        id: 'hoodie',
        title: 'Худи',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 2750,
        colors: [
            {
                color: 'Black',
                value: 'rgba(0, 0, 0, 1)',
            },
            {
                color: 'White',
                value: 'rgba(217, 217, 217, 1)',
            },
            {
                color: 'Gray',
                value: 'rgba(106, 111, 89, 1)',
            },
            {
                color: 'Green',
                value: 'rgba(190, 255, 0, 1)',
            },
            {
                color: 'Pink',
                value: 'rgba(255, 100, 90, 1)',
            },
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        image: [
            "https://i.ibb.co/Rj6KsTW/hoodie-black.png",
            "https://i.ibb.co/Vp2fD5p/hoodie-gray.png",
            "https://i.ibb.co/Qr7FXVB/hoodie-green.png",
            "https://i.ibb.co/1MVSxCQ/hoodie-pink.png",
            "https://i.ibb.co/GssTyLD/hoodie-white.png"
        ]
    },
    {
        id: 'cap',
        title: 'Кепка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 1250,
        colors: [
            {
                color: 'Black',
                value: 'rgba(0, 0, 0, 1)',
            },
            {
                color: 'White',
                value: 'rgba(217, 217, 217, 1)',
            },
            {
                color: 'Green',
                value: 'rgba(190, 255, 0, 1)',
            },
            
        ],
        image: [
            "https://i.ibb.co/FqZThNN/cap-black.png",
            "https://i.ibb.co/JR6J6RJ/cap-green.png",
            "https://i.ibb.co/qdktxhF/cap-white.png",
        ]
    },
    {
        id: 'shopper',
        title: 'Шопер',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 950,
        colors: [
            {
                color: 'Black',
                value: 'rgba(0, 0, 0, 1)',
            },
            {
                color: 'White',
                value: 'rgba(217, 217, 217, 1)',
            },
            {
                color: 'Gray',
                value: 'rgba(106, 111, 89, 1)',
            },
            {
                color: 'Green',
                value: 'rgba(190, 255, 0, 1)',
            },
            {
                color: 'Pink',
                value: 'rgba(255, 100, 90, 1)',
            },
            
        ],
        image: [
            "https://i.ibb.co/tPf7zwZ/shopper-black.png",
            "https://i.ibb.co/m9hFSPk/shopper-gray.png",
            "https://i.ibb.co/C7bz48d/shopper-green.png" ,
            "https://i.ibb.co/YPG2GCt/shopper-pink.png",
            "https://i.ibb.co/7Q5qgBC/shopper-white.png"
        ]
    },
    {
        id: 'cup',
        title: 'Термокружка',
        brand: '“Лысый крокодил”',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 700,
        colors: [
            {
                color: 'Black',
                value: 'rgba(0, 0, 0, 1)',
            },
            {
                color: 'White',
                value: 'rgba(217, 217, 217, 1)',
            },
            {
                color: 'Gray',
                value: 'rgba(106, 111, 89, 1)',
            },
            {
                color: 'Green',
                value: 'rgba(190, 255, 0, 1)',
            },
            {
                color: 'Pink',
                value: 'rgba(255, 100, 90, 1)',
            },
            
        ],
        image: [
            "https://i.ibb.co/Y81xTv9/cup-black.png",
            "https://i.ibb.co/D7ftKfs/cup-gray.png",
            "https://i.ibb.co/k403nyZ/cup-green.png",
            "https://i.ibb.co/km9cLgQ/cup-pink.png",
            "https://i.ibb.co/9Y2cygD/cup-white.png"
        ]
    }
]

export default products