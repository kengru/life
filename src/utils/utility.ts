export const dataParse = (data: OptionsForm) => {
  return {
    rows: parseInt(data.rows, 10),
    columns: parseInt(data.columns, 10),
    speed: parseFloat(data.speed) * 1000
  };
};
