const useFetch = (baseUrl) => {

    async function get(url) {
        return fetch(baseUrl + url)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    return {get};
}

export default useFetch;