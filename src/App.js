import SideNavbar from './components/SideNavbar/index';
import TopNavbar from './components/TopNavbar';
import {
  ContentWrapper,
  PageWrapper,
  MainContent,
} from './components/globals/style';
import Table from './components/Table/index';
import TableHero from './components/TableHero/index';
import * as DATA from './assets/data';

function App() {
  return (
    <PageWrapper>
      <TopNavbar data={DATA.TOPBAR_LINKS} />
      <MainContent>
        <SideNavbar data={DATA.SIDEBAR_LINKS} />
        <ContentWrapper>
          <TableHero data={DATA.TABLE_HERO_ITEMS} />
          <Table
            data={DATA.DUMMY_DATA}
            headings={DATA.TABLE_HEADINGS}
            actions={DATA.TABLE_ACTIONS}
          />
        </ContentWrapper>
      </MainContent>
    </PageWrapper>
  );
}

export default App;
