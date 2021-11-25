import BachelorsData from './BachelorsData.js';
import './App.css';

function App() {
  const other_pc = "./other_pc_1985.mp4";
  const easy_bake_video = "./easy_bake_1981.mp4";
  const pc_video = "./apple_1984.mp4";
  const univac = "./women_univac_1950.png";
  const hamilton ="./hamilton.png";

  return (
    <div className="App">
      <div className="title">How Sexist Marketing Led to a Wider Gender Gap in the Technology Industry.</div>
        <div div className="source-container">
          
          <div className="source-holder">
              <div className="commodore_ad">
                  <video width="500" height="auto" controls>
                    <source src={require(`${other_pc}`).default} type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                  <div className="caption">Commodore 64 Personal Computer Advertisement 1985</div>
              </div>
          </div>

          <div className="source-holder">
              <div className="intro">
                  Both versions convey a topic; it’s pretty easy to predict that the paragraph will be about epidemiological evidence, 
                  but only the second version establishes an argumentative point and puts it in context. 
                  The paragraph doesn’t just describe the epidemiological evidence; 
                  it shows how epidemiology is telling the same story as etiology. 
                  Similarly, while Version A doesn’t relate to anything in particular, 
                  Version B immediately suggests that the prior paragraph addresses the biological pathway (i.e. etiology) 
                  of a disease and that the new paragraph will bolster the emerging hypothesis with a different kind of evidence. 
                  As a reader, it’s easy to keep track of how the paragraph about cells and chemicals 
                  and such relates to the paragraph about populations in different places.
              </div>
          </div>

          <div className="source-holder">
              <div className="hamilton_image">
                    <div className="hamilton_image-plus-caption">
                        <img className="hamilton_source" src={require(`${hamilton}`).default} alt="display here"></img>
                        <div className="caption">Margaret Hamilton 1969</div>
                    </div>
              </div>
          </div>

          <div className="source-holder">
              <div className="intro">
                  Both versions convey a topic; it’s pretty easy to predict that the paragraph will be about epidemiological evidence, 
                  but only the second version establishes an argumentative point and puts it in context. 
                  The paragraph doesn’t just describe the epidemiological evidence; 
                  it shows how epidemiology is telling the same story as etiology. 
                  Similarly, while Version A doesn’t relate to anything in particular, 
                  Version B immediately suggests that the prior paragraph addresses the biological pathway (i.e. etiology) 
                  of a disease and that the new paragraph will bolster the emerging hypothesis with a different kind of evidence. 
                  As a reader, it’s easy to keep track of how the paragraph about cells and chemicals 
                  and such relates to the paragraph about populations in different places.
              </div>
          </div>

          <div className="source-holder">
              <div className="univac_image">
                    <div className="image-plus-caption">
                        <img className="source" src={require(`${univac}`).default} alt="display here"></img>
                        <div className="caption">Univac Computer in the 1950s.</div>
                    </div>
                </div>
          </div>

          <div className="source-holder">
              <div className="intro">
                  Both versions convey a topic; it’s pretty easy to predict that the paragraph will be about epidemiological evidence, 
                  but only the second version establishes an argumentative point and puts it in context. 
                  The paragraph doesn’t just describe the epidemiological evidence; 
                  it shows how epidemiology is telling the same story as etiology. 
                  Similarly, while Version A doesn’t relate to anything in particular, 
                  Version B immediately suggests that the prior paragraph addresses the biological pathway (i.e. etiology) 
                  of a disease and that the new paragraph will bolster the emerging hypothesis with a different kind of evidence. 
                  As a reader, it’s easy to keep track of how the paragraph about cells and chemicals 
                  and such relates to the paragraph about populations in different places.
              </div>
          </div>

          <div className="source-holder">
            <div className="easy_bake_ad">
                <video controls width="500">
                  <source src={require(`${easy_bake_video}`).default} type="video/mp4"/>
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <div className="caption">Easy Bake Oven Advertisement 1981</div>
            </div>
          </div>

          <div className="source-holder">
              <div className="intro">
                  Both versions convey a topic; it’s pretty easy to predict that the paragraph will be about epidemiological evidence, 
                  but only the second version establishes an argumentative point and puts it in context. 
                  The paragraph doesn’t just describe the epidemiological evidence; 
                  it shows how epidemiology is telling the same story as etiology. 
                  Similarly, while Version A doesn’t relate to anything in particular, 
                  Version B immediately suggests that the prior paragraph addresses the biological pathway (i.e. etiology) 
                  of a disease and that the new paragraph will bolster the emerging hypothesis with a different kind of evidence. 
                  As a reader, it’s easy to keep track of how the paragraph about cells and chemicals 
                  and such relates to the paragraph about populations in different places.
              </div>
          </div>

          <div className="source-holder">
            <div className="pc_ad">
                <video controls width="500">
                  <source src={require(`${pc_video}`).default} type="video/mp4"/>
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <div className="caption">Apple II Advertisement 1985</div>
            </div>
          </div>

          <div className="source-holder">
              <div className="intro">
                  Both versions convey a topic; it’s pretty easy to predict that the paragraph will be about epidemiological evidence, 
                  but only the second version establishes an argumentative point and puts it in context. 
                  The paragraph doesn’t just describe the epidemiological evidence; 
                  it shows how epidemiology is telling the same story as etiology. 
                  Similarly, while Version A doesn’t relate to anything in particular, 
                  Version B immediately suggests that the prior paragraph addresses the biological pathway (i.e. etiology) 
                  of a disease and that the new paragraph will bolster the emerging hypothesis with a different kind of evidence. 
                  As a reader, it’s easy to keep track of how the paragraph about cells and chemicals 
                  and such relates to the paragraph about populations in different places.
              </div>
          </div>

          <div className="source-holder">
              <div className="plot">
                  <BachelorsData/>
                  <div className="caption">This plot was created with data from The National Center for Education Statistics</div>
              </div>
          </div>

        <div className="source-holder">
              <div className="intro">
                  Both versions convey a topic; it’s pretty easy to predict that the paragraph will be about epidemiological evidence, 
                  but only the second version establishes an argumentative point and puts it in context. 
                  The paragraph doesn’t just describe the epidemiological evidence; 
                  it shows how epidemiology is telling the same story as etiology. 
                  Similarly, while Version A doesn’t relate to anything in particular, 
                  Version B immediately suggests that the prior paragraph addresses the biological pathway (i.e. etiology) 
                  of a disease and that the new paragraph will bolster the emerging hypothesis with a different kind of evidence. 
                  As a reader, it’s easy to keep track of how the paragraph about cells and chemicals 
                  and such relates to the paragraph about populations in different places.
              </div>
          </div>
        
      </div>

    </div>
  );
}

export default App;
