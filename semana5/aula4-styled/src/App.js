import React from 'react';
import './App.css';
import Post from './Components/Post/Post';
import PostTitle from './Components/PostTitle/PostTitle';
import PostPic from './Components/PostPic/PostPic';
import PostLikeCom from './Components/PostLikeCom/PostLikeCom';



function App() {
  return (
    <div className="AppDiv">

      <header id="headerid">
        <img id="instalogo" src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente5.png?fit=2400%2C2400&ssl=1" />
        <img id="instatitle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
        <input id="headersearch" type="text" placeholder="                         Search" />
        <img id="icons" src="https://cdn2.iconfinder.com/data/icons/instagram-17/32/8-user-512.png"/>
        <img id="icons" src="https://qph.fs.quoracdn.net/main-qimg-094b6418c35690a0a9425642728f081b"/>
        <img id="icons" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-10-512.png" />
      </header>

      <Post>
        <PostTitle title='Leonardo Crispim' userthumbnail="https://scontent.fssz2-1.fna.fbcdn.net/v/t1.0-9/p960x960/37019792_856055684589433_3164053160868184064_o.jpg?_nc_cat=107&_nc_oc=AQkxtHnM-dOreAe8cKQDcOgE5Zwf9WD5w5y1bt7x5PN9aKo9p6ykuIfF9h9ppuB7WeY&_nc_ht=scontent.fssz2-1.fna&_nc_tp=6&oh=e74b07183efd5bd4329fd5d9a097d828&oe=5F00E9FF"/>
        <PostPic pic="https://scontent.fssz2-1.fna.fbcdn.net/v/t1.0-9/p960x960/37019792_856055684589433_3164053160868184064_o.jpg?_nc_cat=107&_nc_oc=AQkxtHnM-dOreAe8cKQDcOgE5Zwf9WD5w5y1bt7x5PN9aKo9p6ykuIfF9h9ppuB7WeY&_nc_ht=scontent.fssz2-1.fna&_nc_tp=6&oh=e74b07183efd5bd4329fd5d9a097d828&oe=5F00E9FF" />
        <PostLikeCom postlikeimg="https://image.flaticon.com/icons/png/512/2/2267.png" postcomimg="https://www.nicepng.com/png/full/119-1196111_comment-youtube-comment-icon-png.png" lastcomment="arrasou"/>
      </Post>

      <Post>
        <PostTitle title='Hiros Storm' userthumbnail="https://external-preview.redd.it/7cxbtDQu23IiG19pcgMtalT_3e-U2zn5Ka-csgOuUSA.jpg?width=960&crop=smart&auto=webp&s=c33795c4cb1b3e979f66852c04858a86ca50c3b2"/>
        <PostPic pic="https://i.pinimg.com/originals/63/cb/aa/63cbaa20ce7eef03943b568eb6e793d2.jpg" />
        <PostLikeCom postlikeimg="https://image.flaticon.com/icons/png/512/2/2267.png" postcomimg="https://www.nicepng.com/png/full/119-1196111_comment-youtube-comment-icon-png.png" lastcomment="arrasou"/>
      </Post>

      <Post>
        <PostTitle title='DOOM' userthumbnail="https://steamuserimages-a.akamaihd.net/ugc/951839189562686834/0AC5DF1C5028C1BAB6C23C3706742939288AC20B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"/>
        <PostPic pic="https://pbs.twimg.com/media/EAgzXx5XkAUk9t4.jpg" />
        <PostLikeCom postlikeimg="https://image.flaticon.com/icons/png/512/2/2267.png" postcomimg="https://www.nicepng.com/png/full/119-1196111_comment-youtube-comment-icon-png.png" lastcomment="arrasou"/>
      </Post>
      
    </div>
  );
}

export default App;
