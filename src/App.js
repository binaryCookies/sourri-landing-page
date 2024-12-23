// import logo from './logo.svg';

import './App.css';


function smoothScrollToSection(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href').substring(1)
  const targetSection = document.getElementById(targetId)
  if(targetSection) {
    targetSection.scrollIntoView({behavior: 'smooth'})
  }

}




function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {/* <Cards /> */}
      <MainContent />
      <Footer />
    </div>
  );
}


function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className='nav-list'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a onClick={smoothScrollToSection} className='projects' href="#projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}






function Header() {
  return (
    <header className="App-header">
      <div className="react-logo-container">
        <img src="logo512.png" alt="React Logo" />
      </div>
      <h1 className="main-heading">SOURRI DATA PRODUCTS</h1>
    </header>
  );
}




function MainContent() {
   return (
    <main className="main">
      {/* Sidebar */}


      <div className="content">
        {/* Sidebar */}
        <div className="project-container" id='experience'>
          <h2>Under Construction</h2>
        </div>
      </div>
    </main>
  );
}




function Footer() {
  return (
    <footer className="footer">
      <p>Apache/2.4.52 (Ubuntu) Server at sourri.com</p>
      <p>&copy; {new Date().getFullYear()} Sourri. All rights reserved.</p>
    </footer>
  );
}




const cardProjects = document.querySelectorAll('.card-project');

cardProjects.forEach(card => {
  card.addEventListener('touchstart', function() {
    this.classList.add('active');

  });
  
  card.addEventListener('touchend', function() {
    this.classList.remove('active');
  });
});






export default App;
