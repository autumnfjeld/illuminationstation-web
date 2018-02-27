// import moods from '../static/constants.js';
/*
color in hsl
 */
const moodMap = {
    oops: {
        color1: [216,26, 80],
        color2: [171,171, 171],
        backgroundColor: 'hsl(0, 33%, 35%);',
        sphereSet: [
            { radius: 50,    pos: [33, 33],      color1:[0,28, 30],       color2: [3,57, 80],     trans: 99 },
            { radius: 60,    pos: [66, 33],     color1:[0,14, 40],       color2: [3,57, 80],     trans: 96 },
            { radius: 50,    pos: [33, 66],      color1:[0,26, 80],       color2: [3,57, 80],     trans: 99 },
            { radius: 60,    pos: [66, 66],     color1:[3,48, 27],       color2: [3,57, 80],     trans: 96 }
        ]
    },
    neutral: {
        color1: [216,26, 80],
        color2: [171,171, 171],
        backgroundColor: 'hsl(171, 171%, 171%);',
        sphereSet: [
            { radius: 50,    pos: [33, 50],      color1:[216,26, 80],       color2: [3,57, 80],     trans: 99 },
            { radius: 60,    pos: [66, 50],     color1:[3,57, 80],       color2: [3,57, 80],     trans: 96 }
        ]
    },
    soothing: {
        color1:[3,57, 80],
        color2: [251, 80, 65],
        backgroundColor:  'hsl(3, 57%, 80%);',
        sphereSet: [
            { radius: 50,    pos: [50, 0],      color1:[3,57, 80],       color2: [3,57, 80],     trans: 99 },
            { radius: 60,    pos: [100, 0],     color1:[3,57, 80],       color2: [3,57, 80],     trans: 96 },
            { radius: 40,    pos: [0, 10],      color1:[3,57, 80],       color2: [3,57, 80],     trans: 60 },
            { radius: 90,    pos: [40, 30],     color1:[251, 100, 55],    color2: [251, 80, 65],  trans: 30 },
            { radius: 90,    pos: [40, 40],     color1:[251, 90, 60],    color2: [251, 80, 65],  trans: 60 },
            { radius: 80,    pos: [40, 90],     color1:[251, 80, 65],    color2: [251, 80, 65],  trans: 80 },
            { radius: 50,    pos: [0, 100],     color1:[251, 80, 65],    color2: [251, 80, 65],  trans: 90 },
            { radius: 100,   pos: [70, 110],    color1:[251, 80, 65],    color2: [251, 80, 65],  trans: 50 }
        ],
    },
    party: {
        backgroundColor:  'hsl(3, 0%, 40%);',
        sphereSet: [
            { radius: 50,    pos: [50, 0],      color1:[251,100, 65],       color2: [3,57, 80],     trans: 99 },
            { radius: 60,    pos: [100, 0],     color1:[273,100, 80],       color2: [3,57, 80],     trans: 96 },
            { radius: 40,    pos: [0, 10],      color1:[ 40, 100, 80],       color2: [3,57, 80],     trans: 60 },
            { radius: 90,    pos: [40, 30],     color1:[110, 100, 55],    color2: [251, 80, 65],  trans: 30 },
            { radius: 90,    pos: [40, 40],     color1:[70, 100, 60],    color2: [251, 80, 65],  trans: 60 },
            { radius: 70,    pos: [40, 90],     color1:[50, 100, 65],    color2: [251, 80, 65],  trans: 80 },
            { radius: 50,    pos: [0, 100],     color1:[190, 100, 65],    color2: [251, 80, 65],  trans: 90 },
            { radius: 900,   pos: [70, 110],    color1:[3, 100, 65],    color2: [251, 80, 65],  trans: 50 }
        ],
    },
    artic: {
        backgroundColor:  'hsl(0, 0%, 90%);',
        sphereSet: [
            { radius: 50,    pos: [50, 0],      color1:[195,100, 65],       color2: [3,57, 80],     trans: 89 },
            { radius: 60,    pos: [100, 0],     color1:[190,100, 80],       color2: [3,57, 80],     trans: 96 },
            { radius: 40,    pos: [0, 10],      color1:[199, 100, 80],       color2: [3,57, 80],     trans: 60 },
            { radius: 90,    pos: [40, 30],     color1:[195, 80, 55],    color2: [251, 80, 65],  trans: 30 },
            { radius: 90,    pos: [40, 40],     color1:[200, 80, 60],    color2: [251, 80, 65],  trans: 60 },
            { radius: 80,    pos: [40, 90],     color1:[200, 100, 65],    color2: [251, 80, 65],  trans: 80 },
            { radius: 50,    pos: [0, 100],     color1:[195, 90, 65],    color2: [251, 80, 65],  trans: 90 },
            { radius: 50,   pos: [70, 110],    color1:[100, 0, 65],    color2: [251, 80, 65],  trans: 50 }
        ],
    }

};

class BackgroundSpheres {
    constructor(mood) {
        var validMood = Object.keys(moodMap).find( (m) => {
            return m === mood;
        });
        if (!validMood) {
            mood = 'oops';
            console.log('That is not a valid mood, setting mood to Opps!');
        }
        // console.log('BackgroundSpheres   mood:', mood);
        this.initSpheres = moodMap[mood].sphereSet;
        this.backgroundColor = moodMap[mood].backgroundColor;
        this.dynamicSpheres = this.initSpheres;
    }

    // Generates a css radiadial-gradient background-image proprety
    getBackgroundImage (spheres) {
        spheres = spheres || this.initSpheres;
        let str = '';
        spheres.forEach((sphere) => {
            // console.log('str chec',  str);
            str += this.radialGradient(sphere, 1);
        });
        // console.log('All radial-gradient', str.slice(0,-1));
        return str.slice(0,-1);
    }

    radialGradient(sphere, factor){
        const radGrad = 'radial-gradient('+
             this.radius(sphere.radius, factor) + 'vw circle at ' +
             sphere.pos[0] + 'vw ' + sphere.pos[1] + 'vh, ' +
             this.color(sphere.color1[0], sphere.color1[1], sphere.color1[2], factor) + ' , ' +
             // color(sphere.color2[0], sphere.color2[1], sphere.color2[2], factor) + ' , ' +
             ' transparent ' + sphere.trans +'%),';
             // console.log('check radGrad', radGrad);
        return radGrad;
    }

    radius(currentR, factor) {
        factor = factor || 1;
        return factor * currentR;
    }

    color(h, s, l, factor) {
        return 'hsl(' + h*factor + ',' + s +'%,' + l + '%)';
    }
}

export default BackgroundSpheres;
