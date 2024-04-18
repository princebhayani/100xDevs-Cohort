import client from "@/db"

export async function getUserDetails() {
    const user = await client.user.findFirst({});
    return ({
        name: user?.username,
        email: user?.username
    })
}

export default async function Home() {
    const userData = await getUserDetails();
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        Name: {userData?.name}
                    </div>
                    {userData?.email}
                </div>
            </div>
        </div>
    );
}