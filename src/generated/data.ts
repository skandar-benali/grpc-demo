import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { DataServiceClient as _dataPackage_DataServiceClient, DataServiceDefinition as _dataPackage_DataServiceDefinition } from './dataPackage/DataService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dataPackage: {
    DataRequest: MessageTypeDefinition
    DataService: SubtypeConstructor<typeof grpc.Client, _dataPackage_DataServiceClient> & { service: _dataPackage_DataServiceDefinition }
    Response: MessageTypeDefinition
  }
}

