import { TopBar, TopBarItem } from './style';

const TopNavbar = (props) => {
  return (
    <TopBar>
      {props.data.map((link) => {
        return <TopBarItem key={link.name}>{link.name}</TopBarItem>;
      })}
    </TopBar>
  );
};

export default TopNavbar;
