import { useEffect } from "react";

function HeavyComponent() {
  useEffect(() => {
    console.log("HeavyComponent mounted");
    return () => {
      console.log("HeavyComponent unmounted");
    };
  })

  return <div>Heavy Component</div>;
}

export default HeavyComponent;