import dotenv from "dotenv";
import { z } from "zod";

// Load .env file
dotenv.config();

// Define schema for env vars with Zod
const EnvSchema = z.object({
  PORT: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "PORT must be a positive number",
    })
    .transform((val) => Number(val)),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  MONGODB_URL: z.string().url(),
  DB_NAME: z.string(),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

// Parse and validate process.env
const { success, error, data } = EnvSchema.safeParse(process.env);

if (!success) {
  console.error("Invalid environment variables:", error.format());
  process.exit(1);
}

// Export typed and validated env variables
export const env = {
  PORT: data.PORT,
  NODE_ENV: data.NODE_ENV,
  MONGODB_URL: data.MONGODB_URL,
  LOG_LEVEL: data.LOG_LEVEL,
  DB_NAME: data.DB_NAME,
};
