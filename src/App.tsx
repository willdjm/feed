import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/willdjm.png',
      name: 'Will Douglas',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É meu primeiro projeto 🚀🚀🚀',},
      { type: 'link', content:'https://github.com/willdjm/feed.git',},           
    ],
    publishedAt: new Date('2023-07-09 14:43:00'),
  },
  ];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return(
            <Post
            key={post.id}
            post={post}
            />
          )
        })}
      </main>
      </div>
    </div>
  )
}


