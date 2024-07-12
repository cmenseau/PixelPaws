"use server"

import PetActions from "@/components/PetActions"
import PetDisplay from "@/components/PetDisplay"

async function getData() {
    // TODO : replace by GET pet once done in C#

    // figure out how to get the dog from the user, user has to be kept in the state or props or somewhere ?
    
    // let res = await fetch('http://localhost:5000/api/pet/{id}', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       method: "GET"
    //   })
    // return await res.json()

    return JSON.stringify({ name:"bibi", type:"cat", colour:"pink" })
}
  
export default async function MyPet() {

    const data = JSON.parse(await getData())

    return  (
        <>
            <h1>{data.name}</h1>
            <h1>{data.type}</h1>
            <h1>{data.colour}</h1>
            <PetActions></PetActions>
            <PetDisplay type={data.type} colour={data.colour}></PetDisplay>
        </>
    )
}