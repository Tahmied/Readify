import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        await dbConnect();

        const { fullName, email, password, image } = await req.json();

        if (!fullName || !email || !password) {
            return Response.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return Response.json(
                { error: "User already exists" },
                { status: 409 }
            );
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: fullName,
            email,
            password: hashed,
            image: image || "",
        });

        return Response.json(
            { message: "User registered successfully", userId: user._id },
            { status: 201 }
        );
    } catch (err) {
        console.log("REGISTRATION ERROR:", err);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
