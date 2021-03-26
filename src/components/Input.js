import React, {Fragment} from 'react';

const Input = ({onChange, name, placeholder, type, label, element, value}) => {
 const htmlprops = { name, placeholder, type, value };
  const inputClasses = {
      width: "350px",
      height: "38px",
      border: "3px solid aquamarine",
      borderRadius: "5px 0 0 5px",
      outline: "none",
      paddingLeft: "12px"
  };

  let inputElement = null;

  switch (element) {
    case "textarea":
      inputElement = (
        <textarea
          style={inputClasses}
          onChange={onChange}
          {...htmlprops}
        />
      );
      break;
    default:
      inputElement = (
        <input
          style={inputClasses}
          onChange={onChange}
          {...htmlprops}
        />
      );
  }

  return (
    <Fragment>
      <label className="label">{label}</label>
      {inputElement}
    </Fragment>
  );

}

export default Input;