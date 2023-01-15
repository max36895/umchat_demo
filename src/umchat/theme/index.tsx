import {UMChat} from "umchat";
import Base from '../../default/Base';
import {config} from "../../default/Config";
import './theme.css'

export default function Theme() {
    return (
        <Base>
            <UMChat config={config}
                    theme="custom"
                    panelTitle="Custom theme"/>
        </Base>
    );
}
