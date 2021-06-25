import { SideBar, SideBarItem, SideBarItemLink } from './style';
import Icon from '../Icon/index';

const SideNavbar = ({ data }) => {
  return (
    <SideBar>
      {data.map(({ name, icon }) => {
        return (
          <SideBarItem key={name}>
            <SideBarItemLink href='#'>
              <Icon name={icon} color='gray' margin='right' />
              <span>{name}</span>
            </SideBarItemLink>
          </SideBarItem>
        );
      })}
    </SideBar>
  );
};

export default SideNavbar;
