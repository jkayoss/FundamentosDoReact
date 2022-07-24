import { Post } from './components/Post';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import AppStyle from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jkayoss.png",
      name: "Jhonatan Sena",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto pro meu portfólio.",
      },
      { type: "link", content: "#NeverStopLearning" },
    ],
    publishedAt: new Date("2022-06-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jkayoss.png",
      name: "Jhonatan Sena",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto pro meu portfólio.",
      },
      { type: "link", content: "#NeverStopLearning" },
    ],
    publishedAt: new Date("2022-06-12 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={AppStyle.wrapper}>
        <Sidebar/>
        <main>
          { posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </>
  )
}

export default App
