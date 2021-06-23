import SideNavbar from '../components/SideNavbar/index';
import TopNavbar from '../components/TopNavbar';
import { ContentWrapper, PageWrapper, MainContent } from './style';
import TableHero from '../components/TableHero/index';
import Table from '../components/Table/index';
import * as DATA from '../assets/data';
import { TopBarItem } from '../components/TopNavbar/style';

const SurveysPage = () => {
  return (
    <PageWrapper>
      <TopNavbar>
        {DATA.TOPBAR_LINKS.map(({ name }) => (
          <TopBarItem key={name}>{name}</TopBarItem>
        ))}
      </TopNavbar>
      <MainContent>
        <SideNavbar data={DATA.SIDEBAR_LINKS} />
        <ContentWrapper>
          <TableHero data={DATA.TABLE_HERO_ITEMS} />
          <Table
            initialRows={DATA.TABLE_ROWS}
            initialSort={'created'}
            headings={DATA.TABLE_HEADINGS}
            actions={DATA.TABLE_ACTIONS}
          />
          {/* THIS IS HOW HE WOULD LIKE IT TO BE
           <Table
            rows={[
              {
                id: '1',
                name: 'Name1',
                state: 'state1',
                audience: 'audience1',
                date: new Date(),
              },
              {
                id: '2',
                name: 'Name2',
                state: 'state2',
                audience: 'audience2',
                date: new Date(),
              },
              {
                id: '3',
                name: 'Name3',
                state: 'state3',
                audience: 'audience3',
                date: new Date(),
              },
            ]}
            rowIdAccessor={(row) => row.id}
            rowActionsComp={() => (
              <React.Fragment>
                <DropdownMenu.Item label='Button 1' onClick={() => {}} />
                <DropdownMenu.Item
                  label='Button disabled'
                  isDisabled
                  onClick={() => {}}
                />
                <DropdownMenu.Item label='Button 3' onClick={() => {}} />
              </React.Fragment>
            )}
          >
            <Table.Head>
              <Table.TH flex={3} sortKey='name'>
                Name
              </Table.TH>
              <Table.TH flex={2} sortKey='state'>
                State
              </Table.TH>
              <Table.TH flex={2} sortKey='audience'>
                Audience
              </Table.TH>
              <Table.TH flex={2} sortKey='date'>
                Date
              </Table.TH>
              <Table.TH flex={2} align='center' sortKey='importedByImageUrl'>
                Imported by
              </Table.TH>
            </Table.Head>
            <Table.Body>
              <Table.TR>
                {({ name, state, audience, date, importedByImageUrl }) => (
                  <React.Fragment>
                    <Table.TD flex={3} isPrimary>
                      {name}
                    </Table.TD>
                    <Table.TD flex={2}>{state}</Table.TD>
                    <Table.TD flex={2}>{audience}</Table.TD>
                    <Table.TD flex={2}>{date.toLocaleDateString()}</Table.TD>
                    <Table.TD align='center' flex={2}>
                      <Avatar.S />
                    </Table.TD>
                  </React.Fragment>
                )}
              </Table.TR>
            </Table.Body>
          </Table> */}
        </ContentWrapper>
      </MainContent>
    </PageWrapper>
  );
};

export default SurveysPage;
