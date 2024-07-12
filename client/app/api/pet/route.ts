
export async function POST(req: Request) {
    console.log("api-post-pet", req)

    // TODO : replace by POST pet once done in C#
    let res = await fetch('http://localhost:5000/api/user');
    const data = await res.json()

    return Response.json({ data })
}