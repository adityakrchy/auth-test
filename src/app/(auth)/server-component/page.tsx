import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options';

const page = () => {
    const data = getServerSession(options);
    
  return (
        <>
        <div>This page is rendered through server</div>
       {data.then(res=><div>{res?.user?.name}</div>)}
        </>
    )
}

export default page