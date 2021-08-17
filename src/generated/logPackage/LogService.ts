// Original file: src/protos/logger.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _logPackage_Empty, Empty__Output as _logPackage_Empty__Output } from '../logPackage/Empty';
import type { LogNameRequest as _logPackage_LogNameRequest, LogNameRequest__Output as _logPackage_LogNameRequest__Output } from '../logPackage/LogNameRequest';
import type { LogRequest as _logPackage_LogRequest, LogRequest__Output as _logPackage_LogRequest__Output } from '../logPackage/LogRequest';

export interface LogServiceClient extends grpc.Client {
  log(argument: _logPackage_LogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  log(argument: _logPackage_LogRequest, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  
  logName(argument: _logPackage_LogNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  logName(argument: _logPackage_LogNameRequest, callback: (error?: grpc.ServiceError, result?: _logPackage_Empty__Output) => void): grpc.ClientUnaryCall;
  
}

export interface LogServiceHandlers extends grpc.UntypedServiceImplementation {
  log: grpc.handleUnaryCall<_logPackage_LogRequest__Output, _logPackage_Empty>;
  
  logName: grpc.handleUnaryCall<_logPackage_LogNameRequest__Output, _logPackage_Empty>;
  
}

export interface LogServiceDefinition extends grpc.ServiceDefinition {
  log: MethodDefinition<_logPackage_LogRequest, _logPackage_Empty, _logPackage_LogRequest__Output, _logPackage_Empty__Output>
  logName: MethodDefinition<_logPackage_LogNameRequest, _logPackage_Empty, _logPackage_LogNameRequest__Output, _logPackage_Empty__Output>
}
