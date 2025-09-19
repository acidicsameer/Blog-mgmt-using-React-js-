import { useState } from "react"
const Form = ({name,onSubmit}) => {
const [data, setData] = useState({
    title: '',
    subtitle: '',
    message: '',
    image:''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]:  name==='image'? e.target.files[0]:value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   onSubmit(data);
  };

  return (
    <>
    
    
    <section className="dark:bg-gray-800 bg-[#F9F9F9]">
         <div className="text-2xl font-semibold text-white">{name}</div>

     
  <div className="max-w-[556px] px-4 py-10 mx-auto  flex flex-col ">
    
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <form  onSubmit={handleSubmit}>
        <div className="w-full">
           
          <label className=" dark:text-white text-black text-base font-normal  leading-7">Title</label><input placeholder="title" name="title" className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "  required  onChange={handleChange}/>
        </div>
           <div className="w-full">
              <label className="dark:text-white text-black text-base font-normal leading-7">
                Image
              </label>
              <input
                type="file"
                name="image"
              
                onChange={handleChange}
                className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black text-black text-base font-normal"
              />
            </div>
        <div className="w-full">
          <label className="dark:text-white text-black text-base font-normal  leading-7">subtitle</label><input placeholder="subtitle" name="subtitle" className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "  onChange={handleChange}  required />
        </div>
        <div className="w-full">
          <label className="dark:text-white text-black text-base font-normal  leading-7">Message</label><textarea className="mt-2 w-full resize-none px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal " placeholder="Message" name="message" cols={40} rows={10}  defaultValue={""}    onChange={handleChange} />
        </div>
   <button type='submit' className=" px-9 py-5 bg-[#191a23] rounded-2xl  dark:bg-white text-center dark:text-[#191a23]  text-white text-xl font-normal  leading-7"> submit now  </button>
    </form>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Form