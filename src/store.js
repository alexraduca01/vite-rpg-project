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
            name: "The Elder Scrolls V: Skyrim",
            desc: " The Elder Scrolls V: Skyrim is an open-world action role-playing game developed by Bethesda Game Studios. Released in 2011, Skyrim is the fifth installment in The Elder Scrolls series. Set in the fantasy world of Tamriel, the game follows the player's character, known as the Dragonborn, as they navigate the vast and immersive province of Skyrim. With a rich storyline, players embark on quests, engage in exploration, and encounter various factions and creatures. "
        },
        {
            path: "/public/videos/baldurs-gate.mp4",
            name: "Baldurs Gate 3",
            desc: "Baldur's Gate 3 is a critically acclaimed role-playing video game developed and published by Larian Studios. Released in 2020, the game is set in the Dungeons & Dragons universe and serves as a sequel to the popular Baldur's Gate series. It features an isometric perspective and combines intricate storytelling with strategic, turn-based combat. Players create a custom character and embark on a journey filled with choices that impact the narrative, as well as interactions with a diverse cast of characters."
        },
        {
            path: "/public/videos/witcher.mp4",
            name: "The Witcher 3: Wild Hunt",
            desc: " The Witcher 3: Wild Hunt is an action role-playing game developed by CD Projekt. Released in 2015, it is the third installment in The Witcher series, based on the novels by Andrzej Sapkowski. Set in a dark fantasy world, players control Geralt of Rivia, a monster hunter known as a Witcher. The game features an expansive open world filled with diverse landscapes, cities, and villages. Players embark on a quest to find Geralt's adopted daughter, Ciri, while navigating a complex narrative with moral choices that impact the story."
        },
    ],
})