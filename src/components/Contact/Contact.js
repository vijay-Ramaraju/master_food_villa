import React from 'react'

const Contact = () => {
  return (
    <div className="font-semibold h-full flex flex-col text-2xl justify-center items-center mt-[200px]">
      <h1>Contact Page</h1>
      <input
        className="border border-black rounded-lg p-2 m-2"
        type="text"
        placeholder="name"
      />
      <input
        className="border border-black rounded-lg p-2 m-2"
        type="text"
        placeholder="Message"
      />
      <button className="rounded-lg bg-gray-200 border border-black p-2 m-2">Submit</button>
    </div>
  );
}
 
export default Contact
