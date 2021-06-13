import React, { ChangeEvent, ReactElement, useCallback, useState } from "react";
import GameListRender from "./GameList.renderer";
import { Filter } from "types";
import useFetch from "hooks/useFetch";

function GameList(): ReactElement {
  const [filter, setFilter] = useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  });

  const {games, error:err} = useFetch(filter)
  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <GameListRender
      onFilterChange={onFilterChange}
      err={err}
      games={games}
    ></GameListRender>
  );
}

export default GameList;
