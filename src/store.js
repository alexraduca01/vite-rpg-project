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
        },
        {
            path: "/public/videos/baldurs-gate.mp4",
            name: "Baldrus Gate 3",
        },
        {
            path: "/public/videos/witcher.mp4",
            name: "The Witcher 3: Wild Hunt",
        },
    ],
})