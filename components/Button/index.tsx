
interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  remove: boolean
}

const Button: React.FC<Props> = ({onClick, remove}) => {
  return (
    <div>
      {
        remove ? <button onClick={(e) => onClick(e)}>Remove</button>
        : <button onClick={(e) => onClick(e)}>Add Todo</button>
      }
    </div>
  )
}

export default Button
