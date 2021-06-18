"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAutoScalingConfigurationResponse =
  exports.DescribeAutoScalingConfigurationRequest =
  exports.DeleteServiceResponse =
  exports.DeleteServiceRequest =
  exports.DeleteConnectionResponse =
  exports.DeleteConnectionRequest =
  exports.ResourceNotFoundException =
  exports.DeleteAutoScalingConfigurationResponse =
  exports.DeleteAutoScalingConfigurationRequest =
  exports.CreateServiceResponse =
  exports.Service =
  exports.ServiceStatus =
  exports.AutoScalingConfigurationSummary =
  exports.CreateServiceRequest =
  exports.SourceConfiguration =
  exports.ImageRepository =
  exports.ImageRepositoryType =
  exports.ImageConfiguration =
  exports.CodeRepository =
  exports.SourceCodeVersion =
  exports.SourceCodeVersionType =
  exports.CodeConfiguration =
  exports.ConfigurationSource =
  exports.CodeConfigurationValues =
  exports.Runtime =
  exports.AuthenticationConfiguration =
  exports.InstanceConfiguration =
  exports.HealthCheckConfiguration =
  exports.HealthCheckProtocol =
  exports.EncryptionConfiguration =
  exports.CreateConnectionResponse =
  exports.Connection =
  exports.ConnectionStatus =
  exports.CreateConnectionRequest =
  exports.ProviderType =
  exports.ServiceQuotaExceededException =
  exports.CreateAutoScalingConfigurationResponse =
  exports.AutoScalingConfiguration =
  exports.AutoScalingConfigurationStatus =
  exports.CreateAutoScalingConfigurationRequest =
  exports.Tag =
  exports.InvalidStateException =
  exports.InvalidRequestException =
  exports.InternalServiceErrorException =
  exports.AssociateCustomDomainResponse =
  exports.CustomDomain =
  exports.CustomDomainAssociationStatus =
  exports.CertificateValidationRecord =
  exports.CertificateValidationRecordStatus =
  exports.AssociateCustomDomainRequest =
    void 0;
exports.UpdateServiceResponse =
  exports.UpdateServiceRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.StartDeploymentResponse =
  exports.StartDeploymentRequest =
  exports.ResumeServiceResponse =
  exports.ResumeServiceRequest =
  exports.PauseServiceResponse =
  exports.PauseServiceRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListServicesResponse =
  exports.ServiceSummary =
  exports.ListServicesRequest =
  exports.ListOperationsResponse =
  exports.OperationSummary =
  exports.OperationType =
  exports.OperationStatus =
  exports.ListOperationsRequest =
  exports.ListConnectionsResponse =
  exports.ConnectionSummary =
  exports.ListConnectionsRequest =
  exports.ListAutoScalingConfigurationsResponse =
  exports.ListAutoScalingConfigurationsRequest =
  exports.DisassociateCustomDomainResponse =
  exports.DisassociateCustomDomainRequest =
  exports.DescribeServiceResponse =
  exports.DescribeServiceRequest =
  exports.DescribeCustomDomainsResponse =
  exports.DescribeCustomDomainsRequest =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AssociateCustomDomainRequest;
(function (AssociateCustomDomainRequest) {
  /**
   * @internal
   */
  AssociateCustomDomainRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateCustomDomainRequest = exports.AssociateCustomDomainRequest || (exports.AssociateCustomDomainRequest = {}))
);
var CertificateValidationRecordStatus;
(function (CertificateValidationRecordStatus) {
  CertificateValidationRecordStatus["FAILED"] = "FAILED";
  CertificateValidationRecordStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  CertificateValidationRecordStatus["SUCCESS"] = "SUCCESS";
})(
  (CertificateValidationRecordStatus =
    exports.CertificateValidationRecordStatus || (exports.CertificateValidationRecordStatus = {}))
);
var CertificateValidationRecord;
(function (CertificateValidationRecord) {
  /**
   * @internal
   */
  CertificateValidationRecord.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CertificateValidationRecord = exports.CertificateValidationRecord || (exports.CertificateValidationRecord = {})));
