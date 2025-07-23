import React from 'react'
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md  flex  justify-center items-center">
          {/* <div className="animate-spin rounded-full h-16 w-16 border-dashed border-4 border-purple-600 "></div> */}
           <div className="loader"></div>
        </div>
  )
}

export default Loader