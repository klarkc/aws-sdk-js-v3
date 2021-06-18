"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualGatewayPortProtocol =
  exports.VirtualGatewayConnectionPool =
  exports.VirtualGatewayHttp2ConnectionPool =
  exports.VirtualGatewayHttpConnectionPool =
  exports.VirtualGatewayGrpcConnectionPool =
  exports.VirtualGatewayBackendDefaults =
  exports.VirtualGatewayClientPolicy =
  exports.VirtualGatewayClientPolicyTls =
  exports.VirtualGatewayTlsValidationContext =
  exports.VirtualGatewayTlsValidationContextTrust =
  exports.VirtualGatewayTlsValidationContextSdsTrust =
  exports.VirtualGatewayTlsValidationContextFileTrust =
  exports.VirtualGatewayTlsValidationContextAcmTrust =
  exports.SubjectAlternativeNames =
  exports.SubjectAlternativeNameMatchers =
  exports.VirtualGatewayClientTlsCertificate =
  exports.VirtualGatewayListenerTlsSdsCertificate =
  exports.VirtualGatewayListenerTlsFileCertificate =
  exports.UpdateMeshOutput =
  exports.UpdateMeshInput =
  exports.ListMeshesOutput =
  exports.MeshRef =
  exports.ListMeshesInput =
  exports.DescribeMeshOutput =
  exports.DescribeMeshInput =
  exports.ResourceInUseException =
  exports.DeleteMeshOutput =
  exports.DeleteMeshInput =
  exports.LimitExceededException =
  exports.CreateMeshOutput =
  exports.MeshData =
  exports.MeshStatus =
  exports.MeshStatusCode =
  exports.ResourceMetadata =
  exports.CreateMeshInput =
  exports.MeshSpec =
  exports.EgressFilter =
  exports.EgressFilterType =
  exports.ConflictException =
  exports.TooManyRequestsException =
  exports.ServiceUnavailableException =
  exports.NotFoundException =
  exports.ListTagsForResourceOutput =
  exports.TagRef =
  exports.ListTagsForResourceInput =
  exports.InternalServerErrorException =
  exports.ForbiddenException =
  exports.BadRequestException =
  exports.AccessLog =
  exports.FileAccessLog =
    void 0;
exports.UpdateVirtualGatewayOutput =
  exports.UpdateVirtualGatewayInput =
  exports.ListVirtualGatewaysOutput =
  exports.VirtualGatewayRef =
  exports.ListVirtualGatewaysInput =
  exports.UpdateGatewayRouteOutput =
  exports.UpdateGatewayRouteInput =
  exports.ListGatewayRoutesOutput =
  exports.GatewayRouteRef =
  exports.ListGatewayRoutesInput =
  exports.DescribeGatewayRouteOutput =
  exports.DescribeGatewayRouteInput =
  exports.DeleteGatewayRouteOutput =
  exports.DeleteGatewayRouteInput =
  exports.CreateGatewayRouteOutput =
  exports.GatewayRouteData =
  exports.GatewayRouteStatus =
  exports.GatewayRouteStatusCode =
  exports.CreateGatewayRouteInput =
  exports.GatewayRouteSpec =
  exports.HttpGatewayRoute =
  exports.HttpGatewayRouteMatch =
  exports.HttpGatewayRouteAction =
  exports.GrpcGatewayRoute =
  exports.GrpcGatewayRouteMatch =
  exports.GrpcGatewayRouteAction =
  exports.GatewayRouteTarget =
  exports.GatewayRouteVirtualService =
  exports.DescribeVirtualGatewayOutput =
  exports.DescribeVirtualGatewayInput =
  exports.DeleteVirtualGatewayOutput =
  exports.DeleteVirtualGatewayInput =
  exports.CreateVirtualGatewayOutput =
  exports.VirtualGatewayData =
  exports.VirtualGatewayStatus =
  exports.VirtualGatewayStatusCode =
  exports.CreateVirtualGatewayInput =
  exports.VirtualGatewaySpec =
  exports.VirtualGatewayLogging =
  exports.VirtualGatewayAccessLog =
  exports.VirtualGatewayFileAccessLog =
  exports.VirtualGatewayListener =
  exports.VirtualGatewayListenerTls =
  exports.VirtualGatewayListenerTlsValidationContext =
  exports.VirtualGatewayListenerTlsValidationContextTrust =
  exports.VirtualGatewayListenerTlsMode =
  exports.VirtualGatewayListenerTlsCertificate =
  exports.VirtualGatewayListenerTlsAcmCertificate =
  exports.VirtualGatewayPortMapping =
  exports.VirtualGatewayHealthCheckPolicy =
    void 0;
exports.DescribeVirtualNodeOutput =
  exports.DescribeVirtualNodeInput =
  exports.DeleteVirtualNodeOutput =
  exports.DeleteVirtualNodeInput =
  exports.CreateVirtualNodeOutput =
  exports.VirtualNodeData =
  exports.VirtualNodeStatus =
  exports.VirtualNodeStatusCode =
  exports.CreateVirtualNodeInput =
  exports.VirtualNodeSpec =
  exports.ServiceDiscovery =
  exports.DnsServiceDiscovery =
  exports.AwsCloudMapServiceDiscovery =
  exports.AwsCloudMapInstanceAttribute =
  exports.Logging =
  exports.Listener =
  exports.ListenerTls =
  exports.ListenerTlsValidationContext =
  exports.ListenerTlsValidationContextTrust =
  exports.ListenerTlsMode =
  exports.ListenerTlsCertificate =
  exports.ListenerTlsAcmCertificate =
  exports.ListenerTimeout =
  exports.TcpTimeout =
  exports.HttpTimeout =
  exports.GrpcTimeout =
  exports.PortMapping =
  exports.OutlierDetection =
  exports.Duration =
  exports.DurationUnit =
  exports.HealthCheckPolicy =
  exports.PortProtocol =
  exports.VirtualNodeConnectionPool =
  exports.VirtualNodeTcpConnectionPool =
  exports.VirtualNodeHttp2ConnectionPool =
  exports.VirtualNodeHttpConnectionPool =
  exports.VirtualNodeGrpcConnectionPool =
  exports.Backend =
  exports.VirtualServiceBackend =
  exports.BackendDefaults =
  exports.ClientPolicy =
  exports.ClientPolicyTls =
  exports.TlsValidationContext =
  exports.TlsValidationContextTrust =
  exports.TlsValidationContextSdsTrust =
  exports.TlsValidationContextFileTrust =
  exports.TlsValidationContextAcmTrust =
  exports.ClientTlsCertificate =
  exports.ListenerTlsSdsCertificate =
  exports.ListenerTlsFileCertificate =
    void 0;
exports.ListRoutesInput =
  exports.DescribeRouteOutput =
  exports.DescribeRouteInput =
  exports.DeleteRouteOutput =
  exports.DeleteRouteInput =
  exports.CreateRouteOutput =
  exports.RouteData =
  exports.RouteStatus =
  exports.RouteStatusCode =
  exports.CreateRouteInput =
  exports.RouteSpec =
  exports.TcpRoute =
  exports.TcpRouteAction =
  exports.HttpRoute =
  exports.HttpRetryPolicy =
  exports.HttpRouteMatch =
  exports.HttpScheme =
  exports.HttpMethod =
  exports.HttpRouteHeader =
  exports.HeaderMatchMethod =
  exports.HttpRouteAction =
  exports.GrpcRoute =
  exports.GrpcRetryPolicy =
  exports.TcpRetryPolicyEvent =
  exports.GrpcRetryPolicyEvent =
  exports.GrpcRouteMatch =
  exports.GrpcRouteMetadata =
  exports.GrpcRouteMetadataMatchMethod =
  exports.MatchRange =
  exports.GrpcRouteAction =
  exports.WeightedTarget =
  exports.ListVirtualRoutersOutput =
  exports.VirtualRouterRef =
  exports.ListVirtualRoutersInput =
  exports.DescribeVirtualRouterOutput =
  exports.DescribeVirtualRouterInput =
  exports.DeleteVirtualRouterOutput =
  exports.DeleteVirtualRouterInput =
  exports.CreateVirtualRouterOutput =
  exports.VirtualRouterData =
  exports.VirtualRouterStatus =
  exports.VirtualRouterStatusCode =
  exports.CreateVirtualRouterInput =
  exports.VirtualRouterSpec =
  exports.VirtualRouterListener =
  exports.UpdateVirtualNodeOutput =
  exports.UpdateVirtualNodeInput =
  exports.ListVirtualNodesOutput =
  exports.VirtualNodeRef =
  exports.ListVirtualNodesInput =
    void 0;
exports.UntagResourceOutput =
  exports.UntagResourceInput =
  exports.TooManyTagsException =
  exports.TagResourceOutput =
  exports.TagResourceInput =
  exports.UpdateVirtualServiceOutput =
  exports.UpdateVirtualServiceInput =
  exports.ListVirtualServicesOutput =
  exports.VirtualServiceRef =
  exports.ListVirtualServicesInput =
  exports.DescribeVirtualServiceOutput =
  exports.DescribeVirtualServiceInput =
  exports.DeleteVirtualServiceOutput =
  exports.DeleteVirtualServiceInput =
  exports.CreateVirtualServiceOutput =
  exports.VirtualServiceData =
  exports.VirtualServiceStatus =
  exports.VirtualServiceStatusCode =
  exports.CreateVirtualServiceInput =
  exports.VirtualServiceSpec =
  exports.VirtualServiceProvider =
  exports.VirtualRouterServiceProvider =
  exports.VirtualNodeServiceProvider =
  exports.UpdateVirtualRouterOutput =
  exports.UpdateVirtualRouterInput =
  exports.UpdateRouteOutput =
  exports.UpdateRouteInput =
  exports.ListRoutesOutput =
  exports.RouteRef =
    void 0;
