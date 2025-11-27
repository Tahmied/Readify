import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/login",
    },
})
export const config = {
    matcher: [
        "/my-books/:path*",
        "/edit-book/:path*",
        "/dashboard/:path*",
        "/profile/:path*",
        "/add-book"
    ]
}