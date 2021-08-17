import { Writable } from "stream";
import { createReadStream } from "fs";
import { join } from "path";
import { createInterface } from "readline";


import { DataServiceHandlers } from "../generated/dataPackage/DataService";



const dataHandler: DataServiceHandlers = {
    getByLine: (call): void => {
        const inStream = createReadStream(join(__dirname , './mock.txt'));
        const outStream = new Writable();

        const rl = createInterface({
            input: inStream,
            output: outStream,
            terminal: false
        });

        rl.on("line", (line) => {
            return call.write({ line });
        })
        rl.on("close", () => call.end())
    }
}


export default dataHandler;