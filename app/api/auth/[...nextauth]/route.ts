import dbConnect from "@/lib/dbConnect"
import User from "@/model/User"
import bcrypt from "bcryptjs"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                // FIX: credentials can be undefined in v4
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                await dbConnect()

                const user = await User.findOne({ email: credentials.email })
                if (!user) return null

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if (!isValid) return null

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                }
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.AUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