var CustomDomainAssociationStatus;
(function (CustomDomainAssociationStatus) {
  CustomDomainAssociationStatus["ACTIVE"] = "ACTIVE";
  CustomDomainAssociationStatus["BINDING_CERTIFICATE"] = "BINDING_CERTIFICATE";
  CustomDomainAssociationStatus["CREATE_FAILED"] = "CREATE_FAILED";
  CustomDomainAssociationStatus["CREATING"] = "CREATING";
  CustomDomainAssociationStatus["DELETE_FAILED"] = "DELETE_FAILED";
  CustomDomainAssociationStatus["DELETING"] = "DELETING";
  CustomDomainAssociationStatus["PENDING_CERTIFICATE_DNS_VALIDATION"] = "PENDING_CERTIFICATE_DNS_VALIDATION";
})(
  (CustomDomainAssociationStatus =
    exports.CustomDomainAssociationStatus || (exports.CustomDomainAssociationStatus = {}))
);
var CustomDomain;
(function (CustomDomain) {
  /**
   * @internal
   */
  CustomDomain.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomDomain = exports.CustomDomain || (exports.CustomDomain = {})));
var AssociateCustomDomainResponse;
(function (AssociateCustomDomainResponse) {
  /**
   * @internal
   */
  AssociateCustomDomainResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateCustomDomainResponse =
    exports.AssociateCustomDomainResponse || (exports.AssociateCustomDomainResponse = {}))
);
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
  /**
   * @internal
   */
  InternalServiceErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InternalServiceErrorException =
    exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}))
);
var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {})));
var InvalidStateException;
(function (InvalidStateException) {
  /**
   * @internal
   */
  InvalidStateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateAutoScalingConfigurationRequest;
(function (CreateAutoScalingConfigurationRequest) {
  /**
   * @internal
   */
  CreateAutoScalingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAutoScalingConfigurationRequest =
    exports.CreateAutoScalingConfigurationRequest || (exports.CreateAutoScalingConfigurationRequest = {}))
);
var AutoScalingConfigurationStatus;
(function (AutoScalingConfigurationStatus) {
  AutoScalingConfigurationStatus["ACTIVE"] = "ACTIVE";
  AutoScalingConfigurationStatus["INACTIVE"] = "INACTIVE";
})(
  (AutoScalingConfigurationStatus =
    exports.AutoScalingConfigurationStatus || (exports.AutoScalingConfigurationStatus = {}))
);
var AutoScalingConfiguration;
(function (AutoScalingConfiguration) {
  /**
   * @internal
   */
  AutoScalingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoScalingConfiguration = exports.AutoScalingConfiguration || (exports.AutoScalingConfiguration = {})));
var CreateAutoScalingConfigurationResponse;
(function (CreateAutoScalingConfigurationResponse) {
  /**
   * @internal
   */
  CreateAutoScalingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAutoScalingConfigurationResponse =
    exports.CreateAutoScalingConfigurationResponse || (exports.CreateAutoScalingConfigurationResponse = {}))
);
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceQuotaExceededException =
    exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}))
);
var ProviderType;
(function (ProviderType) {
  ProviderType["GITHUB"] = "GITHUB";
})((ProviderType = exports.ProviderType || (exports.ProviderType = {})));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
  /**
   * @internal
   */
  CreateConnectionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {})));
var ConnectionStatus;
(function (ConnectionStatus) {
  ConnectionStatus["AVAILABLE"] = "AVAILABLE";
  ConnectionStatus["DELETED"] = "DELETED";
  ConnectionStatus["ERROR"] = "ERROR";
  ConnectionStatus["PENDING_HANDSHAKE"] = "PENDING_HANDSHAKE";
})((ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {})));
var Connection;
(function (Connection) {
  /**
   * @internal
   */
  Connection.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Connection = exports.Connection || (exports.Connection = {})));
