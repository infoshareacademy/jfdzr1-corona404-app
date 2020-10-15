import React from 'react';
import '../cart.css';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class Products extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.products.map((product) => {
                        return (
                            <div key={product.id} className="product__card">

                                <img src={product.image} style={{ width: "180px" }}></img>

                                <div className="product__midbox">
                                    <Typography variant="h5">{product.name}</Typography>
                                    <Typography variant="h7">{product.opis}</Typography>
                                    <Button
                                        style={{ fontSize: '12px', width: '80px', top: "10%" }}
                                        onClick={() => this.props.handleOnDelete(product.id)}>
                                        <DeleteIcon style={{ fontSize: '20px' }} />
                                        Usuń
                                    </Button>
                                </div>

                                <div className="product__rightbox">
                                    <Select defaultValue={1}
                                        style={{ width: '50%' }}
                                        onChange={(event) => this.props.handleOnChange(event, product)}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                    <Typography variant="h7">{product.amount}</Typography>
                                    <Typography variant="h7" style={{ width: "80%" }}>{product.price.value} zł</Typography>
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