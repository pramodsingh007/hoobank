import BussinessItem from "./BussinessItem"
import {star,shield,send} from '../assets/index';


function Bussinesslist() {
  return (<div className=" space-y-8">
    <BussinessItem img={star} title={'Rewards'} content={'The best credit cards offer some tantalizing combinations of promotions and prizes.'}/>
    <BussinessItem img={shield} title={'100% Secured'} content={'We take proactive steps make sure your information and transactions are secure.'}/>
    <BussinessItem img={send} title={'Balance Transfer'} content={'A balance transfer credit card can save you a lot of money in interest charges.'} />
  </div>
  )
}

export default Bussinesslist