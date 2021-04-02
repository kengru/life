export const Stats = (props: StatsProps) => {
  const { generation, alive, dead, borned, died } = props;

  return (
    <div className="stats">
      <h2>Board stats</h2>
      <hr />
      <div>
        <div className="stat">
          <div className="amount gen">{generation}</div> <span>Generation</span>
        </div>
        <div className="stat">
          <span className="amount live">{alive}</span> <span>Live cells</span>
        </div>
        <div className="stat">
          <span className="amount dead">{dead}</span> <span>Dead cells</span>
        </div>
        <div className="stat">
          <span className="amount borned">{borned}</span>{" "}
          <span>Borned cells</span>
        </div>
        <div className="stat">
          <span className="amount died">{died}</span> <span>Died now</span>
        </div>
      </div>
    </div>
  );
};
