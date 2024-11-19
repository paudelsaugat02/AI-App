/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Wv1PbTMi7fhN@ep-floral-union-a55edb9a.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };