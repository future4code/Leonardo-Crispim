import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="MainDiv">
      
      <header>

        <h2>FutureTube</h2>   <input type="text" placeholder="Buscar" name="search" id="searchfield"></input>

      </header>

      <div className="overallgrid">

        <div className="fourtexts">

          <a href="index.html"><p>Inicio</p></a>
          <p>Em Alta</p>
          <p>Inscricoes</p>
          <p>Originais</p>

        </div>

        <div className="twotexts">

            <p>Biblioteca</p>
            <p>Historico</p>

        </div>

      

      <div className="mainbox">

          <div id="item1">

              <a id="videoid" href="video1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/a0c/daffodil-1378489.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 1</p>
          </div>


          <div id="item2">

              <a id="videoid" href="futuretubevideo2.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/813/tractor-3-1386656.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 2</p>
          </div>

          <div id="item3">

              <a id="videoid" href="futuretubevideo1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/277/doggy-1382866.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 3</p>
          </div>

          <div id="item4">

              <a id="videoid" href="futuretubevideo1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/7e9/ladybird-1367182.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 4</p>
          </div>

          <div id="item5">

              <a id="videoid" href="futuretubevideo1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/4dc/street-1366583.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 5</p>
          </div>

          <div id="item6">

              <a id="videoid" href="futuretubevideo1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/6b2/hourglass-1543596.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 6</p>
          </div>

          <div id="item7">

              <a id="videoid" href="futuretubevideo1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/8ee/multicolor-drop-2-1056473.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 7</p>
          </div>

          <div id="item8">

              <a id="videoid" href="futuretubevideo1.html" target="_blank">
                  <img src="https://images.freeimages.com/images/small-previews/a0d/autumn-tree-1382832.jpg" width="200" height="150"></img>
              </a>

              <p id="videotitle">Titulo do Video 8</p>
          </div>

        </div>

      </div>

      <footer>
        Oi! Eu moro no Footer :D
      </footer>

    </div>
  );
}

export default App;
