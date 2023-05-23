import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import { DisplayPgs } from '../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [PgFind, setPgs] = useState([]);

  const { address, contract, getPgs } = useStateContext();

  const fetchPgs = async () => {
    setIsLoading(true);
    const data = await getPgs();
    setPgs(data);
    setIsLoading(false);
    
  }

  useEffect(() => {
    if(contract) fetchPgs();
  },[address, contract])

  return (
    <DisplayPgs 
      title="All PG's"
      isLoading={isLoading}
      PgFind={PgFind}
    />
  )
}

export default Home

