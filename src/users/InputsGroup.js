import React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

const InputsGroup = ({ name, onChangeHandler, value, error }) => {
  const handleInputChange = (e) => {
    onChangeHandler(e);
  };

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{name}</FormLabel>
      <Input type="text" name={name} onChange={handleInputChange} value={value} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputsGroup;
