type OcarProps = {
  children: React.ReactNode
}

export const Oscar = (props: OcarProps) => {
  const { children } = props
  return (
    <div>{children}</div>
  )
}
