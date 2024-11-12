type ButtonProps = {
  onClick: (name: string) => void;
  name: string;
  id?: string;
};

export default function Button({ onClick, name, id }: ButtonProps) {
  const handleClick = () => onClick(name);

  return (
    <button id={id} data-cy={name} onClick={handleClick}>
      {name}
    </button>
  );
}
