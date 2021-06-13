import React, { ChangeEvent, ReactElement } from "react";
import { Game } from "types";
import GameCard from "components/GameCard";
import { List, ListItem } from "./styles";
import GameFilter from 'components/GameFilter'

interface Props {
  err?: string;
  games: Game[];
  onFilterChange:(e:ChangeEvent<HTMLFormElement>) => void
}

function GameList({ err, games, onFilterChange }: Props): ReactElement {
  if (err) {
    return <p>Unable to retrieve games</p>;
  }
  if (games?.length === 0) {
    return <p>No games available</p>;
  }
  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GameList;