var FileAccessLog;
(function (FileAccessLog) {
  /**
   * @internal
   */
  FileAccessLog.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FileAccessLog = exports.FileAccessLog || (exports.FileAccessLog = {})));
var AccessLog;
(function (AccessLog) {
  AccessLog.visit = (value, visitor) => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  AccessLog.filterSensitiveLog = (obj) => {
    if (obj.file !== undefined) return { file: FileAccessLog.filterSensitiveLog(obj.file) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((AccessLog = exports.AccessLog || (exports.AccessLog = {})));
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var ForbiddenException;
(function (ForbiddenException) {
  /**
   * @internal
   */
  ForbiddenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {})));
var InternalServerErrorException;
(function (InternalServerErrorException) {
  /**
   * @internal
   */
  InternalServerErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}))
);
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
  /**
   * @internal
   */
  ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {})));
var TagRef;
(function (TagRef) {
  /**
   * @internal
   */
  TagRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagRef = exports.TagRef || (exports.TagRef = {})));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
  /**
   * @internal
   */
  ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {})));
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {})));
var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var EgressFilterType;
(function (EgressFilterType) {
  EgressFilterType["ALLOW_ALL"] = "ALLOW_ALL";
  EgressFilterType["DROP_ALL"] = "DROP_ALL";
})((EgressFilterType = exports.EgressFilterType || (exports.EgressFilterType = {})));
var EgressFilter;
(function (EgressFilter) {
  /**
   * @internal
   */
  EgressFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EgressFilter = exports.EgressFilter || (exports.EgressFilter = {})));
var MeshSpec;
(function (MeshSpec) {
  /**
   * @internal
   */
  MeshSpec.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MeshSpec = exports.MeshSpec || (exports.MeshSpec = {})));
var CreateMeshInput;
(function (CreateMeshInput) {
  /**
   * @internal
   */
  CreateMeshInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateMeshInput = exports.CreateMeshInput || (exports.CreateMeshInput = {})));
var ResourceMetadata;
(function (ResourceMetadata) {
  /**
   * @internal
   */
  ResourceMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceMetadata = exports.ResourceMetadata || (exports.ResourceMetadata = {})));
var MeshStatusCode;
(function (MeshStatusCode) {
  MeshStatusCode["ACTIVE"] = "ACTIVE";
  MeshStatusCode["DELETED"] = "DELETED";
  MeshStatusCode["INACTIVE"] = "INACTIVE";
})((MeshStatusCode = exports.MeshStatusCode || (exports.MeshStatusCode = {})));
var MeshStatus;
(function (MeshStatus) {
  /**
   * @internal
   */
  MeshStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MeshStatus = exports.MeshStatus || (exports.MeshStatus = {})));
var MeshData;
(function (MeshData) {
  /**
   * @internal
   */
  MeshData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MeshData = exports.MeshData || (exports.MeshData = {})));
var CreateMeshOutput;
(function (CreateMeshOutput) {
  /**
   * @internal
   */
  CreateMeshOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateMeshOutput = exports.CreateMeshOutput || (exports.CreateMeshOutput = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var DeleteMeshInput;
(function (DeleteMeshInput) {
  /**
   * @internal
   */
  DeleteMeshInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteMeshInput = exports.DeleteMeshInput || (exports.DeleteMeshInput = {})));
var DeleteMeshOutput;
(function (DeleteMeshOutput) {
  /**
   * @internal
   */
  DeleteMeshOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteMeshOutput = exports.DeleteMeshOutput || (exports.DeleteMeshOutput = {})));
var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {})));
var DescribeMeshInput;
(function (DescribeMeshInput) {
  /**
   * @internal
   */
  DescribeMeshInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeMeshInput = exports.DescribeMeshInput || (exports.DescribeMeshInput = {})));
var DescribeMeshOutput;
(function (DescribeMeshOutput) {
  /**
   * @internal
   */
  DescribeMeshOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeMeshOutput = exports.DescribeMeshOutput || (exports.DescribeMeshOutput = {})));
var ListMeshesInput;
(function (ListMeshesInput) {
  /**
   * @internal
   */
  ListMeshesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListMeshesInput = exports.ListMeshesInput || (exports.ListMeshesInput = {})));
var MeshRef;
(function (MeshRef) {
  /**
   * @internal
   */
  MeshRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MeshRef = exports.MeshRef || (exports.MeshRef = {})));
var ListMeshesOutput;
(function (ListMeshesOutput) {
  /**
   * @internal
   */
  ListMeshesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListMeshesOutput = exports.ListMeshesOutput || (exports.ListMeshesOutput = {})));
var UpdateMeshInput;
(function (UpdateMeshInput) {
  /**
   * @internal
   */
  UpdateMeshInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateMeshInput = exports.UpdateMeshInput || (exports.UpdateMeshInput = {})));
var UpdateMeshOutput;
(function (UpdateMeshOutput) {
  /**
   * @internal
   */
  UpdateMeshOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateMeshOutput = exports.UpdateMeshOutput || (exports.UpdateMeshOutput = {})));
