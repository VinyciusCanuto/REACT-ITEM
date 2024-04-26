import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(0)

  return(
    <>
    <button onClick={() => setContar(contar -1)}>-</button>
    <p>{contar}</p>
    <button onClick={() => setContar(contar +1)}>+</button>
    </>
  )
}

export default App;