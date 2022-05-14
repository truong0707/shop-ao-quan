import axios from "axios";

const getDetailProductBlog = async (paramId) => {
    return await axios.get(`http://localhost:8080/api/v1/product-detail-Blog?id=${paramId}`);
}

export {
    getDetailProductBlog,
}