export default function validateInfo(state) {
  let errors = {};

  if (!state.category) {
    errors.category = "Kategoria jest wymagana!";
  } 

  if (!state.description) {
    errors.description = "Opis jest wymagany!";
  }
  if (!state.longDescription) {
    errors.longDescription = "Opis jest wymagany!";
  }
  if (!state.origin) {
    errors.origin = "Pochodzenie jest wymagane!";
  }
  if (!state.amount) {
    errors.amount = "Ilość jest wymagana!";
  } else if (!/^[0-9\b]+$/.test(state.amount)) {
    errors.amount = "Podaj prawidłową wartość";
  }
  if (!state.unit) {
    errors.unit = "Jednostka jest wymagana!";
  } 
  if (!state.value) {
    errors.value = "Cena jest wymagana!";
  } else if (!/^[0-9\b]+$/.test(state.value)) {
    errors.value = "Podaj prawidłową wartość";
  }
  return errors;
}
