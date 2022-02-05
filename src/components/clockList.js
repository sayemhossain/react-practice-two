import Clock from "./Clock";
export default function ClockList({ quantity = [] }) {
  return (
    <div>
      {quantity.map(() => (
        <Clock key={Math.random()} />
      ))}
    </div>
  );
}
