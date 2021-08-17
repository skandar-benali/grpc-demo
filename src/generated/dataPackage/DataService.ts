// Original file: src/protos/data.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DataRequest as _dataPackage_DataRequest, DataRequest__Output as _dataPackage_DataRequest__Output } from '../dataPackage/DataRequest';
import type { Empty as _dataPackage_Empty, Empty__Output as _dataPackage_Empty__Output } from '../dataPackage/Empty';

export interface DataServiceClient extends grpc.Client {
  getFile(argument: _dataPackage_DataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  getFile(argument: _dataPackage_DataRequest, callback: (error?: grpc.ServiceError, result?: _dataPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  
}

export interface DataServiceHandlers extends grpc.UntypedServiceImplementation {
  getFile: grpc.handleUnaryCall<_dataPackage_DataRequest__Output, _dataPackage_Empty>;
  
}

export interface DataServiceDefinition extends grpc.ServiceDefinition {
  getFile: MethodDefinition<_dataPackage_DataRequest, _dataPackage_Empty, _dataPackage_DataRequest__Output, _dataPackage_Empty__Output>
}
