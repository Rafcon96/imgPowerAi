import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn)
    console.log(
      `Connected to database: ${cached.conn.connection.db.databaseName}`
    );
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "imgPowerAi",
      bufferCommands: false,
      // connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;
  console.log(
    `Connected to database: ${cached.conn.connection.db.databaseName}`
  );

  return cached.conn;
};
