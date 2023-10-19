import Title from '../components/Title';
import Content from '../components/Content';
import Button from '../UI/Button';

function CTA() {
  return (
    <div className=' bg-gradient-to-tl from-slate-800 p-12 lg:mr-20 lg:ml-20 max-sm:mr-8 sm:mr-8 sm:ml-8 md:mr-20 md:ml-20 max-sm:ml-8 mb-40  rounded-3xl   lg:flex md:block justify-between '>
      <div>
        <Title>Come try our service now!</Title>
        <Content>Everything you need to accept card payments and grow your business anywhere on the planet.</Content>  
      </div>
      <div className='lg:grid lg:place-content-center ml-4'>

      <Button className=' bg-teal-500 p-3 rounded-md  mt-6 font-medium'>Get Started</Button>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;