import { __assign } from "tslib";
export var FileAccessLog;
(function (FileAccessLog) {
  /**
   * @internal
   */
  FileAccessLog.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FileAccessLog || (FileAccessLog = {}));
export var AccessLog;
(function (AccessLog) {
  AccessLog.visit = function (value, visitor) {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  AccessLog.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.file !== undefined) return { file: FileAccessLog.filterSensitiveLog(obj.file) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(AccessLog || (AccessLog = {}));
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var ForbiddenException;
(function (ForbiddenException) {
  /**
   * @internal
   */
  ForbiddenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
  /**
   * @internal
   */
  InternalServerErrorException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
  /**
   * @internal
   */
  ListTagsForResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
export var TagRef;
(function (TagRef) {
  /**
   * @internal
   */
  TagRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagRef || (TagRef = {}));
export var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
  /**
   * @internal
   */
  ListTagsForResourceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceOutput || (ListTagsForResourceOutput = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var EgressFilterType;
(function (EgressFilterType) {
  EgressFilterType["ALLOW_ALL"] = "ALLOW_ALL";
  EgressFilterType["DROP_ALL"] = "DROP_ALL";
})(EgressFilterType || (EgressFilterType = {}));
export var EgressFilter;
(function (EgressFilter) {
  /**
   * @internal
   */
  EgressFilter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EgressFilter || (EgressFilter = {}));
export var MeshSpec;
(function (MeshSpec) {
  /**
   * @internal
   */
  MeshSpec.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MeshSpec || (MeshSpec = {}));
export var CreateMeshInput;
(function (CreateMeshInput) {
  /**
   * @internal
   */
  CreateMeshInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateMeshInput || (CreateMeshInput = {}));
export var ResourceMetadata;
(function (ResourceMetadata) {
  /**
   * @internal
   */
  ResourceMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceMetadata || (ResourceMetadata = {}));
export var MeshStatusCode;
(function (MeshStatusCode) {
  MeshStatusCode["ACTIVE"] = "ACTIVE";
  MeshStatusCode["DELETED"] = "DELETED";
  MeshStatusCode["INACTIVE"] = "INACTIVE";
})(MeshStatusCode || (MeshStatusCode = {}));
export var MeshStatus;
(function (MeshStatus) {
  /**
   * @internal
   */
  MeshStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MeshStatus || (MeshStatus = {}));
export var MeshData;
(function (MeshData) {
  /**
   * @internal
   */
  MeshData.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MeshData || (MeshData = {}));
export var CreateMeshOutput;
(function (CreateMeshOutput) {
  /**
   * @internal
   */
  CreateMeshOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateMeshOutput || (CreateMeshOutput = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var DeleteMeshInput;
(function (DeleteMeshInput) {
  /**
   * @internal
   */
  DeleteMeshInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteMeshInput || (DeleteMeshInput = {}));
export var DeleteMeshOutput;
(function (DeleteMeshOutput) {
  /**
   * @internal
   */
  DeleteMeshOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteMeshOutput || (DeleteMeshOutput = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceInUseException || (ResourceInUseException = {}));
export var DescribeMeshInput;
(function (DescribeMeshInput) {
  /**
   * @internal
   */
  DescribeMeshInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeMeshInput || (DescribeMeshInput = {}));
export var DescribeMeshOutput;
(function (DescribeMeshOutput) {
  /**
   * @internal
   */
  DescribeMeshOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeMeshOutput || (DescribeMeshOutput = {}));
export var ListMeshesInput;
(function (ListMeshesInput) {
  /**
   * @internal
   */
  ListMeshesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListMeshesInput || (ListMeshesInput = {}));
export var MeshRef;
(function (MeshRef) {
  /**
   * @internal
   */
  MeshRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MeshRef || (MeshRef = {}));
export var ListMeshesOutput;
(function (ListMeshesOutput) {
  /**
   * @internal
   */
  ListMeshesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListMeshesOutput || (ListMeshesOutput = {}));
export var UpdateMeshInput;
(function (UpdateMeshInput) {
  /**
   * @internal
   */
  UpdateMeshInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateMeshInput || (UpdateMeshInput = {}));
export var UpdateMeshOutput;
(function (UpdateMeshOutput) {
  /**
   * @internal
   */
  UpdateMeshOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateMeshOutput || (UpdateMeshOutput = {}));
export var VirtualGatewayListenerTlsFileCertificate;
(function (VirtualGatewayListenerTlsFileCertificate) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayListenerTlsFileCertificate || (VirtualGatewayListenerTlsFileCertificate = {}));
export var VirtualGatewayListenerTlsSdsCertificate;
(function (VirtualGatewayListenerTlsSdsCertificate) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayListenerTlsSdsCertificate || (VirtualGatewayListenerTlsSdsCertificate = {}));
export var VirtualGatewayClientTlsCertificate;
(function (VirtualGatewayClientTlsCertificate) {
  VirtualGatewayClientTlsCertificate.visit = function (value, visitor) {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayClientTlsCertificate.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.file !== undefined) return { file: VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualGatewayClientTlsCertificate || (VirtualGatewayClientTlsCertificate = {}));
export var SubjectAlternativeNameMatchers;
(function (SubjectAlternativeNameMatchers) {
  /**
   * @internal
   */
  SubjectAlternativeNameMatchers.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SubjectAlternativeNameMatchers || (SubjectAlternativeNameMatchers = {}));
export var SubjectAlternativeNames;
(function (SubjectAlternativeNames) {
  /**
   * @internal
   */
  SubjectAlternativeNames.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SubjectAlternativeNames || (SubjectAlternativeNames = {}));
export var VirtualGatewayTlsValidationContextAcmTrust;
(function (VirtualGatewayTlsValidationContextAcmTrust) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextAcmTrust.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayTlsValidationContextAcmTrust || (VirtualGatewayTlsValidationContextAcmTrust = {}));
export var VirtualGatewayTlsValidationContextFileTrust;
(function (VirtualGatewayTlsValidationContextFileTrust) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayTlsValidationContextFileTrust || (VirtualGatewayTlsValidationContextFileTrust = {}));
export var VirtualGatewayTlsValidationContextSdsTrust;
(function (VirtualGatewayTlsValidationContextSdsTrust) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayTlsValidationContextSdsTrust || (VirtualGatewayTlsValidationContextSdsTrust = {}));
export var VirtualGatewayTlsValidationContextTrust;
(function (VirtualGatewayTlsValidationContextTrust) {
  VirtualGatewayTlsValidationContextTrust.visit = function (value, visitor) {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextTrust.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.acm !== undefined) return { acm: VirtualGatewayTlsValidationContextAcmTrust.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined)
      return { file: VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualGatewayTlsValidationContextTrust || (VirtualGatewayTlsValidationContextTrust = {}));
export var VirtualGatewayTlsValidationContext;
(function (VirtualGatewayTlsValidationContext) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContext.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.trust && { trust: VirtualGatewayTlsValidationContextTrust.filterSensitiveLog(obj.trust) }
    );
  };
})(VirtualGatewayTlsValidationContext || (VirtualGatewayTlsValidationContext = {}));
export var VirtualGatewayClientPolicyTls;
(function (VirtualGatewayClientPolicyTls) {
  /**
   * @internal
   */
  VirtualGatewayClientPolicyTls.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.certificate && { certificate: VirtualGatewayClientTlsCertificate.filterSensitiveLog(obj.certificate) }
      ),
      obj.validation && { validation: VirtualGatewayTlsValidationContext.filterSensitiveLog(obj.validation) }
    );
  };
})(VirtualGatewayClientPolicyTls || (VirtualGatewayClientPolicyTls = {}));
export var VirtualGatewayClientPolicy;
(function (VirtualGatewayClientPolicy) {
  /**
   * @internal
   */
  VirtualGatewayClientPolicy.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.tls && { tls: VirtualGatewayClientPolicyTls.filterSensitiveLog(obj.tls) });
  };
})(VirtualGatewayClientPolicy || (VirtualGatewayClientPolicy = {}));
export var VirtualGatewayBackendDefaults;
(function (VirtualGatewayBackendDefaults) {
  /**
   * @internal
   */
  VirtualGatewayBackendDefaults.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.clientPolicy && { clientPolicy: VirtualGatewayClientPolicy.filterSensitiveLog(obj.clientPolicy) }
    );
  };
})(VirtualGatewayBackendDefaults || (VirtualGatewayBackendDefaults = {}));
export var VirtualGatewayGrpcConnectionPool;
(function (VirtualGatewayGrpcConnectionPool) {
  /**
   * @internal
   */
  VirtualGatewayGrpcConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayGrpcConnectionPool || (VirtualGatewayGrpcConnectionPool = {}));
export var VirtualGatewayHttpConnectionPool;
(function (VirtualGatewayHttpConnectionPool) {
  /**
   * @internal
   */
  VirtualGatewayHttpConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayHttpConnectionPool || (VirtualGatewayHttpConnectionPool = {}));
export var VirtualGatewayHttp2ConnectionPool;
(function (VirtualGatewayHttp2ConnectionPool) {
  /**
   * @internal
   */
  VirtualGatewayHttp2ConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayHttp2ConnectionPool || (VirtualGatewayHttp2ConnectionPool = {}));
export var VirtualGatewayConnectionPool;
(function (VirtualGatewayConnectionPool) {
  VirtualGatewayConnectionPool.visit = function (value, visitor) {
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayConnectionPool.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.http !== undefined) return { http: VirtualGatewayHttpConnectionPool.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: VirtualGatewayHttp2ConnectionPool.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: VirtualGatewayGrpcConnectionPool.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualGatewayConnectionPool || (VirtualGatewayConnectionPool = {}));
export var VirtualGatewayPortProtocol;
(function (VirtualGatewayPortProtocol) {
  VirtualGatewayPortProtocol["GRPC"] = "grpc";
  VirtualGatewayPortProtocol["HTTP"] = "http";
  VirtualGatewayPortProtocol["HTTP2"] = "http2";
})(VirtualGatewayPortProtocol || (VirtualGatewayPortProtocol = {}));
export var VirtualGatewayHealthCheckPolicy;
(function (VirtualGatewayHealthCheckPolicy) {
  /**
   * @internal
   */
  VirtualGatewayHealthCheckPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayHealthCheckPolicy || (VirtualGatewayHealthCheckPolicy = {}));
export var VirtualGatewayPortMapping;
(function (VirtualGatewayPortMapping) {
  /**
   * @internal
   */
  VirtualGatewayPortMapping.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayPortMapping || (VirtualGatewayPortMapping = {}));
export var VirtualGatewayListenerTlsAcmCertificate;
(function (VirtualGatewayListenerTlsAcmCertificate) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsAcmCertificate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayListenerTlsAcmCertificate || (VirtualGatewayListenerTlsAcmCertificate = {}));
export var VirtualGatewayListenerTlsCertificate;
(function (VirtualGatewayListenerTlsCertificate) {
  VirtualGatewayListenerTlsCertificate.visit = function (value, visitor) {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayListenerTlsCertificate.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.acm !== undefined) return { acm: VirtualGatewayListenerTlsAcmCertificate.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualGatewayListenerTlsCertificate || (VirtualGatewayListenerTlsCertificate = {}));
export var VirtualGatewayListenerTlsMode;
(function (VirtualGatewayListenerTlsMode) {
  VirtualGatewayListenerTlsMode["DISABLED"] = "DISABLED";
  VirtualGatewayListenerTlsMode["PERMISSIVE"] = "PERMISSIVE";
  VirtualGatewayListenerTlsMode["STRICT"] = "STRICT";
})(VirtualGatewayListenerTlsMode || (VirtualGatewayListenerTlsMode = {}));
export var VirtualGatewayListenerTlsValidationContextTrust;
(function (VirtualGatewayListenerTlsValidationContextTrust) {
  VirtualGatewayListenerTlsValidationContextTrust.visit = function (value, visitor) {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayListenerTlsValidationContextTrust.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.file !== undefined)
      return { file: VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualGatewayListenerTlsValidationContextTrust || (VirtualGatewayListenerTlsValidationContextTrust = {}));
export var VirtualGatewayListenerTlsValidationContext;
(function (VirtualGatewayListenerTlsValidationContext) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsValidationContext.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.trust && { trust: VirtualGatewayListenerTlsValidationContextTrust.filterSensitiveLog(obj.trust) }
    );
  };
})(VirtualGatewayListenerTlsValidationContext || (VirtualGatewayListenerTlsValidationContext = {}));
export var VirtualGatewayListenerTls;
(function (VirtualGatewayListenerTls) {
  /**
   * @internal
   */
  VirtualGatewayListenerTls.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.validation && {
          validation: VirtualGatewayListenerTlsValidationContext.filterSensitiveLog(obj.validation),
        }
      ),
      obj.certificate && { certificate: VirtualGatewayListenerTlsCertificate.filterSensitiveLog(obj.certificate) }
    );
  };
})(VirtualGatewayListenerTls || (VirtualGatewayListenerTls = {}));
export var VirtualGatewayListener;
(function (VirtualGatewayListener) {
  /**
   * @internal
   */
  VirtualGatewayListener.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.tls && { tls: VirtualGatewayListenerTls.filterSensitiveLog(obj.tls) }),
      obj.connectionPool && { connectionPool: VirtualGatewayConnectionPool.filterSensitiveLog(obj.connectionPool) }
    );
  };
})(VirtualGatewayListener || (VirtualGatewayListener = {}));
export var VirtualGatewayFileAccessLog;
(function (VirtualGatewayFileAccessLog) {
  /**
   * @internal
   */
  VirtualGatewayFileAccessLog.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayFileAccessLog || (VirtualGatewayFileAccessLog = {}));
export var VirtualGatewayAccessLog;
(function (VirtualGatewayAccessLog) {
  VirtualGatewayAccessLog.visit = function (value, visitor) {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayAccessLog.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.file !== undefined) return { file: VirtualGatewayFileAccessLog.filterSensitiveLog(obj.file) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualGatewayAccessLog || (VirtualGatewayAccessLog = {}));
export var VirtualGatewayLogging;
(function (VirtualGatewayLogging) {
  /**
   * @internal
   */
  VirtualGatewayLogging.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.accessLog && { accessLog: VirtualGatewayAccessLog.filterSensitiveLog(obj.accessLog) }
    );
  };
})(VirtualGatewayLogging || (VirtualGatewayLogging = {}));
export var VirtualGatewaySpec;
(function (VirtualGatewaySpec) {
  /**
   * @internal
   */
  VirtualGatewaySpec.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign({}, obj),
          obj.backendDefaults && {
            backendDefaults: VirtualGatewayBackendDefaults.filterSensitiveLog(obj.backendDefaults),
          }
        ),
        obj.listeners && {
          listeners: obj.listeners.map(function (item) {
            return VirtualGatewayListener.filterSensitiveLog(item);
          }),
        }
      ),
      obj.logging && { logging: VirtualGatewayLogging.filterSensitiveLog(obj.logging) }
    );
  };
})(VirtualGatewaySpec || (VirtualGatewaySpec = {}));
export var CreateVirtualGatewayInput;
(function (CreateVirtualGatewayInput) {
  /**
   * @internal
   */
  CreateVirtualGatewayInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) });
  };
})(CreateVirtualGatewayInput || (CreateVirtualGatewayInput = {}));
export var VirtualGatewayStatusCode;
(function (VirtualGatewayStatusCode) {
  VirtualGatewayStatusCode["ACTIVE"] = "ACTIVE";
  VirtualGatewayStatusCode["DELETED"] = "DELETED";
  VirtualGatewayStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualGatewayStatusCode || (VirtualGatewayStatusCode = {}));
export var VirtualGatewayStatus;
(function (VirtualGatewayStatus) {
  /**
   * @internal
   */
  VirtualGatewayStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayStatus || (VirtualGatewayStatus = {}));
export var VirtualGatewayData;
(function (VirtualGatewayData) {
  /**
   * @internal
   */
  VirtualGatewayData.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) });
  };
})(VirtualGatewayData || (VirtualGatewayData = {}));
export var CreateVirtualGatewayOutput;
(function (CreateVirtualGatewayOutput) {
  /**
   * @internal
   */
  CreateVirtualGatewayOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }
    );
  };
})(CreateVirtualGatewayOutput || (CreateVirtualGatewayOutput = {}));
export var DeleteVirtualGatewayInput;
(function (DeleteVirtualGatewayInput) {
  /**
   * @internal
   */
  DeleteVirtualGatewayInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVirtualGatewayInput || (DeleteVirtualGatewayInput = {}));
export var DeleteVirtualGatewayOutput;
(function (DeleteVirtualGatewayOutput) {
  /**
   * @internal
   */
  DeleteVirtualGatewayOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }
    );
  };
})(DeleteVirtualGatewayOutput || (DeleteVirtualGatewayOutput = {}));
export var DescribeVirtualGatewayInput;
(function (DescribeVirtualGatewayInput) {
  /**
   * @internal
   */
  DescribeVirtualGatewayInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeVirtualGatewayInput || (DescribeVirtualGatewayInput = {}));
export var DescribeVirtualGatewayOutput;
(function (DescribeVirtualGatewayOutput) {
  /**
   * @internal
   */
  DescribeVirtualGatewayOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }
    );
  };
})(DescribeVirtualGatewayOutput || (DescribeVirtualGatewayOutput = {}));
export var GatewayRouteVirtualService;
(function (GatewayRouteVirtualService) {
  /**
   * @internal
   */
  GatewayRouteVirtualService.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayRouteVirtualService || (GatewayRouteVirtualService = {}));
export var GatewayRouteTarget;
(function (GatewayRouteTarget) {
  /**
   * @internal
   */
  GatewayRouteTarget.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayRouteTarget || (GatewayRouteTarget = {}));
export var GrpcGatewayRouteAction;
(function (GrpcGatewayRouteAction) {
  /**
   * @internal
   */
  GrpcGatewayRouteAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcGatewayRouteAction || (GrpcGatewayRouteAction = {}));
export var GrpcGatewayRouteMatch;
(function (GrpcGatewayRouteMatch) {
  /**
   * @internal
   */
  GrpcGatewayRouteMatch.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcGatewayRouteMatch || (GrpcGatewayRouteMatch = {}));
export var GrpcGatewayRoute;
(function (GrpcGatewayRoute) {
  /**
   * @internal
   */
  GrpcGatewayRoute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcGatewayRoute || (GrpcGatewayRoute = {}));
export var HttpGatewayRouteAction;
(function (HttpGatewayRouteAction) {
  /**
   * @internal
   */
  HttpGatewayRouteAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpGatewayRouteAction || (HttpGatewayRouteAction = {}));
export var HttpGatewayRouteMatch;
(function (HttpGatewayRouteMatch) {
  /**
   * @internal
   */
  HttpGatewayRouteMatch.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpGatewayRouteMatch || (HttpGatewayRouteMatch = {}));
export var HttpGatewayRoute;
(function (HttpGatewayRoute) {
  /**
   * @internal
   */
  HttpGatewayRoute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpGatewayRoute || (HttpGatewayRoute = {}));
export var GatewayRouteSpec;
(function (GatewayRouteSpec) {
  /**
   * @internal
   */
  GatewayRouteSpec.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayRouteSpec || (GatewayRouteSpec = {}));
export var CreateGatewayRouteInput;
(function (CreateGatewayRouteInput) {
  /**
   * @internal
   */
  CreateGatewayRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateGatewayRouteInput || (CreateGatewayRouteInput = {}));
export var GatewayRouteStatusCode;
(function (GatewayRouteStatusCode) {
  GatewayRouteStatusCode["ACTIVE"] = "ACTIVE";
  GatewayRouteStatusCode["DELETED"] = "DELETED";
  GatewayRouteStatusCode["INACTIVE"] = "INACTIVE";
})(GatewayRouteStatusCode || (GatewayRouteStatusCode = {}));
export var GatewayRouteStatus;
(function (GatewayRouteStatus) {
  /**
   * @internal
   */
  GatewayRouteStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayRouteStatus || (GatewayRouteStatus = {}));
export var GatewayRouteData;
(function (GatewayRouteData) {
  /**
   * @internal
   */
  GatewayRouteData.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayRouteData || (GatewayRouteData = {}));
export var CreateGatewayRouteOutput;
(function (CreateGatewayRouteOutput) {
  /**
   * @internal
   */
  CreateGatewayRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateGatewayRouteOutput || (CreateGatewayRouteOutput = {}));
export var DeleteGatewayRouteInput;
(function (DeleteGatewayRouteInput) {
  /**
   * @internal
   */
  DeleteGatewayRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteGatewayRouteInput || (DeleteGatewayRouteInput = {}));
export var DeleteGatewayRouteOutput;
(function (DeleteGatewayRouteOutput) {
  /**
   * @internal
   */
  DeleteGatewayRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteGatewayRouteOutput || (DeleteGatewayRouteOutput = {}));
export var DescribeGatewayRouteInput;
(function (DescribeGatewayRouteInput) {
  /**
   * @internal
   */
  DescribeGatewayRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeGatewayRouteInput || (DescribeGatewayRouteInput = {}));
export var DescribeGatewayRouteOutput;
(function (DescribeGatewayRouteOutput) {
  /**
   * @internal
   */
  DescribeGatewayRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeGatewayRouteOutput || (DescribeGatewayRouteOutput = {}));
export var ListGatewayRoutesInput;
(function (ListGatewayRoutesInput) {
  /**
   * @internal
   */
  ListGatewayRoutesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListGatewayRoutesInput || (ListGatewayRoutesInput = {}));
export var GatewayRouteRef;
(function (GatewayRouteRef) {
  /**
   * @internal
   */
  GatewayRouteRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayRouteRef || (GatewayRouteRef = {}));
export var ListGatewayRoutesOutput;
(function (ListGatewayRoutesOutput) {
  /**
   * @internal
   */
  ListGatewayRoutesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListGatewayRoutesOutput || (ListGatewayRoutesOutput = {}));
export var UpdateGatewayRouteInput;
(function (UpdateGatewayRouteInput) {
  /**
   * @internal
   */
  UpdateGatewayRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateGatewayRouteInput || (UpdateGatewayRouteInput = {}));
export var UpdateGatewayRouteOutput;
(function (UpdateGatewayRouteOutput) {
  /**
   * @internal
   */
  UpdateGatewayRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateGatewayRouteOutput || (UpdateGatewayRouteOutput = {}));
export var ListVirtualGatewaysInput;
(function (ListVirtualGatewaysInput) {
  /**
   * @internal
   */
  ListVirtualGatewaysInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualGatewaysInput || (ListVirtualGatewaysInput = {}));
export var VirtualGatewayRef;
(function (VirtualGatewayRef) {
  /**
   * @internal
   */
  VirtualGatewayRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualGatewayRef || (VirtualGatewayRef = {}));
export var ListVirtualGatewaysOutput;
(function (ListVirtualGatewaysOutput) {
  /**
   * @internal
   */
  ListVirtualGatewaysOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualGatewaysOutput || (ListVirtualGatewaysOutput = {}));
export var UpdateVirtualGatewayInput;
(function (UpdateVirtualGatewayInput) {
  /**
   * @internal
   */
  UpdateVirtualGatewayInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) });
  };
})(UpdateVirtualGatewayInput || (UpdateVirtualGatewayInput = {}));
export var UpdateVirtualGatewayOutput;
(function (UpdateVirtualGatewayOutput) {
  /**
   * @internal
   */
  UpdateVirtualGatewayOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }
    );
  };
})(UpdateVirtualGatewayOutput || (UpdateVirtualGatewayOutput = {}));
export var ListenerTlsFileCertificate;
(function (ListenerTlsFileCertificate) {
  /**
   * @internal
   */
  ListenerTlsFileCertificate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListenerTlsFileCertificate || (ListenerTlsFileCertificate = {}));
export var ListenerTlsSdsCertificate;
(function (ListenerTlsSdsCertificate) {
  /**
   * @internal
   */
  ListenerTlsSdsCertificate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListenerTlsSdsCertificate || (ListenerTlsSdsCertificate = {}));
export var ClientTlsCertificate;
(function (ClientTlsCertificate) {
  ClientTlsCertificate.visit = function (value, visitor) {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ClientTlsCertificate.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.file !== undefined) return { file: ListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: ListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(ClientTlsCertificate || (ClientTlsCertificate = {}));
export var TlsValidationContextAcmTrust;
(function (TlsValidationContextAcmTrust) {
  /**
   * @internal
   */
  TlsValidationContextAcmTrust.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TlsValidationContextAcmTrust || (TlsValidationContextAcmTrust = {}));
export var TlsValidationContextFileTrust;
(function (TlsValidationContextFileTrust) {
  /**
   * @internal
   */
  TlsValidationContextFileTrust.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TlsValidationContextFileTrust || (TlsValidationContextFileTrust = {}));
export var TlsValidationContextSdsTrust;
(function (TlsValidationContextSdsTrust) {
  /**
   * @internal
   */
  TlsValidationContextSdsTrust.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TlsValidationContextSdsTrust || (TlsValidationContextSdsTrust = {}));
export var TlsValidationContextTrust;
(function (TlsValidationContextTrust) {
  TlsValidationContextTrust.visit = function (value, visitor) {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  TlsValidationContextTrust.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.acm !== undefined) return { acm: TlsValidationContextAcmTrust.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: TlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: TlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(TlsValidationContextTrust || (TlsValidationContextTrust = {}));
export var TlsValidationContext;
(function (TlsValidationContext) {
  /**
   * @internal
   */
  TlsValidationContext.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.trust && { trust: TlsValidationContextTrust.filterSensitiveLog(obj.trust) });
  };
})(TlsValidationContext || (TlsValidationContext = {}));
export var ClientPolicyTls;
(function (ClientPolicyTls) {
  /**
   * @internal
   */
  ClientPolicyTls.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.certificate && { certificate: ClientTlsCertificate.filterSensitiveLog(obj.certificate) }
      ),
      obj.validation && { validation: TlsValidationContext.filterSensitiveLog(obj.validation) }
    );
  };
})(ClientPolicyTls || (ClientPolicyTls = {}));
export var ClientPolicy;
(function (ClientPolicy) {
  /**
   * @internal
   */
  ClientPolicy.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.tls && { tls: ClientPolicyTls.filterSensitiveLog(obj.tls) });
  };
})(ClientPolicy || (ClientPolicy = {}));
export var BackendDefaults;
(function (BackendDefaults) {
  /**
   * @internal
   */
  BackendDefaults.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.clientPolicy && { clientPolicy: ClientPolicy.filterSensitiveLog(obj.clientPolicy) }
    );
  };
})(BackendDefaults || (BackendDefaults = {}));
export var VirtualServiceBackend;
(function (VirtualServiceBackend) {
  /**
   * @internal
   */
  VirtualServiceBackend.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.clientPolicy && { clientPolicy: ClientPolicy.filterSensitiveLog(obj.clientPolicy) }
    );
  };
})(VirtualServiceBackend || (VirtualServiceBackend = {}));
export var Backend;
(function (Backend) {
  Backend.visit = function (value, visitor) {
    if (value.virtualService !== undefined) return visitor.virtualService(value.virtualService);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  Backend.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.virtualService !== undefined)
      return { virtualService: VirtualServiceBackend.filterSensitiveLog(obj.virtualService) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(Backend || (Backend = {}));
export var VirtualNodeGrpcConnectionPool;
(function (VirtualNodeGrpcConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeGrpcConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeGrpcConnectionPool || (VirtualNodeGrpcConnectionPool = {}));
export var VirtualNodeHttpConnectionPool;
(function (VirtualNodeHttpConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeHttpConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeHttpConnectionPool || (VirtualNodeHttpConnectionPool = {}));
export var VirtualNodeHttp2ConnectionPool;
(function (VirtualNodeHttp2ConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeHttp2ConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeHttp2ConnectionPool || (VirtualNodeHttp2ConnectionPool = {}));
export var VirtualNodeTcpConnectionPool;
(function (VirtualNodeTcpConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeTcpConnectionPool.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeTcpConnectionPool || (VirtualNodeTcpConnectionPool = {}));
export var VirtualNodeConnectionPool;
(function (VirtualNodeConnectionPool) {
  VirtualNodeConnectionPool.visit = function (value, visitor) {
    if (value.tcp !== undefined) return visitor.tcp(value.tcp);
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualNodeConnectionPool.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.tcp !== undefined) return { tcp: VirtualNodeTcpConnectionPool.filterSensitiveLog(obj.tcp) };
    if (obj.http !== undefined) return { http: VirtualNodeHttpConnectionPool.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: VirtualNodeHttp2ConnectionPool.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: VirtualNodeGrpcConnectionPool.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualNodeConnectionPool || (VirtualNodeConnectionPool = {}));
export var PortProtocol;
(function (PortProtocol) {
  PortProtocol["GRPC"] = "grpc";
  PortProtocol["HTTP"] = "http";
  PortProtocol["HTTP2"] = "http2";
  PortProtocol["TCP"] = "tcp";
})(PortProtocol || (PortProtocol = {}));
export var HealthCheckPolicy;
(function (HealthCheckPolicy) {
  /**
   * @internal
   */
  HealthCheckPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HealthCheckPolicy || (HealthCheckPolicy = {}));
export var DurationUnit;
(function (DurationUnit) {
  DurationUnit["MS"] = "ms";
  DurationUnit["S"] = "s";
})(DurationUnit || (DurationUnit = {}));
export var Duration;
(function (Duration) {
  /**
   * @internal
   */
  Duration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Duration || (Duration = {}));
export var OutlierDetection;
(function (OutlierDetection) {
  /**
   * @internal
   */
  OutlierDetection.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OutlierDetection || (OutlierDetection = {}));
export var PortMapping;
(function (PortMapping) {
  /**
   * @internal
   */
  PortMapping.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PortMapping || (PortMapping = {}));
export var GrpcTimeout;
(function (GrpcTimeout) {
  /**
   * @internal
   */
  GrpcTimeout.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcTimeout || (GrpcTimeout = {}));
export var HttpTimeout;
(function (HttpTimeout) {
  /**
   * @internal
   */
  HttpTimeout.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpTimeout || (HttpTimeout = {}));
export var TcpTimeout;
(function (TcpTimeout) {
  /**
   * @internal
   */
  TcpTimeout.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TcpTimeout || (TcpTimeout = {}));
export var ListenerTimeout;
(function (ListenerTimeout) {
  ListenerTimeout.visit = function (value, visitor) {
    if (value.tcp !== undefined) return visitor.tcp(value.tcp);
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ListenerTimeout.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.tcp !== undefined) return { tcp: TcpTimeout.filterSensitiveLog(obj.tcp) };
    if (obj.http !== undefined) return { http: HttpTimeout.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: HttpTimeout.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: GrpcTimeout.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(ListenerTimeout || (ListenerTimeout = {}));
export var ListenerTlsAcmCertificate;
(function (ListenerTlsAcmCertificate) {
  /**
   * @internal
   */
  ListenerTlsAcmCertificate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListenerTlsAcmCertificate || (ListenerTlsAcmCertificate = {}));
export var ListenerTlsCertificate;
(function (ListenerTlsCertificate) {
  ListenerTlsCertificate.visit = function (value, visitor) {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ListenerTlsCertificate.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.acm !== undefined) return { acm: ListenerTlsAcmCertificate.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: ListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: ListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(ListenerTlsCertificate || (ListenerTlsCertificate = {}));
export var ListenerTlsMode;
(function (ListenerTlsMode) {
  ListenerTlsMode["DISABLED"] = "DISABLED";
  ListenerTlsMode["PERMISSIVE"] = "PERMISSIVE";
  ListenerTlsMode["STRICT"] = "STRICT";
})(ListenerTlsMode || (ListenerTlsMode = {}));
export var ListenerTlsValidationContextTrust;
(function (ListenerTlsValidationContextTrust) {
  ListenerTlsValidationContextTrust.visit = function (value, visitor) {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ListenerTlsValidationContextTrust.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.file !== undefined) return { file: TlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: TlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(ListenerTlsValidationContextTrust || (ListenerTlsValidationContextTrust = {}));
export var ListenerTlsValidationContext;
(function (ListenerTlsValidationContext) {
  /**
   * @internal
   */
  ListenerTlsValidationContext.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.trust && { trust: ListenerTlsValidationContextTrust.filterSensitiveLog(obj.trust) }
    );
  };
})(ListenerTlsValidationContext || (ListenerTlsValidationContext = {}));
export var ListenerTls;
(function (ListenerTls) {
  /**
   * @internal
   */
  ListenerTls.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.certificate && { certificate: ListenerTlsCertificate.filterSensitiveLog(obj.certificate) }
      ),
      obj.validation && { validation: ListenerTlsValidationContext.filterSensitiveLog(obj.validation) }
    );
  };
})(ListenerTls || (ListenerTls = {}));
export var Listener;
(function (Listener) {
  /**
   * @internal
   */
  Listener.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.tls && { tls: ListenerTls.filterSensitiveLog(obj.tls) }),
        obj.timeout && { timeout: ListenerTimeout.filterSensitiveLog(obj.timeout) }
      ),
      obj.connectionPool && { connectionPool: VirtualNodeConnectionPool.filterSensitiveLog(obj.connectionPool) }
    );
  };
})(Listener || (Listener = {}));
export var Logging;
(function (Logging) {
  /**
   * @internal
   */
  Logging.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.accessLog && { accessLog: AccessLog.filterSensitiveLog(obj.accessLog) });
  };
})(Logging || (Logging = {}));
export var AwsCloudMapInstanceAttribute;
(function (AwsCloudMapInstanceAttribute) {
  /**
   * @internal
   */
  AwsCloudMapInstanceAttribute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AwsCloudMapInstanceAttribute || (AwsCloudMapInstanceAttribute = {}));
export var AwsCloudMapServiceDiscovery;
(function (AwsCloudMapServiceDiscovery) {
  /**
   * @internal
   */
  AwsCloudMapServiceDiscovery.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AwsCloudMapServiceDiscovery || (AwsCloudMapServiceDiscovery = {}));
export var DnsServiceDiscovery;
(function (DnsServiceDiscovery) {
  /**
   * @internal
   */
  DnsServiceDiscovery.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DnsServiceDiscovery || (DnsServiceDiscovery = {}));
export var ServiceDiscovery;
(function (ServiceDiscovery) {
  ServiceDiscovery.visit = function (value, visitor) {
    if (value.dns !== undefined) return visitor.dns(value.dns);
    if (value.awsCloudMap !== undefined) return visitor.awsCloudMap(value.awsCloudMap);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ServiceDiscovery.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.dns !== undefined) return { dns: DnsServiceDiscovery.filterSensitiveLog(obj.dns) };
    if (obj.awsCloudMap !== undefined)
      return { awsCloudMap: AwsCloudMapServiceDiscovery.filterSensitiveLog(obj.awsCloudMap) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(ServiceDiscovery || (ServiceDiscovery = {}));
export var VirtualNodeSpec;
(function (VirtualNodeSpec) {
  /**
   * @internal
   */
  VirtualNodeSpec.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign({}, obj),
              obj.serviceDiscovery && { serviceDiscovery: ServiceDiscovery.filterSensitiveLog(obj.serviceDiscovery) }
            ),
            obj.listeners && {
              listeners: obj.listeners.map(function (item) {
                return Listener.filterSensitiveLog(item);
              }),
            }
          ),
          obj.backends && {
            backends: obj.backends.map(function (item) {
              return Backend.filterSensitiveLog(item);
            }),
          }
        ),
        obj.backendDefaults && { backendDefaults: BackendDefaults.filterSensitiveLog(obj.backendDefaults) }
      ),
      obj.logging && { logging: Logging.filterSensitiveLog(obj.logging) }
    );
  };
})(VirtualNodeSpec || (VirtualNodeSpec = {}));
export var CreateVirtualNodeInput;
(function (CreateVirtualNodeInput) {
  /**
   * @internal
   */
  CreateVirtualNodeInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) });
  };
})(CreateVirtualNodeInput || (CreateVirtualNodeInput = {}));
export var VirtualNodeStatusCode;
(function (VirtualNodeStatusCode) {
  VirtualNodeStatusCode["ACTIVE"] = "ACTIVE";
  VirtualNodeStatusCode["DELETED"] = "DELETED";
  VirtualNodeStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualNodeStatusCode || (VirtualNodeStatusCode = {}));
export var VirtualNodeStatus;
(function (VirtualNodeStatus) {
  /**
   * @internal
   */
  VirtualNodeStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeStatus || (VirtualNodeStatus = {}));
export var VirtualNodeData;
(function (VirtualNodeData) {
  /**
   * @internal
   */
  VirtualNodeData.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) });
  };
})(VirtualNodeData || (VirtualNodeData = {}));
export var CreateVirtualNodeOutput;
(function (CreateVirtualNodeOutput) {
  /**
   * @internal
   */
  CreateVirtualNodeOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }
    );
  };
})(CreateVirtualNodeOutput || (CreateVirtualNodeOutput = {}));
export var DeleteVirtualNodeInput;
(function (DeleteVirtualNodeInput) {
  /**
   * @internal
   */
  DeleteVirtualNodeInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVirtualNodeInput || (DeleteVirtualNodeInput = {}));
export var DeleteVirtualNodeOutput;
(function (DeleteVirtualNodeOutput) {
  /**
   * @internal
   */
  DeleteVirtualNodeOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }
    );
  };
})(DeleteVirtualNodeOutput || (DeleteVirtualNodeOutput = {}));
export var DescribeVirtualNodeInput;
(function (DescribeVirtualNodeInput) {
  /**
   * @internal
   */
  DescribeVirtualNodeInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeVirtualNodeInput || (DescribeVirtualNodeInput = {}));
export var DescribeVirtualNodeOutput;
(function (DescribeVirtualNodeOutput) {
  /**
   * @internal
   */
  DescribeVirtualNodeOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }
    );
  };
})(DescribeVirtualNodeOutput || (DescribeVirtualNodeOutput = {}));
export var ListVirtualNodesInput;
(function (ListVirtualNodesInput) {
  /**
   * @internal
   */
  ListVirtualNodesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualNodesInput || (ListVirtualNodesInput = {}));
export var VirtualNodeRef;
(function (VirtualNodeRef) {
  /**
   * @internal
   */
  VirtualNodeRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeRef || (VirtualNodeRef = {}));
export var ListVirtualNodesOutput;
(function (ListVirtualNodesOutput) {
  /**
   * @internal
   */
  ListVirtualNodesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualNodesOutput || (ListVirtualNodesOutput = {}));
export var UpdateVirtualNodeInput;
(function (UpdateVirtualNodeInput) {
  /**
   * @internal
   */
  UpdateVirtualNodeInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) });
  };
})(UpdateVirtualNodeInput || (UpdateVirtualNodeInput = {}));
export var UpdateVirtualNodeOutput;
(function (UpdateVirtualNodeOutput) {
  /**
   * @internal
   */
  UpdateVirtualNodeOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }
    );
  };
})(UpdateVirtualNodeOutput || (UpdateVirtualNodeOutput = {}));
export var VirtualRouterListener;
(function (VirtualRouterListener) {
  /**
   * @internal
   */
  VirtualRouterListener.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualRouterListener || (VirtualRouterListener = {}));
export var VirtualRouterSpec;
(function (VirtualRouterSpec) {
  /**
   * @internal
   */
  VirtualRouterSpec.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualRouterSpec || (VirtualRouterSpec = {}));
export var CreateVirtualRouterInput;
(function (CreateVirtualRouterInput) {
  /**
   * @internal
   */
  CreateVirtualRouterInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVirtualRouterInput || (CreateVirtualRouterInput = {}));
export var VirtualRouterStatusCode;
(function (VirtualRouterStatusCode) {
  VirtualRouterStatusCode["ACTIVE"] = "ACTIVE";
  VirtualRouterStatusCode["DELETED"] = "DELETED";
  VirtualRouterStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualRouterStatusCode || (VirtualRouterStatusCode = {}));
export var VirtualRouterStatus;
(function (VirtualRouterStatus) {
  /**
   * @internal
   */
  VirtualRouterStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualRouterStatus || (VirtualRouterStatus = {}));
export var VirtualRouterData;
(function (VirtualRouterData) {
  /**
   * @internal
   */
  VirtualRouterData.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualRouterData || (VirtualRouterData = {}));
export var CreateVirtualRouterOutput;
(function (CreateVirtualRouterOutput) {
  /**
   * @internal
   */
  CreateVirtualRouterOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVirtualRouterOutput || (CreateVirtualRouterOutput = {}));
export var DeleteVirtualRouterInput;
(function (DeleteVirtualRouterInput) {
  /**
   * @internal
   */
  DeleteVirtualRouterInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVirtualRouterInput || (DeleteVirtualRouterInput = {}));
export var DeleteVirtualRouterOutput;
(function (DeleteVirtualRouterOutput) {
  /**
   * @internal
   */
  DeleteVirtualRouterOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVirtualRouterOutput || (DeleteVirtualRouterOutput = {}));
export var DescribeVirtualRouterInput;
(function (DescribeVirtualRouterInput) {
  /**
   * @internal
   */
  DescribeVirtualRouterInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeVirtualRouterInput || (DescribeVirtualRouterInput = {}));
export var DescribeVirtualRouterOutput;
(function (DescribeVirtualRouterOutput) {
  /**
   * @internal
   */
  DescribeVirtualRouterOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeVirtualRouterOutput || (DescribeVirtualRouterOutput = {}));
export var ListVirtualRoutersInput;
(function (ListVirtualRoutersInput) {
  /**
   * @internal
   */
  ListVirtualRoutersInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualRoutersInput || (ListVirtualRoutersInput = {}));
export var VirtualRouterRef;
(function (VirtualRouterRef) {
  /**
   * @internal
   */
  VirtualRouterRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualRouterRef || (VirtualRouterRef = {}));
export var ListVirtualRoutersOutput;
(function (ListVirtualRoutersOutput) {
  /**
   * @internal
   */
  ListVirtualRoutersOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualRoutersOutput || (ListVirtualRoutersOutput = {}));
export var WeightedTarget;
(function (WeightedTarget) {
  /**
   * @internal
   */
  WeightedTarget.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(WeightedTarget || (WeightedTarget = {}));
export var GrpcRouteAction;
(function (GrpcRouteAction) {
  /**
   * @internal
   */
  GrpcRouteAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcRouteAction || (GrpcRouteAction = {}));
export var MatchRange;
(function (MatchRange) {
  /**
   * @internal
   */
  MatchRange.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MatchRange || (MatchRange = {}));
export var GrpcRouteMetadataMatchMethod;
(function (GrpcRouteMetadataMatchMethod) {
  GrpcRouteMetadataMatchMethod.visit = function (value, visitor) {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  GrpcRouteMetadataMatchMethod.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(GrpcRouteMetadataMatchMethod || (GrpcRouteMetadataMatchMethod = {}));
export var GrpcRouteMetadata;
(function (GrpcRouteMetadata) {
  /**
   * @internal
   */
  GrpcRouteMetadata.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.match && { match: GrpcRouteMetadataMatchMethod.filterSensitiveLog(obj.match) }
    );
  };
})(GrpcRouteMetadata || (GrpcRouteMetadata = {}));
export var GrpcRouteMatch;
(function (GrpcRouteMatch) {
  /**
   * @internal
   */
  GrpcRouteMatch.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.metadata && {
        metadata: obj.metadata.map(function (item) {
          return GrpcRouteMetadata.filterSensitiveLog(item);
        }),
      }
    );
  };
})(GrpcRouteMatch || (GrpcRouteMatch = {}));
export var GrpcRetryPolicyEvent;
(function (GrpcRetryPolicyEvent) {
  GrpcRetryPolicyEvent["CANCELLED"] = "cancelled";
  GrpcRetryPolicyEvent["DEADLINE_EXCEEDED"] = "deadline-exceeded";
  GrpcRetryPolicyEvent["INTERNAL"] = "internal";
  GrpcRetryPolicyEvent["RESOURCE_EXHAUSTED"] = "resource-exhausted";
  GrpcRetryPolicyEvent["UNAVAILABLE"] = "unavailable";
})(GrpcRetryPolicyEvent || (GrpcRetryPolicyEvent = {}));
export var TcpRetryPolicyEvent;
(function (TcpRetryPolicyEvent) {
  TcpRetryPolicyEvent["CONNECTION_ERROR"] = "connection-error";
})(TcpRetryPolicyEvent || (TcpRetryPolicyEvent = {}));
export var GrpcRetryPolicy;
(function (GrpcRetryPolicy) {
  /**
   * @internal
   */
  GrpcRetryPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcRetryPolicy || (GrpcRetryPolicy = {}));
export var GrpcRoute;
(function (GrpcRoute) {
  /**
   * @internal
   */
  GrpcRoute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GrpcRoute || (GrpcRoute = {}));
export var HttpRouteAction;
(function (HttpRouteAction) {
  /**
   * @internal
   */
  HttpRouteAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpRouteAction || (HttpRouteAction = {}));
export var HeaderMatchMethod;
(function (HeaderMatchMethod) {
  HeaderMatchMethod.visit = function (value, visitor) {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  HeaderMatchMethod.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(HeaderMatchMethod || (HeaderMatchMethod = {}));
export var HttpRouteHeader;
(function (HttpRouteHeader) {
  /**
   * @internal
   */
  HttpRouteHeader.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.match && { match: HeaderMatchMethod.filterSensitiveLog(obj.match) });
  };
})(HttpRouteHeader || (HttpRouteHeader = {}));
export var HttpMethod;
(function (HttpMethod) {
  HttpMethod["CONNECT"] = "CONNECT";
  HttpMethod["DELETE"] = "DELETE";
  HttpMethod["GET"] = "GET";
  HttpMethod["HEAD"] = "HEAD";
  HttpMethod["OPTIONS"] = "OPTIONS";
  HttpMethod["PATCH"] = "PATCH";
  HttpMethod["POST"] = "POST";
  HttpMethod["PUT"] = "PUT";
  HttpMethod["TRACE"] = "TRACE";
})(HttpMethod || (HttpMethod = {}));
export var HttpScheme;
(function (HttpScheme) {
  HttpScheme["HTTP"] = "http";
  HttpScheme["HTTPS"] = "https";
})(HttpScheme || (HttpScheme = {}));
export var HttpRouteMatch;
(function (HttpRouteMatch) {
  /**
   * @internal
   */
  HttpRouteMatch.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.headers && {
        headers: obj.headers.map(function (item) {
          return HttpRouteHeader.filterSensitiveLog(item);
        }),
      }
    );
  };
})(HttpRouteMatch || (HttpRouteMatch = {}));
export var HttpRetryPolicy;
(function (HttpRetryPolicy) {
  /**
   * @internal
   */
  HttpRetryPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpRetryPolicy || (HttpRetryPolicy = {}));
export var HttpRoute;
(function (HttpRoute) {
  /**
   * @internal
   */
  HttpRoute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpRoute || (HttpRoute = {}));
export var TcpRouteAction;
(function (TcpRouteAction) {
  /**
   * @internal
   */
  TcpRouteAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TcpRouteAction || (TcpRouteAction = {}));
export var TcpRoute;
(function (TcpRoute) {
  /**
   * @internal
   */
  TcpRoute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TcpRoute || (TcpRoute = {}));
export var RouteSpec;
(function (RouteSpec) {
  /**
   * @internal
   */
  RouteSpec.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RouteSpec || (RouteSpec = {}));
export var CreateRouteInput;
(function (CreateRouteInput) {
  /**
   * @internal
   */
  CreateRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRouteInput || (CreateRouteInput = {}));
export var RouteStatusCode;
(function (RouteStatusCode) {
  RouteStatusCode["ACTIVE"] = "ACTIVE";
  RouteStatusCode["DELETED"] = "DELETED";
  RouteStatusCode["INACTIVE"] = "INACTIVE";
})(RouteStatusCode || (RouteStatusCode = {}));
export var RouteStatus;
(function (RouteStatus) {
  /**
   * @internal
   */
  RouteStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RouteStatus || (RouteStatus = {}));
export var RouteData;
(function (RouteData) {
  /**
   * @internal
   */
  RouteData.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RouteData || (RouteData = {}));
export var CreateRouteOutput;
(function (CreateRouteOutput) {
  /**
   * @internal
   */
  CreateRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRouteOutput || (CreateRouteOutput = {}));
export var DeleteRouteInput;
(function (DeleteRouteInput) {
  /**
   * @internal
   */
  DeleteRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRouteInput || (DeleteRouteInput = {}));
export var DeleteRouteOutput;
(function (DeleteRouteOutput) {
  /**
   * @internal
   */
  DeleteRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRouteOutput || (DeleteRouteOutput = {}));
export var DescribeRouteInput;
(function (DescribeRouteInput) {
  /**
   * @internal
   */
  DescribeRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRouteInput || (DescribeRouteInput = {}));
export var DescribeRouteOutput;
(function (DescribeRouteOutput) {
  /**
   * @internal
   */
  DescribeRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRouteOutput || (DescribeRouteOutput = {}));
export var ListRoutesInput;
(function (ListRoutesInput) {
  /**
   * @internal
   */
  ListRoutesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRoutesInput || (ListRoutesInput = {}));
export var RouteRef;
(function (RouteRef) {
  /**
   * @internal
   */
  RouteRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RouteRef || (RouteRef = {}));
export var ListRoutesOutput;
(function (ListRoutesOutput) {
  /**
   * @internal
   */
  ListRoutesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRoutesOutput || (ListRoutesOutput = {}));
export var UpdateRouteInput;
(function (UpdateRouteInput) {
  /**
   * @internal
   */
  UpdateRouteInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRouteInput || (UpdateRouteInput = {}));
export var UpdateRouteOutput;
(function (UpdateRouteOutput) {
  /**
   * @internal
   */
  UpdateRouteOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRouteOutput || (UpdateRouteOutput = {}));
export var UpdateVirtualRouterInput;
(function (UpdateVirtualRouterInput) {
  /**
   * @internal
   */
  UpdateVirtualRouterInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVirtualRouterInput || (UpdateVirtualRouterInput = {}));
export var UpdateVirtualRouterOutput;
(function (UpdateVirtualRouterOutput) {
  /**
   * @internal
   */
  UpdateVirtualRouterOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVirtualRouterOutput || (UpdateVirtualRouterOutput = {}));
export var VirtualNodeServiceProvider;
(function (VirtualNodeServiceProvider) {
  /**
   * @internal
   */
  VirtualNodeServiceProvider.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualNodeServiceProvider || (VirtualNodeServiceProvider = {}));
export var VirtualRouterServiceProvider;
(function (VirtualRouterServiceProvider) {
  /**
   * @internal
   */
  VirtualRouterServiceProvider.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualRouterServiceProvider || (VirtualRouterServiceProvider = {}));
export var VirtualServiceProvider;
(function (VirtualServiceProvider) {
  VirtualServiceProvider.visit = function (value, visitor) {
    if (value.virtualNode !== undefined) return visitor.virtualNode(value.virtualNode);
    if (value.virtualRouter !== undefined) return visitor.virtualRouter(value.virtualRouter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualServiceProvider.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.virtualNode !== undefined)
      return { virtualNode: VirtualNodeServiceProvider.filterSensitiveLog(obj.virtualNode) };
    if (obj.virtualRouter !== undefined)
      return { virtualRouter: VirtualRouterServiceProvider.filterSensitiveLog(obj.virtualRouter) };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(VirtualServiceProvider || (VirtualServiceProvider = {}));
export var VirtualServiceSpec;
(function (VirtualServiceSpec) {
  /**
   * @internal
   */
  VirtualServiceSpec.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.provider && { provider: VirtualServiceProvider.filterSensitiveLog(obj.provider) }
    );
  };
})(VirtualServiceSpec || (VirtualServiceSpec = {}));
export var CreateVirtualServiceInput;
(function (CreateVirtualServiceInput) {
  /**
   * @internal
   */
  CreateVirtualServiceInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) });
  };
})(CreateVirtualServiceInput || (CreateVirtualServiceInput = {}));
export var VirtualServiceStatusCode;
(function (VirtualServiceStatusCode) {
  VirtualServiceStatusCode["ACTIVE"] = "ACTIVE";
  VirtualServiceStatusCode["DELETED"] = "DELETED";
  VirtualServiceStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualServiceStatusCode || (VirtualServiceStatusCode = {}));
export var VirtualServiceStatus;
(function (VirtualServiceStatus) {
  /**
   * @internal
   */
  VirtualServiceStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualServiceStatus || (VirtualServiceStatus = {}));
export var VirtualServiceData;
(function (VirtualServiceData) {
  /**
   * @internal
   */
  VirtualServiceData.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) });
  };
})(VirtualServiceData || (VirtualServiceData = {}));
export var CreateVirtualServiceOutput;
(function (CreateVirtualServiceOutput) {
  /**
   * @internal
   */
  CreateVirtualServiceOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }
    );
  };
})(CreateVirtualServiceOutput || (CreateVirtualServiceOutput = {}));
export var DeleteVirtualServiceInput;
(function (DeleteVirtualServiceInput) {
  /**
   * @internal
   */
  DeleteVirtualServiceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVirtualServiceInput || (DeleteVirtualServiceInput = {}));
export var DeleteVirtualServiceOutput;
(function (DeleteVirtualServiceOutput) {
  /**
   * @internal
   */
  DeleteVirtualServiceOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }
    );
  };
})(DeleteVirtualServiceOutput || (DeleteVirtualServiceOutput = {}));
export var DescribeVirtualServiceInput;
(function (DescribeVirtualServiceInput) {
  /**
   * @internal
   */
  DescribeVirtualServiceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeVirtualServiceInput || (DescribeVirtualServiceInput = {}));
export var DescribeVirtualServiceOutput;
(function (DescribeVirtualServiceOutput) {
  /**
   * @internal
   */
  DescribeVirtualServiceOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }
    );
  };
})(DescribeVirtualServiceOutput || (DescribeVirtualServiceOutput = {}));
export var ListVirtualServicesInput;
(function (ListVirtualServicesInput) {
  /**
   * @internal
   */
  ListVirtualServicesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualServicesInput || (ListVirtualServicesInput = {}));
export var VirtualServiceRef;
(function (VirtualServiceRef) {
  /**
   * @internal
   */
  VirtualServiceRef.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VirtualServiceRef || (VirtualServiceRef = {}));
export var ListVirtualServicesOutput;
(function (ListVirtualServicesOutput) {
  /**
   * @internal
   */
  ListVirtualServicesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVirtualServicesOutput || (ListVirtualServicesOutput = {}));
export var UpdateVirtualServiceInput;
(function (UpdateVirtualServiceInput) {
  /**
   * @internal
   */
  UpdateVirtualServiceInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) });
  };
})(UpdateVirtualServiceInput || (UpdateVirtualServiceInput = {}));
export var UpdateVirtualServiceOutput;
(function (UpdateVirtualServiceOutput) {
  /**
   * @internal
   */
  UpdateVirtualServiceOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }
    );
  };
})(UpdateVirtualServiceOutput || (UpdateVirtualServiceOutput = {}));
export var TagResourceInput;
(function (TagResourceInput) {
  /**
   * @internal
   */
  TagResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceInput || (TagResourceInput = {}));
export var TagResourceOutput;
(function (TagResourceOutput) {
  /**
   * @internal
   */
  TagResourceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceOutput || (TagResourceOutput = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TooManyTagsException || (TooManyTagsException = {}));
export var UntagResourceInput;
(function (UntagResourceInput) {
  /**
   * @internal
   */
  UntagResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceInput || (UntagResourceInput = {}));
export var UntagResourceOutput;
(function (UntagResourceOutput) {
  /**
   * @internal
   */
  UntagResourceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceOutput || (UntagResourceOutput = {}));
//# sourceMappingURL=models_0.js.map
