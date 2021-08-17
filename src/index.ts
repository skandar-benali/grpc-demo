import { Server, loadPackageDefinition, ServerCredentials} from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import envVars  from './configs/envVars';

import logHandler from "./handlers/logger";
// import dataHandler from "./handlers/data";
import options from "./configs/options";

import { ProtoGrpcType as logDefs } from "./generated/logger";
// import { ProtoGrpcType as dataDefs } from "./generated/data";

const PROTO_LOGGER= "src/protos/logger.proto";
const PROTO_DATA= "src/protos/data.proto";

const configs = {}

const logPackageDefinition = loadSync(PROTO_LOGGER ,options );
// const dataPackageDefinition = loadSync(PROTO_DATA ,options );

const grpcObjects = loadPackageDefinition(logPackageDefinition) as unknown as logDefs;
// const grpcObjects = loadPackageDefinition(dataPackageDefinition) as unknown as ProtoGrpcType;


const server = new Server();

server.addService(grpcObjects.logPackage.LogService.service, logHandler);
// server.addService(grpcObjects.dataPackage.DataService.service, dataHandler);

server.bindAsync(
    `localhost:${envVars.port}`,
    ServerCredentials.createInsecure(),
    () => {
        server.start();
        console.log(`▲ gRPC server running on port ${envVars.port} ▲`);
    }
);
