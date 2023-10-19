import {airbnb,binance,coinbase,dropbox} from '../assets/index';
import Wrapper from '../components/Wrapper';


function Clients() {
  return <>
  <Wrapper className={' lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 place-items-center'} id='client'>
    <img src={airbnb} className=' w-36' alt="airbnb img" />
    <img src={binance} className=' w-36' alt="binance img" />
    <img src={coinbase} className=' w-36' alt="coinbase img" />
    <img src={dropbox} className=' w-36' alt="dropbox img" />
  </Wrapper>
  </>
}

export default Clients;
