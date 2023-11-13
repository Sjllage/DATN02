import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const {children} = props;
  //data su dung chung
  const [isLogin, setLogin] = useState(false);
  return (
    <AppContext.Provider value={{isLogin, setLogin}}>{children}</AppContext.Provider>
  );
};
