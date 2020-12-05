import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormAdd = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <span className="close-btn">
        <a href="/">x</a>
      </span>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h2>Zacznij sprzedawać już teraz!</h2>
        <h2>Dodaj produkt</h2>
        <div className="form-inputs">
          <label className="form-label">Imię i nazwisko</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Wprowadź swoje imię i nazwisko"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Wprowadź swój email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Nazwa produktu</label>
          <input
            className="form-input"
            type="name_of_product"
            name="name_of_product"
            placeholder="Wprowadź nazwę produktu"
            value={values.name_of_product}
            onChange={handleChange}
          />
          {errors.name_of_product && <p>{errors.name_of_product}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Kategoria produktu</label>
          <input
            className="form-input"
            type="category_of_product"
            name="category_of_product"
            placeholder="Wprowadź kategorie produktu"
            value={values.category_of_product}
            onChange={handleChange}
          />
          {errors.category_of_product && <p>{errors.category_of_product}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Ilość</label>
          <input
            className="form-input"
            type="quantity_of_product"
            name="quantity_of_product"
            placeholder="Wprowadź ilość"
            value={values.quantity_of_product}
            onChange={handleChange}
          />
          {errors.quantity_of_product && <p>{errors.quantity_of_product}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
