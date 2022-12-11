import React, { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import DropDownPicker from "react-native-dropdown-picker";

const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '6am - 7am', value: '6am - 7am'},
    {label: '7am - 8am', value: '7am - 8am'},
    {label: '8am - 9am', value: '8am - 9am'},
    {label: '5pm - 6pm', value: '5pm - 6pm'},

  ]);
  const [values, setValues] = useState({
    name: "",
    phonenumber:"",
    email: "",
    gender:"",
    age: "",
    slot:""
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any number or special character!",
      label: "Name",
      pattern: "^[A-Za-z]{3,50}$",
      required: true,
    },
    
    {
      id:2,
      name:"phonenumber",
      type:"tel",
      placeholder:"Phone Number",
      label:"Phone Number",
      required: true,
      pattern: "[0-9]{10}",
      errorMessage: "Please enter valid Phone number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      
      
       id: 4,
      name: "age",
      type: "number",
      placeholder: "Age",
      label: "Age",
      required: true,
      min: "18",
      max: "65",
      errorMessage: "It should be a in the range 18 - 65",
    },
    {
      id: 5,
      name: "gender",
      type:"text",
      placeholder:"Gender",
      label:"Gender",
      
    },
    /*{
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },*/
   /* {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },*/
    //{
      //id: 6,
      //name:"slot",
      //type: "datalist",
      //label:"Available Slots",
      
     // <select multipe={true} name="slot" id="6"></select>
      

/*/<DropDownPicker
  multiple={true}
  min={0}
  max={5}
  ...
/>*/
      
//}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <p>Slot Available</p>
        <DropDownPicker textStyle={{
  fontSize: 12,
  color: "grey",
}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;