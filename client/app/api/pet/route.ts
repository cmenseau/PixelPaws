
export async function POST(req: Request) {
    const body = await req.json()

    let new_body = {
        name: body.name,
        type: body.type,
        colour: body.colour,
        userId: body.userid
    }

    console.log(JSON.stringify(new_body))

    const url = 'http://localhost:5000/api/pet/new-pet'

    let res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify(new_body)
      })

    const response_details = await res.json()
    
    return Response.json({response_details})
}