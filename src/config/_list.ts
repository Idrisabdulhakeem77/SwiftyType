import * as actions from '../slice/config'
import languages from "../languages/_list";
import themes from '../themes/_list'


interface ConfigItems {
    command: string,
    action: (arg: any) => any
    options: (string | number)[]
}



const config: { [index: string]: ConfigItems } = {
    mode: {
        command: 'mode',
        options: ['time', 'words', 'zen'],
        action: actions.setMode,
    },
}


export default config












