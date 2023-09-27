import { useThemeContext } from '../../../providers/ThemeProvider';
import { ListItemProps } from '../interfaces';

function ListItem({ id }: ListItemProps) {

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