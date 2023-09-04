import React from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { setValueA, setValueB } from '../store'

const NewValues = ({ label }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('')

  const handleInputChange = (e) => {
    const Values = e.target.value;
    setValue(Values);

    if (label === 'Valeur A') {
      dispatch(setValueA(Values));
    } else if (label === 'Valeur B') {
      dispatch(setValueB(Values));
    }
  };

  return (
    <div>
      <Form>
    <Form.Label>{label}</Form.Label>
      <Form.Control  value={value} onChange={handleInputChange} />
      </Form>
    </div>
  );
};

export default NewValues;
