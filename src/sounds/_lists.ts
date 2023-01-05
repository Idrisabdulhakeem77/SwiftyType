interface Sounds {
    [index: string]: {
        url: string,
        sprite: {
            [index: string]: [number, number]
        }
    }
}

const sounds: Sounds = {
    'click': {
        url: 'click.wav',
        sprite: {
            0: [0, 18.707482993197278],
            1: [2000, 18.684807256236002],
            2: [4000, 18.68480725623556],
        },
    },
    'beep': {
        url: 'beep.wav',
        sprite: {
            0: [0, 115.01133786848072],
            1: [2000, 115.01133786848072],
            2: [4000, 115.01133786848072],
        },
    },
    'pop': {
        url: 'pop.wav',
        sprite: {
            0: [0, 38.88888888888889],
            1: [2000, 38.88888888888875],
            2: [4000, 38.88888888888875],
        },
    },
    'nk creams': {
        url: 'nk-creams.wav',
        sprite: {
            0: [0, 205.78231292517006],
            1: [2000, 158.68480725623567],
            2: [4000, 164.3083900226756],
            3: [6000, 174.87528344671244],
            4: [8000, 164.3083900226756],
            5: [10000, 166.62131519274402],
            6: [12000, 205.78231292516946],
            7: [14000, 158.68480725623613],
            8: [16000, 164.3083900226756],
            9: [18000, 174.87528344671333],
            10: [20000, 164.3083900226756],
            11: [22000, 166.62131519274226],
        },
    },
    'typewriter': {
        url: 'typewriter.wav',
        sprite: {
            0: [0, 232.56235827664398],
            1: [2000, 229.29705215419506],
            2: [4000, 261.224489795918],
            3: [6000, 255.41950113378675],
            4: [8000, 301.85941043083983],
            5: [10000, 321.08843537415055],
            6: [12000, 232.56235827664364],
            7: [14000, 229.2970521541946],
            8: [16000, 261.224489795918],
            9: [18000, 255.41950113378675],
            10: [20000, 301.85941043083983],
            11: [22000, 321.08843537415055],
        },
    },
    'osu': {
        url: 'osu.wav',
        sprite: {
            0: [0, 132.06349206349208],
            1: [1999.9999999999998, 132.063492063492],
            2: [3999.9999999999995, 132.06349206349222],
            3: [6000, 132.06349206349176],
            4: [8000, 132.06349206349267],
            5: [10000, 132.06349206349267],
        },
    },
    'hitmarker': {
        url: 'hitmarker.wav',
        sprite: {
            0: [0, 63.12925170068028],
            1: [2000, 63.129251700680285],
            2: [4000, 63.129251700679845],
            3: [6000, 63.129251700679845],
            4: [8000, 63.129251700679845],
            5: [10000, 63.129251700679845],
        },
    },
};

export default sounds;