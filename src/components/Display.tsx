type DisplayProps = {
  value: string;
};

export default function Display({ value }: DisplayProps) {
  return (
    <div className="display-container" data-cy="display-container" >
      <div>{value}</div>
    </div>
  );
}
