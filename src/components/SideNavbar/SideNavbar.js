import {
  SideBar,
  SideBarItem,
  SideBarItemLink,
  SideBarSvg,
} from './SideNavbar.style';

const SideNavbar = (props) => {
  return (
    <SideBar>
      {props.data.map((link) => {
        return (
          <SideBarItem key={link.name}>
            <SideBarItemLink href='#'>
              <SideBarSvg>
                <use href={link.icon} />
              </SideBarSvg>
              <span>{link.name}</span>
            </SideBarItemLink>
          </SideBarItem>
        );
      })}
    </SideBar>
  );
};

export default SideNavbar;
