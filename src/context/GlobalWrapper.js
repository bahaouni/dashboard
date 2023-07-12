import { createContext, useState } from "react";
import axios from "axios";
import { useToast , useDisclosure } from '@chakra-ui/react';

export const GlobalContext = createContext();
export default function Wrapper({children}){
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [users,setUsers]= useState([])

    const FetchUsers = () => {
        axios
          .get('/api/users')
          .then((res) => {
            setUsers(res.data);
          })
          .catch((err) => {
            console.log(err.reponse.data);
          });
      };
      const Delete = (id) => {
        axios
          .delete(`/api/users/${id}`)
          .then((res) => {
            setUsers(users.filter((u) => u.id !== id));
            toast({
              title: 'User Deleted',
              status: 'success',
              duration: 4000,
              isClosable: true,
            });
          })
          .catch((err) => {
            console.log(err.reponse.data);
          });
      };
    
    

    return <GlobalContext.Provider value={{ FetchUsers , users , Delete , isOpen, onOpen, onClose   }}>{children}</GlobalContext.Provider>
    
}