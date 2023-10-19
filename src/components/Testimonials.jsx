import Wrapper from "./Wrapper";
import Title from "./Title";
import Content from "./Content";
import TestimonialCard from "./TestimonialCard";
import {people01,people02,people03} from '../assets/index';

function Testimonials() {
  return (
    <>
      <Wrapper >
        <Title>
          What people are <br />
          saying about us
        </Title>
        <Content>
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </Content>
      </Wrapper>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 lg:mr-20 lg:ml-20 max-sm:mr-8 sm:mr-8 sm:ml-8 md:mr-20 md:ml-20 max-sm:ml-8 gap-12 place-items-center mb-40">
        <TestimonialCard img={people01}></TestimonialCard>
        <TestimonialCard img={people02}></TestimonialCard>
        <TestimonialCard img={people03}></TestimonialCard>
      </div>
    </>
  );
}

export default Testimonials;
