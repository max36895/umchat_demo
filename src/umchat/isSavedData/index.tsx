import {UMChat} from "umchat";
import Base from '../../default/Base';
import {config} from "../../default/Config";

export default function isSavedData() {
    return (
        <Base>
            <UMChat config={config}
                    isSavedData={false}
                    panelTitle="Игра в снежки"/>
        </Base>
    );
}
