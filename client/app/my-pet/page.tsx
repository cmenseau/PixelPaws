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
            <div className="flex flex-col justify-center items-center m-5">
                <h1 className="text-xl font-bold">Hi {pet_data.name} ! 👋</h1>

                <PetDisplay type={pet_data.type} colour={pet_data.colour}></PetDisplay> 

                <div className="w-full">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-pastel-blue">Energy</span>
                        <span className="text-sm font-medium text-pastel-blue">45%</span>
                    </div>
                    <div className="h-4 w-full bg-gray-200 rounded-full h-2.5">
                        <div className="h-4 bg-pastel-blue h-2.5 rounded-full w-[45%] text-center p-0.5 text-xs font-medium"></div>
                    </div>
                </div>
                
                <div className="w-full">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-pastel-blue">Cleanliness</span>
                        <span className="text-sm font-medium text-pastel-blue">90%</span>
                    </div>
                    <div className="h-4 w-full bg-gray-200 rounded-full h-2.5">
                        <div className="h-4 bg-pastel-blue h-2.5 rounded-full w-[90%] text-center p-0.5 text-xs font-medium"></div>
                    </div>
                </div>

                <PetActions></PetActions>
            </div>
        </>
    )
}