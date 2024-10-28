import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  })

  // const handleChange = (e) => {
  //   switch (e.target.name) {
  //     case "name":
  //       setName(e.target.value);
  //       break;
  //     case "email":
  //       setEmail(e.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  const handleChange = (e) => {
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value
    // })

    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value
    }))
  }

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Hola ${form.name}. Mi correo es ${form.email}`);
  }

  const resetForm = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: ""
    })
  }

  return (
    <div className="container">
      <h1>Hola Mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis
        minima odit incidunt odio maiores nostrum numquam expedita corrupti
        excepturi pariatur quam quidem, tempore molestias qui obcaecati aperiam
        mollitia dolorum.
      </p>
      <form className="form" onSubmit={submitForm} onReset={resetForm}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <div className="button-container">
          <button type="submit" className="button-submit">Enviar</button>
          <button type="reset" className="button-reset">Limpiar</button>
        </div>
        <div>
          <p>{form.name}</p>
          <p>{form.email}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
