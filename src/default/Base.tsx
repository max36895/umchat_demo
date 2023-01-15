import {ReactElement} from 'react';
import {Link} from "react-router-dom";
import './base.css';

interface IBaseProps {
    children: ReactElement;
}

export default function Base(props: IBaseProps) {
    return <div>
        <div className="Home"><Link to='/'>&lt; Home</Link></div>
        <div className="Content">{props.children}</div>
    </div>
}