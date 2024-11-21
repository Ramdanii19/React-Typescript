type ContainerProps = {
  styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
  const { styles } = props
  return (
    <div style={styles}>Text Content</div>
  )
}
