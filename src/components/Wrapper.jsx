
function Wrapper({children,className,id}) {
  return (
    <div id={id} className={`grid lg:grid-cols-2 md:grid-cols-1 lg:mr-20 lg:ml-20 max-sm:mr-8 sm:mr-8 sm:ml-8 md:mr-20 md:ml-20 max-sm:ml-8 gap-12 mb-40 ${className}`}>
    {children}
    </div>
  )
}

export default Wrapper