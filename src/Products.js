const products = [
    {
        id: 'hat',
        title: 'Шапка',
        brand: '“Лысый крокодил”',
        description: 'Шлем повелителя бесконечности. Надев нашу шапку вы обретаете:',
        attachments: [
            {
                attachment: 'выносливость',
                value: '+10'
            },
            {
                attachment: 'ночное зрение',
                value: '+15'
            },
            {
                attachment: 'ловкость',
                value: '+30'
            },
        ],
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
            "https://i.ibb.co/D1pyw0b/hat-black.png",
            "https://i.ibb.co/XCC7ZxC/hat-gray.png",
            "https://i.ibb.co/gv72s5S/hat-green.png",
            "https://i.ibb.co/pJvNDcc/hat-pink.png",
            "https://i.ibb.co/1qzZ94L/hat-white.png"
        ]
    },
    {
        id: 'shirt',
        title: 'Футболка',
        brand: '“Лысый крокодил”',
        description: 'Доспех бога из 100% хлопка. Надев нашу футболку вы обретаете:',
        attachments: [
            {
                attachment: 'бессмертие',
                value: ''
            },
            {
                attachment: 'левитация',
                value: '+5'
            },
            {
                attachment: 'огнеупорность',
                value: '+15'
            },
        ],
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
            "https://i.ibb.co/1nCMwc8/shirt-black.png" ,
            "https://i.ibb.co/0hxL5yM/shirt-gray.png",
            "https://i.ibb.co/HYcZ3SK/shirt-green.png" ,
            "https://i.ibb.co/kV7RbKp/shirt-pink.png",
            "https://i.ibb.co/sbBhLfX/shirt-white.png"
        ]
    },
    {
        id: 'hoodie',
        title: 'Худи',
        brand: '“Лысый крокодил”',
        description: 'Нагрудник императора человечества. Надев наш худи вы обретаете:',
        attachments: [
            {
                attachment: 'базовый навык телепортации',
                value: ''
            },
            {
                attachment: 'управление временем',
                value: '+15'
            },
            {
                attachment: 'регенерация',
                value: '+15'
            },
        ],
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
            "https://i.ibb.co/MfNMY1Z/hoodie-black.png",
            "https://i.ibb.co/71G4My7/hoodie-gray.png",
            "https://i.ibb.co/N6ZRkQw/hoodie-green.png",
            "https://i.ibb.co/7RRk8cT/hoodie-pink.png",
            "https://i.ibb.co/PN1wJjP/hoodie-white.png"
        ]
    },
    {
        id: 'cap',
        title: 'Кепка',
        brand: '“Лысый крокодил”',
        description: 'Шляпа пророка-скитальца. Надев нашу кепку, вы обретаете:',
        attachments: [
            {
                attachment: 'невидимость',
                value: ''
            },
            {
                attachment: 'телекинез',
                value: '+30'
            },
            {
                attachment: 'рентгеновское зрение',
                value: '+35'
            },
        ],
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
            "https://i.ibb.co/0VJkMbd/cap-black.png",
            "https://i.ibb.co/TwbCyqj/cap-green.png",
            "https://i.ibb.co/cLvVtD6/cap-white.png",
        ]
    },
    {
        id: 'shopper',
        title: 'Шопер',
        brand: '“Лысый крокодил”',
        description: 'Сумка из прочной ткани. Надев наш шопер вы обретаете:',
        attachments: [
            {
                attachment: 'заклинание нежети',
                value: '+5'
            },
            {
                attachment: 'знание ядерной физики',
                value: '+5'
            },
            {
                attachment: 'ясновидение',
                value: '+15'
            },
        ],
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
            "https://i.ibb.co/T2Tcf07/shopper-black.png",
            "https://i.ibb.co/gRSG8ML/shopper-gray.png",
            "https://i.ibb.co/QmsQ14T/shopper-green.png" ,
            "https://i.ibb.co/PrKt2yM/shopper-pink.png",
            "https://i.ibb.co/FJtzJ2W/shopper-white.png"
        ]
    },
    {
        id: 'cup',
        title: 'Термокружка',
        brand: '“Лысый крокодил”',
        description: 'Магический кубок из гномьей стали. Испив из нашей кружки вы обретаете:',
        attachments: [
            {
                attachment: 'храбрость',
                value: '+50'
            },
            {
                attachment: 'интеллект',
                value: '+50'
            },
            {
                attachment: 'сила',
                value: '+50'
            },
        ],
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
            "https://i.ibb.co/mNgxsWx/cup-black.png",
            "https://i.ibb.co/f4JsqMR/cup-gray.png",
            "https://i.ibb.co/FzmmqGB/cup-green.png",
            "https://i.ibb.co/1TWmrtQ/cup-pink.png",
            "https://i.ibb.co/7YcCZfT/cup-white.png"
        ]
    }
]

export default products