var VirtualGatewayListenerTlsFileCertificate;
(function (VirtualGatewayListenerTlsFileCertificate) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayListenerTlsFileCertificate =
    exports.VirtualGatewayListenerTlsFileCertificate || (exports.VirtualGatewayListenerTlsFileCertificate = {}))
);
var VirtualGatewayListenerTlsSdsCertificate;
(function (VirtualGatewayListenerTlsSdsCertificate) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayListenerTlsSdsCertificate =
    exports.VirtualGatewayListenerTlsSdsCertificate || (exports.VirtualGatewayListenerTlsSdsCertificate = {}))
);
var VirtualGatewayClientTlsCertificate;
(function (VirtualGatewayClientTlsCertificate) {
  VirtualGatewayClientTlsCertificate.visit = (value, visitor) => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayClientTlsCertificate.filterSensitiveLog = (obj) => {
    if (obj.file !== undefined) return { file: VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (VirtualGatewayClientTlsCertificate =
    exports.VirtualGatewayClientTlsCertificate || (exports.VirtualGatewayClientTlsCertificate = {}))
);
var SubjectAlternativeNameMatchers;
(function (SubjectAlternativeNameMatchers) {
  /**
   * @internal
   */
  SubjectAlternativeNameMatchers.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SubjectAlternativeNameMatchers =
    exports.SubjectAlternativeNameMatchers || (exports.SubjectAlternativeNameMatchers = {}))
);
var SubjectAlternativeNames;
(function (SubjectAlternativeNames) {
  /**
   * @internal
   */
  SubjectAlternativeNames.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SubjectAlternativeNames = exports.SubjectAlternativeNames || (exports.SubjectAlternativeNames = {})));
var VirtualGatewayTlsValidationContextAcmTrust;
(function (VirtualGatewayTlsValidationContextAcmTrust) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextAcmTrust.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayTlsValidationContextAcmTrust =
    exports.VirtualGatewayTlsValidationContextAcmTrust || (exports.VirtualGatewayTlsValidationContextAcmTrust = {}))
);
var VirtualGatewayTlsValidationContextFileTrust;
(function (VirtualGatewayTlsValidationContextFileTrust) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayTlsValidationContextFileTrust =
    exports.VirtualGatewayTlsValidationContextFileTrust || (exports.VirtualGatewayTlsValidationContextFileTrust = {}))
);
var VirtualGatewayTlsValidationContextSdsTrust;
(function (VirtualGatewayTlsValidationContextSdsTrust) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayTlsValidationContextSdsTrust =
    exports.VirtualGatewayTlsValidationContextSdsTrust || (exports.VirtualGatewayTlsValidationContextSdsTrust = {}))
);
var VirtualGatewayTlsValidationContextTrust;
(function (VirtualGatewayTlsValidationContextTrust) {
  VirtualGatewayTlsValidationContextTrust.visit = (value, visitor) => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContextTrust.filterSensitiveLog = (obj) => {
    if (obj.acm !== undefined) return { acm: VirtualGatewayTlsValidationContextAcmTrust.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined)
      return { file: VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (VirtualGatewayTlsValidationContextTrust =
    exports.VirtualGatewayTlsValidationContextTrust || (exports.VirtualGatewayTlsValidationContextTrust = {}))
);
var VirtualGatewayTlsValidationContext;
(function (VirtualGatewayTlsValidationContext) {
  /**
   * @internal
   */
  VirtualGatewayTlsValidationContext.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.trust && { trust: VirtualGatewayTlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
})(
  (VirtualGatewayTlsValidationContext =
    exports.VirtualGatewayTlsValidationContext || (exports.VirtualGatewayTlsValidationContext = {}))
);
var VirtualGatewayClientPolicyTls;
(function (VirtualGatewayClientPolicyTls) {
  /**
   * @internal
   */
  VirtualGatewayClientPolicyTls.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.certificate && { certificate: VirtualGatewayClientTlsCertificate.filterSensitiveLog(obj.certificate) }),
    ...(obj.validation && { validation: VirtualGatewayTlsValidationContext.filterSensitiveLog(obj.validation) }),
  });
})(
  (VirtualGatewayClientPolicyTls =
    exports.VirtualGatewayClientPolicyTls || (exports.VirtualGatewayClientPolicyTls = {}))
);
var VirtualGatewayClientPolicy;
(function (VirtualGatewayClientPolicy) {
  /**
   * @internal
   */
  VirtualGatewayClientPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.tls && { tls: VirtualGatewayClientPolicyTls.filterSensitiveLog(obj.tls) }),
  });
})((VirtualGatewayClientPolicy = exports.VirtualGatewayClientPolicy || (exports.VirtualGatewayClientPolicy = {})));
var VirtualGatewayBackendDefaults;
(function (VirtualGatewayBackendDefaults) {
  /**
   * @internal
   */
  VirtualGatewayBackendDefaults.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientPolicy && { clientPolicy: VirtualGatewayClientPolicy.filterSensitiveLog(obj.clientPolicy) }),
  });
})(
  (VirtualGatewayBackendDefaults =
    exports.VirtualGatewayBackendDefaults || (exports.VirtualGatewayBackendDefaults = {}))
);
var VirtualGatewayGrpcConnectionPool;
(function (VirtualGatewayGrpcConnectionPool) {
  /**
   * @internal
   */
  VirtualGatewayGrpcConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayGrpcConnectionPool =
    exports.VirtualGatewayGrpcConnectionPool || (exports.VirtualGatewayGrpcConnectionPool = {}))
);
var VirtualGatewayHttpConnectionPool;
(function (VirtualGatewayHttpConnectionPool) {
  /**
   * @internal
   */
  VirtualGatewayHttpConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayHttpConnectionPool =
    exports.VirtualGatewayHttpConnectionPool || (exports.VirtualGatewayHttpConnectionPool = {}))
);
var VirtualGatewayHttp2ConnectionPool;
(function (VirtualGatewayHttp2ConnectionPool) {
  /**
   * @internal
   */
  VirtualGatewayHttp2ConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayHttp2ConnectionPool =
    exports.VirtualGatewayHttp2ConnectionPool || (exports.VirtualGatewayHttp2ConnectionPool = {}))
);
var VirtualGatewayConnectionPool;
(function (VirtualGatewayConnectionPool) {
  VirtualGatewayConnectionPool.visit = (value, visitor) => {
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayConnectionPool.filterSensitiveLog = (obj) => {
    if (obj.http !== undefined) return { http: VirtualGatewayHttpConnectionPool.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: VirtualGatewayHttp2ConnectionPool.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: VirtualGatewayGrpcConnectionPool.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (VirtualGatewayConnectionPool = exports.VirtualGatewayConnectionPool || (exports.VirtualGatewayConnectionPool = {}))
);
var VirtualGatewayPortProtocol;
(function (VirtualGatewayPortProtocol) {
  VirtualGatewayPortProtocol["GRPC"] = "grpc";
  VirtualGatewayPortProtocol["HTTP"] = "http";
  VirtualGatewayPortProtocol["HTTP2"] = "http2";
})((VirtualGatewayPortProtocol = exports.VirtualGatewayPortProtocol || (exports.VirtualGatewayPortProtocol = {})));
var VirtualGatewayHealthCheckPolicy;
(function (VirtualGatewayHealthCheckPolicy) {
  /**
   * @internal
   */
  VirtualGatewayHealthCheckPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayHealthCheckPolicy =
    exports.VirtualGatewayHealthCheckPolicy || (exports.VirtualGatewayHealthCheckPolicy = {}))
);
var VirtualGatewayPortMapping;
(function (VirtualGatewayPortMapping) {
  /**
   * @internal
   */
  VirtualGatewayPortMapping.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualGatewayPortMapping = exports.VirtualGatewayPortMapping || (exports.VirtualGatewayPortMapping = {})));
var VirtualGatewayListenerTlsAcmCertificate;
(function (VirtualGatewayListenerTlsAcmCertificate) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsAcmCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualGatewayListenerTlsAcmCertificate =
    exports.VirtualGatewayListenerTlsAcmCertificate || (exports.VirtualGatewayListenerTlsAcmCertificate = {}))
);
var VirtualGatewayListenerTlsCertificate;
(function (VirtualGatewayListenerTlsCertificate) {
  VirtualGatewayListenerTlsCertificate.visit = (value, visitor) => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayListenerTlsCertificate.filterSensitiveLog = (obj) => {
    if (obj.acm !== undefined) return { acm: VirtualGatewayListenerTlsAcmCertificate.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (VirtualGatewayListenerTlsCertificate =
    exports.VirtualGatewayListenerTlsCertificate || (exports.VirtualGatewayListenerTlsCertificate = {}))
);
var VirtualGatewayListenerTlsMode;
(function (VirtualGatewayListenerTlsMode) {
  VirtualGatewayListenerTlsMode["DISABLED"] = "DISABLED";
  VirtualGatewayListenerTlsMode["PERMISSIVE"] = "PERMISSIVE";
  VirtualGatewayListenerTlsMode["STRICT"] = "STRICT";
})(
  (VirtualGatewayListenerTlsMode =
    exports.VirtualGatewayListenerTlsMode || (exports.VirtualGatewayListenerTlsMode = {}))
);
var VirtualGatewayListenerTlsValidationContextTrust;
(function (VirtualGatewayListenerTlsValidationContextTrust) {
  VirtualGatewayListenerTlsValidationContextTrust.visit = (value, visitor) => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayListenerTlsValidationContextTrust.filterSensitiveLog = (obj) => {
    if (obj.file !== undefined)
      return { file: VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (VirtualGatewayListenerTlsValidationContextTrust =
    exports.VirtualGatewayListenerTlsValidationContextTrust ||
    (exports.VirtualGatewayListenerTlsValidationContextTrust = {}))
);
var VirtualGatewayListenerTlsValidationContext;
(function (VirtualGatewayListenerTlsValidationContext) {
  /**
   * @internal
   */
  VirtualGatewayListenerTlsValidationContext.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.trust && { trust: VirtualGatewayListenerTlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
})(
  (VirtualGatewayListenerTlsValidationContext =
    exports.VirtualGatewayListenerTlsValidationContext || (exports.VirtualGatewayListenerTlsValidationContext = {}))
);
var VirtualGatewayListenerTls;
(function (VirtualGatewayListenerTls) {
  /**
   * @internal
   */
  VirtualGatewayListenerTls.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.validation && {
      validation: VirtualGatewayListenerTlsValidationContext.filterSensitiveLog(obj.validation),
    }),
    ...(obj.certificate && { certificate: VirtualGatewayListenerTlsCertificate.filterSensitiveLog(obj.certificate) }),
  });
})((VirtualGatewayListenerTls = exports.VirtualGatewayListenerTls || (exports.VirtualGatewayListenerTls = {})));
var VirtualGatewayListener;
(function (VirtualGatewayListener) {
  /**
   * @internal
   */
  VirtualGatewayListener.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.tls && { tls: VirtualGatewayListenerTls.filterSensitiveLog(obj.tls) }),
    ...(obj.connectionPool && { connectionPool: VirtualGatewayConnectionPool.filterSensitiveLog(obj.connectionPool) }),
  });
})((VirtualGatewayListener = exports.VirtualGatewayListener || (exports.VirtualGatewayListener = {})));
var VirtualGatewayFileAccessLog;
(function (VirtualGatewayFileAccessLog) {
  /**
   * @internal
   */
  VirtualGatewayFileAccessLog.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualGatewayFileAccessLog = exports.VirtualGatewayFileAccessLog || (exports.VirtualGatewayFileAccessLog = {})));
var VirtualGatewayAccessLog;
(function (VirtualGatewayAccessLog) {
  VirtualGatewayAccessLog.visit = (value, visitor) => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualGatewayAccessLog.filterSensitiveLog = (obj) => {
    if (obj.file !== undefined) return { file: VirtualGatewayFileAccessLog.filterSensitiveLog(obj.file) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((VirtualGatewayAccessLog = exports.VirtualGatewayAccessLog || (exports.VirtualGatewayAccessLog = {})));
var VirtualGatewayLogging;
(function (VirtualGatewayLogging) {
  /**
   * @internal
   */
  VirtualGatewayLogging.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessLog && { accessLog: VirtualGatewayAccessLog.filterSensitiveLog(obj.accessLog) }),
  });
})((VirtualGatewayLogging = exports.VirtualGatewayLogging || (exports.VirtualGatewayLogging = {})));
var VirtualGatewaySpec;
(function (VirtualGatewaySpec) {
  /**
   * @internal
   */
  VirtualGatewaySpec.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.backendDefaults && {
      backendDefaults: VirtualGatewayBackendDefaults.filterSensitiveLog(obj.backendDefaults),
    }),
    ...(obj.listeners && { listeners: obj.listeners.map((item) => VirtualGatewayListener.filterSensitiveLog(item)) }),
    ...(obj.logging && { logging: VirtualGatewayLogging.filterSensitiveLog(obj.logging) }),
  });
})((VirtualGatewaySpec = exports.VirtualGatewaySpec || (exports.VirtualGatewaySpec = {})));
var CreateVirtualGatewayInput;
(function (CreateVirtualGatewayInput) {
  /**
   * @internal
   */
  CreateVirtualGatewayInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) }),
  });
})((CreateVirtualGatewayInput = exports.CreateVirtualGatewayInput || (exports.CreateVirtualGatewayInput = {})));
var VirtualGatewayStatusCode;
(function (VirtualGatewayStatusCode) {
  VirtualGatewayStatusCode["ACTIVE"] = "ACTIVE";
  VirtualGatewayStatusCode["DELETED"] = "DELETED";
  VirtualGatewayStatusCode["INACTIVE"] = "INACTIVE";
})((VirtualGatewayStatusCode = exports.VirtualGatewayStatusCode || (exports.VirtualGatewayStatusCode = {})));
var VirtualGatewayStatus;
(function (VirtualGatewayStatus) {
  /**
   * @internal
   */
  VirtualGatewayStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualGatewayStatus = exports.VirtualGatewayStatus || (exports.VirtualGatewayStatus = {})));
