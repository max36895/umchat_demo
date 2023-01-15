import {UMChat} from "umchat";
import Base from '../../default/Base';
import {config} from "../../default/Config";

export default function _() {
    return (
        <Base>
            <UMChat config={config}
                    panelTitle="Игра в снежки"/>
        </Base>
    );
}
