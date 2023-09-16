import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "../Components/utils/global.context";

const inputs = [
  { id: 1, type: "text", placeholder: "Ingrese su Nombre", name: "name" },
  { id: 2, type: "text", placeholder: "Ingrese su Email", name: "email" },
];

const Form = () => {
  const {state} = useGlobalContext()
  const getInitialValues = () => ({
    name: "",
    email: "",
  });

  const [view, setView] = useState("form");

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .min(5, "Tu nombre debe tener 5 caracteres como mínimo.")
          .required("Campo Obligatorio"),
        email: Yup.string()
          .email("Debes ingresar un email válido.")
          .required("Campo Obligatorio"),
      })
    );

  const onSubmit = (values) => {
    console.log(values);
    setView("message");
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <div className={`container mx-auto text-center mt-10 transform ${
      state.theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light'
    }`}>
      {view === "form" ? (
        <form
          className="mx-auto w-2/3 p-4 border border-gray-300 rounded"
          onSubmit={handleSubmit}
        >
          {inputs.map((input) => (
            <div key={input.id} className="mb-4">
              <input
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                value={values[input.name]}
                onChange={(e) => setFieldValue(input.name, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors[input.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[input.name]}</p>
              )}
            </div>
          ))}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </div>
        </form>
      ) : (
        <div className="max-w-sm mx-auto p-4 border border-green-300 rounded">
          <div className="bg-green-500 text-white p-2 rounded">
            Tus datos fueron enviados con éxito!
          </div>
          <p className="mt-4">
            <b>Gracias {values.name}, te contactaremos cuanto antes vía email!</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;

