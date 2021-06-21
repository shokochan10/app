import { Subtitle } from '../globals/style';
import { TableHeaderDiv, TableHeaderButton } from './style';

const TableHeader = (props) => {
  return (
    <TableHeaderDiv>
      <Subtitle>{props.data.subtitle}</Subtitle>
      <TableHeaderButton>{props.data.button}</TableHeaderButton>
    </TableHeaderDiv>
  );
};

export default TableHeader;
