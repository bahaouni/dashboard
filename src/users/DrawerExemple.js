import React, { useState } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import InputsGroup from './InputsGroup';

export default function DrawerExample({ isOpen, onClose }) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!form.fullname) {
      newErrors.fullname = 'Fullname is required';
    }
    if (!form.email) {
      newErrors.email = 'Email is required';
    }
    if (!form.age) {
      newErrors.age = 'Age is required';
    }
    if (!form.country) {
      newErrors.country = 'Country is required';
    }

    // Validate email format
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (form.email && !emailPattern.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSave = () => {
    const isValid = validateForm();

    if (isValid) {
      // Save logic goes here
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Create / Update user</DrawerHeader>

          <DrawerBody>
            <Stack spacing={'24px'}>
              <InputsGroup
                name="fullname"
                value={form.fullname || ''}
                onChangeHandler={onChangeHandler}
                error={errors.fullname}
              />

              <InputsGroup
                name="email"
                value={form.email || ''}
                onChangeHandler={onChangeHandler}
                error={errors.email}
              />

              <InputsGroup
                name="age"
                value={form.age || ''}
                onChangeHandler={onChangeHandler}
                error={errors.age}
              />

              <InputsGroup
                name="country"
                value={form.country || ''}
                onChangeHandler={onChangeHandler}
                error={errors.country}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button background="#219EBC" onClick={onSave}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
