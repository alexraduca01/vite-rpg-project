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
            desc: "Baldur's Gate 3 è un videogioco di ruolo (RPG) sviluppato da Larian Studios. Il gioco è basato sull'universo di Dungeons & Dragons e rappresenta il terzo capitolo della serie Baldur's Gate. Ambientato nel mondo fantasy di Forgotten Realms, il gioco combina elementi classici del genere RPG, come la creazione del personaggio, il combattimento tattico a turni e la narrativa ramificata."
        },
        {
            path: "/public/videos/skyrim.mp4",
            name: "The Elder Scrolls V: Skyrim",
            desc: " The Elder Scrolls V: Skyrim è un videogioco di ruolo open-world sviluppato da Bethesda Game Studios. Pubblicato nel novembre del 2011, è il quinto capitolo della serie The Elder Scrolls. Il gioco è ambientato nella provincia di Skyrim, una regione fantasy all'interno del mondo di Tamriel. "
        },
        {
            path: "/public/videos/witcher.mp4",
            name: "The Witcher 3: Wild Hunt",
            desc: "  The Witcher 3: Wild Hunt è un videogioco di ruolo action-adventure sviluppato da CD Projekt. Pubblicato nel 2015, è il terzo capitolo della serie The Witcher, basata sulla serie di libri del polacco Andrzej Sapkowski. Il gioco è ambientato in un mondo fantasy dark e complesso. "
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
    ]
})