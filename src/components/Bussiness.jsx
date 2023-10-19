import Button from '../UI/Button';
import BussinessList from './BussinessList';
import Wrapper from './Wrapper';
import Title from '../components/Title';
import Content from '../components/Content';

function Bussiness() {
  return (
    <Wrapper id='feature'>
      <div>
        <Title>
          You do the business, we`ll handle the money.
        </Title>
        <Content>
          with the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
          </Content>
        <Button className=' bg-teal-500 p-3 rounded-md mt-6 '>Get Started</Button>
      </div>
      <div className=''>
        <BussinessList></BussinessList>
      </div>
      </Wrapper>
  )
}

export default Bussiness