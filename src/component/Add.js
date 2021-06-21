import  { useState } from 'react'
 
const Add = () => {

    const[inputItems,setInputItems]=useState('')
    const[itemsAdd,setItemsAdd]=useState([])
    const onClick = () => {
       !inputItems ? 
        alert('please add a text')
        
      :  setItemsAdd([...itemsAdd,inputItems])
        setInputItems('')
    }
    const deleteItem= (id) => {
       setItemsAdd(itemsAdd.filter((item) =>item.id!==id))
    }
  
    return (
        <>
        <div>
        <input type="text" placeholder="Add Items" value={inputItems} onChange ={(e) =>setInputItems(e.target.value)}/>
        <button onClick={onClick} title="Add Items">Add</button>
        </div>
        <div>
        {
            itemsAdd.map((item,index)=>(
                <div key={index}>

           <input type='checkbox' onChange={() =>deleteItem(index)}/>
           <span></span>
           <h2>{item}</h2>
                </div>

            ))}

        </div>
        </>
    )
}

export default Add
