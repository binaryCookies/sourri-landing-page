// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';





function App() {
  const textElements = [
    "Welcome to Sourri.com, your portal to innovation and creativity! While this site serves as a placeholder for our forthcoming project, we're thrilled to provide you with an exclusive preview of what's on the horizon at staging.sourri.com. Stay tuned as we prepare to unveil an immersive experience that promises to redefine your interactions with technology and design.",
    "Welcome to my demonstration page showcasing my success in setting up web servers and hosting websites.",
    "Experience seamless browser automation tailored to your specific needs.",
    "Discover the power of Census, a comprehensive data management solution designed to streamline your workflow and enhance productivity.",
    "Revolutionize your marketing strategy with our cutting-edge service, offering up-to-date lists of commercial and residential targets nationwide. Reduce mailing costs and maximize your ROI.",
    "Unlock the potential of our custom map API, providing visually stunning boundary and point visualizations for over 14,000,000 unique data points and 28,000,000 addresses.",
    "Background: As the creator of unique market intelligence solutions for commercial real estate, we specialize in parsing XML, GIS mapping, delineating boundaries for any city nationwide, and expert database engineering and system design.",
    "Latest Achievement: Successfully migrated the project to the web server and implemented a tunnel to listen to the port, enabling seamless integration with the Visual Studio Code editor."
  ];

  const textBullets = [
    "Initial Setup: Installed Ubuntu on the server. Configured the initial system settings, including the hostname",
    "System Updates: Ran system updates to ensure your server's software is up-to-date",

    "GeoJson",
    "Browser automation: automate login, testing, data extraction",
    "GIS custom maping and visualizations",
    "XML - GML: parsing large data files",
    "Database",
    "Server Provisioning: SSH, Firewall, and DNS config, SSL certificates, Log management, Docker, GitHub integration, Domain managment",
    "SDMX Integration:  ISO standard designed to describe statistical data and metadata, normalise their exchange",
    "System design",
    "Git",
    "GitHub Integration: Integrated your server with GitHub to collaborate on code development",
    "Web Server (Apache): Installed and configured the Apache web server. Created virtual hosts to host multiple websites",
    "Web Hosting: sourri.com, forkify.sourri.com, natours.sourri.com",
    "PubSub Patterns",
    "Tunneling",
    "SSH Configuration: Configured SSH for secure remote access to the server. Generated SSH key pairs for secure logins",
    "Firewall Configuration: Set up and configured a firewall (using UFW) to control incoming and outgoing network traffic. Opened necessary ports for services like HTTP, HTTPS, and SSH. Implemented rules to enhance server security",
    "DNS Configuration: Registered a domain name for your server. Configured DNS settings to point to the domain to your server's IP address",
    "SSL Certificate (Let's Encrypt): Installed SSL certificates to enable secure HTTPS connections for the websites",
    "Log Management: Configured log rotation to manage log files efficiently. Scheduled log rotation to keep log files from consuming too much disk space",
    "User Access Control: Set up user groups with different access levels. Assigned permissions and access rights to users based on their roles (admin, user, etc.)",
    "Docker and Docker Compose: Installed Docker to manage containers. Used Docker Compose to define multi-container applications",
    "Domain Management: Managed DNS records for your domain name"
  ]

  return (
    <div className="App">
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header className="App-header">
      <div className="react-logo-container">
              <img src="logo512.png" alt="React Logo" />
            </div>
        <h1 className="main-heading">SOURRI DATA PRODUCTS</h1>
      </header>
      <p>A full stack data-driven web application requiring the following skills to build.</p>
      <div className='p-text'>

<TextRenderer  textElements={textBullets} />
      </div>

     


 
      <main className="main">


  <div className="content">
    <aside className='aside'>

      {/* Sourri Project Highlights (skills section) */}
      <h2>Project highlights</h2>
      <div className="project-highlights">
        <section className="highlight-section">
          <h3>SDMX Integration for Census Data:</h3>
          <ul>
            <li>Seamlessly integrated the SDMX API for accessing and retrieving census data.</li>
            <li>Implemented robust data fetching mechanisms to handle large datasets efficiently.</li>
            <li>Utilized SDMX global standards for data exchange and interoperability, ensuring compatibility and consistency.</li>
          </ul>
      </section>
      
      <section className="highlight-section">
        <h3>Parsing XML/GML:</h3>
        <ul>
          <li>Tackled the challenge of parsing XMLGML data, a large and complex data format.</li>
          <li>Developed custom parsers to extract relevant information and transform it into GeoJSON format.</li>
          <li>Leveraged Node.js and JavaScript libraries to streamline the parsing and conversion process.</li>
        </ul>
      </section>
      
      <section className="highlight-section">
        <h3>Rendering Data to a Map:</h3>
        <ul>
          <li>Leveraged the power of Mapbox for dynamic and interactive data visualization.</li>
          <li>Developed boundary visualizations for census districts, enabling users to explore demographic data with ease.</li>
          <li>Integrated GeoJSON data with Mapbox to create visually stunning and informative map displays.</li>
        </ul>
      </section>
      
      <section className="highlight-section">
        <h3>Setting Up Mapbox:</h3>
        <ul>
          <li>Configured and customized Mapbox settings to suit project requirements.</li>
          <li>Established seamless integration between backend data sources and Mapbox frontend interfaces.</li>
          <li>Implemented advanced mapping features such as clustering, heatmaps, and custom overlays for enhanced user experience.</li>
        </ul>
      </section>
    </div>
    </aside>

{/* Previous Projects Section */}
  <article className='article'>       
  <h2>Exemplary projects</h2>
<ul className="link-list">
<li>
  <a href="http://natours.sourri.com" target="_blank" rel="noreferrer">
    <div className="card-project" onClick={() => window.open('http://natours.sourri.com', '_blank')}>
      Natours
      <p className='projects'>Advanced CSS and Sass.</p>
    </div>
  </a>
</li>
<li>
  <a href="http://forkify.sourri.com" target="_blank" rel="noreferrer">
    <div className="card-project" onClick={() => window.open('http://forkify.sourri.com', '_blank')}>
      Forkify
      <p className='projects'>Pure JavaScript.</p>
    </div>
  </a>
</li>

<li>
  <a href="https://node-express-app-i22v.onrender.com/" target="_blank" rel="noreferrer">
    <div className="card-project" onClick={() => window.open('https://node-express-app-i22v.onrender.com/', '_blank')}>
      Node App 
      <p className='projects'>Server side focus</p>
    </div>
  </a>
</li>
</ul>
  </article>


        <div className="text-content">
              <TextRenderer textElements={textElements} />
            </div>
</div>

            
      </main>

      <footer className="footer">
        <p>Apache/2.4.52 (Ubuntu) Server at sourri.com Port 443</p>
        <p>&copy; {new Date().getFullYear()} Sourri. All rights reserved.</p>
      </footer>
    </div>
  );
}




function TextRenderer({ textElements }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % textElements.length);
    }, 5000); // Change interval duration as needed

    return () => clearInterval(intervalId);
  }, [textElements.length]);

  return (
    <div className='left-column'>
      <div className='text-container'>

        <p>{textElements[currentIndex]}</p>
      </div>
    </div>
  );
}







export default App;
