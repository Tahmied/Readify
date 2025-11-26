import mongoose, { Schema, models } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String },
    coverImage: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    authorImg: { type: String, required: false },
    pageNumber: { type: Number },
    price: { type: Number, required: true },
    downloadLink: { type: String, required: true },
    category: { type: String, required: true },
    avgRating: { type: Number, default: 0 },
    downloadCount: { type: Number, default: 0 },
    status: { type: String, enum: ["draft", "published"], default: "published" }
}, {
    timestamps: true
});

bookSchema.pre("save", async function () {
    if (!this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
    }
});

const Book = models.Book || mongoose.model("Book", bookSchema);
export default Book;
