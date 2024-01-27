import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: "http://localhost:8000/api/",
    imgBasePath: "http://localhost:8000/storage/",
    urlPagination: "?page=",
    characters: [],
    iaCharacters: [],
    videos: [
        {
            path: "/public/videos/skyrim.mp4",
            name: "Skyrim",
            desc: " The Elder Scrolls V: Skyrim è un videogioco di ruolo open-world sviluppato da Bethesda Game Studios, rilasciato nel 2011. Fa parte della serie The Elder Scrolls ed è ambientato nella provincia immaginaria di Skyrim, all'interno del continente di Tamriel. "
        },
        {
            path: "/public/videos/baldurs-gate.mp4",
            name: "Baldurs Gate 3",
            desc: " Baldur\'s Gate 3 è un videogioco di ruolo (RPG) sviluppato da Larian Studios, basato sul popolare franchise di Dungeons & Dragons. Il gioco è stato rilasciato in accesso anticipato nel 2020. Si tratta di un sequel spirituale della serie Baldur\'s Gate, ambientato nell\'universo fantasy di Forgotten Realms. "
        },
        {
            path: "/public/videos/witcher.mp4",
            name: "The Witcher 3: Wild Hunt",
            desc: " The Witcher 3: Wild Hunt è un videogioco di ruolo action-adventure sviluppato da CD Projekt. Rilasciato nel 2015, è il terzo capitolo della serie di giochi The Witcher, basata sulla serie di libri dello scrittore polacco Andrzej Sapkowski."
        },
    ],
})