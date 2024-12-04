import React from 'react';
import profilePicture from '../images/mahdi.png';
import './App.css';

const IndexPage = () => {
  return (
    <div class="container">
    <header>
      <div class="profile-header">
        <div class="profile-info">
          <h1>Mahdi SELMANI</h1>
          <p>Développeur Full Stack JS/JAVA</p>
          <p>+216 56 40 01 69</p>
          <p>selmani.mahdi@outlook.fr</p>
          <p>El Aouina 2045, Tunis, Tunisie</p>
          <p>Linkedin: <a href="https://linkedin.com/selmanimahdi" target="_blank">linkedin.com/selmanimahdi</a></p>
        </div>
        <div class="profile-photo">
          <img src={profilePicture} alt="Mahdi SELMANI"/>
        </div>
      </div>
    </header>

    <section class="about">
      <h2>A propos</h2>
      <p>Développeur logiciel, avec une expertise en résolution de problèmes complexes et en développement de solutions innovantes. Je maatrise des technologies telles que React, Node.js, Java, et Angular. Reconnu pour mon travail en ´equipe et mon approche cr´eative, je suis passionn´e par l’innovation technologique et l’apprentissage continu.</p>
    </section>

    <section class="education">
      <h2>Formation</h2>
      <div class="entry">
        <div class="details">
          <p><strong>Institut supérieur d’informatique - Ariana</strong><br/><i>Master professionnel, Logiciels Libres</i></p> 
        </div>
        <div class="date">2023 - 2025</div>
      </div>
    </section>

    <section class="languages">
      <h2>Langues</h2>
      <ul>
        <li><strong>Français:</strong> Courant</li>
        <li><strong>Anglais:</strong> Intermédiaire</li>
        <li><strong>Arabe:</strong> Langue maternelle</li>
      </ul>
    </section>

    <section class="skills">
      <h2>Compétences</h2>
      <ul>
        <li><strong>Languages:</strong> JavaScript, TypeScript, Java, Python, Scala, SQL</li>
        <li><strong>Front-End:</strong> HTML5, CSS3, Bootstrap, React.js, Angular</li>
        <li><strong>Back-End:</strong> Express, Node.js, Spring, Spring Boot</li>
        <li><strong>Desktop:</strong> JavaFX</li>
        <li><strong>DBMS:</strong> MongoDB, Oracle, MySQL</li>
        <li><strong>Plateformes:</strong> Amazon AWS, MS Azure</li>
        <li><strong>Outils:</strong> OOP, SOLID Principles, Visual Studio Code, Spring Tool Suite (STS), Jira, Git, SonarQube</li>
        <li><strong>DevOps:</strong> Jenkins, Docker</li>
        <li><strong>Soft Skills:</strong> Envie d’apprendre, Résolution des problèmes, Travail en équipe, Créativité, Polyvalence, Travail sous pression</li>
      </ul>
    </section>

    <section class="experience">
      <h2>Experience</h2>
      <div class="entry">
        <div class="details">
        <p><strong>Vermeg for Banking & Insurance Software</strong><br/><i>Programmeur de logiciels</i></p>
        </div>
        <div class="date">2023 - Présent</div>
      </div>
    </section>
    <section class="projects">
      <h2>Références</h2>
        <p>Sur demande.</p>        
    </section>
  </div>
  );
};

export default IndexPage;
