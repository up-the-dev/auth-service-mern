import { Config } from "./config";
import App from "./app";

const startServer = () => {
    const PORT = Config.PORT;

    try {
        App.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`server listening at ${PORT}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        process.exit(1);
    }
};

startServer();
