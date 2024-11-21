type GreetProps = {
  name: String,
}

export const Greet = (props: GreetProps) => {
  const { name } = props;
  return (
    <div className="">
      <h2>Welcome {name} You have 10 undread message</h2>
    </div>
  )
}