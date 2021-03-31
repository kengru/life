import { useForm, Controller } from "react-hook-form";
// import { Button } from "./Button";

export const Options = (props: OptionsProps) => {
  const { rows, columns, speed, applyOptions } = props;
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: OptionsForm) => {
    applyOptions(+data.rows, +data.columns, +data.speed);
  };

  return (
    <div className="options">
      <h2>Board options</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="option">
          <div className="amount">
            <Controller
              name="rows"
              control={control}
              defaultValue={rows}
              render={({ onChange, value }) => (
                <input type="number" value={value} onChange={onChange} />
              )}
            />
          </div>
          <span>Rows</span>
        </div>
        <div className="option">
          <div className="amount">
            <Controller
              name="columns"
              control={control}
              defaultValue={columns}
              render={({ onChange, value }) => (
                <input type="number" value={value} onChange={onChange} />
              )}
            />
          </div>
          <span>Columns</span>
        </div>
        <div className="option">
          <div className="amount">
            <Controller
              name="speed"
              control={control}
              defaultValue={speed}
              render={({ onChange, value }) => (
                <input type="number" value={value} onChange={onChange} />
              )}
            />
          </div>
          <span>Speed</span>
        </div>
        <input style={{ all: "unset" }} className="button" type="submit" />
      </form>
      {/* <Button label="Apply" action={() => applyOptions(rows, columns, speed)} /> */}
    </div>
  );
};
