import {UMChat} from "umchat";
import Base from '../../default/Base';
import {config} from "../../default/Config";

export default function Absolute() {
    return (
        <Base>
            <UMChat config={config}
                    className="UMChat_absolute"
                    panelTitle="Игра в снежки"/>
        </Base>
    );
}
