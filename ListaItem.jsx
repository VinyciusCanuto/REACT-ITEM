import React from "react";

const Lista = () => {
    const [item, setItem] = React.useState([`Novo item 0`])

    function HandleClick(){
        setItem([...item, `Novo item ${item.length}`])
    }
    function RemoveItem() {
        const novaLista = [...item]
        novaLista.pop()
        setItem(novaLista)
    }

    return(
        <>
        {item.map((item, index) => (

            <li key={index}>{item}</li>
            
        ))}

        <button onClick={HandleClick}>Adicionar item</button>
        <button onClick={RemoveItem}>Remover item</button>
        </>
    )
}

export default Lista;