import { LogServiceHandlers } from "../generated/logPackage/LogService";

const  LoggerHandler: LogServiceHandlers  = {
    logName: (req, callback): void => {
        console.log("name===========>", req.request.name);
        callback(null, {});
    },
    log: (req, callback): void => {
        console.log("the age of %s is %s", req.request.name, req.request.age);
        callback(null, {});
    }
}

export default LoggerHandler;