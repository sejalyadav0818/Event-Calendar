<<<<<<< HEAD
import { createContext, useContext } from "react";
=======
import { React, createContext, useContext } from "react";
>>>>>>> f6c5fc1a7402386b3dd8f6bde372c11acb9313a4

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
