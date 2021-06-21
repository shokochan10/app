import {
  TableContainer,
  TableRowContainer,
  TableRow,
  TableCell,
  TableText,
  TableSvg,
  Checkbox,
} from './ContentTable.style';
import sprite from '../../../assets/sprite.svg';
import useTable from '../../../hooks/use-table';
import getFormattedDate from '../../../helpers/getFormattedDate';
import { isSelectedSort, sortDirection } from '../../../helpers/sorting';
const ContentTable = (props) => {
  const { data, requestSort, requestExpand, currentSort } = useTable(
    props.data
  );

  return (
    <TableContainer>
      <TableRowContainer>
        <TableCell outside>
          <Checkbox type='checkbox' />
        </TableCell>
        <TableRow header>
          {props.headings.map((heading) => {
            return (
              <TableCell
                key={heading.name}
                active={isSelectedSort(heading.value, currentSort)}
                first={heading.name === 'Title' ? true : false}
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
      </TableRowContainer>

      {data.map((user) => {
        return (
          <div key={user.id}>
            <TableRowContainer>
              <TableCell outside>
                <Checkbox type='checkbox' />
              </TableCell>
              <TableRow clicked={data[user.id].expanded}>
                <TableCell first>
                  <TableText white>{user.title}</TableText>
                </TableCell>
                <TableCell>
                  <TableText>{user.state}</TableText>
                </TableCell>
                <TableCell>
                  <TableText bold>{user.viewed.toLocaleString('sk')}</TableText>
                </TableCell>
                <TableCell>
                  <TableText bold>
                    {user.answered.toLocaleString('sk')}
                  </TableText>
                </TableCell>
                <TableCell>
                  <TableText>{user.folder}</TableText>
                </TableCell>
                <TableCell>
                  <TableText>{getFormattedDate(user.created)}</TableText>
                </TableCell>
                <TableCell>
                  <TableText>{getFormattedDate(user.valid)}</TableText>
                </TableCell>
                <TableCell>
                  <TableSvg>
                    <use href={sprite + '#icon-group'} />
                  </TableSvg>
                </TableCell>
              </TableRow>
              <TableCell outside>
                <TableSvg onClick={() => requestExpand(data[user.id].id)}>
                  <use href={sprite + '#icon-ellipsis-v'} />
                </TableSvg>
              </TableCell>
            </TableRowContainer>
            {data[user.id].expanded && (
              <TableRow expanded>
                {props.actions.map((action) => {
                  return (
                    <TableCell expanded key={action.name}>
                      <TableSvg small>
                        <use href={action.icon} />
                      </TableSvg>
                      <TableText expanded>{action.name}</TableText>
                    </TableCell>
                  );
                })}
              </TableRow>
            )}
          </div>
        );
      })}
    </TableContainer>
  );
};

export default ContentTable;
