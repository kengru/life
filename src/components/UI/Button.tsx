export const Button = (props: ButtonProps) => {
  const { type, action } = props;

  return (
    <div className={`button ${type}`} onClick={action}>
      <p>{`${type[0].toUpperCase()}${type.slice(1)}`}</p>
    </div>
  );
};
