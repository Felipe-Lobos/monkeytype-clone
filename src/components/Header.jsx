import './styles/Header.css'
import { DropdownMenu } from './DropdownMenu';

export function Header() {
  return (
    <div className="header">
      <h1>TipTap</h1>
      <DropdownMenu />
    </div>
  );
}
