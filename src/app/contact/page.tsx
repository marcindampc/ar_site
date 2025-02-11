import styles from "./contact.module.scss";

export default function Contact() {
  const email = 'napisz@architektrodziny.pl';
  const subject = encodeURIComponent('Pytanie');
  const body = encodeURIComponent('Cześć, ...');
  const fbUrl = 'https://www.facebook.com/architektrodziny';

  return (
    <div>
      <h1>Contact Us</h1>
      <p>on 
        <a href={`${fbUrl}`} target="_blank">
          Facebook
        </a>
      </p>
      <p className={styles.mailto}>
        You can reach us at{' '}
        <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
          {email}
        </a>
      </p>
    </div>
  );
}
