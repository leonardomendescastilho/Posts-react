import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from '../src/App.module.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          sapiente deleniti a quaerat corrupti quam sunt, unde placeat
          molestias, necessitatibus debitis minima aliquid sed facere
          voluptatibus optio hic culpa fuga?
        </main>
      </div>
    </>
  );
}
