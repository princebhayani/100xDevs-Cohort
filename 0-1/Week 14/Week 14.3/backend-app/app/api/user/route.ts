// import { NextRequest, NextResponse } from "next/server";
// import client from "@/db"

// export async function GET() {
//     const user = await client.user.findFirst({});
//     return Response.json({ name: user?.username, email: user?.username })
// }

// export async function POST(req: NextRequest) {
//     const body = await req.json();
//     // should add zod validation here
//     const user = await client.user.create({
//         data: {
//             username: body.username,
//             password: body.password
//         }
//     });
//     console.log(user.id);
//     return NextResponse.json({ message: "Signed up" });
// }