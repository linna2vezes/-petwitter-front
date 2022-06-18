import client from "../providers/client";

export const login = (data) => client.post("/login", data);

export const signup = (data) => client.post("/signup", data);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>  localStorage.setItem(key, JSON.stringify(data));

export const createTweet = (data) => client.post("/tweet", data);

export const deleteTweet = (id) => client.delete(`/tweet/${id}`);

export const getUserTweet = (id) => client.get(`/tweet/${id}`);

export const getUser =(id) => client.get(`/user/${id}`);

// export const getAllTweets =(skip) => client.get(`/tweet`);
export const getAllTweets =(skip) => client.get(`/tweet?skip=${skip}&take=10`);