var CreateConnectionResponse;
(function (CreateConnectionResponse) {
  /**
   * @internal
   */
  CreateConnectionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateConnectionResponse = exports.CreateConnectionResponse || (exports.CreateConnectionResponse = {})));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
  /**
   * @internal
   */
  EncryptionConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {})));
var HealthCheckProtocol;
(function (HealthCheckProtocol) {
  HealthCheckProtocol["HTTP"] = "HTTP";
  HealthCheckProtocol["TCP"] = "TCP";
})((HealthCheckProtocol = exports.HealthCheckProtocol || (exports.HealthCheckProtocol = {})));
var HealthCheckConfiguration;
(function (HealthCheckConfiguration) {
  /**
   * @internal
   */
  HealthCheckConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HealthCheckConfiguration = exports.HealthCheckConfiguration || (exports.HealthCheckConfiguration = {})));
var InstanceConfiguration;
(function (InstanceConfiguration) {
  /**
   * @internal
   */
  InstanceConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InstanceConfiguration = exports.InstanceConfiguration || (exports.InstanceConfiguration = {})));
var AuthenticationConfiguration;
(function (AuthenticationConfiguration) {
  /**
   * @internal
   */
  AuthenticationConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AuthenticationConfiguration = exports.AuthenticationConfiguration || (exports.AuthenticationConfiguration = {})));
var Runtime;
(function (Runtime) {
  Runtime["NODEJS_12"] = "NODEJS_12";
  Runtime["PYTHON_3"] = "PYTHON_3";
})((Runtime = exports.Runtime || (exports.Runtime = {})));
var CodeConfigurationValues;
(function (CodeConfigurationValues) {
  /**
   * @internal
   */
  CodeConfigurationValues.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BuildCommand && { BuildCommand: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.StartCommand && { StartCommand: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: smithy_client_1.SENSITIVE_STRING }),
  });
})((CodeConfigurationValues = exports.CodeConfigurationValues || (exports.CodeConfigurationValues = {})));
var ConfigurationSource;
(function (ConfigurationSource) {
  ConfigurationSource["API"] = "API";
  ConfigurationSource["REPOSITORY"] = "REPOSITORY";
})((ConfigurationSource = exports.ConfigurationSource || (exports.ConfigurationSource = {})));
var CodeConfiguration;
(function (CodeConfiguration) {
  /**
   * @internal
   */
  CodeConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CodeConfigurationValues && {
      CodeConfigurationValues: CodeConfigurationValues.filterSensitiveLog(obj.CodeConfigurationValues),
    }),
  });
})((CodeConfiguration = exports.CodeConfiguration || (exports.CodeConfiguration = {})));
var SourceCodeVersionType;
(function (SourceCodeVersionType) {
  SourceCodeVersionType["BRANCH"] = "BRANCH";
})((SourceCodeVersionType = exports.SourceCodeVersionType || (exports.SourceCodeVersionType = {})));
var SourceCodeVersion;
(function (SourceCodeVersion) {
  /**
   * @internal
   */
  SourceCodeVersion.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SourceCodeVersion = exports.SourceCodeVersion || (exports.SourceCodeVersion = {})));
