// import './navigation.scss';
"use client"
export default function Nav() {
    return (
        <div className="nav_container">
            <a>
                <img src='./ar_logo_color_nobg.svg'></img>
            </a>
            <ul className="nav_links">
                <li className="nav_item">Home</li>
                <li className="nav_item">Blog</li>
                <li className="nav_item">Porady</li>
                <li className="nav_item">Kontakt</li>
            </ul>
            <style jsx>{`
            .nav_container {
                min-width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }
            .nav_links {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

            }
            .nav_item {
                min-width: 100px;
            }
            img {
                width: 150px;
                height: 150px;
            }
          `}</style>
        </div>
    );
}