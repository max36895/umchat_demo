import {Link} from "react-router-dom";
import './nav.css';

function getActiveClass(to: string): string {
    const link = document.location.pathname;
    if (to === link) {
        return ' active';
    }
    return '';
}

export default function Nav() {
    const links = [
        {path: '/', title: 'base'},
        {path: '/absolute', title: 'absolute'},
        {path: '/voiceControl', title: 'voiceControl'}
    ];
    return <ul className="Nav">
        {
            links.map((link, index) => (
                <li key={index}>
                    <Link className={'Nav_item' + getActiveClass(link.path)} to={link.path}>{link.title}</Link>
                </li>
            ))
        }
    </ul>
}