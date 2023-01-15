import {UMChat} from "umchat";
import Base from '../../default/Base';
import {config} from "../../default/Config";

export default function voiceControl() {
    return (
        <Base>
            <UMChat config={config}
                    isVoiceControl={false}
                    panelTitle="Игра в снежки"/>
        </Base>
    );
}
