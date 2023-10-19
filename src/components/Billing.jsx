import { bill, apple, google } from "../assets/index";
import GPayBtn from "../UI/GPlayBtn";
import Wrapper from "./Wrapper";
import Title from '../components/Title';
import Content from '../components/Content';

function Billing() {
  return (
    <Wrapper id={'product'}>
      <div className=" md:order-2 sm:order-2 max-sm:order-2">
        <img src={bill} alt="" />
      </div>
      <div className=" md:order-1 sm:order-1 max-sm:order-1">
       <Title>
          Easily control your billing & invoicing.
          </Title>
        <Content>
          We consider the payment methods you'll offer your customers when you
          start your business. This is an important part of managing your
          business cash flow and meeting your customer's needs.
          </Content>
        <div className=" mt-6 space-x-4">
          <GPayBtn img={apple} />
          <GPayBtn img={google} />
        </div>
      </div>
      </Wrapper>
  );
}

export default Billing;
