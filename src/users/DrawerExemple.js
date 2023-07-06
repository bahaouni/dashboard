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
  
  export default function DrawerExample() {

    return (
      <>
        <Drawer >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
            
            />
            <DrawerHeader>Create / Update user</DrawerHeader>
  
            <DrawerBody>
              <Stack spacing={'24px'}>
                <InputsGroup
                  name="fullname"
               
                />
                <InputsGroup
                  name="email"
               
                />
                <InputsGroup
                  name="age"
                
                />
                <InputsGroup
                  name="country"
                
                />
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button
                variant="outline"
              
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
               
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  