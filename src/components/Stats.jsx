function Stats() {
  return <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-2 gap-3 grid-rows-1 mt-20 text-white text-center mb-40 ">
    <div>
      <span className=" text-2xl  font-bold mr-6">3800+</span>
      <span className=' text-blue-500 border-r-2 pr-9'>USER ACTIVE</span>
    </div>
    <div className=" ">
      <span className=" text-2xl  font-bold mr-6">230+</span>
      <span className=' text-blue-500 border-r-2 pr-9'>
        TRUSTED BY COMPANY
      </span>
    </div>
    <div>
      <span className=" text-2xl  font-bold mr-6">
        $230M+
      </span>
      <span className=' text-blue-500'>
        TRANSACTION
      </span>
    </div>
  </div>
}

export default Stats;
