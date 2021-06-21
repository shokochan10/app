import {
  TableContainer,
  TableRowContainer,
  TableRow,
  TableCell,
  TableText,
  TableSvg,
} from './style';
import { Checkbox } from '../globals/style';
import sprite from '../../assets/sprite.svg';
import useTable from '../../hooks/use-table';
import getFormattedDate from '../../helpers/getFormattedDate';
import { isSelectedSort, sortDirection } from '../../helpers/sorting';

const Table = (props) => {
  const { data, requestSort, requestExpand, currentSort } = useTable(
    props.data
  );

  const ActionsRow = (props) => (
    <TableRow expanded>
      {props.actions.map((action) => (
        <TableCell expanded key={action.name}>
          <TableSvg small>
            <use href={action.icon} />
          </TableSvg>
          <TableText expanded>{action.name}</TableText>
        </TableCell>
      ))}
    </TableRow>
  );

  const HeaderRow = (props) => (
    <TableRow header>
      {props.headings.map((heading) => {
        return (
          <TableCell
            key={heading.name}
            active={isSelectedSort(heading.value, currentSort)}
            first={heading.name === 'Title'}
            header
            onClick={() => requestSort(heading.value)}
          >
            <TableText header>{heading.name}</TableText>
            {isSelectedSort(heading.value, currentSort) && (
              <TableSvg smallest blue>
                {sortDirection(currentSort)}
              </TableSvg>
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );

  const MainRow = (props) => (
    <TableRow clicked={data[props.user.id].expanded}>
      <TableCell first>
        <TableText white>{props.user.title}</TableText>
      </TableCell>
      <TableCell>
        <TableText>{props.user.state}</TableText>
      </TableCell>
      <TableCell>
        <TableText bold>{props.user.viewed.toLocaleString('sk')}</TableText>
      </TableCell>
      <TableCell>
        <TableText bold>{props.user.answered.toLocaleString('sk')}</TableText>
      </TableCell>
      <TableCell>
        <TableText>{props.user.folder}</TableText>
      </TableCell>
      <TableCell>
        <TableText>{getFormattedDate(props.user.created)}</TableText>
      </TableCell>
      <TableCell>
        <TableText>{getFormattedDate(props.user.valid)}</TableText>
      </TableCell>
      <TableCell>
        <TableSvg>
          <use href={sprite + '#icon-group'} />
        </TableSvg>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {data && (
        <TableContainer>
          <TableRowContainer>
            <TableCell outside>
              <Checkbox type='checkbox' />
            </TableCell>
            <HeaderRow headings={props.headings} />
          </TableRowContainer>
          {data.map((user) => {
            return (
              <div key={user.id}>
                <TableRowContainer>
                  <TableCell outside>
                    <Checkbox type='checkbox' />
                  </TableCell>
                  <MainRow user={user} />
                  <TableCell outside>
                    <TableSvg onClick={() => requestExpand(data[user.id].id)}>
                      <use href={sprite + '#icon-ellipsis-v'} />
                    </TableSvg>
                  </TableCell>
                </TableRowContainer>
                {data[user.id].expanded && (
                  <ActionsRow actions={props.actions} />
                )}
              </div>
            );
          })}
        </TableContainer>
      )}
    </>
  );
};

export default Table;
