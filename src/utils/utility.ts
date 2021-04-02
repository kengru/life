export const dataParse = (data: OptionsForm) => {
  return {
    rows: parseInt(data.rows, 10),
    columns: parseInt(data.columns, 10),
    speed: parseInt(data.speed, 10) * 1000,
  };
};
