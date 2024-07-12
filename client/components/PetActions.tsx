"use client"

function sleep()  {
    console.log("sleep")
}

function feed()  {
    console.log("feed")
}

function clean()  {
    console.log("clean")
}

export default function PetActions() {

    return (
        <>
            <button 
                onClick={()=>sleep()} 
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Put to sleep
            </button>
            <button
                onClick={()=>feed()}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Feed
            </button>
            <button 
                onClick={()=>clean()}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Clean
            </button>
        </>
    )
}