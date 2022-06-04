import React,{useEffect,useState} from 'react'
import{ethers} from 'ethers'

import{contractABI,contractAddress} from '../utils/constant'

export const TransactionContext = React.createContext();

const {ethereum} = window;


const getEthereumContract =() =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const tranactionContract = new ethers.Contract(contractAddress,contractABI,signer);

    console.log({
        provider,
        signer,
        tranactionContract,
    });

}

export const TransactionProvider =({children})=>{
    const [currentAccount, setCurrentAccount] = useState();
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };

    const checkifWalletIsConnected = async ()=>{
        try {
            if(!ethereum) return ("Please install metamask");

        const accounts = await ethereum.request({method:'eth_accounts'});
        if (accounts.length) {
            setCurrentAccount(accounts[0]);

            //getAll Transaction
        }else{
            console.log('No accounts found');

        }
            
        } catch (error) {
            console.log(error);
    
            throw new Error("No ethereum object");
        }
        

    }

    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setCurrentAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };
    const sendTransaction = async()=>{
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            const { addressTo, amount, keyword, message } = formData;
            getEthereumContract();

            //get the data from the form
            

        } catch (error) {
            console.log(error);
    
            throw new Error("No ethereum object");
        }
    }
    useEffect(()=>{
        checkifWalletIsConnected();
        
    },[])
    return(
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData,setformData,handleChange,sendTransaction}}>

            {children}

        </TransactionContext.Provider>
    )
}