var VirtualGatewayData;
(function (VirtualGatewayData) {
  /**
   * @internal
   */
  VirtualGatewayData.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) }),
  });
})((VirtualGatewayData = exports.VirtualGatewayData || (exports.VirtualGatewayData = {})));
var CreateVirtualGatewayOutput;
(function (CreateVirtualGatewayOutput) {
  /**
   * @internal
   */
  CreateVirtualGatewayOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
})((CreateVirtualGatewayOutput = exports.CreateVirtualGatewayOutput || (exports.CreateVirtualGatewayOutput = {})));
var DeleteVirtualGatewayInput;
(function (DeleteVirtualGatewayInput) {
  /**
   * @internal
   */
  DeleteVirtualGatewayInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVirtualGatewayInput = exports.DeleteVirtualGatewayInput || (exports.DeleteVirtualGatewayInput = {})));
var DeleteVirtualGatewayOutput;
(function (DeleteVirtualGatewayOutput) {
  /**
   * @internal
   */
  DeleteVirtualGatewayOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
})((DeleteVirtualGatewayOutput = exports.DeleteVirtualGatewayOutput || (exports.DeleteVirtualGatewayOutput = {})));
var DescribeVirtualGatewayInput;
(function (DescribeVirtualGatewayInput) {
  /**
   * @internal
   */
  DescribeVirtualGatewayInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeVirtualGatewayInput = exports.DescribeVirtualGatewayInput || (exports.DescribeVirtualGatewayInput = {})));
var DescribeVirtualGatewayOutput;
(function (DescribeVirtualGatewayOutput) {
  /**
   * @internal
   */
  DescribeVirtualGatewayOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
})(
  (DescribeVirtualGatewayOutput = exports.DescribeVirtualGatewayOutput || (exports.DescribeVirtualGatewayOutput = {}))
);
var GatewayRouteVirtualService;
(function (GatewayRouteVirtualService) {
  /**
   * @internal
   */
  GatewayRouteVirtualService.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayRouteVirtualService = exports.GatewayRouteVirtualService || (exports.GatewayRouteVirtualService = {})));
var GatewayRouteTarget;
(function (GatewayRouteTarget) {
  /**
   * @internal
   */
  GatewayRouteTarget.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayRouteTarget = exports.GatewayRouteTarget || (exports.GatewayRouteTarget = {})));
var GrpcGatewayRouteAction;
(function (GrpcGatewayRouteAction) {
  /**
   * @internal
   */
  GrpcGatewayRouteAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcGatewayRouteAction = exports.GrpcGatewayRouteAction || (exports.GrpcGatewayRouteAction = {})));
var GrpcGatewayRouteMatch;
(function (GrpcGatewayRouteMatch) {
  /**
   * @internal
   */
  GrpcGatewayRouteMatch.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcGatewayRouteMatch = exports.GrpcGatewayRouteMatch || (exports.GrpcGatewayRouteMatch = {})));
var GrpcGatewayRoute;
(function (GrpcGatewayRoute) {
  /**
   * @internal
   */
  GrpcGatewayRoute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcGatewayRoute = exports.GrpcGatewayRoute || (exports.GrpcGatewayRoute = {})));
var HttpGatewayRouteAction;
(function (HttpGatewayRouteAction) {
  /**
   * @internal
   */
  HttpGatewayRouteAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpGatewayRouteAction = exports.HttpGatewayRouteAction || (exports.HttpGatewayRouteAction = {})));
var HttpGatewayRouteMatch;
(function (HttpGatewayRouteMatch) {
  /**
   * @internal
   */
  HttpGatewayRouteMatch.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpGatewayRouteMatch = exports.HttpGatewayRouteMatch || (exports.HttpGatewayRouteMatch = {})));
var HttpGatewayRoute;
(function (HttpGatewayRoute) {
  /**
   * @internal
   */
  HttpGatewayRoute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpGatewayRoute = exports.HttpGatewayRoute || (exports.HttpGatewayRoute = {})));
var GatewayRouteSpec;
(function (GatewayRouteSpec) {
  /**
   * @internal
   */
  GatewayRouteSpec.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayRouteSpec = exports.GatewayRouteSpec || (exports.GatewayRouteSpec = {})));
var CreateGatewayRouteInput;
(function (CreateGatewayRouteInput) {
  /**
   * @internal
   */
  CreateGatewayRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateGatewayRouteInput = exports.CreateGatewayRouteInput || (exports.CreateGatewayRouteInput = {})));
var GatewayRouteStatusCode;
(function (GatewayRouteStatusCode) {
  GatewayRouteStatusCode["ACTIVE"] = "ACTIVE";
  GatewayRouteStatusCode["DELETED"] = "DELETED";
  GatewayRouteStatusCode["INACTIVE"] = "INACTIVE";
})((GatewayRouteStatusCode = exports.GatewayRouteStatusCode || (exports.GatewayRouteStatusCode = {})));
var GatewayRouteStatus;
(function (GatewayRouteStatus) {
  /**
   * @internal
   */
  GatewayRouteStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayRouteStatus = exports.GatewayRouteStatus || (exports.GatewayRouteStatus = {})));
var GatewayRouteData;
(function (GatewayRouteData) {
  /**
   * @internal
   */
  GatewayRouteData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayRouteData = exports.GatewayRouteData || (exports.GatewayRouteData = {})));
var CreateGatewayRouteOutput;
(function (CreateGatewayRouteOutput) {
  /**
   * @internal
   */
  CreateGatewayRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateGatewayRouteOutput = exports.CreateGatewayRouteOutput || (exports.CreateGatewayRouteOutput = {})));
var DeleteGatewayRouteInput;
(function (DeleteGatewayRouteInput) {
  /**
   * @internal
   */
  DeleteGatewayRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteGatewayRouteInput = exports.DeleteGatewayRouteInput || (exports.DeleteGatewayRouteInput = {})));
var DeleteGatewayRouteOutput;
(function (DeleteGatewayRouteOutput) {
  /**
   * @internal
   */
  DeleteGatewayRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteGatewayRouteOutput = exports.DeleteGatewayRouteOutput || (exports.DeleteGatewayRouteOutput = {})));
var DescribeGatewayRouteInput;
(function (DescribeGatewayRouteInput) {
  /**
   * @internal
   */
  DescribeGatewayRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeGatewayRouteInput = exports.DescribeGatewayRouteInput || (exports.DescribeGatewayRouteInput = {})));
var DescribeGatewayRouteOutput;
(function (DescribeGatewayRouteOutput) {
  /**
   * @internal
   */
  DescribeGatewayRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeGatewayRouteOutput = exports.DescribeGatewayRouteOutput || (exports.DescribeGatewayRouteOutput = {})));
var ListGatewayRoutesInput;
(function (ListGatewayRoutesInput) {
  /**
   * @internal
   */
  ListGatewayRoutesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGatewayRoutesInput = exports.ListGatewayRoutesInput || (exports.ListGatewayRoutesInput = {})));
var GatewayRouteRef;
(function (GatewayRouteRef) {
  /**
   * @internal
   */
  GatewayRouteRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayRouteRef = exports.GatewayRouteRef || (exports.GatewayRouteRef = {})));
var ListGatewayRoutesOutput;
(function (ListGatewayRoutesOutput) {
  /**
   * @internal
   */
  ListGatewayRoutesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGatewayRoutesOutput = exports.ListGatewayRoutesOutput || (exports.ListGatewayRoutesOutput = {})));
var UpdateGatewayRouteInput;
(function (UpdateGatewayRouteInput) {
  /**
   * @internal
   */
  UpdateGatewayRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGatewayRouteInput = exports.UpdateGatewayRouteInput || (exports.UpdateGatewayRouteInput = {})));
var UpdateGatewayRouteOutput;
(function (UpdateGatewayRouteOutput) {
  /**
   * @internal
   */
  UpdateGatewayRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGatewayRouteOutput = exports.UpdateGatewayRouteOutput || (exports.UpdateGatewayRouteOutput = {})));
var ListVirtualGatewaysInput;
(function (ListVirtualGatewaysInput) {
  /**
   * @internal
   */
  ListVirtualGatewaysInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualGatewaysInput = exports.ListVirtualGatewaysInput || (exports.ListVirtualGatewaysInput = {})));
var VirtualGatewayRef;
(function (VirtualGatewayRef) {
  /**
   * @internal
   */
  VirtualGatewayRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualGatewayRef = exports.VirtualGatewayRef || (exports.VirtualGatewayRef = {})));
var ListVirtualGatewaysOutput;
(function (ListVirtualGatewaysOutput) {
  /**
   * @internal
   */
  ListVirtualGatewaysOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualGatewaysOutput = exports.ListVirtualGatewaysOutput || (exports.ListVirtualGatewaysOutput = {})));
