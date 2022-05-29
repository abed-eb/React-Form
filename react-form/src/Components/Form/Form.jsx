import { useState } from "react";
import "./Form.css";
// import { initCC } from "matomo-form-tracker";
const Form = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <div>
      <form custom-attribute="include-form-tracking">
        <label>
          Name:
          <input
            custom-attribute="include-content-tracking"
            type="text"
            name="name"
          />
        </label>
        <input custom-attribute="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
