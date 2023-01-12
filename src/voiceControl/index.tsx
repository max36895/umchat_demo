import {UMChat} from "umchat";
import Nav from '../default/Nav';
import {config} from "../default/Config";

export default function App() {
    return (
        <div className="App">
            <Nav/>
            <UMChat config={config}
                    isVoiceControl={false}
                    panelTitle="Игра в снежки"/>
        </div>
    );
}