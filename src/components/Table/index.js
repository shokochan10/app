import {
  TableContainer,
  TableRowContainer,
  TableText,
  StyledHead,
  StyledTH,
  StyledTD,
  StyledTR,
  StyledDropdownCell,
  StyledDropdownMenu,
} from './style';
import order from '../../helpers/order';
import { Checkbox } from '../globals/style';
import Icon from '../Icon/index';
import React, { useState, useContext, useEffect } from 'react';
import { TableContext } from '../../context/TableContext';

const Table = ({ rows, children, initSort, rowIdAccessor, rowActionsComp }) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [currentSort, setCurrentSort] = useState(initSort);

  const requestSort = (newSort) => {
    if (!newSort) return;
    if (currentSort === newSort + order.ASCENDING) {
      setSortedRows((userList) => {
        const oldList = [...userList];
        const newUserList = oldList.sort((first, next) =>
          next[newSort] > first[newSort] ? 1 : -1
        );
        return newUserList;
      });
      setCurrentSort(newSort + order.DESCENDING);
    } else {
      setSortedRows((userList) => {
        const oldList = [...userList];
        const newUserList = oldList.sort((first, next) =>
          first[newSort] > next[newSort] ? 1 : -1
        );
        return newUserList;
      });
      setCurrentSort(newSort + order.ASCENDING);
    }
  };

  useEffect(() => {
    requestSort(initSort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContext.Provider
      value={{
        rows: sortedRows,
        currentSort,
        setCurrentSort,
        rowIdAccessor,
        rowActionsComp,
        requestSort,
      }}
    >
      <TableContainer>{children}</TableContainer>
    </TableContext.Provider>
  );
};

export default Table;

export const Head = ({ children }) => (
  <TableRowContainer>
    <StyledTH flex='0'>
      <Checkbox />
    </StyledTH>
    <StyledHead>{children}</StyledHead>
  </TableRowContainer>
);

export const TH = ({ isPrimary, flex, sortBy, children }) => {
  const { requestSort, currentSort } = useContext(TableContext);
  return (
    <StyledTH
      flex={flex}
      isPrimary={isPrimary}
      onClick={() => requestSort(sortBy)}
    >
      <TableText font='header' active={currentSort.startsWith(sortBy)}>
        {children}
      </TableText>
      {currentSort.startsWith(sortBy) ? (
        currentSort === sortBy + order.ASCENDING ? (
          <Icon name='chevron-up' size='small' color='blue' margin='left' />
        ) : (
          <Icon name='chevron-down' size='small' color='blue' margin='left' />
        )
      ) : undefined}
    </StyledTH>
  );
};

export const Body = ({ children }) => {
  const { rowIdAccessor, rows } = useContext(TableContext);
  return rows.map((row) =>
    React.cloneElement(children, { ...row, key: rowIdAccessor(row) })
  );
};

export const TR = (props) => {
  const { rowActionsComp } = useContext(TableContext);
  const [isActionRowToggled, setIsActionRowToggled] = useState(false);

  return (
    <div>
      <TableRowContainer>
        <StyledTD>
          <Checkbox />
        </StyledTD>
        <StyledTR clicked={isActionRowToggled}>
          {props.children(props)}
        </StyledTR>
        <StyledTD>
          <Icon
            name={'ellipsis-v'}
            onClick={() => setIsActionRowToggled((p) => !p)}
            color='gray'
            margin='left'
          />
        </StyledTD>
      </TableRowContainer>
      {isActionRowToggled && (
        <StyledDropdownMenu>{rowActionsComp()}</StyledDropdownMenu>
      )}
    </div>
  );
};

export const TD = ({ font, color, isPrimary, flex, children }) => (
  <StyledTD flex={flex} isPrimary>
    <TableText color={color} isPrimary={isPrimary} font={font}>
      {children}
    </TableText>
  </StyledTD>
);

export const DropdownCell = ({ icon, label, onClick }) => (
  <StyledDropdownCell onClick={onClick} flex='0 0 10%'>
    <Icon name={icon} size='medium' margin='right' />
    <TableText color='white'>{label}</TableText>
  </StyledDropdownCell>
);
