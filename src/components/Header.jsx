import headerStyle from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return(
        <header className={headerStyle.header}>
            <img src={igniteLogo} alt="Logotipo do IgniteFeed" />
            <strong >IgniteFeed</strong>
        </header>
    )
}