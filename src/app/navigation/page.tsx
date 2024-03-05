import './navigation.scss';
import Link from "next/link";

export default function Nav() {
    return (
        <div className="nav_container">
            <a>
                <img src='./ar_logo_color_nobg.svg'></img>
            </a>
            <ul className="nav_links">
                <Link href='/' className="nav_item">Home</Link>
                <Link href='/blog' className="nav_item">Blog</Link>
                <Link href='/poradniki' className="nav_item">Poradniki</Link>
                <Link href='/kontakt' className="nav_item">Kontakt</Link>
            </ul>
        </div>
    );
}