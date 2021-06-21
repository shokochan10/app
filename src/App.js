import Layout from './components/layout/Layout';
import SideNavbar from './components/SideNavbar/SideNavbar';
import Content from './components/Content/Content';
import { SidebarLinks } from './assets/data';
function App() {
  return (
    <Layout>
      <SideNavbar data={SidebarLinks} />
      <Content />
    </Layout>
  );
}

export default App;
