import React from 'react';
import DemoList from "./default/DemoList";
import {Link} from "react-router-dom";
import './home.css';

export default function Home() {
    return <div className="demo_items">
        {
            DemoList.map((demo) => {
                if (demo.title) {
                    return <div className="demo_item"><Link to={demo.path}
                                                            className="demo_item-link">{demo.title}</Link></div>
                }
                return null;
            })
        }
    </div>;
}