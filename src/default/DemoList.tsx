import {ReactNode} from "react";
import {default as Home} from '../Home';
import {default as Base} from '../umchat/base';
import {default as Absolute} from '../umchat/absolute';
import {default as VoiceControl} from '../umchat/voiceControl';
import GenerateUserId from "../umchat/generateUserId";
import IsSavedData from "../umchat/isSavedData";
import Theme from "../umchat/theme";

interface IDemoList {
    path: string;
    title: string;
    demo?: ReactNode | null;
}

const demoList: IDemoList[] = [
    {
        path: '/',
        title: '',
        demo: <Home/>
    },
    {
        path: '/base',
        title: 'Base',
        demo: <Base/>
    },
    {
        path: '/absolute',
        title: 'Absolute position',
        demo: <Absolute/>
    },
    {
        path: '/voice-control',
        title: 'Voice control',
        demo: <VoiceControl/>
    },
    {
        path: '/theme',
        title: 'Custom theme',
        demo: <Theme/>
    },
    {
        path: '/userId',
        title: 'userId',
        demo: <GenerateUserId/>
    },
    {
        path: '/is-saved-data',
        title: 'saved data',
        demo: <IsSavedData/>
    },
];

export default demoList