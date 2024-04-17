import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client"
import { useRouter } from "next/navigation";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in!"
    })
}