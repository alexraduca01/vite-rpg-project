import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: "http://localhost:8000/api/",
    imgBasePath: "http://localhost:8000/storage/",
    secondApiUrl: "http://localhost:8001/api/",
    urlPagination: "?page=",
})