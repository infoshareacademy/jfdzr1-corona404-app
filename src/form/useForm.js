import { useState, useEffect } from "react";
import firebase from 'firebase';
import { v4 as uuid } from 'uuid'; 

const useForm = (callback, validate) => {

  const [state, setState] = useState({
    category: "",
    company: "DHL",
    price: 10,
    unitlimit: false,
    description: "",
    longDescription: "",
    name: "",
    origin: "",
    amount: 0,
    unit: "",
    value: 0,
    id: 15,
  })

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    setErrors(validate(state));
    setIsSubmitting(true);
    AddProduct(state);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );
  // useEffect(()=>{
  //   getImageURL();
  // }, [])

  const readImages = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
    const storageRef = firebase.storage().ref('/products').child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url)=> {
      setState({
        ...state,
        image: url
      });
    })
  }

// const getImageURL = () => {
//   const id = uuid();
//   const imageRef = firebase.storage().ref('/products').child(id);
//   imageRef.on('value', (snapshot)=> {
//     const image = snapshot.val();
//     const newState = [...state, ...image]
//     setState(newState);
//   })
// }

  // const AddProduct = () => {
  //   const DataProducts = firebase.database().ref('products');

  //   const products = {
  //     state: state
  //   }
  
  // DataProducts.push(products.state)

  // }

  function AddProduct(data){
    const { 
       category= "",
       company=""
      , price=""
      , unitlimit=""
      , description=""
      , longDescription=""
      , name=""
      , origin=""
      , amount=""
      , unit=""
      , value=""
      , id=""
      , image=""
    } = data
    firebase.database().ref('products').push({
      category,
      delivery: {
        0: {
          company,
          price,
          unitlimit,
        }
      },
      description,
      id,
      image,
      longDescription,
      name,
      origin,
      price: {
        amount,
        unit,
        value
      }
    })
  }
  return { handleChange, handleSubmit, readImages, AddProduct, state, errors };
};

export default useForm;