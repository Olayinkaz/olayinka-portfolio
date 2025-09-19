import { Github, Instagram, Twitter } from 'lucide-react';

function SocialIcons() {
  const socialLinks = [
    { name: 'Github', icon: <Github />, link: 'https://github.com/Olayinkaz' },
    { name: 'X(Twitter)', icon: <Twitter />, link: 'https://x.com/AfiriNomo' },
    { name: 'Instagram', icon: <Instagram />, link: 'https://www.instagram.com/layinx_/' },
  ];

  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
