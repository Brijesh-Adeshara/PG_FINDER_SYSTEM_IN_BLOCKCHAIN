import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import {ethers} from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x7871802cc13357fae0f467eBBE435E862A7352aB')
    const { mutateAsync: AddPg } = 
    useContractWrite(contract, 'AddPg');

    const address = useAddress();
    const connect = useMetamask();

    const AddaPg = async (form) => {
        console.log("abc")
        try{
            const data = await AddPg({args:[
                address,
                form.PgName,
                form.PgAddress,
                form.PgServices,
                form.image
            ]})
            console.log("contract call success", data)
        } catch (error) {
            console.log("contract call failure", error)
        }
    }

    const getPgs = async() =>{
        const PgFind = await contract.call
        ('getPG');

        
        const parsedPgs = PgFind.map((pg,i) =>({
           owner: pg.owner,
           PgName: pg.PgName,
           PgAddress: pg.PgAddress,
           PgServices: pg.PgServices,
           image: pg.image,
           pId: i

        }));
        return parsedPgs;

    }
    
 





    const getUserPgs = async () => {
        const allPgs = await getPgs();

        const filteredPgs = allPgs.filter((pg) => 
        pg.owner === address);

        return filteredPgs;
        
    }

    const book = async (pId,amount) => {
        const data = await contract.call('BookPg', [pId], {
            value:ethers.utils.parseEther(amount)
        });
        
        return data;
    }

   

    return (
        <StateContext.Provider 
            value={{
                address,
                contract,
                connect,
                AddPg: AddaPg,
                getPgs,
                getUserPgs,
                book
              
              
            }} 
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);