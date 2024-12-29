/**@type { import("drizzle-kit").Config} */
export default {
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://ai-interview-mocker_owner:SLNWTM3at1Du@ep-billowing-frog-a5vd66ms.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
};