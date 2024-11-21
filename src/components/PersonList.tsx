type PersonListProps = {
  names: {
    first: String
    last: String
  }[]
}

export const PersonList = (props: PersonListProps) => {
  const { names } = props;
  return (
    <div>
      {names.map(name => {
        return (
          <h2>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}
