import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';

interface AboutText {
  intro: string;
  experience: string;
}

const mobileText: AboutText = {
  intro:
    'Hey there! I\'m Olayinka Abdulazeez, a Frontend Developer passionate about web programming and user experience.',
  experience:
    ' ',
};

const desktopText: AboutText = {
  intro:
    'Hey there! I\'m Olayinka Abdulazeeez, Passionate Web Developer with experience in crafting modern, responsive, and high-performing websites. Skilled in HTML, CSS, JavaScript, React, Angular, Tailwind CSS, and TypeScript, with a solid understanding of backend integration. I thrive in collaborative environments, enjoy solving complex problems, and continuously expand my technical expertise to stay ahead in the ever-evolving tech space. Open to opportunities where I can create impactful digital solutions and contribute to innovative projects.',
  experience:
    'Currently employed at Basira Logistics where i develop and maintain web applications, ensuring optimal performance and user experience. I have a strong foundation in both frontend and integrating backend technologies, allowing me to build full-stack solutions that meet business needs.',
};
// List of technologies
// that the user has worked with

const technologies = [
  'Node.js',
  'Express.js',
  'MongoDB',
  'Next.js',
  'NestJS',
  'TypeScript',
  'Azure',
  'PostgreSQL',
  'React.js',
  'Angular',
  'React Native',
  'Docker',
  'Gitlab',
  'Git',
  'Restful API',
];

const variants = {
  visible: { opacity: 1, y: -50 },
  hidden: { opacity: 0, y: 0 },
};

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <motion.div
      className="about pt-[150px] md:pt-[250px]"
      id="about"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify text-base md:text-lg leading-relaxed">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify text-base md:text-lg leading-relaxed indent-4">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            {technologies.map((tech) => (
              <li key={tech} className="about-grid-info-list-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/etc/image.jpg"
              alt="Olayinka Abdulazeez - DevOps & Full Stack Developer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              objectFit="cover"
              className="rounded-lg"
              aria-label="Profile picture of Olayinka Abdulazeez"
            /> 
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
