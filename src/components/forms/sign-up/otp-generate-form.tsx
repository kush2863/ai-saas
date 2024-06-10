
import OTPInput from '@/components/otp/index'
import React from 'react'

type Props = {
    setOTP:React.Dispatch<React.SetStateAction<String>>
    onOTP:String
}

const OTPForm = ({onOTP , setOTP}: Props) => {
  return (
    <>
        <h2 className='text-gravel md:text-xl font-bold'>Enter OTP</h2>
        <p className="text-iridium md:text-sm *" >Enter the One time password that was sent to your email</p>
        <div className="w-full justify-center flex py-5">
                <OTPInput 
                    otp={onOTP}
                    setOtp={setOTP}
                />
        </div>
    </>
  )
}

export default OTPForm