var UpdateVirtualGatewayInput;
(function (UpdateVirtualGatewayInput) {
  /**
   * @internal
   */
  UpdateVirtualGatewayInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) }),
  });
})((UpdateVirtualGatewayInput = exports.UpdateVirtualGatewayInput || (exports.UpdateVirtualGatewayInput = {})));
var UpdateVirtualGatewayOutput;
(function (UpdateVirtualGatewayOutput) {
  /**
   * @internal
   */
  UpdateVirtualGatewayOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
})((UpdateVirtualGatewayOutput = exports.UpdateVirtualGatewayOutput || (exports.UpdateVirtualGatewayOutput = {})));
var ListenerTlsFileCertificate;
(function (ListenerTlsFileCertificate) {
  /**
   * @internal
   */
  ListenerTlsFileCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListenerTlsFileCertificate = exports.ListenerTlsFileCertificate || (exports.ListenerTlsFileCertificate = {})));
var ListenerTlsSdsCertificate;
(function (ListenerTlsSdsCertificate) {
  /**
   * @internal
   */
  ListenerTlsSdsCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListenerTlsSdsCertificate = exports.ListenerTlsSdsCertificate || (exports.ListenerTlsSdsCertificate = {})));
var ClientTlsCertificate;
(function (ClientTlsCertificate) {
  ClientTlsCertificate.visit = (value, visitor) => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ClientTlsCertificate.filterSensitiveLog = (obj) => {
    if (obj.file !== undefined) return { file: ListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: ListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((ClientTlsCertificate = exports.ClientTlsCertificate || (exports.ClientTlsCertificate = {})));
var TlsValidationContextAcmTrust;
(function (TlsValidationContextAcmTrust) {
  /**
   * @internal
   */
  TlsValidationContextAcmTrust.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TlsValidationContextAcmTrust = exports.TlsValidationContextAcmTrust || (exports.TlsValidationContextAcmTrust = {}))
);
var TlsValidationContextFileTrust;
(function (TlsValidationContextFileTrust) {
  /**
   * @internal
   */
  TlsValidationContextFileTrust.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TlsValidationContextFileTrust =
    exports.TlsValidationContextFileTrust || (exports.TlsValidationContextFileTrust = {}))
);
var TlsValidationContextSdsTrust;
(function (TlsValidationContextSdsTrust) {
  /**
   * @internal
   */
  TlsValidationContextSdsTrust.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TlsValidationContextSdsTrust = exports.TlsValidationContextSdsTrust || (exports.TlsValidationContextSdsTrust = {}))
);
var TlsValidationContextTrust;
(function (TlsValidationContextTrust) {
  TlsValidationContextTrust.visit = (value, visitor) => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  TlsValidationContextTrust.filterSensitiveLog = (obj) => {
    if (obj.acm !== undefined) return { acm: TlsValidationContextAcmTrust.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: TlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: TlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((TlsValidationContextTrust = exports.TlsValidationContextTrust || (exports.TlsValidationContextTrust = {})));
var TlsValidationContext;
(function (TlsValidationContext) {
  /**
   * @internal
   */
  TlsValidationContext.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.trust && { trust: TlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
})((TlsValidationContext = exports.TlsValidationContext || (exports.TlsValidationContext = {})));
var ClientPolicyTls;
(function (ClientPolicyTls) {
  /**
   * @internal
   */
  ClientPolicyTls.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.certificate && { certificate: ClientTlsCertificate.filterSensitiveLog(obj.certificate) }),
    ...(obj.validation && { validation: TlsValidationContext.filterSensitiveLog(obj.validation) }),
  });
})((ClientPolicyTls = exports.ClientPolicyTls || (exports.ClientPolicyTls = {})));
var ClientPolicy;
(function (ClientPolicy) {
  /**
   * @internal
   */
  ClientPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.tls && { tls: ClientPolicyTls.filterSensitiveLog(obj.tls) }),
  });
})((ClientPolicy = exports.ClientPolicy || (exports.ClientPolicy = {})));
var BackendDefaults;
(function (BackendDefaults) {
  /**
   * @internal
   */
  BackendDefaults.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientPolicy && { clientPolicy: ClientPolicy.filterSensitiveLog(obj.clientPolicy) }),
  });
})((BackendDefaults = exports.BackendDefaults || (exports.BackendDefaults = {})));
var VirtualServiceBackend;
(function (VirtualServiceBackend) {
  /**
   * @internal
   */
  VirtualServiceBackend.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientPolicy && { clientPolicy: ClientPolicy.filterSensitiveLog(obj.clientPolicy) }),
  });
})((VirtualServiceBackend = exports.VirtualServiceBackend || (exports.VirtualServiceBackend = {})));
var Backend;
(function (Backend) {
  Backend.visit = (value, visitor) => {
    if (value.virtualService !== undefined) return visitor.virtualService(value.virtualService);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  Backend.filterSensitiveLog = (obj) => {
    if (obj.virtualService !== undefined)
      return { virtualService: VirtualServiceBackend.filterSensitiveLog(obj.virtualService) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((Backend = exports.Backend || (exports.Backend = {})));
var VirtualNodeGrpcConnectionPool;
(function (VirtualNodeGrpcConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeGrpcConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualNodeGrpcConnectionPool =
    exports.VirtualNodeGrpcConnectionPool || (exports.VirtualNodeGrpcConnectionPool = {}))
);
var VirtualNodeHttpConnectionPool;
(function (VirtualNodeHttpConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeHttpConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualNodeHttpConnectionPool =
    exports.VirtualNodeHttpConnectionPool || (exports.VirtualNodeHttpConnectionPool = {}))
);
var VirtualNodeHttp2ConnectionPool;
(function (VirtualNodeHttp2ConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeHttp2ConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualNodeHttp2ConnectionPool =
    exports.VirtualNodeHttp2ConnectionPool || (exports.VirtualNodeHttp2ConnectionPool = {}))
);
var VirtualNodeTcpConnectionPool;
(function (VirtualNodeTcpConnectionPool) {
  /**
   * @internal
   */
  VirtualNodeTcpConnectionPool.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualNodeTcpConnectionPool = exports.VirtualNodeTcpConnectionPool || (exports.VirtualNodeTcpConnectionPool = {}))
);
var VirtualNodeConnectionPool;
(function (VirtualNodeConnectionPool) {
  VirtualNodeConnectionPool.visit = (value, visitor) => {
    if (value.tcp !== undefined) return visitor.tcp(value.tcp);
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualNodeConnectionPool.filterSensitiveLog = (obj) => {
    if (obj.tcp !== undefined) return { tcp: VirtualNodeTcpConnectionPool.filterSensitiveLog(obj.tcp) };
    if (obj.http !== undefined) return { http: VirtualNodeHttpConnectionPool.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: VirtualNodeHttp2ConnectionPool.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: VirtualNodeGrpcConnectionPool.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((VirtualNodeConnectionPool = exports.VirtualNodeConnectionPool || (exports.VirtualNodeConnectionPool = {})));
var PortProtocol;
(function (PortProtocol) {
  PortProtocol["GRPC"] = "grpc";
  PortProtocol["HTTP"] = "http";
  PortProtocol["HTTP2"] = "http2";
  PortProtocol["TCP"] = "tcp";
})((PortProtocol = exports.PortProtocol || (exports.PortProtocol = {})));
var HealthCheckPolicy;
(function (HealthCheckPolicy) {
  /**
   * @internal
   */
  HealthCheckPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HealthCheckPolicy = exports.HealthCheckPolicy || (exports.HealthCheckPolicy = {})));
var DurationUnit;
(function (DurationUnit) {
  DurationUnit["MS"] = "ms";
  DurationUnit["S"] = "s";
})((DurationUnit = exports.DurationUnit || (exports.DurationUnit = {})));
var Duration;
(function (Duration) {
  /**
   * @internal
   */
  Duration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Duration = exports.Duration || (exports.Duration = {})));
var OutlierDetection;
(function (OutlierDetection) {
  /**
   * @internal
   */
  OutlierDetection.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OutlierDetection = exports.OutlierDetection || (exports.OutlierDetection = {})));
var PortMapping;
(function (PortMapping) {
  /**
   * @internal
   */
  PortMapping.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PortMapping = exports.PortMapping || (exports.PortMapping = {})));
var GrpcTimeout;
(function (GrpcTimeout) {
  /**
   * @internal
   */
  GrpcTimeout.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcTimeout = exports.GrpcTimeout || (exports.GrpcTimeout = {})));
var HttpTimeout;
(function (HttpTimeout) {
  /**
   * @internal
   */
  HttpTimeout.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpTimeout = exports.HttpTimeout || (exports.HttpTimeout = {})));
var TcpTimeout;
(function (TcpTimeout) {
  /**
   * @internal
   */
  TcpTimeout.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TcpTimeout = exports.TcpTimeout || (exports.TcpTimeout = {})));
var ListenerTimeout;
(function (ListenerTimeout) {
  ListenerTimeout.visit = (value, visitor) => {
    if (value.tcp !== undefined) return visitor.tcp(value.tcp);
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ListenerTimeout.filterSensitiveLog = (obj) => {
    if (obj.tcp !== undefined) return { tcp: TcpTimeout.filterSensitiveLog(obj.tcp) };
    if (obj.http !== undefined) return { http: HttpTimeout.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: HttpTimeout.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: GrpcTimeout.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((ListenerTimeout = exports.ListenerTimeout || (exports.ListenerTimeout = {})));
var ListenerTlsAcmCertificate;
(function (ListenerTlsAcmCertificate) {
  /**
   * @internal
   */
  ListenerTlsAcmCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListenerTlsAcmCertificate = exports.ListenerTlsAcmCertificate || (exports.ListenerTlsAcmCertificate = {})));
var ListenerTlsCertificate;
(function (ListenerTlsCertificate) {
  ListenerTlsCertificate.visit = (value, visitor) => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ListenerTlsCertificate.filterSensitiveLog = (obj) => {
    if (obj.acm !== undefined) return { acm: ListenerTlsAcmCertificate.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: ListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: ListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((ListenerTlsCertificate = exports.ListenerTlsCertificate || (exports.ListenerTlsCertificate = {})));
var ListenerTlsMode;
(function (ListenerTlsMode) {
  ListenerTlsMode["DISABLED"] = "DISABLED";
  ListenerTlsMode["PERMISSIVE"] = "PERMISSIVE";
  ListenerTlsMode["STRICT"] = "STRICT";
})((ListenerTlsMode = exports.ListenerTlsMode || (exports.ListenerTlsMode = {})));
var ListenerTlsValidationContextTrust;
(function (ListenerTlsValidationContextTrust) {
  ListenerTlsValidationContextTrust.visit = (value, visitor) => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ListenerTlsValidationContextTrust.filterSensitiveLog = (obj) => {
    if (obj.file !== undefined) return { file: TlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: TlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (ListenerTlsValidationContextTrust =
    exports.ListenerTlsValidationContextTrust || (exports.ListenerTlsValidationContextTrust = {}))
);
var ListenerTlsValidationContext;
(function (ListenerTlsValidationContext) {
  /**
   * @internal
   */
  ListenerTlsValidationContext.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.trust && { trust: ListenerTlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
})(
  (ListenerTlsValidationContext = exports.ListenerTlsValidationContext || (exports.ListenerTlsValidationContext = {}))
);
var ListenerTls;
(function (ListenerTls) {
  /**
   * @internal
   */
  ListenerTls.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.certificate && { certificate: ListenerTlsCertificate.filterSensitiveLog(obj.certificate) }),
    ...(obj.validation && { validation: ListenerTlsValidationContext.filterSensitiveLog(obj.validation) }),
  });
})((ListenerTls = exports.ListenerTls || (exports.ListenerTls = {})));
var Listener;
(function (Listener) {
  /**
   * @internal
   */
  Listener.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.tls && { tls: ListenerTls.filterSensitiveLog(obj.tls) }),
    ...(obj.timeout && { timeout: ListenerTimeout.filterSensitiveLog(obj.timeout) }),
    ...(obj.connectionPool && { connectionPool: VirtualNodeConnectionPool.filterSensitiveLog(obj.connectionPool) }),
  });
})((Listener = exports.Listener || (exports.Listener = {})));
var Logging;
(function (Logging) {
  /**
   * @internal
   */
  Logging.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessLog && { accessLog: AccessLog.filterSensitiveLog(obj.accessLog) }),
  });
})((Logging = exports.Logging || (exports.Logging = {})));
var AwsCloudMapInstanceAttribute;
(function (AwsCloudMapInstanceAttribute) {
  /**
   * @internal
   */
  AwsCloudMapInstanceAttribute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AwsCloudMapInstanceAttribute = exports.AwsCloudMapInstanceAttribute || (exports.AwsCloudMapInstanceAttribute = {}))
);
var AwsCloudMapServiceDiscovery;
(function (AwsCloudMapServiceDiscovery) {
  /**
   * @internal
   */
  AwsCloudMapServiceDiscovery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AwsCloudMapServiceDiscovery = exports.AwsCloudMapServiceDiscovery || (exports.AwsCloudMapServiceDiscovery = {})));
var DnsServiceDiscovery;
(function (DnsServiceDiscovery) {
  /**
   * @internal
   */
  DnsServiceDiscovery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DnsServiceDiscovery = exports.DnsServiceDiscovery || (exports.DnsServiceDiscovery = {})));
var ServiceDiscovery;
(function (ServiceDiscovery) {
  ServiceDiscovery.visit = (value, visitor) => {
    if (value.dns !== undefined) return visitor.dns(value.dns);
    if (value.awsCloudMap !== undefined) return visitor.awsCloudMap(value.awsCloudMap);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  ServiceDiscovery.filterSensitiveLog = (obj) => {
    if (obj.dns !== undefined) return { dns: DnsServiceDiscovery.filterSensitiveLog(obj.dns) };
    if (obj.awsCloudMap !== undefined)
      return { awsCloudMap: AwsCloudMapServiceDiscovery.filterSensitiveLog(obj.awsCloudMap) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((ServiceDiscovery = exports.ServiceDiscovery || (exports.ServiceDiscovery = {})));
var VirtualNodeSpec;
(function (VirtualNodeSpec) {
  /**
   * @internal
   */
  VirtualNodeSpec.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.serviceDiscovery && { serviceDiscovery: ServiceDiscovery.filterSensitiveLog(obj.serviceDiscovery) }),
    ...(obj.listeners && { listeners: obj.listeners.map((item) => Listener.filterSensitiveLog(item)) }),
    ...(obj.backends && { backends: obj.backends.map((item) => Backend.filterSensitiveLog(item)) }),
    ...(obj.backendDefaults && { backendDefaults: BackendDefaults.filterSensitiveLog(obj.backendDefaults) }),
    ...(obj.logging && { logging: Logging.filterSensitiveLog(obj.logging) }),
  });
})((VirtualNodeSpec = exports.VirtualNodeSpec || (exports.VirtualNodeSpec = {})));
var CreateVirtualNodeInput;
(function (CreateVirtualNodeInput) {
  /**
   * @internal
   */
  CreateVirtualNodeInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) }),
  });
})((CreateVirtualNodeInput = exports.CreateVirtualNodeInput || (exports.CreateVirtualNodeInput = {})));
var VirtualNodeStatusCode;
(function (VirtualNodeStatusCode) {
  VirtualNodeStatusCode["ACTIVE"] = "ACTIVE";
  VirtualNodeStatusCode["DELETED"] = "DELETED";
  VirtualNodeStatusCode["INACTIVE"] = "INACTIVE";
})((VirtualNodeStatusCode = exports.VirtualNodeStatusCode || (exports.VirtualNodeStatusCode = {})));
var VirtualNodeStatus;
(function (VirtualNodeStatus) {
  /**
   * @internal
   */
  VirtualNodeStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualNodeStatus = exports.VirtualNodeStatus || (exports.VirtualNodeStatus = {})));
var VirtualNodeData;
(function (VirtualNodeData) {
  /**
   * @internal
   */
  VirtualNodeData.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) }),
  });
})((VirtualNodeData = exports.VirtualNodeData || (exports.VirtualNodeData = {})));
var CreateVirtualNodeOutput;
(function (CreateVirtualNodeOutput) {
  /**
   * @internal
   */
  CreateVirtualNodeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
})((CreateVirtualNodeOutput = exports.CreateVirtualNodeOutput || (exports.CreateVirtualNodeOutput = {})));
var DeleteVirtualNodeInput;
(function (DeleteVirtualNodeInput) {
  /**
   * @internal
   */
  DeleteVirtualNodeInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVirtualNodeInput = exports.DeleteVirtualNodeInput || (exports.DeleteVirtualNodeInput = {})));
var DeleteVirtualNodeOutput;
(function (DeleteVirtualNodeOutput) {
  /**
   * @internal
   */
  DeleteVirtualNodeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
})((DeleteVirtualNodeOutput = exports.DeleteVirtualNodeOutput || (exports.DeleteVirtualNodeOutput = {})));
var DescribeVirtualNodeInput;
(function (DescribeVirtualNodeInput) {
  /**
   * @internal
   */
  DescribeVirtualNodeInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeVirtualNodeInput = exports.DescribeVirtualNodeInput || (exports.DescribeVirtualNodeInput = {})));
var DescribeVirtualNodeOutput;
(function (DescribeVirtualNodeOutput) {
  /**
   * @internal
   */
  DescribeVirtualNodeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
})((DescribeVirtualNodeOutput = exports.DescribeVirtualNodeOutput || (exports.DescribeVirtualNodeOutput = {})));
var ListVirtualNodesInput;
(function (ListVirtualNodesInput) {
  /**
   * @internal
   */
  ListVirtualNodesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualNodesInput = exports.ListVirtualNodesInput || (exports.ListVirtualNodesInput = {})));
var VirtualNodeRef;
(function (VirtualNodeRef) {
  /**
   * @internal
   */
  VirtualNodeRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualNodeRef = exports.VirtualNodeRef || (exports.VirtualNodeRef = {})));
var ListVirtualNodesOutput;
(function (ListVirtualNodesOutput) {
  /**
   * @internal
   */
  ListVirtualNodesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualNodesOutput = exports.ListVirtualNodesOutput || (exports.ListVirtualNodesOutput = {})));
var UpdateVirtualNodeInput;
(function (UpdateVirtualNodeInput) {
  /**
   * @internal
   */
  UpdateVirtualNodeInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) }),
  });
})((UpdateVirtualNodeInput = exports.UpdateVirtualNodeInput || (exports.UpdateVirtualNodeInput = {})));
var UpdateVirtualNodeOutput;
(function (UpdateVirtualNodeOutput) {
  /**
   * @internal
   */
  UpdateVirtualNodeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
})((UpdateVirtualNodeOutput = exports.UpdateVirtualNodeOutput || (exports.UpdateVirtualNodeOutput = {})));
var VirtualRouterListener;
(function (VirtualRouterListener) {
  /**
   * @internal
   */
  VirtualRouterListener.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualRouterListener = exports.VirtualRouterListener || (exports.VirtualRouterListener = {})));
var VirtualRouterSpec;
(function (VirtualRouterSpec) {
  /**
   * @internal
   */
  VirtualRouterSpec.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualRouterSpec = exports.VirtualRouterSpec || (exports.VirtualRouterSpec = {})));
var CreateVirtualRouterInput;
(function (CreateVirtualRouterInput) {
  /**
   * @internal
   */
  CreateVirtualRouterInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateVirtualRouterInput = exports.CreateVirtualRouterInput || (exports.CreateVirtualRouterInput = {})));
var VirtualRouterStatusCode;
(function (VirtualRouterStatusCode) {
  VirtualRouterStatusCode["ACTIVE"] = "ACTIVE";
  VirtualRouterStatusCode["DELETED"] = "DELETED";
  VirtualRouterStatusCode["INACTIVE"] = "INACTIVE";
})((VirtualRouterStatusCode = exports.VirtualRouterStatusCode || (exports.VirtualRouterStatusCode = {})));
var VirtualRouterStatus;
(function (VirtualRouterStatus) {
  /**
   * @internal
   */
  VirtualRouterStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualRouterStatus = exports.VirtualRouterStatus || (exports.VirtualRouterStatus = {})));
var VirtualRouterData;
(function (VirtualRouterData) {
  /**
   * @internal
   */
  VirtualRouterData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualRouterData = exports.VirtualRouterData || (exports.VirtualRouterData = {})));
var CreateVirtualRouterOutput;
(function (CreateVirtualRouterOutput) {
  /**
   * @internal
   */
  CreateVirtualRouterOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateVirtualRouterOutput = exports.CreateVirtualRouterOutput || (exports.CreateVirtualRouterOutput = {})));
var DeleteVirtualRouterInput;
(function (DeleteVirtualRouterInput) {
  /**
   * @internal
   */
  DeleteVirtualRouterInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVirtualRouterInput = exports.DeleteVirtualRouterInput || (exports.DeleteVirtualRouterInput = {})));
var DeleteVirtualRouterOutput;
(function (DeleteVirtualRouterOutput) {
  /**
   * @internal
   */
  DeleteVirtualRouterOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVirtualRouterOutput = exports.DeleteVirtualRouterOutput || (exports.DeleteVirtualRouterOutput = {})));
var DescribeVirtualRouterInput;
(function (DescribeVirtualRouterInput) {
  /**
   * @internal
   */
  DescribeVirtualRouterInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeVirtualRouterInput = exports.DescribeVirtualRouterInput || (exports.DescribeVirtualRouterInput = {})));
var DescribeVirtualRouterOutput;
(function (DescribeVirtualRouterOutput) {
  /**
   * @internal
   */
  DescribeVirtualRouterOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeVirtualRouterOutput = exports.DescribeVirtualRouterOutput || (exports.DescribeVirtualRouterOutput = {})));
var ListVirtualRoutersInput;
(function (ListVirtualRoutersInput) {
  /**
   * @internal
   */
  ListVirtualRoutersInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualRoutersInput = exports.ListVirtualRoutersInput || (exports.ListVirtualRoutersInput = {})));
var VirtualRouterRef;
(function (VirtualRouterRef) {
  /**
   * @internal
   */
  VirtualRouterRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualRouterRef = exports.VirtualRouterRef || (exports.VirtualRouterRef = {})));
var ListVirtualRoutersOutput;
(function (ListVirtualRoutersOutput) {
  /**
   * @internal
   */
  ListVirtualRoutersOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualRoutersOutput = exports.ListVirtualRoutersOutput || (exports.ListVirtualRoutersOutput = {})));
var WeightedTarget;
(function (WeightedTarget) {
  /**
   * @internal
   */
  WeightedTarget.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WeightedTarget = exports.WeightedTarget || (exports.WeightedTarget = {})));
var GrpcRouteAction;
(function (GrpcRouteAction) {
  /**
   * @internal
   */
  GrpcRouteAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcRouteAction = exports.GrpcRouteAction || (exports.GrpcRouteAction = {})));
var MatchRange;
(function (MatchRange) {
  /**
   * @internal
   */
  MatchRange.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MatchRange = exports.MatchRange || (exports.MatchRange = {})));
var GrpcRouteMetadataMatchMethod;
(function (GrpcRouteMetadataMatchMethod) {
  GrpcRouteMetadataMatchMethod.visit = (value, visitor) => {
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
  GrpcRouteMetadataMatchMethod.filterSensitiveLog = (obj) => {
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})(
  (GrpcRouteMetadataMatchMethod = exports.GrpcRouteMetadataMatchMethod || (exports.GrpcRouteMetadataMatchMethod = {}))
);
var GrpcRouteMetadata;
(function (GrpcRouteMetadata) {
  /**
   * @internal
   */
  GrpcRouteMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.match && { match: GrpcRouteMetadataMatchMethod.filterSensitiveLog(obj.match) }),
  });
})((GrpcRouteMetadata = exports.GrpcRouteMetadata || (exports.GrpcRouteMetadata = {})));
var GrpcRouteMatch;
(function (GrpcRouteMatch) {
  /**
   * @internal
   */
  GrpcRouteMatch.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.metadata && { metadata: obj.metadata.map((item) => GrpcRouteMetadata.filterSensitiveLog(item)) }),
  });
})((GrpcRouteMatch = exports.GrpcRouteMatch || (exports.GrpcRouteMatch = {})));
var GrpcRetryPolicyEvent;
(function (GrpcRetryPolicyEvent) {
  GrpcRetryPolicyEvent["CANCELLED"] = "cancelled";
  GrpcRetryPolicyEvent["DEADLINE_EXCEEDED"] = "deadline-exceeded";
  GrpcRetryPolicyEvent["INTERNAL"] = "internal";
  GrpcRetryPolicyEvent["RESOURCE_EXHAUSTED"] = "resource-exhausted";
  GrpcRetryPolicyEvent["UNAVAILABLE"] = "unavailable";
})((GrpcRetryPolicyEvent = exports.GrpcRetryPolicyEvent || (exports.GrpcRetryPolicyEvent = {})));
var TcpRetryPolicyEvent;
(function (TcpRetryPolicyEvent) {
  TcpRetryPolicyEvent["CONNECTION_ERROR"] = "connection-error";
})((TcpRetryPolicyEvent = exports.TcpRetryPolicyEvent || (exports.TcpRetryPolicyEvent = {})));
var GrpcRetryPolicy;
(function (GrpcRetryPolicy) {
  /**
   * @internal
   */
  GrpcRetryPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcRetryPolicy = exports.GrpcRetryPolicy || (exports.GrpcRetryPolicy = {})));
