import { useEffect, CSSProperties } from "react";

function HeavyComponent({ style }: { style?: CSSProperties }) {
  useEffect(() => {
    console.log('HeavyComponent mounted')
    return () => {
      console.log('HeavyComponent unmounted')
    }
  })

  return (
    <div style={style}>
      HeavyComponent
    </div>
  )
}

export default HeavyComponent