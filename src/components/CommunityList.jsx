import Content from '../components/Content';
import Li from '../UI/Li';

function CommunityList() {
  return (
    <ul className=" space-y-2">
        <li>
            <Content>Community</Content>
        </li>
        <Li>Help Center</Li>
        <Li>Partners</Li>
        <Li>Suggestions</Li>
        <Li>Blog</Li>
        <Li>Newsletter</Li>
    </ul>
  )
}

export default CommunityList