export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Imię i nazwisko jest wymagane!";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Adres email jest wymagany!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Wprowadzono błędny adres email";
  }
  if (!values.name_of_product) {
    errors.name_of_product = "Nazwa produktu jest wymagana";
  }
  if (!values.category_of_product) {
    errors.category_of_product = "Kategoria produktu jest wymagana";
  }
  if (!values.quantity_of_product) {
    errors.quantity_of_product = "Podaj ilość";
  } else if (!/^[0-9\b]+$/.test(values.quantity_of_product)) {
    errors.quantity_of_product = "Podaj prawidłową wartość";
  }
  return errors;
}
