import dbConnect from "@/lib/dbConnect"
import User from "@/model/User"
import bcrypt from "bcryptjs"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                image: { label: "image", type: 'String' }
            },

            async authorize(credentials) {
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
                    image: user.image
                }
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {

        async jwt({ token, user }) {
            if (user) {
                token.picture = user.image;
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {

                session.user.image = token.picture;
                //session.user.id = token.id
            }
            return session;
        }
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.AUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
