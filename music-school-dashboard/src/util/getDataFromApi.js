import axios from "axios";

export const getDataFromApi = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return [];
    }
};
