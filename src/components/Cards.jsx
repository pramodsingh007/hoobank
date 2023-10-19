import Title from '../components/Title';
import Content from '../components/Content';
import Button from '../UI/Button';
import {card} from '../assets/index';
import Wrapper from './Wrapper';

function Cards() {
  return (
    <Wrapper>
      <div id='cards'>
        <Title>Find a better card deal
in few easy steps</Title>
        <Content>We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</Content>
        <Button className=' bg-teal-500 p-3 rounded-md  mt-6'>
          Get Started
        </Button>
      </div>
      <div>
          <img src={card} alt="" />
      </div>
      </Wrapper>
  )
}

export default Cards