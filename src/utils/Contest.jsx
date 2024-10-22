import React from "react";
import { createContext } from "react";

export const UserContext = createContext()

const Contest = (props) => {

const [user, setuser] = useState([
  {id:0, username:"jhon deo", city:"usa"},
  {id:1, username:"krina", city:"bhp"}
])

  console.log(props);
  return <UserContext.Provider value={} >{props.children}</UserContext.Provider>
};

export default Contest;
