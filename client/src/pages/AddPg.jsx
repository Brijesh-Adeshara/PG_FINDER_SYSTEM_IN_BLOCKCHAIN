import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';


const AddPg = () => {
  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { AddPg } = useStateContext();
    const [form, setForm] = useState({
      PgName:'',
      PgAddress: '',
      PgServices: '',
      image: '',
    });

    const handleFormFieldChange = (fieldName, e) => {
      setForm({...form,[fieldName]: e.target.value})
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      navigate('/');
      console.log(form);
      
          await AddPg({...form})
      
          navigate('/');
  
      
  
  
  
    }

  return (
    <div className='bg-[#a5a5a5] flex justify-center items-center flex-col rounded-[20px] sm:p-10 p-4'>
      {isLoading && <Loader />}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#000000] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Add Your PG Here..</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
            
            labelName=' Add Your PG Name Here *'
            placeholder='Shrinivas PG'
            inputType='text'
            value={form.PgName}
            handleChange={(e) => handleFormFieldChange('PgName', e)}
          />
          <FormField 
            labelName='PG Full Address *'
            placeholder='Write Your PG Address Here'
            inputType='text'
            value={form.PgAddress}
            handleChange={(e) => handleFormFieldChange('PgAddress', e)}
          />
        </div>
        <FormField 
          labelName='PG Services + Rent *'
          placeholder='Write all your services that you provide in your PG and Rent including food plus bill.'
          isTextArea
          value={form.PgServices}
          handleChange={(e) => handleFormFieldChange('PgServices', e)}
        />
       
          <FormField 
            labelName='PG image *'
            placeholder='Place image URL of your PG.'
            inputType='url'
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
          <div className='flex justify-center items-center mt-[40px]'>
            <CustomButton 
              btnType="submit"
              title="Add a PG"
              styles="bg-[#1dc071]"
            />
          </div>
      </form>
    </div>
  )
}
export default AddPg