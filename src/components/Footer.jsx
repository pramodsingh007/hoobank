import Content from "../components/Content";
import { logo } from "../assets/index";
import UseFullLinkList from "../components/UseFullLinkList";
import CommunityList from "../components/CommunityList";
import PartnerList from "../components/PartnerList";

function Footer() {
  return (
    <footer className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 gap-8  lg:mr-20 lg:ml-20 max-sm:mr-8 sm:mr-8 sm:ml-8 md:mr-20 md:ml-20 max-sm:ml-8">
      <div>
        <img src={logo} className=" w-44" alt="" />
        <Content>A new way to make payments easy, reliable and secure.</Content>
      </div>
      <section className="grid lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 max-sm:grid-cols-1">
        <UseFullLinkList></UseFullLinkList>

        <CommunityList></CommunityList>

        <PartnerList></PartnerList>
      </section>
    </footer>
  );
}

export default Footer;
