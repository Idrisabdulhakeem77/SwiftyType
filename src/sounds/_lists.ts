interface Sound {
    [index: string]: {
        url: string,
        spirite: {
            [index: string]: [number, number]
        }
    }
}


const sounds: Sound = {
    'click': {
        url: 'click.wav',
        spirite: {
            0: [0, 18.707482993197278],
            1: [2000, 18.684807256236002],
            2: [4000, 18.68480725623556],
        }
    }
}


export default sounds