var CodeRepository;
(function (CodeRepository) {
  /**
   * @internal
   */
  CodeRepository.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CodeConfiguration && { CodeConfiguration: CodeConfiguration.filterSensitiveLog(obj.CodeConfiguration) }),
  });
})((CodeRepository = exports.CodeRepository || (exports.CodeRepository = {})));
var ImageConfiguration;
(function (ImageConfiguration) {
  /**
   * @internal
   */
  ImageConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: smithy_client_1.SENSITIVE_STRING }),
  });
})((ImageConfiguration = exports.ImageConfiguration || (exports.ImageConfiguration = {})));
var ImageRepositoryType;
(function (ImageRepositoryType) {
  ImageRepositoryType["ECR"] = "ECR";
  ImageRepositoryType["ECR_PUBLIC"] = "ECR_PUBLIC";
})((ImageRepositoryType = exports.ImageRepositoryType || (exports.ImageRepositoryType = {})));
var ImageRepository;
(function (ImageRepository) {
  /**
   * @internal
   */
  ImageRepository.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ImageConfiguration && {
      ImageConfiguration: ImageConfiguration.filterSensitiveLog(obj.ImageConfiguration),
    }),
  });
})((ImageRepository = exports.ImageRepository || (exports.ImageRepository = {})));
var SourceConfiguration;
(function (SourceConfiguration) {
  /**
   * @internal
   */
  SourceConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CodeRepository && { CodeRepository: CodeRepository.filterSensitiveLog(obj.CodeRepository) }),
    ...(obj.ImageRepository && { ImageRepository: ImageRepository.filterSensitiveLog(obj.ImageRepository) }),
  });
})((SourceConfiguration = exports.SourceConfiguration || (exports.SourceConfiguration = {})));
var CreateServiceRequest;
(function (CreateServiceRequest) {
  /**
   * @internal
   */
  CreateServiceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
})((CreateServiceRequest = exports.CreateServiceRequest || (exports.CreateServiceRequest = {})));
var AutoScalingConfigurationSummary;
(function (AutoScalingConfigurationSummary) {
  /**
   * @internal
   */
  AutoScalingConfigurationSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AutoScalingConfigurationSummary =
    exports.AutoScalingConfigurationSummary || (exports.AutoScalingConfigurationSummary = {}))
);
var ServiceStatus;
(function (ServiceStatus) {
  ServiceStatus["CREATE_FAILED"] = "CREATE_FAILED";
  ServiceStatus["DELETED"] = "DELETED";
  ServiceStatus["DELETE_FAILED"] = "DELETE_FAILED";
  ServiceStatus["OPERATION_IN_PROGRESS"] = "OPERATION_IN_PROGRESS";
  ServiceStatus["PAUSED"] = "PAUSED";
  ServiceStatus["RUNNING"] = "RUNNING";
})((ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {})));
var Service;
(function (Service) {
  /**
   * @internal
   */
  Service.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
})((Service = exports.Service || (exports.Service = {})));
var CreateServiceResponse;
(function (CreateServiceResponse) {
  /**
   * @internal
   */
  CreateServiceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
})((CreateServiceResponse = exports.CreateServiceResponse || (exports.CreateServiceResponse = {})));
var DeleteAutoScalingConfigurationRequest;
(function (DeleteAutoScalingConfigurationRequest) {
  /**
   * @internal
   */
  DeleteAutoScalingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAutoScalingConfigurationRequest =
    exports.DeleteAutoScalingConfigurationRequest || (exports.DeleteAutoScalingConfigurationRequest = {}))
);
var DeleteAutoScalingConfigurationResponse;
(function (DeleteAutoScalingConfigurationResponse) {
  /**
   * @internal
   */
  DeleteAutoScalingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAutoScalingConfigurationResponse =
    exports.DeleteAutoScalingConfigurationResponse || (exports.DeleteAutoScalingConfigurationResponse = {}))
);
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
  /**
   * @internal
   */
  DeleteConnectionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {})));
var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
  /**
   * @internal
   */
  DeleteConnectionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteConnectionResponse = exports.DeleteConnectionResponse || (exports.DeleteConnectionResponse = {})));
var DeleteServiceRequest;
(function (DeleteServiceRequest) {
  /**
   * @internal
   */
  DeleteServiceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteServiceRequest = exports.DeleteServiceRequest || (exports.DeleteServiceRequest = {})));
