import axios from "axios";
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";
const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'https://api.rawg.io/api'
	}
};

export const fetchData=async(url)=>{
    try {
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    } catch (error) {
        console.error("error fetching api data: ",error);
        throw error;
    }
}
// import axios from "axios";

// const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
// console.log("API Key in rapidApi.js:", API_KEY); // Debugging

// const BASE_URL = "https://api.rawg.io/api";

// const options = {
// 	headers: {
// 		"x-rapidapi-key": API_KEY || "", // Prevent undefined
// 		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
// 	},
// };

// export const fetchData = async (url) => {
// 	try {
// 		const { data } = await axios.get(`${BASE_URL}/${url}`, { headers: options.headers });
// 		return data;
// 	} catch (error) {
// 		console.error("Error fetching API data: ", error);
// 		throw error;
// 	}
// };

// import axios from "axios";

// const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
// console.log("API Key in rapidApi.js:", API_KEY); // Debugging

// const BASE_URL = "https://api.rawg.io/api";

// export const fetchData = async (url) => {
// 	try {
// 		const fullUrl = `${BASE_URL}/${url}&key=${API_KEY}`;
// 		console.log(`Fetching: ${fullUrl}`); // Debugging
// 		const { data } = await axios.get(fullUrl);
// 		return data;
// 	} catch (error) {
// 		console.error("Error fetching API data: ", error);
// 		throw error;
// 	}
// };
