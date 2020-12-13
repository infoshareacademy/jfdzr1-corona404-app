import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import HomeIcon from '@material-ui/icons/Home';

const FormAdd = ({ submitForm }) => {
  const { handleChange, handleSubmit, readImages, AddProduct, state, errors, category, company, price, unitlimit, description, longDescription, name, origin, amount, unit, value, id, image } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <span className="close-btn">
        <a href="/"><HomeIcon /></a>
      </span>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h2>Zacznij sprzedawać już teraz!</h2>
        <h2>Dodaj produkt</h2>
        <div className="form-inputs">
          <label className="form-label"> Nazwa produktu </label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Wprowadź nazwe produktu"
            value={name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Kategoria produktu </label>
          <input
            className="form-input"
            type="text"
            name="category"
            placeholder="Wprowadź kategorie produktu"
            value={category}
            onChange={handleChange}
          />
          {errors.category && <p>{errors.category}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Opis produktu</label>
          <input
            className="form-input"
            type="text"
            name="description"
            placeholder="Wprowadź opis produktu"
            value={description}
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Długi opis produktu</label>
          <textarea
            className="form-textarea"
            type="text"
            name="LongDescription"
            placeholder="Opisz swój produkt"
            value={longDescription}
            onChange={handleChange}
          />
          {errors.longDescription && <p>{errors.longDescription}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Pochodzenie produktu</label>
          <input
            className="form-input"
            type="text"
            name="origin"
            placeholder="Wprowadź pochodzenie produktu"
            value={origin}
            onChange={handleChange}
          />
          {errors.origin && <p>{errors.origin}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Ilość</label>
          <input
            className="form-input"
            type="text"
            name="amount"
            placeholder="Podaj ilość"
            value={amount}
            onChange={handleChange}
          />
          {errors.amount && <p>{errors.amount}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Jednostka miary</label>
          <input
            className="form-input"
            type="text"
            name="unit"
            placeholder="Podaj jednostkę"
            value={unit}
            onChange={handleChange}
          />
          {errors.unit && <p>{errors.unit}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Cena</label>
          <input
            className="form-input"
            type="text"
            name="value"
            placeholder="Podaj wartość"
            value={value}
            onChange={handleChange}
          />
          {errors.value && <p>{errors.value}</p>}
        </div>
        <input
          className="form-button-upload"
          type="file"
          name="image"
          value=""
          onChange={readImages}
        />
        <button className="form-input-btn" type="submit" onClick={AddProduct}>
          Dodaj
</button>
      </form>
    </div>
  );
};

export default FormAdd;

