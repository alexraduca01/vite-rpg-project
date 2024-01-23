import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: "http://localhost:8000/api/",
    secondApiUrl: "http://localhost:8001/api/",
    imgBasePath: "http://localhost:8000/storage/",
    secondImgPath: "http://localhost:8001/storage/",
    urlPagination: "?page=",
    characters: [],
})