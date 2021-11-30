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
      <div className="title">How Sexist Marketing Led to a Wider Gender Gap in the Technology Industry</div>
        <div div className="source-container">

          <div className="source-holder">
              <div className="intro">
              Between the 1960s and 1990, the share of women making up the computer technology industry steadily rose
              from 27% to <a href="https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html">35%</a>.
              The task of programming and performing calculations was usually assigned 
              to women – literally called computers – because it was not high-status work at the time.
              Men focused on hardware instead. However, around 1984 there was a significant drop in interest and graduation rates
              of women in Computer Science. How can we explain this demographic shift?
              <br/>
              <br/>
              During my research, I have found that the answer points back to the popularization of the personal computer 
              and how it was mainly marketed towards boys. In contrast, parents were encouraged 
              to purchase dolls and easy bake ovens for their daughters. We will ponder, in this curator
              project, how sexist social ideology uses free-market
              capitalism to keep women from accessing top-earning positions all the while forcing them to perform
              unpaid labor such as within the domestic unit.
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
              The image to the left is a photograph from 1969 of Margaret Hamilton. 
              She and her team were in charge of writing all of the assembly code for the Apollo 11 mission. 
              The photograph shows her standing with the software created for the iconic space expedition.
              The original source <a href="https://github.com/chrislgarry/Apollo-11">code</a> can be found on Github.
              <br/>
              <br/>
              Women such as Hamilton pioneered the software industry as we know it.
              From performing the calculations themselves to manually writing command sheets and
              making it possible for humans to program with keyboards and a screen, women made computer programming
              into the high-status career it is today. For example, Grace Hopper is recognized for creating the first compiler
              in 1952 and Mary Allen Wilkes was one of the first human beings to
              have a computer in her home, as she had been tasked with writing software to make it programmable with a keyboard.
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
                To the left is a commercial for an easy bake oven from 1981. A girl is enjoying using the product
                and is subsequently joined by her mother and sister.
                This multigenerational female cast solidifies the message that this product is intended for women only.
                I chose this commercial to show you an example of an ad sending a sexist message, one that women belong
                in the kitchen not men. Advertisements such as this one and many like it, consistently bombarded
                growing women for decades with the idea that domestic labor is the epitome for women.
                <br/>
                <br/>
                This ad contrasts with the next one by Apple, where Brian Scott, a boy, dreams of becoming an astronaut
                and needs an Apple computer to help him achieve his goals.
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
              In this commercial, Brian Scott is given strong
              intellectual ambitions such as wanting to become an astronaut and then a marine biologist. 
              Brian's unbounded ambition can only be supported by the product being advertised.
              <br/>
              <br/>
              Begining in the 1980s to this day, advertisements for computers posess a similar redundant masculine
              protagonist, sidelining girls and perpetuating the illusion that technology is masculine.
              For example, in the commercial, Brian teases one of his classmates, 
              a girl, and messes with her Apple computer while she isn't looking.
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
              As you can see the gender gap widens in 1985 for the first time and again in 1995.
              It is important to keep in mind that the Computer Science Bachelor 
              may not have been popular in the early days of computing, so this plot starts in 1970.
              However, advertisements in the 70s and 80s may have deterred more women from even considering the major in later 
              <a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_325.35.asp?current=yes"> decades</a>.
              <br/>
              <br/>
              What does this demographic shift tell us about American Capitalism?
              From my research, women were more prevalent in computer programming when
              it was unpopular and underfunded. The uptick in the use of software and its 
              growing central role in the American economy made it an attractive profession
              for men. There are 
              <a href="https://www.aauw.org/resources/research/the-stem-gap/"> studies </a> and 
              <a href="https://www.theatlantic.com/science/archive/2018/02/the-more-gender-equality-the-fewer-women-in-stem/553592/"> articles </a> that illustrate how labor
              is gendered. This is in fact detrimental to a productive economy seeing as there is
              a labor shortage. How can we explain this contradiction to the philosophical core of Capitalism?
              </div>
          </div>
        
      </div>

    </div>
  );
}

export default App;