var DeleteServiceResponse;
(function (DeleteServiceResponse) {
  /**
   * @internal
   */
  DeleteServiceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
})((DeleteServiceResponse = exports.DeleteServiceResponse || (exports.DeleteServiceResponse = {})));
var DescribeAutoScalingConfigurationRequest;
(function (DescribeAutoScalingConfigurationRequest) {
  /**
   * @internal
   */
  DescribeAutoScalingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAutoScalingConfigurationRequest =
    exports.DescribeAutoScalingConfigurationRequest || (exports.DescribeAutoScalingConfigurationRequest = {}))
);
var DescribeAutoScalingConfigurationResponse;
(function (DescribeAutoScalingConfigurationResponse) {
  /**
   * @internal
   */
  DescribeAutoScalingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAutoScalingConfigurationResponse =
    exports.DescribeAutoScalingConfigurationResponse || (exports.DescribeAutoScalingConfigurationResponse = {}))
);
var DescribeCustomDomainsRequest;
(function (DescribeCustomDomainsRequest) {
  /**
   * @internal
   */
  DescribeCustomDomainsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeCustomDomainsRequest = exports.DescribeCustomDomainsRequest || (exports.DescribeCustomDomainsRequest = {}))
);
var DescribeCustomDomainsResponse;
(function (DescribeCustomDomainsResponse) {
  /**
   * @internal
   */
  DescribeCustomDomainsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeCustomDomainsResponse =
    exports.DescribeCustomDomainsResponse || (exports.DescribeCustomDomainsResponse = {}))
);
var DescribeServiceRequest;
(function (DescribeServiceRequest) {
  /**
   * @internal
   */
  DescribeServiceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeServiceRequest = exports.DescribeServiceRequest || (exports.DescribeServiceRequest = {})));
var DescribeServiceResponse;
(function (DescribeServiceResponse) {
  /**
   * @internal
   */
  DescribeServiceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
})((DescribeServiceResponse = exports.DescribeServiceResponse || (exports.DescribeServiceResponse = {})));
var DisassociateCustomDomainRequest;
(function (DisassociateCustomDomainRequest) {
  /**
   * @internal
   */
  DisassociateCustomDomainRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateCustomDomainRequest =
    exports.DisassociateCustomDomainRequest || (exports.DisassociateCustomDomainRequest = {}))
);
var DisassociateCustomDomainResponse;
(function (DisassociateCustomDomainResponse) {
  /**
   * @internal
   */
  DisassociateCustomDomainResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateCustomDomainResponse =
    exports.DisassociateCustomDomainResponse || (exports.DisassociateCustomDomainResponse = {}))
);
var ListAutoScalingConfigurationsRequest;
(function (ListAutoScalingConfigurationsRequest) {
  /**
   * @internal
   */
  ListAutoScalingConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAutoScalingConfigurationsRequest =
    exports.ListAutoScalingConfigurationsRequest || (exports.ListAutoScalingConfigurationsRequest = {}))
);
var ListAutoScalingConfigurationsResponse;
(function (ListAutoScalingConfigurationsResponse) {
  /**
   * @internal
   */
  ListAutoScalingConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAutoScalingConfigurationsResponse =
    exports.ListAutoScalingConfigurationsResponse || (exports.ListAutoScalingConfigurationsResponse = {}))
);
var ListConnectionsRequest;
(function (ListConnectionsRequest) {
  /**
   * @internal
   */
  ListConnectionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListConnectionsRequest = exports.ListConnectionsRequest || (exports.ListConnectionsRequest = {})));
var ConnectionSummary;
(function (ConnectionSummary) {
  /**
   * @internal
   */
  ConnectionSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectionSummary = exports.ConnectionSummary || (exports.ConnectionSummary = {})));
var ListConnectionsResponse;
(function (ListConnectionsResponse) {
  /**
   * @internal
   */
  ListConnectionsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListConnectionsResponse = exports.ListConnectionsResponse || (exports.ListConnectionsResponse = {})));
var ListOperationsRequest;
(function (ListOperationsRequest) {
  /**
   * @internal
   */
  ListOperationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListOperationsRequest = exports.ListOperationsRequest || (exports.ListOperationsRequest = {})));
