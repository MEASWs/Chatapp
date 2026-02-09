app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.CLIENT_URL, // 👈 Vercel URL
    ],
    credentials: true,
  })
)
