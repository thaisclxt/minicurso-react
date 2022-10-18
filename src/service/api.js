import axios from "axios";

export const avatarAPI = "https://avatars.dicebear.com/api/";
export const animeAPI = axios.create({
	baseURL: "https://animechan.vercel.app/api/",
});
