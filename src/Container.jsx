import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfCharacter: text.length,
    instagramCharacterLeft: 280 - text.length,
    facebookCharactersLeft: 2200 - text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
