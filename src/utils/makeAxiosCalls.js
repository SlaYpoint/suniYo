import axios from "axios";

export async function getResults(query) {
    const host = "deezerdevs-deezer.p.rapidapi.com";
    const key = process.env.REACT_APP_API_KEY;

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

    if (res.status === 200) {
        return res.data.data;
    }   
};


export async function getPlaylist() {
    const host = "deezerdevs-deezer.p.rapidapi.com";
    const key = process.env.REACT_APP_API_KEY;

    const res = await axios.get(
        'https://deezerdevs-deezer.p.rapidapi.com/playlist/1963962142',
        {
            headers: {
                'x-rapidapi-host': host,
                'x-rapidapi-key': key,
            }
        }
    );

    if (res.status === 200) {
        return res.data.tracks.data;
    }
}


export async function getSong(id) {
    const host = "deezerdevs-deezer.p.rapidapi.com";
    const key = process.env.REACT_APP_API_KEY;

    const res = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
      {
        headers: {
          "x-rapidapi-host": host,
          "x-rapidapi-key": key,
        },
      }
    );

    if (res.status === 200) {
      return res.data;
    }
}