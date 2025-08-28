import app from "./app";
import { ENV, prisma } from "./config";

const PORT = process.env.PORT || 4000;

async function main() {
 const tableSizes = await prisma.$queryRawUnsafe(`
  SELECT table_name,
         ROUND((data_length + index_length) / 1024 / 1024, 2) AS size_mb,
         ROUND((data_length + index_length) / 1024 / 1024 / 1024, 4) AS size_gb
  FROM information_schema.tables
  WHERE table_schema = DATABASE()
  ORDER BY (data_length + index_length) DESC;
`);

console.log(tableSizes);
}

main();

const server = app.listen(ENV.PORT, () => {
  console.log(`
        🖥️  SERVER STARTED 🚀  
        ┌───────────────────┐
        │   [■■■■■■■■■■■]   │
        │   [■■■■■■■■■■■]   │
        │   [■■■■■■■■■■■]   │
        │   [■■■■■■■■■■■]   │ 
        │   [■■■■■■■■■■■]   │
        └───────────────────┘
        http://localhost:${ENV.PORT}
      `);
});

const shutdown = async (signal: string) => {
  console.log(`\n🛑 Received ${signal}. Closing server gracefully...`);

  // Close the server
  server.close(async () => {
    console.log("🛑 server closed.");

    // Disconnect from the database
    try {
      await prisma.$disconnect();
      console.log("✅ Database connection closed.");
    } catch (error) {
      console.error("❌ Error disconnecting from database:", error);
    }

    process.exit(0);
  });
};

// Handle termination signals
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, () => shutdown(signal));
});

// Handle unexpected errors
process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection at:", promise, "reason: ", reason);
});
