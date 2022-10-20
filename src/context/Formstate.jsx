import { createContext , useState} from "react";



 export const context =  createContext()


const Formcontext = ({children}) => {

    const [income, setIncome] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);
  
    return <context.Provider value={{income, totalIncome , setIncome ,setTotalIncome}}>
        {children}
    </context.Provider>

 
}

export default Formcontext