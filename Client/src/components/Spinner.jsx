import React from 'react';
import { Circles }  from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
     <Circles
        height={100}
        width={200}
        color='#00BFFF'
        arialLabel='loading'
    />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
