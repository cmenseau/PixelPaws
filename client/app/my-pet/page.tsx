"use server"

import PetActions from "@/components/PetActions"
import PetDisplay from "@/components/PetDisplay"

async function getData() {

    // TODO : figure out how to get the dog from the user, user has to be kept in the state or props or somewhere ?

    const pet_id = 3
    const url = 'http://localhost:5000/api/pet/' + pet_id
    
    let res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
          },
          method: "GET"
      })
    return await res.json()
}
  
export default async function MyPet() {

    const pet_data = await getData()

    return  (
        <>
            <h1>{pet_data.name}</h1>
            <h1>{pet_data.type}</h1>
            <h1>{pet_data.colour}</h1>
            <PetActions></PetActions>
            <PetDisplay type={pet_data.type} colour={pet_data.colour}></PetDisplay>
        </>
    )
}