var OperationStatus;
(function (OperationStatus) {
  OperationStatus["FAILED"] = "FAILED";
  OperationStatus["IN_PROGRESS"] = "IN_PROGRESS";
  OperationStatus["PENDING"] = "PENDING";
  OperationStatus["ROLLBACK_FAILED"] = "ROLLBACK_FAILED";
  OperationStatus["ROLLBACK_IN_PROGRESS"] = "ROLLBACK_IN_PROGRESS";
  OperationStatus["ROLLBACK_SUCCEEDED"] = "ROLLBACK_SUCCEEDED";
  OperationStatus["SUCCEEDED"] = "SUCCEEDED";
})((OperationStatus = exports.OperationStatus || (exports.OperationStatus = {})));
var OperationType;
(function (OperationType) {
  OperationType["CREATE_SERVICE"] = "CREATE_SERVICE";
  OperationType["DELETE_SERVICE"] = "DELETE_SERVICE";
  OperationType["PAUSE_SERVICE"] = "PAUSE_SERVICE";
  OperationType["RESUME_SERVICE"] = "RESUME_SERVICE";
  OperationType["START_DEPLOYMENT"] = "START_DEPLOYMENT";
})((OperationType = exports.OperationType || (exports.OperationType = {})));
var OperationSummary;
(function (OperationSummary) {
  /**
   * @internal
   */
  OperationSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OperationSummary = exports.OperationSummary || (exports.OperationSummary = {})));
var ListOperationsResponse;
(function (ListOperationsResponse) {
  /**
   * @internal
   */
  ListOperationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListOperationsResponse = exports.ListOperationsResponse || (exports.ListOperationsResponse = {})));
var ListServicesRequest;
(function (ListServicesRequest) {
  /**
   * @internal
   */
  ListServicesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {})));
var ServiceSummary;
(function (ServiceSummary) {
  /**
   * @internal
   */
  ServiceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceSummary = exports.ServiceSummary || (exports.ServiceSummary = {})));
var ListServicesResponse;
(function (ListServicesResponse) {
  /**
   * @internal
   */
  ListServicesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var PauseServiceRequest;
(function (PauseServiceRequest) {
  /**
   * @internal
   */
  PauseServiceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PauseServiceRequest = exports.PauseServiceRequest || (exports.PauseServiceRequest = {})));
var PauseServiceResponse;
(function (PauseServiceResponse) {
  /**
   * @internal
   */
  PauseServiceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
})((PauseServiceResponse = exports.PauseServiceResponse || (exports.PauseServiceResponse = {})));
var ResumeServiceRequest;
(function (ResumeServiceRequest) {
  /**
   * @internal
   */
  ResumeServiceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResumeServiceRequest = exports.ResumeServiceRequest || (exports.ResumeServiceRequest = {})));
var ResumeServiceResponse;
(function (ResumeServiceResponse) {
  /**
   * @internal
   */
  ResumeServiceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
})((ResumeServiceResponse = exports.ResumeServiceResponse || (exports.ResumeServiceResponse = {})));
var StartDeploymentRequest;
(function (StartDeploymentRequest) {
  /**
   * @internal
   */
  StartDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartDeploymentRequest = exports.StartDeploymentRequest || (exports.StartDeploymentRequest = {})));
var StartDeploymentResponse;
(function (StartDeploymentResponse) {
  /**
   * @internal
   */
  StartDeploymentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartDeploymentResponse = exports.StartDeploymentResponse || (exports.StartDeploymentResponse = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateServiceRequest;
(function (UpdateServiceRequest) {
  /**
   * @internal
   */
  UpdateServiceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
})((UpdateServiceRequest = exports.UpdateServiceRequest || (exports.UpdateServiceRequest = {})));
var UpdateServiceResponse;
(function (UpdateServiceResponse) {
  /**
   * @internal
   */
  UpdateServiceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
})((UpdateServiceResponse = exports.UpdateServiceResponse || (exports.UpdateServiceResponse = {})));
//# sourceMappingURL=models_0.js.map