var GrpcRoute;
(function (GrpcRoute) {
  /**
   * @internal
   */
  GrpcRoute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GrpcRoute = exports.GrpcRoute || (exports.GrpcRoute = {})));
var HttpRouteAction;
(function (HttpRouteAction) {
  /**
   * @internal
   */
  HttpRouteAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpRouteAction = exports.HttpRouteAction || (exports.HttpRouteAction = {})));
var HeaderMatchMethod;
(function (HeaderMatchMethod) {
  HeaderMatchMethod.visit = (value, visitor) => {
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
  HeaderMatchMethod.filterSensitiveLog = (obj) => {
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((HeaderMatchMethod = exports.HeaderMatchMethod || (exports.HeaderMatchMethod = {})));
var HttpRouteHeader;
(function (HttpRouteHeader) {
  /**
   * @internal
   */
  HttpRouteHeader.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.match && { match: HeaderMatchMethod.filterSensitiveLog(obj.match) }),
  });
})((HttpRouteHeader = exports.HttpRouteHeader || (exports.HttpRouteHeader = {})));
var HttpMethod;
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
})((HttpMethod = exports.HttpMethod || (exports.HttpMethod = {})));
var HttpScheme;
(function (HttpScheme) {
  HttpScheme["HTTP"] = "http";
  HttpScheme["HTTPS"] = "https";
})((HttpScheme = exports.HttpScheme || (exports.HttpScheme = {})));
var HttpRouteMatch;
(function (HttpRouteMatch) {
  /**
   * @internal
   */
  HttpRouteMatch.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.headers && { headers: obj.headers.map((item) => HttpRouteHeader.filterSensitiveLog(item)) }),
  });
})((HttpRouteMatch = exports.HttpRouteMatch || (exports.HttpRouteMatch = {})));
var HttpRetryPolicy;
(function (HttpRetryPolicy) {
  /**
   * @internal
   */
  HttpRetryPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpRetryPolicy = exports.HttpRetryPolicy || (exports.HttpRetryPolicy = {})));
