import { useForm, Controller } from "react-hook-form";
import { dataParse } from "../../utils/utility";

export const Options = (props: OptionsProps) => {
  const { rows, columns, speed, applyOptions } = props;
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: OptionsForm) => {
    const parsed = dataParse(data);
    applyOptions(parsed.rows, parsed.columns, parsed.speed);
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
              defaultValue={speed / 1000}
              render={({ onChange, value }) => (
                <input
                  type="number"
                  value={value}
                  onChange={onChange}
                  step={0.1}
                />
              )}
            />
          </div>
          <span>Speed</span>
        </div>
        <div className="button apply">
          <input style={{ all: "unset" }} type="submit" value="Apply" />
        </div>
      </form>
    </div>
  );
};
