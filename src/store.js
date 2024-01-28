import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: "http://localhost:8000/api/",
    imgBasePath: "http://localhost:8000/storage/",
    urlPagination: "?page=",
    characters: [],
    iaCharacters: [],
    videos: [
        {
            path: "/public/videos/baldurs-gate.mp4",
            name: "Baldurs Gate 3",
            desc: "Baldur's Gate 3 is a role-playing video game developed by Larian Studios. It is set in the Dungeons & Dragons universe and serves as the third installment in the Baldur's Gate series. Taking place in the fantasy world of Forgotten Realms, the game incorporates classic RPG elements such as character creation, turn-based tactical combat, and branching narrative."
        },
        {
            path: "/public/videos/skyrim.mp4",
            name: "The Elder Scrolls V: Skyrim",
            desc: " The Elder Scrolls V: Skyrim is an open-world role-playing video game developed by Bethesda Game Studios. Released in November 2011, it is the fifth installment in The Elder Scrolls series. The game is set in the province of Skyrim, a fantasy region within the world of Tamriel. "
        },
        {
            path: "/public/videos/witcher.mp4",
            name: "The Witcher 3: Wild Hunt",
            desc: "The Witcher 3: Wild Hunt is an action-adventure role-playing video game developed by CD Projekt. Released in 2015, it is the third installment in The Witcher series, based on the book series by Polish author Andrzej Sapkowski. The game is set in a dark and complex fantasy world. "
        },
    ],
    miniLogos: [
        {
            url: '/public/img/elden-ring.png',
        },
        {
            url: '/public/img/diablo.png',
        },
        {
            url: '/public/img/larian.png',
        },
        {
            url: '/public/img/oblivion.png',
        },
        {
            url: '/public/img/tesv.png',
        },
        {
            url: '/public/img/wow.png',
        },
    ],
    charHealth: 0,
})