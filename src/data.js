import sightSeeing from '../src/pics/sight-seeing.gif'
import gasStation from '../src/pics/gas-station.gif'
import cafe from '../src/pics/cafe.gif'
import bar from '../src/pics/bar.gif'
import skateboard from '../src/pics/skateboard.gif'
import dreams from '../src/songs/dreams.mp3'
import frozen from '../src/songs/frozen.mp3'
import dont_know_her_name from '../src/songs/dont_know_her_name.wav'
import finally_happy from '../src/songs/finally_happy.mp3'
import sugar_momma from '../src/songs/sugar_momma.mp3'


const data = [
    {
        id: 1,
        song: "Dreams",
        audio_src: dreams,
        bg: sightSeeing
    },
    {
        id: 2,
        song: "Frozen",
        audio_src: frozen,
        bg: gasStation
    },
    {
        id: 3,
        song: "Don't Know Your Name",
        audio_src: dont_know_her_name,
        bg: cafe
    },
    {
        id: 4,
        song: "Finally Happy",
        audio_src: finally_happy,
        bg: bar
    },
    {
        id: 5,
        song: "Sugar Momma",
        audio_src: sugar_momma,
        bg: skateboard
    }
]

export default data