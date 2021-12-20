const url = "https://randomuser.me/api/"

const fetchGetUsers = () => {
    return fetch(url, {
        method: "GET",
    })
    .then((response) => response.json())
    .catch((error) => {
        throw error;
    });
};

export default fetchGetUsers;