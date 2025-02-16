import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redex/userSlice';


// const SearchBar = () => {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch();

//   const timeoutRef = useRef(null); 

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInput(value); 

//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       dispatch(setQuery(value)); 
//     }, 1000); 

//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Search users..."
//       />
//     </div>
//   );
// };
  

//trotelling
const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const timeoutRef = useRef(0); 

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value); 

  const now=Date.now();
  const throllingtime=1000

  if(now-timeoutRef.current >=throllingtime){
    dispatch(setQuery(value));
    timeoutRef.current=now   

  }

  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search users..."
      />
    </div>
  );
};

export default SearchBar;