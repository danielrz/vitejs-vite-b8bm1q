import { FC } from 'react';
import { useThemeContext } from '../../../providers/ThemeProvider';
import { ListItemProps } from '../interfaces';

const ListItem: FC<ListItemProps> = ({ id }) => {

  const themeContext = useThemeContext();

  return (
    <li className={themeContext.theme}>
      <strong>{id}</strong><br />
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</span>
    </li>
  )
}

export default ListItem