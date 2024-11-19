"use client"

import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [totalUsage, setTotalUsage]= useState<Number>(0);
    const [UserSubscription, setUserSubscription]= useState<boolean>(false);

  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{UserSubscription, setUserSubscription}}>
    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav />
        </div>
        <div className='md:ml-64'>
            <Header />
            {children}
        </div>
      
    </div>
    </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout
