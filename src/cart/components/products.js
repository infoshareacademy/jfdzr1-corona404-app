import React from 'react';
import '../cart.css';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


class Products extends React.Component {

    state = {
        products: [{
            "id": 2,
            "name": "Bawełniana ECO Koszulka",
            "category": "clothes",
            "price": {
                "value": 129.99,
                "unit": "szt"
            },
            "image": "https://1.allegroimg.com/s512/0320f0/3541c61d4c2cbdadea6c3720d821/Koszulka-bawelniana-T-shirt-ADLER-MALFINI-132-S",
            "opis": "Koszulka z ekologicznej bawełny",
            "origin": "Pomorskie",
            "delivery": [{
                "company": "DHL",
                "price": 20,
                "unitlimit": false
            }]
        },
        {
            "id": 3,
            "name": "Buty Skórzane",
            "category": "clothes",
            "price": {
                "value": 339.99,
                "unit": "szt"
            },
            "image": "https://sklepmarka.pl/2321/buty-meskie-casual-skora-polskie-g2681.jpg",
            "opis": "Eleganckie buty ze skóry ekologicznej",
            "origin": "Podkarpackie",
            "delivery": [{
                "company": "DHL",
                "price": 20,
                "unitlimit": false
            }]
        },
        {
            "id": 4,
            "name": "Wełniany szal",
            "category": "clothes",
            "price": {
                "value": 119.99,
                "unit": "szt"
            },
            "image": "https://cdn.shoplo.com/5412/products/th640/aaag/20-3c11a2dc56b112cddf7c2d53c4dd36f05d6d1074cfb136-22531055.jpg",
            "opis": "Ciepły szal z owczej wełny",
            "origin": "Pomorskie",
            "delivery": [{
                "company": "DHL",
                "price": 10,
                "unitlimit": false
            }]
        }]
    }

    render() {
        return (
            <>
                {
                    this.state.products.map((product) => {
                        return (
                            <div key={product.id} className="product__card">
                                <img src={product.image} style={{ width: "180px"}}></img>
                                <div className="product__midbox">
                                    <Typography variant="h5">{product.name}</Typography>
                                    <Typography variant="h7">{product.opis}</Typography>
                                    <Button style={{ width: '40px', bottom: "-30px" }}>Delete</Button>
                                </div>
                                <div className="product__rightbox">
                                    <Select defaultValue={1} style={{ width: '50%' }}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                    <Typography variant="h7" style={{ width: "90%" }}>{product.price.value} zł</Typography>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Products;