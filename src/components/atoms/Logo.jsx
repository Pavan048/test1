import logoImg from '../../assets/logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logoImg} alt="Yaare Logo" className={styles.symbol} />
            YAARE
        </div>
    );
};

export default Logo;
