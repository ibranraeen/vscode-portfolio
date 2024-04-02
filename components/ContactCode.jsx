import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'coming soon',
  },
  {
    social: 'email',
    link: 'ibranraeen1@gmail.com',
    href: 'ibranraeen1@gmail.com',
  },
  {
    social: 'github',
    link: 'ibranraeen',
    href: 'https://github.com/ibranraeen',
  },
  {
    social: 'linkedin',
    link: 'ibranraeen',
    href: 'https://www.linkedin.com/in/ibranraeen/',
  },
  {
    social: 'twitter',
    link: 'ibranraeen1',
    href: 'https://twitter.com/ibranraeen1',
  },
  {
    social: 'instagram',
    link: 'ibranraeen1',
    href: 'https://www.instagram.com/ibranraeen1/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
