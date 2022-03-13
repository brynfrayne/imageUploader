import React from 'react';
import styled from 'styled-components';

// Style the Button component
const Button = styled.button`
  /* Insert your favorite CSS code to style a button */
    background-color: #2F80ED;
    border: none;
    border-radius: .5rem;
    color: white;
    padding: .5rem 1rem;
    cursor:pointer;
`
export default function FileUploader({handleChange, handleClick, hiddenFileInput}) {
  
  return (
    <>
      <Button onClick={handleClick} >
        Choose a file
      </Button>
      <input
        type="file"
        name="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />
    </>
  );

  }