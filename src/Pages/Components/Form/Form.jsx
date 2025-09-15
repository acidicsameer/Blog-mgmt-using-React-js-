import React from 'react'

const Form = ({name}) => {
  return (
    <>
    
    
    <section className="dark:bg-gray-800 bg-[#F9F9F9]">
         <div className="text-2xl font-semibold text-white">
{name}
</div>

     <form action="">
  <div className="max-w-[556px] px-4 py-10 mx-auto  flex flex-col ">
    
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <div className="w-full">
          <label className=" dark:text-white text-black text-base font-normal  leading-7">Title</label><input placeholder="title" type="text" className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal " />
        </div>
         <div className="w-full">
            <input type="file" name=" file " id=" choose file " className=" mt-2 w-full px-5 py-2 bg-white rounded-xl outline  outline-offset-[-1px] outline-black  dark:text-black text-black text-base font-normal  leading-7" />
         </div>
        <div className="w-full">
          <label className="dark:text-white text-black text-base font-normal  leading-7">subtitle</label><input placeholder="subtitle" type=" text" className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal " />
        </div>
        <div className="w-full">
          <label className="dark:text-white text-black text-base font-normal  leading-7">Message</label><textarea className="mt-2 w-full resize-none px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal " placeholder="Message" cols={40} rows={10} defaultValue={""} />
        </div>
        
      </div>
     
   <button type='submit' className=" px-9 py-5 bg-[#191a23] rounded-2xl  dark:bg-white text-center dark:text-[#191a23]  text-white text-xl font-normal  leading-7"> submit now  </button>
    </div>
</form>
</section>
    
    </>
  )
}

export default Form