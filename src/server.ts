import { Config } from "./config";

const StartServer = (PORT: string): string => {
    // console.log("sds");

    return PORT + Config.NODE_ENV;
};

StartServer("3000");