var HttpRoute;
(function (HttpRoute) {
  /**
   * @internal
   */
  HttpRoute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpRoute = exports.HttpRoute || (exports.HttpRoute = {})));
var TcpRouteAction;
(function (TcpRouteAction) {
  /**
   * @internal
   */
  TcpRouteAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TcpRouteAction = exports.TcpRouteAction || (exports.TcpRouteAction = {})));
var TcpRoute;
(function (TcpRoute) {
  /**
   * @internal
   */
  TcpRoute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TcpRoute = exports.TcpRoute || (exports.TcpRoute = {})));
var RouteSpec;
(function (RouteSpec) {
  /**
   * @internal
   */
  RouteSpec.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RouteSpec = exports.RouteSpec || (exports.RouteSpec = {})));
var CreateRouteInput;
(function (CreateRouteInput) {
  /**
   * @internal
   */
  CreateRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRouteInput = exports.CreateRouteInput || (exports.CreateRouteInput = {})));
var RouteStatusCode;
(function (RouteStatusCode) {
  RouteStatusCode["ACTIVE"] = "ACTIVE";
  RouteStatusCode["DELETED"] = "DELETED";
  RouteStatusCode["INACTIVE"] = "INACTIVE";
})((RouteStatusCode = exports.RouteStatusCode || (exports.RouteStatusCode = {})));
var RouteStatus;
(function (RouteStatus) {
  /**
   * @internal
   */
  RouteStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RouteStatus = exports.RouteStatus || (exports.RouteStatus = {})));
