import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import FundCard from './FundCard';

const DisplayPgs = ({title, isLoading, PgFind}) => {
    const navigate = useNavigate();
    
    const handleNavigate = (pg)=>{
        navigate(`/campaign-details/${pg.title}`,{state:
        pg})

    }



    return (
    <div>
       <h1 className="font-epilogue font-semibold text-[25px] text-white text-left">{title} ({PgFind.length})</h1> 

       <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
            <img src = {loader} alt = "loader" className="w-[100px] h-[100px] object-contain "/>


        )}
        
        {!isLoading && PgFind.length === 0 && (
            <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183] ">
                You Have Not Added Any PG's..


            </p>
        )}
          
        {!isLoading && PgFind.length > 0 && PgFind.map
        ((pg) => <FundCard
          key = {pg.id}
          {...pg}
          handleClick={()=> handleNavigate(pg)}
        />)}

       </div>


    </div>
  )
}

export default DisplayPgs