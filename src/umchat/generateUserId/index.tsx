import {UMChat, getUserId, ICards} from "umchat";
import Base from '../../default/Base';
import {config as defaultConfig} from "../../default/Config";

export default function GenerateUserId() {
    const config = {...defaultConfig};
    config.url = 'https://www.maxim-m.ru/bot/skills/never.php';
    config.userId = getUserId(true);
    config.dataHandlers = {
        setData: (data: ICards[]) => {
            localStorage.setItem('demo_skill', JSON.stringify(data));
        },
        getData: (): ICards[] => {
            const data = localStorage.getItem('demo_skill');
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
    }
    return (
        <Base>
            <UMChat config={config}
                    panelTitle="Я никогда не"/>
        </Base>
    );
}
