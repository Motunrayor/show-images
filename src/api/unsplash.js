import axios from "axios";

 const api = axios.create({
   baseURL: "https://api.unsplash.com",
   headers: {
      Authorization: "Client-ID WnfPkdp8xm_iVO-Wpltky6Ifmo8JZzXRohItveuqI80",
    },
});

export default api;