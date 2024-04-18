"use server"

import client from "@/db"

export async function signup(username: string, password: string) {
    try {
        const user = await client.user.create({
            data: {
                username:username,
                password:password
            }
        });
        console.log(user.id);
        return "Signed up" 
    } catch (error) {
        console.log(error);
        return "Error while signin-up"
    }
}