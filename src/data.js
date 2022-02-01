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
        bg: sightSeeing,
        youtube: 'https://youtu.be/yAlxnAjAY2Y',
        spotify: 'https://open.spotify.com/track/5icD7kwxoZtR5H8Rcp2noQ?si=264ed04ba77e454a',
        apple: 'https://music.apple.com/us/album/dreams/1595879003?i=1595879009'
    },
    {
        id: 2,
        song: "Frozen",
        audio_src: frozen,
        bg: gasStation,
        youtube: 'https://youtu.be/7tGtu4bcf6s',
        spotify: 'https://open.spotify.com/track/0uyD06zAfOwHwn18h5b4Vo?si=797847375fc54a13',
        apple: 'https://music.apple.com/us/album/frozen-interlude/1595879003?i=1595879012'
    },
    {
        id: 3,
        song: "Don't Know Your Name",
        audio_src: dont_know_her_name,
        bg: cafe,
        youtube: 'https://youtu.be/e_h_UtgvOoE',
        spotify: 'https://open.spotify.com/track/6rPSP953wIg0gUQ4DeXsOP?si=feb1923f65554ba1',
        apple: 'https://music.apple.com/us/album/dont-know-your-name-feat-bambi/1595879003?i=1595879013'
    },
    {
        id: 4,
        song: "Finally Happy",
        audio_src: finally_happy,
        bg: bar,
        youtube: 'https://youtu.be/yZ9pnYKg8uE',
        spotify: 'https://open.spotify.com/track/7f1c4B5n0ipxk9OU8uoL8T?si=c58b0c3e4e014220',
        apple: 'https://music.apple.com/us/album/finally-happy/1595879003?i=1595879011'
    },
    {
        id: 5,
        song: "Sugar Momma",
        audio_src: sugar_momma,
        bg: skateboard,
        youtube: ' https://youtu.be/uo7HimRc9Bg',
        spotify: 'https://open.spotify.com/track/4bDvtUCW4ClFCFHfDvT1EI?si=36f25c32b16c43a8',
        apple: 'https://music.apple.com/us/album/sugar-momma/1595879003?i=1595879008'
    }
]

export default data