var RouteData;
(function (RouteData) {
  /**
   * @internal
   */
  RouteData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RouteData = exports.RouteData || (exports.RouteData = {})));
var CreateRouteOutput;
(function (CreateRouteOutput) {
  /**
   * @internal
   */
  CreateRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRouteOutput = exports.CreateRouteOutput || (exports.CreateRouteOutput = {})));
var DeleteRouteInput;
(function (DeleteRouteInput) {
  /**
   * @internal
   */
  DeleteRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRouteInput = exports.DeleteRouteInput || (exports.DeleteRouteInput = {})));
var DeleteRouteOutput;
(function (DeleteRouteOutput) {
  /**
   * @internal
   */
  DeleteRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRouteOutput = exports.DeleteRouteOutput || (exports.DeleteRouteOutput = {})));
var DescribeRouteInput;
(function (DescribeRouteInput) {
  /**
   * @internal
   */
  DescribeRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRouteInput = exports.DescribeRouteInput || (exports.DescribeRouteInput = {})));
var DescribeRouteOutput;
(function (DescribeRouteOutput) {
  /**
   * @internal
   */
  DescribeRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRouteOutput = exports.DescribeRouteOutput || (exports.DescribeRouteOutput = {})));
var ListRoutesInput;
(function (ListRoutesInput) {
  /**
   * @internal
   */
  ListRoutesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListRoutesInput = exports.ListRoutesInput || (exports.ListRoutesInput = {})));
var RouteRef;
(function (RouteRef) {
  /**
   * @internal
   */
  RouteRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RouteRef = exports.RouteRef || (exports.RouteRef = {})));
var ListRoutesOutput;
(function (ListRoutesOutput) {
  /**
   * @internal
   */
  ListRoutesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListRoutesOutput = exports.ListRoutesOutput || (exports.ListRoutesOutput = {})));
var UpdateRouteInput;
(function (UpdateRouteInput) {
  /**
   * @internal
   */
  UpdateRouteInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRouteInput = exports.UpdateRouteInput || (exports.UpdateRouteInput = {})));
var UpdateRouteOutput;
(function (UpdateRouteOutput) {
  /**
   * @internal
   */
  UpdateRouteOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRouteOutput = exports.UpdateRouteOutput || (exports.UpdateRouteOutput = {})));
var UpdateVirtualRouterInput;
(function (UpdateVirtualRouterInput) {
  /**
   * @internal
   */
  UpdateVirtualRouterInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateVirtualRouterInput = exports.UpdateVirtualRouterInput || (exports.UpdateVirtualRouterInput = {})));
var UpdateVirtualRouterOutput;
(function (UpdateVirtualRouterOutput) {
  /**
   * @internal
   */
  UpdateVirtualRouterOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateVirtualRouterOutput = exports.UpdateVirtualRouterOutput || (exports.UpdateVirtualRouterOutput = {})));
var VirtualNodeServiceProvider;
(function (VirtualNodeServiceProvider) {
  /**
   * @internal
   */
  VirtualNodeServiceProvider.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualNodeServiceProvider = exports.VirtualNodeServiceProvider || (exports.VirtualNodeServiceProvider = {})));
var VirtualRouterServiceProvider;
(function (VirtualRouterServiceProvider) {
  /**
   * @internal
   */
  VirtualRouterServiceProvider.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VirtualRouterServiceProvider = exports.VirtualRouterServiceProvider || (exports.VirtualRouterServiceProvider = {}))
);
var VirtualServiceProvider;
(function (VirtualServiceProvider) {
  VirtualServiceProvider.visit = (value, visitor) => {
    if (value.virtualNode !== undefined) return visitor.virtualNode(value.virtualNode);
    if (value.virtualRouter !== undefined) return visitor.virtualRouter(value.virtualRouter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  VirtualServiceProvider.filterSensitiveLog = (obj) => {
    if (obj.virtualNode !== undefined)
      return { virtualNode: VirtualNodeServiceProvider.filterSensitiveLog(obj.virtualNode) };
    if (obj.virtualRouter !== undefined)
      return { virtualRouter: VirtualRouterServiceProvider.filterSensitiveLog(obj.virtualRouter) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((VirtualServiceProvider = exports.VirtualServiceProvider || (exports.VirtualServiceProvider = {})));
var VirtualServiceSpec;
(function (VirtualServiceSpec) {
  /**
   * @internal
   */
  VirtualServiceSpec.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.provider && { provider: VirtualServiceProvider.filterSensitiveLog(obj.provider) }),
  });
})((VirtualServiceSpec = exports.VirtualServiceSpec || (exports.VirtualServiceSpec = {})));
var CreateVirtualServiceInput;
(function (CreateVirtualServiceInput) {
  /**
   * @internal
   */
  CreateVirtualServiceInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) }),
  });
})((CreateVirtualServiceInput = exports.CreateVirtualServiceInput || (exports.CreateVirtualServiceInput = {})));
var VirtualServiceStatusCode;
(function (VirtualServiceStatusCode) {
  VirtualServiceStatusCode["ACTIVE"] = "ACTIVE";
  VirtualServiceStatusCode["DELETED"] = "DELETED";
  VirtualServiceStatusCode["INACTIVE"] = "INACTIVE";
})((VirtualServiceStatusCode = exports.VirtualServiceStatusCode || (exports.VirtualServiceStatusCode = {})));
var VirtualServiceStatus;
(function (VirtualServiceStatus) {
  /**
   * @internal
   */
  VirtualServiceStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualServiceStatus = exports.VirtualServiceStatus || (exports.VirtualServiceStatus = {})));
var VirtualServiceData;
(function (VirtualServiceData) {
  /**
   * @internal
   */
  VirtualServiceData.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) }),
  });
})((VirtualServiceData = exports.VirtualServiceData || (exports.VirtualServiceData = {})));
var CreateVirtualServiceOutput;
(function (CreateVirtualServiceOutput) {
  /**
   * @internal
   */
  CreateVirtualServiceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
})((CreateVirtualServiceOutput = exports.CreateVirtualServiceOutput || (exports.CreateVirtualServiceOutput = {})));
var DeleteVirtualServiceInput;
(function (DeleteVirtualServiceInput) {
  /**
   * @internal
   */
  DeleteVirtualServiceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVirtualServiceInput = exports.DeleteVirtualServiceInput || (exports.DeleteVirtualServiceInput = {})));
var DeleteVirtualServiceOutput;
(function (DeleteVirtualServiceOutput) {
  /**
   * @internal
   */
  DeleteVirtualServiceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
})((DeleteVirtualServiceOutput = exports.DeleteVirtualServiceOutput || (exports.DeleteVirtualServiceOutput = {})));
var DescribeVirtualServiceInput;
(function (DescribeVirtualServiceInput) {
  /**
   * @internal
   */
  DescribeVirtualServiceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeVirtualServiceInput = exports.DescribeVirtualServiceInput || (exports.DescribeVirtualServiceInput = {})));
var DescribeVirtualServiceOutput;
(function (DescribeVirtualServiceOutput) {
  /**
   * @internal
   */
  DescribeVirtualServiceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
})(
  (DescribeVirtualServiceOutput = exports.DescribeVirtualServiceOutput || (exports.DescribeVirtualServiceOutput = {}))
);
var ListVirtualServicesInput;
(function (ListVirtualServicesInput) {
  /**
   * @internal
   */
  ListVirtualServicesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualServicesInput = exports.ListVirtualServicesInput || (exports.ListVirtualServicesInput = {})));
var VirtualServiceRef;
(function (VirtualServiceRef) {
  /**
   * @internal
   */
  VirtualServiceRef.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VirtualServiceRef = exports.VirtualServiceRef || (exports.VirtualServiceRef = {})));
var ListVirtualServicesOutput;
(function (ListVirtualServicesOutput) {
  /**
   * @internal
   */
  ListVirtualServicesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVirtualServicesOutput = exports.ListVirtualServicesOutput || (exports.ListVirtualServicesOutput = {})));
var UpdateVirtualServiceInput;
(function (UpdateVirtualServiceInput) {
  /**
   * @internal
   */
  UpdateVirtualServiceInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) }),
  });
})((UpdateVirtualServiceInput = exports.UpdateVirtualServiceInput || (exports.UpdateVirtualServiceInput = {})));
var UpdateVirtualServiceOutput;
(function (UpdateVirtualServiceOutput) {
  /**
   * @internal
   */
  UpdateVirtualServiceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
})((UpdateVirtualServiceOutput = exports.UpdateVirtualServiceOutput || (exports.UpdateVirtualServiceOutput = {})));
var TagResourceInput;
(function (TagResourceInput) {
  /**
   * @internal
   */
  TagResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {})));
var TagResourceOutput;
(function (TagResourceOutput) {
  /**
   * @internal
   */
  TagResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {})));
var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {})));
var UntagResourceInput;
(function (UntagResourceInput) {
  /**
   * @internal
   */
  UntagResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {})));
var UntagResourceOutput;
(function (UntagResourceOutput) {
  /**
   * @internal
   */
  UntagResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {})));
//# sourceMappingURL=models_0.js.map
