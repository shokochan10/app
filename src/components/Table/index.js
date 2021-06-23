import {
  TableContainer,
  TableRowContainer,
  TableRow,
  TableData,
  TableHeader,
  TableText,
} from './style';
import Icon from '../Icon/index';
import { Checkbox } from '../globals/style';
import useTable from '../../hooks/useTable';
import getFormattedDate from '../../helpers/getFormattedDate';
import order from '../../helpers/order';

const ActionsRow = ({ actions }) => (
  <TableRow expanded>
    {actions.map(({ name, icon }) => (
      <TableData expanded key={name} flex='0 0 10%'>
        <Icon name={icon} size='medium' margin='right' />
        <TableText color='white'>{name}</TableText>
      </TableData>
    ))}
  </TableRow>
);

const HeaderRow = ({ headings, currentSort, requestSort }) => (
  <TableRow header>
    {headings.map(({ name, value }, index) => {
      return (
        <TableHeader
          key={name}
          flex={index === 0 ? '2' : ''}
          active={currentSort.includes(value)}
          isPrimary={index === 0}
          header
          onClick={() => requestSort(value)}
        >
          <TableText font='header'>{name}</TableText>
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
        </TableHeader>
      );
    })}
  </TableRow>
);

const MainRow = ({ row }) => (
  <TableRow clicked={row.expanded}>
    <TableData isPrimary flex='2'>
      <TableText color='white' font='first'>
        {row.title}
      </TableText>
    </TableData>
    <TableData>
      <TableText>{row.state}</TableText>
    </TableData>
    <TableData>
      <TableText font={'bold'}>{row.viewed.toLocaleString('sk')}</TableText>
    </TableData>
    <TableData>
      <TableText font={'bold'}>{row.answered.toLocaleString('sk')}</TableText>
    </TableData>
    <TableData>
      <TableText>{row.folder}</TableText>
    </TableData>
    <TableData>
      <TableText>{getFormattedDate(row.created)}</TableText>
    </TableData>
    <TableData>
      <TableText>{getFormattedDate(row.valid)}</TableText>
    </TableData>
    <TableData>
      <Icon name={'group'} />
    </TableData>
  </TableRow>
);

const Table = ({ initialRows, initialSort, headings, actions }) => {
  const { rows, requestSort, requestExpand, currentSort } = useTable(
    initialRows,
    initialSort
  );

  return (
    <TableContainer>
      <TableRowContainer>
        <TableData>
          <Checkbox />
        </TableData>
        <HeaderRow
          headings={headings}
          requestSort={requestSort}
          currentSort={currentSort}
        />
      </TableRowContainer>
      {rows.map((row) => {
        return (
          <div key={row.id}>
            <TableRowContainer>
              <TableData>
                <Checkbox />
              </TableData>
              <MainRow row={row} />
              <TableData>
                <Icon
                  name={'ellipsis-v'}
                  onClick={() => requestExpand(row.id)}
                  color='gray'
                  margin='left'
                />
              </TableData>
            </TableRowContainer>
            {row.expanded && <ActionsRow actions={actions} />}
          </div>
        );
      })}
    </TableContainer>
  );
};

export default Table;
