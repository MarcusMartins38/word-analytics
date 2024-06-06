import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfCharacter: text.length,
    instagramCharacterLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
