import React, { useState, useEffect } from 'react'


import { useStateContext } from '../context'
import { DisplayPgs } from '../components';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [PgFind, setPgs] = useState([]);

  const { address, contract, getUserPgs } = useStateContext();

  const fetchPgs = async () => {
    setIsLoading(true);
    const data = await getUserPgs();
    setPgs(data);
    setIsLoading(false);
    
  }

  useEffect(() => {
    if(contract) fetchPgs();
  },[address, contract])

  return (
    <DisplayPgs 
      title="Your PG's"
      isLoading={isLoading}
      PgFind={PgFind}
    />
  )
}

export default Profile

