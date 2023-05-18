export const Button = (props: ButtonProps) => {
  const { type, action } = props;

  return (
    <div className={`elementary-button ${type}`} onClick={action}>
      <p>{`${type[0].toUpperCase()}${type.slice(1)}`}</p>
    </div>
  );
};
