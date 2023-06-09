import { useRouter } from 'next/router';
import React from 'react'

function Bloackchain() {
  const router = useRouter();
  const contact = () => {
      router.push("/contact-us")
  }
  return (
    <div className='px-0 background_block_chain'>
        <div className='col-md-12 pt-5'>
            <p className='text_head_color mb-2'>Push Notifications</p>
            <p className='sub_text_head_color'>Generating push notifications to inform users about new content, updates, and other important information.</p>
        </div>
        <div className='col-md-12 pt-2'>
            <p className='text_head_color mb-2'>App Analytics & Optimization</p>
            <p className='sub_text_head_color'>Tracking and analysing the performance of an app, including user engagement, retention, and revenue.</p>
        </div>
        
        <div className='col-md-12 cust_pad'>
        <button onClick={()=>contact()} className='btn btn-danger w-100 background_button_red'>BOOK CONSULTATION</button>
        </div>
    </div>
  )
}

export default Bloackchain