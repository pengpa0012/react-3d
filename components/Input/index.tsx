import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface Props {
  onChange: (todo: React.ChangeEvent<HTMLInputElement>) => void,
  value: string | number
}

const Input: React.FC<Props> = ({onChange, value}) => {
  return (
    <div style={{width: "75%"}}>
      <input type="text" placeholder="Add todo" onChange={onChange} value={value} style={{width: "100%"}} />
    </div>
  )
}

export default Input
