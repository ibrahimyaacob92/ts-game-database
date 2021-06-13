import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST, API_KEY } from "hooks/useFetch/constants";
import { Filter, Game } from "types";

type Response = {
  games: Game[];
  error?: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");
  const { platform, genre, tag, sortBy } = params;
  useEffect(() => {
    console.log("filter trigger")
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          platform,
          genre,
          tag,
          "sort-by": sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [platform, genre, tag, sortBy]);

  return { games, error: err };
};

export default useFetch;
