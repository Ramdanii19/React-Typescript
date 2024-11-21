type GreetProps = {
  name: String,
  messageCount: number,
  isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div className="">
      <h2>
        {isLoggedIn ? `Welcome ${name} You have ${messageCount} undread message` : `Welcome Gues`}
      </h2>
    </div>
  )
}