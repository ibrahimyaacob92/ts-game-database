import React, { ReactElement } from "react";
import { Game } from "types";
import { Description, Details, Genre, Img, StyledLink, Title } from "./styles";
import windowsIcon from "assets/icons/windows.svg";
import browserIcon from "assets/icons/browser.svg";
import { BROWSER, WINDOWS } from "./constants";

interface Props {
  content: Game;
}

function GameCard({ content }: Props): ReactElement {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  const link = `/game/${id}`;
  const icons = platform.split(",").map((p) => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER:
        icon = (
          <img key={`${id}-browser`} alt="browser-icon" src={browserIcon} />
        );
        break;
      case WINDOWS:
        icon = (
          <img key={`${id}-windows`} alt="windows-icon" src={windowsIcon} />
        );
        break;
      default:
        break;
    }
    return icon;
  });

  return (
    <StyledLink to={link}>
      <Img alt={`${title} logo`} src={thumbnail} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  );
}

export default GameCard;
