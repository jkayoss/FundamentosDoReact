import SidebarStyle from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={SidebarStyle.sidebar}>
            <img className={SidebarStyle.cover} src="https://images.unsplash.com/photo-1655128535324-a5f94318a8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=50" alt="Imagem de Fundo" />
            <div className={SidebarStyle.profile}>
                <Avatar src="https://github.com/jkayoss.png" hasBorder={true}/>
                <strong>Jhonatan Sena</strong>
                <span>Frontend Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}