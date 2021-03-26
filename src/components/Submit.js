import React from 'react';

const Submit = ({value}) => {

  const submitStyles = {
      width: "100px",
      height: "38px",    
      border: "none",
      borderRadius: "0 5px 5px 0",
      outline: "none",
      cursor: "pointer",
      backgroundColor: "aquamarine",
      padding: "5px"
  }

  return (
      <input style={submitStyles} type="submit" value={value}/>
  )

}

export default Submit;