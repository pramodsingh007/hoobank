import Li from "../UI/Li";
import Content from '../components/Content';

function UsefullLinkList() {
  return (
    <ul className=" space-y-2">
      <li>
        <Content>Useful Links</Content>
      </li>
      <Li>
        <a href="">Content</a>
      </Li>
      <Li>How it Works</Li>
      <Li>Create</Li>
      <Li>Explore</Li>
      <Li>Terms & Services</Li>
    </ul>
  );
}

export default UsefullLinkList;
