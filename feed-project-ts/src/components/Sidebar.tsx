import { PencilSimpleLine } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import style from '../components/Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src='https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

      <div className={style.profile}>
        <Avatar
          hasBorder
          src='https://pbs.twimg.com/profile_images/1617648020102778882/EyZ4P6oI_400x400.jpg'
        />
        <strong>Leonardo Mendes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilSimpleLine
            size={20}
            weight='bold'
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
