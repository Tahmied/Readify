import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        await dbConnect()

        const { name, email, password } = await req.json()

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return new Response(JSON.stringify({ error: "User already exists" }), {
                status: 400,
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return new Response(JSON.stringify({ message: "User created", user }), {
            status: 201,
        })
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 })
    }
}

