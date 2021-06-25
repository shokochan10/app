import SideNavbar from '../components/SideNavbar/index';
import TopNavbar from '../components/TopNavbar';
import { ContentWrapper, PageWrapper, MainContent } from './style';
import TableHero from '../components/TableHero/index';
import Table, {
  Head,
  TH,
  TD,
  TR,
  Body,
  DropdownCell,
} from '../components/Table/index';
import * as DATA from '../assets/data';
import { TopBarItem } from '../components/TopNavbar/style';
import getFormattedDate from '../helpers/getFormattedDate';
import Icon from '../components/Icon/index';

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
            rows={DATA.TABLE_ROWS}
            initSort='created'
            rowIdAccessor={(row) => row.id}
            rowActionsComp={() => (
              <>
                {DATA.TABLE_ACTIONS.map((action) => (
                  <DropdownCell
                    key={action.name}
                    label={action.name}
                    icon={action.icon}
                    onClick={() => {}}
                  />
                ))}
              </>
            )}
          >
            <Head>
              <TH isPrimary flex={2} sortBy={'title'}>
                Title
              </TH>
              <TH flex={1} sortBy={'state'}>
                State
              </TH>
              <TH flex={1} sortBy={'viewed'}>
                Viewed
              </TH>
              <TH flex={1} sortBy={'answered'}>
                Answered
              </TH>
              <TH flex={1} sortBy={'folder'}>
                Folder
              </TH>
              <TH flex={1} sortBy={'created'}>
                Created
              </TH>
              <TH flex={1} sortBy={'valid'}>
                Valid until
              </TH>
              <TH flex={1} sortBy={'author'}>
                Created by
              </TH>
            </Head>
            <Body>
              <TR>
                {({
                  title,
                  state,
                  viewed,
                  answered,
                  folder,
                  created,
                  valid,
                }) => (
                  <>
                    <TD color='white' isPrimary flex={2} font='first'>
                      {title}
                    </TD>
                    <TD flex={1}>{state}</TD>
                    <TD flex={1} font={'bold'}>
                      {viewed.toLocaleString('sk')}
                    </TD>
                    <TD flex={1} font={'bold'}>
                      {answered.toLocaleString('sk')}
                    </TD>
                    <TD flex={1}>{folder}</TD>
                    <TD flex={1}>{getFormattedDate(created)}</TD>
                    <TD flex={1}>{getFormattedDate(valid)}</TD>
                    <TD flex={1}>
                      <Icon name={'group'} />
                    </TD>
                  </>
                )}
              </TR>
            </Body>
          </Table>
        </ContentWrapper>
      </MainContent>
    </PageWrapper>
  );
};

export default SurveysPage;
