import React from 'react';
import './modal.css';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";

import { CardActions, CardContent} from '@material-ui/core';


class ProductModal extends React.Component {

render() {


  
const body = (
  <div className="background">
    <Card className="modal_wrapper">
      <button className="close_modal_button" onClick={this.props.close}>X</button>
          <CardContent className="modal_content">
            <p  className="modal_title">
                {this.props.product.name}
            </p>
            <p className="modal_descripton">
                {this.props.product.description}
             </p>
            <div className="modal_img_container" >
              <img src={this.props.product.image} className="modal_img_wrapper"/>
            </div>
            <p className="origin">
                       Pochodzenie : <span><strong>{this.props.product.origin}</strong></span> 
            </p>
            <p className="longDescription" >
                    {this.props.product.longDescription}
            </p>

          </CardContent>
         
      </Card>
    </div>
   
  );

  return (
    <div>
      
      
      <Modal
        open={this.props.open}
      >
        {body}
      </Modal>
    </div>
  );
}
}

export default ProductModal;

 