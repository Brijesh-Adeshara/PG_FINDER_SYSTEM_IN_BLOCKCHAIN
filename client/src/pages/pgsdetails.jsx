import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { newnewlogo } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {book, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [Tenants, setTenants] = useState([]);

  

  const handleBook = async () => {
    setIsLoading(true);
    
    await book(state.pId,amount);
    navigate('/')
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Loader />}
      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className='flex-1 flex-col'>
          <img src={state.image} alt="PG image" className="w-full h-[410px] object-cover rounded-xl" />
      
        </div>
       
      </div>
      <div className='mt-[60px] flex lg:flex-row flex-col gap-5'>
        <div className='flex-[2] flex flex-col gap-[40px]'>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              PG Owner
            </h4>
            <div className='mt-[20px] flex flex-row items-center flex-wrap gap-[14px]'>
              <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer'>
                <img src={newnewlogo} alt="user" className='w-[60%] h-[60%] object-contain'/>
              </div>
              <div>
                <h4 className='font-epilogue font-semibold text-[14px] text-white break-all'>
                  {state.owner}
                </h4>
                <p className='mt-[4px] font-epilogue font-normal font-[12px] text-[#808191]'>
                 PG ONWER
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-white uppercase'>
              Address + Contact Number
            </h4>
            <div className='mt-[20px]'>
              <p className='font-epilogue font-normal font-[16px] text-[#808191] leading-[26px] text-justify'>
                {state.PgAddress}
              </p>
            </div>
          </div>
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-white uppercase'>
              Services + Rent 
            </h4>
            <div className='mt-[20px]'>
              <p className='font-epilogue font-normal font-[16px] text-[#808191] leading-[26px] text-justify'>
                {state.PgServices}
              </p>
            </div>
          </div>
         
        </div>
        <div className='flex-1'>
          <h4 className='font-epilogue font-semibold text-[18px] text-white uppercase'>
            Booking
          </h4>
          <div className='mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]'>
            <p className='font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191]'>
              Book This PG
            </p>
            <div className='mt-[30px]'>
              <input 
                type="number"
                placeholder='ETH 0.0001'
                step="0.0001"
                className='w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className='my-[20px] p-4 bg-[#13131a] rounded-[10px]'>
                <h4 className='font-epilogue font-semibold text-[14px] leading-[22px] text-white'>Book Our PG </h4>
                <p className='mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]'>
                  In Our PG you will feel like your Home.
                </p>
              </div>
              <CustomButton 
                btnType="button"
                title="Book Pg"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleBook}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails

