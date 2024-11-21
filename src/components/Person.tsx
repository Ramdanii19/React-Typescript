import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
  const { name } = props;
  return (
    <div>{name.first} {name.last}</div>
  )
}
