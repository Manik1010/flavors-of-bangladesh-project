import React from 'react';
import {  FaWindowClose } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    // let errorData = useRouteError();
    
    const {error,status,statusText} = useRouteError() || {}

    console.log(statusText);
    return (
        <div className='mx-auto text-center shadow-2xl border-2 border-red-400  rounded-md p-6 w-64 md:w-96 my-20 md:my-60'>
            <figure className='mx-auto w-10 md:w-20'>
                <FaWindowClose className='md:w-20 md:h-20 h-10 w-10 text-red-500'></FaWindowClose>
            </figure>
            <h1 className='font-bold text-4xl'>{status}</h1>
            <p className='font-medium text-2xl my-2 text-red-700'>{statusText}</p>
            <p className='text-xl'>{error.message}</p>
            <Link to='/'>  <button className='btn btn-outline btn-primary mt-3'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;


// // import { FaceFrownIcon } from '@heroicons/react/24/solid'
// import React from 'react'
// import { Link, useRouteError } from 'react-router-dom'

// const ErrorPage = () => {
//   const error = useRouteError()
//   // console.log(error)
//   return (
//     // <div>
//     //   console.log(error)
//     // </div>
//     <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
//       <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
//         {/* <FaceFrownIcon className='w-40 h-40 text-danger-500' /> */}
//         <div className='max-w-md text-center'>
//           <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
//             <span className='sr-only'>Error</span>
//             {status || 404}
//           </h2>
//           <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
//             {error?.message}
//           </p>
//           <Link to='/' className='w-10 h-10 p-4 font-light bg-purple-200'>
//             Back to homepage
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ErrorPage