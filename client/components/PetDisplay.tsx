"use client"

import React from "react"

// interface Props {
//     type: string,
//     colour: string
// }

// export default PetDisplay = React.FC<Props> () => {
// }

export default function PetDisplay({type, colour} : {type:string, colour:string}) {

    switch (type) {
        case "dog":
            return (
                <>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/018/871/732/small_2x/cute-and-happy-dog-png.png"/>
                </>
            )
        case "cat":
            return (
                <>
                    <img src="https://parspng.com/wp-content/uploads/2023/01/catpng.parspng.com-6.png"/>
                </>
            )
        default:
            console.log("wrong pet type", type)
    }    
}