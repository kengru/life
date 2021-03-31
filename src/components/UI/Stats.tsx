interface Props {
  generation: number;
  alive: number;
  dead: number;
  borned: number;
  died: number;
}

export const Stats = (props: Props) => {
  return (
    <div className="stats">
      <h2>Board Stats</h2>
      <hr />
      <div className="info"></div>
    </div>
  );
};
