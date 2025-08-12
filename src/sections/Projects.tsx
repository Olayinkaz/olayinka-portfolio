import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projectsData = [
    {
      image: '/projects/project1.png',
      projectName: 'Treepz',
      projectLink: 'https://treepz.com/',
      projectDescription:
        'A corporate mobility and travel platform that streamlines transportation and travel solutions across Africa. A management interface to monitor trips, vehicles, and passenger movements.',
      projectTech: ['React', 'Tailwind', 'Typescripts', 'Next.js', 'Node.js'],
      projectExternalLinks: {
        github: '',
        externalLink: 'https://treepz.com/',
      },
    },
    {
      image: '/projects/project2.png',
      projectName: 'Football Fantacy App',
      projectLink: 'https://www.footballfury.net/',
      projectDescription:
        'A football fantacy app where users interacts, pick their favourite teams and players, and earn points and prizes based on their team and selected players performance.',
      projectTech: ['React', 'REST API', 'Bootstrap', 'Typescripts','Node.js'],
      projectExternalLinks: {
        github: '',
        externalLink: 'https://www.footballfury.net/',
      },
    },
    {
      image: '/projects/project3.png',
      projectName: 'Shopsy',
      projectLink: 'https://olayinkaz.github.io/shopsy/',
      projectDescription:
        'The Shopsy project is an e-commerce website designed to provide users with a seamless online shopping experience.',
      projectTech: ['React', 'Node.js', 'Tailwind', 'Typescripts', 'Next.js'],
      projectExternalLinks: {
        github: '',
        externalLink: 'https://olayinkaz.github.io/shopsy/',
      },
    },
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                      onClick={() => window.open(projectLink, '_blank')}
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <Github />
                      </Link>
                    </motion.li>
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
