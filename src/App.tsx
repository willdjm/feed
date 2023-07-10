import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/32290122_627515340930724_3986464291959078912_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PjZc0yT7yLEAX8vCabK&_nc_ht=scontent-gru2-1.xx&oh=00_AfBRlPklJSBGO16npYFh1rsFw2cr9OUvXq_yQpMxX76aNw&oe=64D10746',
      name: 'Will Douglas',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content:'jane.design/doctorcare',},           
    ],
    publishedAt: new Date('2023-07-09 14:43:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/willdjm.png',
      name: 'Igor Oliveira',
      role: 'Web Developer2'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabeiiii de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content:'jane.design/doctorcare',},           
    ],
    publishedAt: new Date('2023-07-07 10:00:00'),
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


