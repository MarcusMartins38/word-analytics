export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacter} label="Characters" />
      <Stat number={stats.instagramCharacterLeft} label="Instagram" />
      <Stat number={stats.facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
