import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { LogServiceClient as _logPackage_LogServiceClient, LogServiceDefinition as _logPackage_LogServiceDefinition } from './logPackage/LogService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  logPackage: {
    Empty: MessageTypeDefinition
    LogNameRequest: MessageTypeDefinition
    LogRequest: MessageTypeDefinition
    LogService: SubtypeConstructor<typeof grpc.Client, _logPackage_LogServiceClient> & { service: _logPackage_LogServiceDefinition }
  }
}

