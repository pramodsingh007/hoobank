import {robot,arrowUp} from '../assets/index';
import Wrapper from './Wrapper';
import Content from '../components/Content';

function Hero() {
  return (
      <Wrapper className={'md:mr-0 sm:mr-0 lg:mr-0 max-sm:mr-0'}>
    <div className=' text-left float-left '>
    <div className=' relative'>

    <button className=' lg:block sm:hidden max-sm:hidden absolute top-6  left-96 text-white  w-28  h-28 p-7 rounded-full border-solid border-2 border-blue-800' ><div className='flex'>Get <img src={arrowUp} alt="" /></div> Started  </button>
    <h1 className='lg:text-7xl md:text-7xl sm:text-5xl max-sm:text-5xl  font-bold leading-tight text-white mb-6'>
      <div>

      The Next <br /> <span className=' text-cyan-500'>Generation</span><br /> Payment Method.
      </div>
    </h1>
    <Content>
      Our Team of experts uses a methodology to identify <br /> the credit cards most likely to fit your neends. <br /> We examine annual percentage rates, annual fees.
      </Content>
    </div>
    </div>

    <div className=' '>
      <img className='float-right ' src={robot} alt="robot hand" />
    </div>
    </Wrapper>
  )
}

export default Hero