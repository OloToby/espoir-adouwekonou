import React, { useEffect, useState } from 'react';
// Importe les données du CV depuis le nouveau fichier
import cvData from './data/cvData'; 
// Importe votre photo de profil locale
import myProfilePic from './assets/profil.jpg'; // Assurez-vous que ce chemin est correct pour votre photo

// C'est une bonne pratique de découper les composants plus grands
// en composants plus petits et réutilisables (par exemple, ExperienceSection, ProjectsGrid, etc.).
// Cela rend le code plus facile à lire et à maintenir.

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scroll and update active section in navigation
  const handleScroll = () => {
    // Ordre des sections mis à jour comme demandé: Accueil, Expériences, Projets, Réalisations, Compétences, Éducation, Contact
    const sections = ['home', 'experience', 'projects', 'achievements', 'skills', 'education', 'contact'];
    let currentActive = 'home';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Determine active section if its top is within 30% of the viewport height
        if (rect.top <= window.innerHeight * 0.3) {
          currentActive = sections[i];
          break;
        }
      }
    }
    setActiveSection(currentActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-100 font-inter relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 shadow-lg
                      bg-gradient-to-br from-gray-900 to-indigo-950
                      md:top-1/2 md:left-auto md:right-4 md:transform md:-translate-y-1/2 md:w-auto
                      md:rounded-xl md:flex md:flex-col md:gap-3 md:p-6 md:shadow-xl md:border-l md:border-indigo-700
                      ">
        <ul className="flex justify-around md:flex-col md:gap-3">
          {/* Ordre des sections dans la navigation mis à jour */}
          {['home', 'experience', 'projects', 'achievements', 'skills', 'education', 'contact'].map((sectionId) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(sectionId); // Update active state immediately on click
                }}
                className={`flex items-center justify-center md:justify-start gap-2 py-2 px-3 rounded-lg transition-all duration-300
                  ${activeSection === sectionId ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-indigo-800 hover:text-white'}`}
                aria-label={`Aller à la section ${
                  sectionId === 'home' ? 'Accueil' :
                  sectionId === 'experience' ? 'Expérience' :
                  sectionId === 'projects' ? 'Projets' :
                  sectionId === 'achievements' ? 'Réalisations' : // Libellé pour les réalisations
                  sectionId === 'skills' ? 'Compétences' :
                  sectionId === 'education' ? 'Éducation' : 'Contact'
                }`}
              >
                {sectionId === 'home' && <i className="fas fa-home md:text-xl"></i>}
                {sectionId === 'experience' && <i className="fas fa-briefcase md:text-xl"></i>}
                {sectionId === 'projects' && <i className="fas fa-code md:text-xl"></i>}
                {sectionId === 'achievements' && <i className="fas fa-trophy md:text-xl"></i>} {/* Icône pour les réalisations */}
                {sectionId === 'skills' && <i className="fas fa-cogs md:text-xl"></i>}
                {sectionId === 'education' && <i className="fas fa-graduation-cap md:text-xl"></i>}
                {sectionId === 'contact' && <i className="fas fa-envelope md:text-xl"></i>}
                {/* Text label hidden on small screens, shown on medium and larger screens */}
                <span className="hidden md:inline capitalize">
                  {sectionId === 'home' ? 'Accueil' :
                  sectionId === 'experience' ? 'Expérience' :
                  sectionId === 'projects' ? 'Projets' :
                  sectionId === 'achievements' ? 'Réalisations' : // Nouveau libellé pour les réalisations
                  sectionId === 'skills' ? 'Compétences' :
                  sectionId === 'education' ? 'Éducation' : 'Contact'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="min-h-screen mx-auto py-10 px-4 md:py-20 md:pr-48 md:pl-6 pt-20 max-w-full md:max-w-7xl">
        {/* Home Section */}
        <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center py-12 md:py-24 animate-fade-in">
          <img
            src={myProfilePic} // Utilise l'image importée ici
            alt="Photo de profil d'Espoir ADOUWEKONOU"
            className="w-44 h-44 rounded-full object-cover shadow-xl border-4 border-indigo-500 mb-6 transition-transform hover:scale-105 duration-300"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
            {cvData.name}
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300 font-semibold mb-6">
            {cvData.title}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
            {cvData.profile}
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a
              href={`mailto:${cvData.contact.email}`}
              className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i> Contactez-moi
            </a>
            <a
              href={`https://github.com/${cvData.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            {/* Ajout du bouton LinkedIn ici */}
            {cvData.contact.linkedinFullUrl && (
              <a
                href={cvData.contact.linkedinFullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Expérience Professionnelle</h2>
          <div className="space-y-8">
            {cvData.experience.map((job, index) => (
              <div key={index} className="bg-indigo-900 p-6 rounded-xl shadow-lg border border-indigo-700 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-1">{job.title}</h3>
                <p className="text-gray-400 text-lg mb-2">{job.company} — <span className="font-light">{job.duration}</span></p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Projets de Développement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvData.projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-indigo-900 p-6 rounded-xl shadow-lg border border-indigo-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-semibold text-indigo-300 mb-2 group-hover:text-white transition-colors duration-300">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <span className="text-indigo-400 group-hover:text-white flex items-center gap-1 transition-colors duration-300">
                  Voir le projet <i className="fas fa-arrow-right text-sm"></i>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        {cvData.achievements && cvData.achievements.length > 0 && (
          <section id="achievements" className="py-12 md:py-24">
            <h2 className="text-4xl font-bold text-center text-white mb-10">Réalisations & Reconnaissances</h2>
            <div className="space-y-8">
              {cvData.achievements.map((achievement, index) => (
                <div key={index} className="bg-indigo-900 p-6 rounded-xl shadow-lg border border-indigo-700 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-indigo-300 mb-1">{achievement.title}</h3>
                  <p className="text-gray-400 text-lg mb-2">
                    {achievement.organization} {achievement.date && `— ${achievement.date}`}
                  </p>
                  <p className="text-gray-300">{achievement.description}</p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-white flex items-center gap-1 mt-3 transition-colors duration-300"
                    >
                      En savoir plus <i className="fas fa-external-link-alt text-sm"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { category: 'Frontend & UI', skills: cvData.skills.frontend },
              { category: 'Back-end / BaaS', skills: cvData.skills.backend },
              { category: 'DevOps & Outils', skills: cvData.skills.devops },
              { category: 'Data & IA', skills: cvData.skills.data_ai },
              { category: 'PLM & Autres', skills: cvData.skills.plm_other },
              { category: 'Product & Soft Skills', skills: cvData.skills.product_soft },
              { category: 'Marketing & Communication', skills: cvData.skills.marketing_communication }, // Nouvelle catégorie affichée
            ].map((skillGroup, index) => (
              <div key={index} className="bg-indigo-900 p-6 rounded-xl shadow-lg border border-indigo-700">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-4">{skillGroup.category}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-indigo-400"></i> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-24">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Éducation</h2>
          <div className="space-y-8">
            {cvData.education.map((edu, index) => (
              <div key={index} className="bg-indigo-900 p-6 rounded-xl shadow-lg border border-indigo-700 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-1">{edu.degree}</h3>
                <p className="text-gray-400 text-lg mb-2">{edu.school} — <span className="font-light">{edu.duration}</span></p>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">Contactez-moi</h2>
          <p className="text-lg text-gray-300 mb-6">Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter !</p>
          <div className="flex flex-col items-center gap-4 text-xl">
            <a href={`mailto:${cvData.contact.email}`} className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
              <i className="fas fa-envelope"></i> {cvData.contact.email}
            </a>
            <a href={`tel:${cvData.contact.phone.replace(/\s/g, '')}`} className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
              <i className="fas fa-phone-alt"></i> {cvData.contact.phone}
            </a>
            <a href={`https://${cvData.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
              <i className="fas fa-globe"></i> {cvData.contact.website}
            </a>
            <a href={`https://github.com/${cvData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
              <i className="fab fa-github"></i> {cvData.contact.github}
            </a>
            {/* Affichage du lien LinkedIn dans la section Contact */}
            {cvData.contact.linkedinFullUrl && (
              <a href={cvData.contact.linkedinFullUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm border-t border-gray-700 mt-12">
        <p>&copy; {new Date().getFullYear()} {cvData.name}. Tous droits réservés.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mentions légales</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Politique de confidentialité</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
