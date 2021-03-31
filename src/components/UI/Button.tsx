export const Button = (props: ButtonProps) => {
  const { label, action } = props;

  return (
    <div className="button" onClick={action}>
      <p>{label}</p>
    </div>
  );
};
