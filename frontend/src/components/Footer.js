import { useTranslation } from 'react-i18next';
import '../styles/footer.scss';
import logo from '../assets/portfolio-logo.png';

export default function Footer() {

    const { t } = useTranslation();

    return (
    <footer>
        <img src={logo} alt="logo" />
        <p>© 2024 Maxime Videau Penez.<br /> {t("footer_text")}</p>
    </footer>
    );
} 