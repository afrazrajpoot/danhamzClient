import React from 'react';

const FileInput = ({ name, imageUrl, onChange, accept }) => {
  return (
    <div className="flex items-center flex-col w-full max-w-[25vw]">
      <label htmlFor="" className='text-vw m-0.5vw font-medium mb-0.3vw capitalize'>{name}</label>
      {accept !== 'application/pdf' && 
      <img src={imageUrl} className='w-full bg-slate-300 mt-vw max-w-[20vw] h-[20vw] rounded-md border-[1px] border-gray-300 ' />
      } <br />
      <input accept={accept} type="file" name={name} onChange={(e) => onChange(e, name)} className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md' />
    </div>
  );
};

export default FileInput;
