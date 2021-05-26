import axios from "axios";

export async function getResults(query) {
    const host = "deezerdevs-deezer.p.rapidapi.com";
    const key = process.env.REACT_APP_API_KEY;

    try {
        const res = await axios(
            `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': host,
                    'x-rapidapi-key': key,
                }
            }
        );
        return res.data.data;
    } catch(err) {
        console.log(err);
    }
};

export async function getTrack(id) {
    const host = "deezerdevs-deezer.p.rapidapi.com";
    const key = process.env.REACT_APP_API_KEY;

    try {
        const res = await axios(
          `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": host,
              "x-rapidapi-key": key,
            },
          }
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

