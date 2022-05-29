import { useEffect, useState } from "react";
import "./Form.css";
import { initCC } from "matomo-form-tracker";

const initialState = {
  name: "",
  family_name: "",
  username: "",
};

const Form = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    initCC(1);
  }, []);
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} custom-attribute="include-form-tracking">
        <label>
          Name:
          <input
            custom-attribute="include-content-tracking"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <div style={{ width: "100%" }}></div>
        <label>
          Family Name:
          <input
            custom-attribute="include-content-tracking"
            type="text"
            name="family_name"
            onChange={handleChange}
          />
        </label>
        <div style={{ width: "100%" }}></div>
        <label>
          Username:
          <input
            custom-attribute="include-content-tracking"
            type="text"
            name="username"
            onChange={handleChange}
          />
        </label>
        <div style={{ width: "100%" }}></div>
        <input custom-attribute="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
