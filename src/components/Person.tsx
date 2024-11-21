type PersonProps = {
  name: {
    first: String
    last: String
  },
}

export const Person = (props: PersonProps) => {
  const { name } = props;
  return (
    <div>{name.first} {name.last}</div>
  )
}
