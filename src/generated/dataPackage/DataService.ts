// Original file: src/protos/data.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DataRequest as _dataPackage_DataRequest, DataRequest__Output as _dataPackage_DataRequest__Output } from '../dataPackage/DataRequest';
import type { Response as _dataPackage_Response, Response__Output as _dataPackage_Response__Output } from '../dataPackage/Response';

export interface DataServiceClient extends grpc.Client {
  getByLine(argument: _dataPackage_DataRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_dataPackage_Response__Output>;
  getByLine(argument: _dataPackage_DataRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_dataPackage_Response__Output>;
  getByLine(argument: _dataPackage_DataRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_dataPackage_Response__Output>;
  getByLine(argument: _dataPackage_DataRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_dataPackage_Response__Output>;
  
}

export interface DataServiceHandlers extends grpc.UntypedServiceImplementation {
  getByLine: grpc.handleServerStreamingCall<_dataPackage_DataRequest__Output, _dataPackage_Response>;
  
}

export interface DataServiceDefinition extends grpc.ServiceDefinition {
  getByLine: MethodDefinition<_dataPackage_DataRequest, _dataPackage_Response, _dataPackage_DataRequest__Output, _dataPackage_Response__Output>
}
