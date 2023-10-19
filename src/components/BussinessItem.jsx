

function BussinessItem({title,content,img}) {
  return (
    <div className='grid grid-cols-12 place-items-center hover:bg-gradient-to-r from-slate-500  p-6 rounded-2xl cursor-pointer '>
        <div className=' bg-slate-900 shadow-lg flex justify-right w-12 h-12 p-2 rounded-full mr-6'>
            <img className=' col-span-1' src={img} alt="" />
        </div>
        <div className='col-span-11'>
        <h1 className='text-white  font-medium'>{title}</h1>
        <p className='text-white'>{content}</p>
        </div>
    </div>
  )
}

export default BussinessItem