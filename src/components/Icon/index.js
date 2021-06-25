import styled from 'styled-components';
import sprite from '../../assets/sprite.svg';
import { COLOR, SIZE, SPACE } from '../theme/style';

const handleMarginType = (margin) => {
  switch (margin) {
    case 'right':
      return `0 ${SPACE['sp-1']} 0 0`;
    case 'left':
      return `0 0 0 ${SPACE['sp-1']}`;
    default:
      return '0 0 0 0';
  }
};

const handleColorType = (color) => {
  switch (color) {
    case 'blue':
      return COLOR['blue-100'];
    case 'gray':
      return COLOR['gray-300'];
    default:
      return COLOR.main;
  }
};

const handleSizeType = (size) => {
  switch (size) {
    case 'small':
      return `height: ${SIZE['s-1']}; width: ${SIZE['s-1']}`;
    case 'medium':
      return `height: ${SIZE['s-1.5']}; width: ${SIZE['s-1.5']}`;
    default:
      return `height: ${SIZE['s-2']}; width: ${SIZE['s-2']}`;
  }
};
const StyledIcon = styled.svg`
  ${({ size }) => handleSizeType(size)};
  fill: ${({ color }) => handleColorType(color)};
  margin: ${({ margin }) => handleMarginType(margin)};

  &:hover {
    cursor: pointer;
  }
`;

const Icon = (props) => {
  return (
    <StyledIcon {...props}>
      <use href={`${sprite}#icon-${props.name}`} />
    </StyledIcon>
  );
};

export default Icon;
