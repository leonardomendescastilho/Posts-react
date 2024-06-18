import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from '../src/App.module.css';

let posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leonardomendescastilho.png',
      name: 'Leonardo',
      role: 'Front-End',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Fala galeraa 👋 Acabei de subir mais um projeto no meu portifolio',
      },
      {
        type: 'paragraph',
        content:
          'projeto que fiz no NLW Return, evento da Rocketseat. O nome doprojeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-06-18 07:20'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/40183495?v=4',
      name: 'Nathan',
      role: 'Back-end',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Fala galeraa 👋 Acabei de terminar mais um projeto na minha empresa DMcard, sou fã demais dessa organização. Meu chefe é rei!!',
      },
      {
        type: 'paragraph',
        content:
          'o projeto que eu fiz foi simplesmente reorganizar tudo na empresa, inclusive, limpar o escritóri odo meu chefe, segue o link:',
      },
      { type: 'link', content: '👉 nathan.melhor-funcionario/dmcard' },
    ],
    publishedAt: new Date('2024-06-18 07:30'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
