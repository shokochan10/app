import styled, { css } from 'styled-components';
import { Text, Svg } from '../globals/style';

export const TableContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: left;
`;

export const TableRowContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem auto;
  color: #555;
  font-size: 1.3rem;
`;

const StyledTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  border: 1px dashed #833ab4;
  border-radius: 0.5rem;
  ${(props) =>
    props.header &&
    css`
      border: none;
      width: 90%;
    `}

  ${(props) =>
    props.clicked &&
    css`
      border: none;
      box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.34);
    `}

  ${(props) =>
    props.expanded &&
    css`
      width: 80%;
      justify-content: center;
      margin: -1rem auto 0;
      border: none;
      background: #181921;
    `}
`;

export const TableRow = (props) => {
  return (
    <StyledTableRow
      clicked={props.clicked}
      expanded={props.expanded}
      header={props.header}
    >
      {props.children}
    </StyledTableRow>
  );
};

const StyledTableCell = styled.div`
  display: flex;
  padding: 2rem 0;
  width: 10%;
  align-items: center;
  ${(props) =>
    props.outside &&
    css`
      width: 5%;
      border: none;
    `}

  ${(props) =>
    props.header &&
    css`
      border: none;
      user-select: none;
      &:hover {
        cursor: pointer;
        color: #fff;
      }
    `}

  ${(props) =>
    props.first &&
    css`
      margin-left: 0.5rem;
      width: 17%;
    `}


  ${(props) =>
    props.expanded &&
    css`
      justify-content: center;
      &:hover {
        background-color: #222633;
        cursor: pointer;
        border-radius: 1rem;
      }
    `}
  
  ${(props) =>
    props.active &&
    css`
      color: #fff;
    `}
`;

export const TableCell = (props) => {
  return (
    <StyledTableCell
      first={props.first}
      header={props.header}
      outside={props.outside}
      last={props.last}
      expanded={props.expanded}
      onClick={props.onClick}
      active={props.active}
    >
      {props.children}
    </StyledTableCell>
  );
};

const StyledTableText = styled(Text)`
  ${(props) =>
    props.header &&
    css`
      font-size: 1.2rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
      color: #666;
    `}
  
  ${(props) =>
    props.white &&
    css`
      color: #eee;
    `}

  ${(props) =>
    props.expanded &&
    css`
      color: white;
      margin-left: 0.5rem;
    `}
`;

export const TableText = (props) => {
  return (
    <StyledTableText
      white={props.white}
      header={props.header}
      bold={props.bold}
      expanded={props.expanded}
      onClick={props.onClick}
    >
      {props.children}
    </StyledTableText>
  );
};

const StyledTableSvg = styled(Svg)`
  fill: ${(props) => (props.blue ? 'skyblue' : '#fff')};
  ${(props) =>
    props.small &&
    css`
      height: 1.5rem;
      width: 1.5rem;
    `}
  ${(props) =>
    props.smallest &&
    css`
      margin-left: 0.5rem;
      height: 1rem;
      width: 1rem;
    `}
`;

export const TableSvg = (props) => {
  return (
    <StyledTableSvg
      onClick={props.onClick}
      small={props.small}
      smallest={props.smallest}
      blue={props.blue}
    >
      {props.children}
    </StyledTableSvg>
  );
};
