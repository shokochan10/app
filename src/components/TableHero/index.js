import { Subtitle } from '../globals/style';
import { TableHeaderDiv, TableHeaderButton } from './style';

const TableHeader = ({ data }) => {
  return (
    <TableHeaderDiv>
      <Subtitle>{data.subtitle}</Subtitle>
      <TableHeaderButton>{data.button}</TableHeaderButton>
    </TableHeaderDiv>
  );
};

export default TableHeader;
