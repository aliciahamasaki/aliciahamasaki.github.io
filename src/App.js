
import './App.css';

function App() {
  return (

<div className="container">

<div className="navbar-wrapper">
<nav className="navbar navbar-expand navbar-light bg-light">
  <div id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#intro">Top</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>

    <div className="jumbotron">
     <h1 className="display-4" id="intro">Alicia Hamasaki</h1>
     <p className="lead" style={{fontSize: "25px"}}>Professional writer and editor turned developer.</p>
     <hr className="my-4"/>
     <p style={{fontStyle: "italic"}}>"I love it when functionality and design come together to create a visually appealing and interesting user experience."</p>
     <p className="lead">
     </p>
    </div>

    <div className="content">
      <h3 id="about">About me</h3>
      <p>
       Front-end developer, located in Tokyo, Japan. 
      </p>
      <p>
        Before I got into coding, I studied English Language and Literature at the Univeristy of Waterloo in Ontario, Canada. 
        After graduation, I mainly worked with travel magazines and websites (as Tokyo Editor for The Culture Trip and in-house writer for SkyTicket, to name a few) writing travel content about Japan.
        If you think this means I have impeccible spelling, proofreading and speed-reading skills, which definitely come in handy when writing code, you may be right. 
      </p>
      <p>
        Now, I'm a junior developer looking to hone my skills and work with a team to create something amazing. 
      </p>
    </div>
    <div className="projects">
      <h3 id="projects">Projects</h3>
      <p>
        I studied web development and design through the Hong Kong Univeristy of Science and Technology, Code Chrysalis (a coding bootcamp in Tokyo) as well as online educational resources like freeCodeCamp. 
        Here are a few of my projects I'd like to share with you.
      </p>
      <div className="container">
      <div className="row">
         <div className="col-lg-3">
           <div className="card">
             <img className="card-image-top" src="https://live.staticflickr.com/65535/51372816971_1cb089a881.jpg" alt="javascript calculator"></img>
             <div className="card-body">
               <h5 className="card-title">JavaScript Calculator</h5>
               <p className="card-text">A simple calculator, built with React and basic CSS.</p>
               <a href="https://codepen.io/aliciahamasaki/pen/mdmzmqj" class="btn btn-primary">Check it out</a>
             </div>
           </div>
        </div>
         <div className="col-lg-3">
           <div className="card">
             <img className="card-image-top" src="https://live.staticflickr.com/65535/51373054093_dca1b84402.jpg" alt="mini drum kit"></img>
              <div className="card-body">
               <h5 className="card-title">Drum Machine</h5>
               <p className="card-text">A mini drum kit, responds to both keystrokes and mouse clicks.</p>
               <a href="https://codepen.io/aliciahamasaki/pen/eYWLYyj" class="btn btn-primary">Check it out</a>
              </div>
            </div>
         </div>
         <div className="col-lg-3">
           <div className="card">
             <img className="card-image-top" src="https://live.staticflickr.com/65535/51395753032_d7807e4423.jpg" alt="pomodoro clock"></img>
              <div className="card-body">
               <h5 className="card-title">25 and 5 Clock</h5>
               <p className="card-text">A "pomodoro" clock designed to increase your productivity.</p>
               <a href="https://codepen.io/aliciahamasaki/pen/GRmagYz" class="btn btn-primary">Check it out</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
           <div className="card">
             <img className="card-image-top" src="https://live.staticflickr.com/65535/51397538365_5b9a2d63e4.jpg" alt="random quote generator"></img>
              <div className="card-body">
               <h5 className="card-title">Random Quote Generator</h5>
               <p className="card-text">Click for a new random quote whenever you want.</p>
               <a href="https://codepen.io/aliciahamasaki/pen/QWvrGMg" class="btn btn-primary">Check it out</a>
              </div>
            </div>
         </div>
      </div>
      </div>
    </div>

    <footer><p>Ⓒ Alicia J. S. H. 2021</p></footer>
    
   

  </div>
  );
}

export default App;
