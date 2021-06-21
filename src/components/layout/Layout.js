import { Wrapper, MainContent } from './Layout.style';
import TopNavbar from './TopNavbar/TopNavbar';
const Layout = (props) => {
  const links = [{ name: 'HELP' }, { name: 'CLEVER STORE' }, { name: 'OTHER' }];
  return (
    <Wrapper>
      <TopNavbar data={links} />
      <MainContent>{props.children}</MainContent>
    </Wrapper>
  );
};

export default Layout;
