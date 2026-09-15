import http from 'http';
import { reviews , items } from './data.js';

const server = http.createServer((req, res) => {
    const product = {
        id: 1,
        name: 'mobile',
        price: 25000,
        rating: 4.5,
        reviews: 200,
    }

    const items = [
        {
            "id": 1,
            "name": "iPhone 15",
            "price": 69999,
            "image": "https://example.com/images/iphone-15.jpg",
            "desc": "Apple iPhone 15 with 6.1-inch display, powerful performance, and advanced camera system."
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S24",
            "price": 74999,
            "image": "https://example.com/images/samsung-s24.jpg",
            "desc": "Samsung Galaxy S24 featuring a high-quality AMOLED display, powerful processor, and excellent cameras."
        },
        {
            "id": 3,
            "name": "OnePlus 12",
            "price": 64999,
            "image": "https://example.com/images/oneplus-12.jpg",
            "desc": "OnePlus 12 with a smooth AMOLED display, fast processor, and long-lasting battery."
        },
        {
            "id": 4,
            "name": "MacBook Air M3",
            "price": 114999,
            "image": "https://example.com/images/macbook-air-m3.jpg",
            "desc": "Lightweight MacBook Air powered by the Apple M3 chip, designed for fast and efficient performance."
        },
        {
            "id": 5,
            "name": "Sony WH-1000XM5",
            "price": 29999,
            "image": "https://example.com/images/sony-wh1000xm5.jpg",
            "desc": "Premium wireless headphones with excellent sound quality and advanced noise cancellation."
        },
        {
            "id": 6,
            "name": "Apple Watch Series 9",
            "price": 41999,
            "image": "https://example.com/images/apple-watch-series-9.jpg",
            "desc": "Smartwatch with fitness tracking, health features, notifications, and a bright display."
        },
        {
            "id": 7,
            "name": "iPad Air",
            "price": 59999,
            "image": "https://example.com/images/ipad-air.jpg",
            "desc": "Powerful and portable tablet suitable for entertainment, study, creativity, and productivity."
        },
        {
            "id": 8,
            "name": "Dell Inspiron 15",
            "price": 57999,
            "image": "https://example.com/images/dell-inspiron-15.jpg",
            "desc": "Reliable laptop with a large display, capable processor, and enough performance for everyday tasks."
        },
        {
            "id": 9,
            "name": "JBL Flip 6",
            "price": 11999,
            "image": "https://example.com/images/jbl-flip-6.jpg",
            "desc": "Portable Bluetooth speaker delivering powerful sound with a durable and water-resistant design."
        },
        {
            "id": 10,
            "name": "Canon EOS 1500D",
            "price": 45999,
            "image": "https://example.com/images/canon-eos-1500d.jpg",
            "desc": "Entry-level DSLR camera suitable for photography enthusiasts with high-quality image capture."
        }
    ]

    if (req.url == '/api/product') {
        // res.end(JSON.stringify(product))
        res.end(JSON.stringify(items));
    }
    else if (req.url == '/api/review') {
        res.end(JSON.stringify(reviews));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => {
    console.log('prg4 is running ...');
});