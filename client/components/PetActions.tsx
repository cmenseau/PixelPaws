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
            <div>
                <button 
                    onClick={()=>sleep()} 
                    className="m-4 bg-pastel-orange hover:bg-pastel-yellow text-gray-600 font-bold py-2 px-4 border-b-4 border-pastel-orange rounded">
                        Put to sleep
                </button>
                <button
                    onClick={()=>feed()}
                    className="m-4 bg-pastel-orange hover:bg-pastel-yellow text-gray-600 font-bold py-2 px-4 border-b-4 border-pastel-orange rounded">
                        Feed
                </button>
                <button 
                    onClick={()=>clean()}
                    className="m-4 bg-pastel-orange hover:bg-pastel-yellow text-gray-600 font-bold py-2 px-4 border-b-4 border-pastel-orange rounded">
                        Clean
                </button>
            </div>
        </>
    )
}