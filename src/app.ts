import express from "express";
import translateRoutes from "./Routes/translatorRoutes";
// import itemsRouter from "./routes/itemRoutes";

// Create an Express application
const app = express();

app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("Welcome! to translate....");
});
// Mount the itemsRouter at the '/items' path
app.use("/translate", translateRoutes);

// Define the port to listen on, defaulting to 50000 if not specified in the environment
const PORT = 5000;


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});



// Handle uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    process.exit(1);
});