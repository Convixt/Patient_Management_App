"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot ,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { decryptKey, encryptKey } from "@/lib/utils";

const PassKeyModel = () => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
    router.push("/");
  };

  const [passKey , setPassKey] = useState('');
 const [error , setError] = useState('');
 const encryptedKey = typeof window !== 'undefined' ? window.localStorage.getItem('accesskey'): null;
  

 useEffect(() => {

  const accessKey = encryptedKey && decryptKey(encryptedKey);
  if(path){
    if(accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY){
      
      router.push('/admin');
     
      setOpen(false);
     

    } else{
     setOpen(true);
    }

  }
 } , [encryptedKey , router]);


  const validatePasskey = (e: React.MouseEvent<HTMLButtonElement , MouseEvent>) => {
    e.preventDefault();

    if(passKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY){
      const encryptedKey = encryptKey(passKey);

      localStorage.setItem('accessKey' , encryptedKey);
      setOpen(false);
      router.push('/admin')
      
      

    } else{
      setError("Invalid passkey. Please try again.")
    }
  }


  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="shad-alert-dialogue">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Admin Access Verification
            <Image
              src="/assets/icons/close.svg"
              alt="closeIcon"
              width={20}
              height={20}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            To access the admin page please enter the passkey
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <InputOTP maxLength={6} value={passKey} onChange={(value) => setPassKey(value) }>
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && <p className="shad-error text-14-regular mt-4 flex justify-center">
            {error}
          </p> }
        </div>
        <AlertDialogFooter>
         
          <AlertDialogAction onClick={(e) => validatePasskey(e)}
             className="shad-primary-btn w-full">
            Enter Admin Passkey
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PassKeyModel;
