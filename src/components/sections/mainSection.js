
import React,{useContext} from 'react'
import { Todoslist } from '../../Context/data.js/context'
import { Card } from '../UI/card'

  
   const Mainsection = () => {
    const data = useContext(Todoslist)
    console.log("from main section")
    console.log(data)
    const todos=data.map((item)=>{
        return <Card key={item.id} item={item}></Card>
   
     })

    return (
     <>{todos}</> 
     
    )
  }
  export default Mainsection