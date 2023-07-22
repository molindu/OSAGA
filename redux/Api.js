// import axios from "axios";

// const getProductsFromApi = () => {
//     console.log("hello");
//     return (

//     );
// }

// export default getProductsFromApi;

import axios from "axios";

const getProductsFromApi = async () => {
    try {
        const response = await axios.get("https://portfolio-molindu-1.000webhostapp.com/movies.json");
        return response.data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        return null;
    }
};

export default getProductsFromApi;
