import React from 'react';
import './App.css';
import Post from './Components/Post/Post';
import PostTitle from './Components/PostTitle/PostTitle';
import PostPic from './Components/PostPic/PostPic';



function App() {
  return (
    <div className="AppDiv">

      <header>
        header test
      </header>

      <Post>
        <PostTitle title='Leonardo Crispim' userthumbnail="https://scontent.fssz2-1.fna.fbcdn.net/v/t1.0-9/p960x960/37019792_856055684589433_3164053160868184064_o.jpg?_nc_cat=107&_nc_oc=AQkxtHnM-dOreAe8cKQDcOgE5Zwf9WD5w5y1bt7x5PN9aKo9p6ykuIfF9h9ppuB7WeY&_nc_ht=scontent.fssz2-1.fna&_nc_tp=6&oh=e74b07183efd5bd4329fd5d9a097d828&oe=5F00E9FF"/>
        <PostPic pic="https://scontent.fssz2-1.fna.fbcdn.net/v/t1.0-9/p960x960/37019792_856055684589433_3164053160868184064_o.jpg?_nc_cat=107&_nc_oc=AQkxtHnM-dOreAe8cKQDcOgE5Zwf9WD5w5y1bt7x5PN9aKo9p6ykuIfF9h9ppuB7WeY&_nc_ht=scontent.fssz2-1.fna&_nc_tp=6&oh=e74b07183efd5bd4329fd5d9a097d828&oe=5F00E9FF" />
      </Post>
      
    </div>
  );
}

export default App;
