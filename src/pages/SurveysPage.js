import SideNavbar from '../components/SideNavbar/index';
import TopNavbar from '../components/TopNavbar';
import { ContentWrapper, PageWrapper, MainContent } from './style';
import TableHero from '../components/TableHero/index';
import Table from '../components/Table/index';
import * as DATA from '../assets/data';
import { TopBarItem } from '../components/TopNavbar/style';

import * as T from '../components/Table/style';
import useTable from '../hooks/useTable';
import Icon from '../components/Icon/index';
import getFormattedDate from '../helpers/getFormattedDate';
import { Checkbox } from '../components/globals/style';
import order from '../helpers/order';

const SurveysPage = () => {
  const { rows, requestSort, requestExpand, currentSort } = useTable(
    DATA.TABLE_ROWS,
    'created'
  );

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
          <Table>
            <T.TableRowContainer>
              <T.TableData>
                <Checkbox />
              </T.TableData>
              <T.TableRow header>
                {DATA.TABLE_HEADINGS.map(({ name, value }, index) => (
                  <T.TableHeader
                    key={name}
                    flex={index === 0 ? '2' : '1'}
                    active={currentSort.includes(value)}
                    isPrimary={index === 0}
                    header
                    onClick={() => requestSort(value)}
                  >
                    <T.TableText font='header'>{name}</T.TableText>
                    {currentSort.includes(value) && (
                      <Icon
                        name={
                          currentSort.includes(order.ASCENDING)
                            ? 'chevron-up'
                            : 'chevron-down'
                        }
                        size='small'
                        color='blue'
                        margin='left'
                      />
                    )}
                  </T.TableHeader>
                ))}
              </T.TableRow>
            </T.TableRowContainer>
            {rows.map(
              ({
                title,
                state,
                viewed,
                answered,
                folder,
                created,
                valid,
                expanded,
                id,
              }) => (
                <div key={id}>
                  <T.TableRowContainer>
                    <T.TableData>
                      <Checkbox />
                    </T.TableData>
                    <T.TableRow clicked={expanded}>
                      <T.TableData isPrimary flex='2'>
                        <T.TableText color='white' font='first'>
                          {title}
                        </T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <T.TableText>{state}</T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <T.TableText font={'bold'}>
                          {viewed.toLocaleString('sk')}
                        </T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <T.TableText font={'bold'}>
                          {answered.toLocaleString('sk')}
                        </T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <T.TableText>{folder}</T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <T.TableText>{getFormattedDate(created)}</T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <T.TableText>{getFormattedDate(valid)}</T.TableText>
                      </T.TableData>
                      <T.TableData>
                        <Icon name={'group'} />
                      </T.TableData>
                    </T.TableRow>
                    <T.TableData>
                      <Icon
                        name={'ellipsis-v'}
                        onClick={() => requestExpand(id)}
                        color='gray'
                        margin='left'
                      />
                    </T.TableData>
                  </T.TableRowContainer>
                  {expanded && (
                    <T.TableRow expanded>
                      {DATA.TABLE_ACTIONS.map(({ name, icon }) => (
                        <T.TableData expanded key={name} flex='0 0 10%'>
                          <Icon name={icon} size='medium' margin='right' />
                          <T.TableText color='white'>{name}</T.TableText>
                        </T.TableData>
                      ))}
                    </T.TableRow>
                  )}
                </div>
              )
            )}
          </Table>
        </ContentWrapper>
      </MainContent>
    </PageWrapper>
  );
};

export default SurveysPage;
