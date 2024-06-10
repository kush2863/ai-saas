"use client"
import { useAuthContextHook } from '@/context/use-auth-context';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form';
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/spinner'

type Props = {}
const DetailForm = dynamic(() => import('./account-details-form'), {
    ssr: false,
    loading: () => <Spinner />,
  })
const OTPForm = dynamic(() => import('./otp-generate-form'), {
    ssr: false,
    loading: () => <Spinner />,
  })

const RegistrationFormSetup = (props: Props) => {
    const {register,formState:{errors}, setValue} = useFormContext();
        const {currentStep} = useAuthContextHook();
        const [onOTP,setOnOTP] = useState<String>("");
        const [onUserType, setOnUserType] = useState<'owner'| 'student'>('owner');
            setValue("otp",onOTP)

            switch(currentStep){
                case 1:return (
                    <TypeSelectionForm register={register} userType={onUserType} setUserType={setOnUserType} />
                )
                case 2: return(
                    <DetailForm register={register} errors={errors}  />
                )
                case 3: return(
                  <OTPForm onOTP = {onOTP} setOTP ={setOnOTP} />
                )
            }
  return (
    <div>RegistrationFormSetup</div>
  )
}

export default RegistrationFormSetup