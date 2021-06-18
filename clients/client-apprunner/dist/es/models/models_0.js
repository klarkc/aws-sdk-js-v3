import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AssociateCustomDomainRequest;
(function (AssociateCustomDomainRequest) {
  /**
   * @internal
   */
  AssociateCustomDomainRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateCustomDomainRequest || (AssociateCustomDomainRequest = {}));
export var CertificateValidationRecordStatus;
(function (CertificateValidationRecordStatus) {
  CertificateValidationRecordStatus["FAILED"] = "FAILED";
  CertificateValidationRecordStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  CertificateValidationRecordStatus["SUCCESS"] = "SUCCESS";
})(CertificateValidationRecordStatus || (CertificateValidationRecordStatus = {}));
export var CertificateValidationRecord;
(function (CertificateValidationRecord) {
  /**
   * @internal
   */
  CertificateValidationRecord.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateValidationRecord || (CertificateValidationRecord = {}));
export var CustomDomainAssociationStatus;
(function (CustomDomainAssociationStatus) {
  CustomDomainAssociationStatus["ACTIVE"] = "ACTIVE";
  CustomDomainAssociationStatus["BINDING_CERTIFICATE"] = "BINDING_CERTIFICATE";
  CustomDomainAssociationStatus["CREATE_FAILED"] = "CREATE_FAILED";
  CustomDomainAssociationStatus["CREATING"] = "CREATING";
  CustomDomainAssociationStatus["DELETE_FAILED"] = "DELETE_FAILED";
  CustomDomainAssociationStatus["DELETING"] = "DELETING";
  CustomDomainAssociationStatus["PENDING_CERTIFICATE_DNS_VALIDATION"] = "PENDING_CERTIFICATE_DNS_VALIDATION";
})(CustomDomainAssociationStatus || (CustomDomainAssociationStatus = {}));
export var CustomDomain;
(function (CustomDomain) {
  /**
   * @internal
   */
  CustomDomain.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomDomain || (CustomDomain = {}));
export var AssociateCustomDomainResponse;
(function (AssociateCustomDomainResponse) {
  /**
   * @internal
   */
  AssociateCustomDomainResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateCustomDomainResponse || (AssociateCustomDomainResponse = {}));
export var InternalServiceErrorException;
(function (InternalServiceErrorException) {
  /**
   * @internal
   */
  InternalServiceErrorException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServiceErrorException || (InternalServiceErrorException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidRequestException || (InvalidRequestException = {}));
export var InvalidStateException;
(function (InvalidStateException) {
  /**
   * @internal
   */
  InvalidStateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidStateException || (InvalidStateException = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
export var CreateAutoScalingConfigurationRequest;
(function (CreateAutoScalingConfigurationRequest) {
  /**
   * @internal
   */
  CreateAutoScalingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAutoScalingConfigurationRequest || (CreateAutoScalingConfigurationRequest = {}));
export var AutoScalingConfigurationStatus;
(function (AutoScalingConfigurationStatus) {
  AutoScalingConfigurationStatus["ACTIVE"] = "ACTIVE";
  AutoScalingConfigurationStatus["INACTIVE"] = "INACTIVE";
})(AutoScalingConfigurationStatus || (AutoScalingConfigurationStatus = {}));
export var AutoScalingConfiguration;
(function (AutoScalingConfiguration) {
  /**
   * @internal
   */
  AutoScalingConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AutoScalingConfiguration || (AutoScalingConfiguration = {}));
export var CreateAutoScalingConfigurationResponse;
(function (CreateAutoScalingConfigurationResponse) {
  /**
   * @internal
   */
  CreateAutoScalingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAutoScalingConfigurationResponse || (CreateAutoScalingConfigurationResponse = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ProviderType;
(function (ProviderType) {
  ProviderType["GITHUB"] = "GITHUB";
})(ProviderType || (ProviderType = {}));
export var CreateConnectionRequest;
(function (CreateConnectionRequest) {
  /**
   * @internal
   */
  CreateConnectionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateConnectionRequest || (CreateConnectionRequest = {}));
export var ConnectionStatus;
(function (ConnectionStatus) {
  ConnectionStatus["AVAILABLE"] = "AVAILABLE";
  ConnectionStatus["DELETED"] = "DELETED";
  ConnectionStatus["ERROR"] = "ERROR";
  ConnectionStatus["PENDING_HANDSHAKE"] = "PENDING_HANDSHAKE";
})(ConnectionStatus || (ConnectionStatus = {}));
export var Connection;
(function (Connection) {
  /**
   * @internal
   */
  Connection.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Connection || (Connection = {}));
export var CreateConnectionResponse;
(function (CreateConnectionResponse) {
  /**
   * @internal
   */
  CreateConnectionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateConnectionResponse || (CreateConnectionResponse = {}));
export var EncryptionConfiguration;
(function (EncryptionConfiguration) {
  /**
   * @internal
   */
  EncryptionConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EncryptionConfiguration || (EncryptionConfiguration = {}));
export var HealthCheckProtocol;
(function (HealthCheckProtocol) {
  HealthCheckProtocol["HTTP"] = "HTTP";
  HealthCheckProtocol["TCP"] = "TCP";
})(HealthCheckProtocol || (HealthCheckProtocol = {}));
export var HealthCheckConfiguration;
(function (HealthCheckConfiguration) {
  /**
   * @internal
   */
  HealthCheckConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HealthCheckConfiguration || (HealthCheckConfiguration = {}));
export var InstanceConfiguration;
(function (InstanceConfiguration) {
  /**
   * @internal
   */
  InstanceConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InstanceConfiguration || (InstanceConfiguration = {}));
export var AuthenticationConfiguration;
(function (AuthenticationConfiguration) {
  /**
   * @internal
   */
  AuthenticationConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AuthenticationConfiguration || (AuthenticationConfiguration = {}));
export var Runtime;
(function (Runtime) {
  Runtime["NODEJS_12"] = "NODEJS_12";
  Runtime["PYTHON_3"] = "PYTHON_3";
})(Runtime || (Runtime = {}));
export var CodeConfigurationValues;
(function (CodeConfigurationValues) {
  /**
   * @internal
   */
  CodeConfigurationValues.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.BuildCommand && { BuildCommand: SENSITIVE_STRING }),
        obj.StartCommand && { StartCommand: SENSITIVE_STRING }
      ),
      obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: SENSITIVE_STRING }
    );
  };
})(CodeConfigurationValues || (CodeConfigurationValues = {}));
export var ConfigurationSource;
(function (ConfigurationSource) {
  ConfigurationSource["API"] = "API";
  ConfigurationSource["REPOSITORY"] = "REPOSITORY";
})(ConfigurationSource || (ConfigurationSource = {}));
export var CodeConfiguration;
(function (CodeConfiguration) {
  /**
   * @internal
   */
  CodeConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.CodeConfigurationValues && {
        CodeConfigurationValues: CodeConfigurationValues.filterSensitiveLog(obj.CodeConfigurationValues),
      }
    );
  };
})(CodeConfiguration || (CodeConfiguration = {}));
export var SourceCodeVersionType;
(function (SourceCodeVersionType) {
  SourceCodeVersionType["BRANCH"] = "BRANCH";
})(SourceCodeVersionType || (SourceCodeVersionType = {}));
export var SourceCodeVersion;
(function (SourceCodeVersion) {
  /**
   * @internal
   */
  SourceCodeVersion.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SourceCodeVersion || (SourceCodeVersion = {}));
export var CodeRepository;
(function (CodeRepository) {
  /**
   * @internal
   */
  CodeRepository.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.CodeConfiguration && { CodeConfiguration: CodeConfiguration.filterSensitiveLog(obj.CodeConfiguration) }
    );
  };
})(CodeRepository || (CodeRepository = {}));
export var ImageConfiguration;
(function (ImageConfiguration) {
  /**
   * @internal
   */
  ImageConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: SENSITIVE_STRING }
    );
  };
})(ImageConfiguration || (ImageConfiguration = {}));
export var ImageRepositoryType;
(function (ImageRepositoryType) {
  ImageRepositoryType["ECR"] = "ECR";
  ImageRepositoryType["ECR_PUBLIC"] = "ECR_PUBLIC";
})(ImageRepositoryType || (ImageRepositoryType = {}));
export var ImageRepository;
(function (ImageRepository) {
  /**
   * @internal
   */
  ImageRepository.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ImageConfiguration && {
        ImageConfiguration: ImageConfiguration.filterSensitiveLog(obj.ImageConfiguration),
      }
    );
  };
})(ImageRepository || (ImageRepository = {}));
export var SourceConfiguration;
(function (SourceConfiguration) {
  /**
   * @internal
   */
  SourceConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.CodeRepository && { CodeRepository: CodeRepository.filterSensitiveLog(obj.CodeRepository) }
      ),
      obj.ImageRepository && { ImageRepository: ImageRepository.filterSensitiveLog(obj.ImageRepository) }
    );
  };
})(SourceConfiguration || (SourceConfiguration = {}));
export var CreateServiceRequest;
(function (CreateServiceRequest) {
  /**
   * @internal
   */
  CreateServiceRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SourceConfiguration && {
        SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
      }
    );
  };
})(CreateServiceRequest || (CreateServiceRequest = {}));
export var AutoScalingConfigurationSummary;
(function (AutoScalingConfigurationSummary) {
  /**
   * @internal
   */
  AutoScalingConfigurationSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AutoScalingConfigurationSummary || (AutoScalingConfigurationSummary = {}));
export var ServiceStatus;
(function (ServiceStatus) {
  ServiceStatus["CREATE_FAILED"] = "CREATE_FAILED";
  ServiceStatus["DELETED"] = "DELETED";
  ServiceStatus["DELETE_FAILED"] = "DELETE_FAILED";
  ServiceStatus["OPERATION_IN_PROGRESS"] = "OPERATION_IN_PROGRESS";
  ServiceStatus["PAUSED"] = "PAUSED";
  ServiceStatus["RUNNING"] = "RUNNING";
})(ServiceStatus || (ServiceStatus = {}));
export var Service;
(function (Service) {
  /**
   * @internal
   */
  Service.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SourceConfiguration && {
        SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
      }
    );
  };
})(Service || (Service = {}));
export var CreateServiceResponse;
(function (CreateServiceResponse) {
  /**
   * @internal
   */
  CreateServiceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Service && { Service: Service.filterSensitiveLog(obj.Service) });
  };
})(CreateServiceResponse || (CreateServiceResponse = {}));
export var DeleteAutoScalingConfigurationRequest;
(function (DeleteAutoScalingConfigurationRequest) {
  /**
   * @internal
   */
  DeleteAutoScalingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAutoScalingConfigurationRequest || (DeleteAutoScalingConfigurationRequest = {}));
export var DeleteAutoScalingConfigurationResponse;
(function (DeleteAutoScalingConfigurationResponse) {
  /**
   * @internal
   */
  DeleteAutoScalingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAutoScalingConfigurationResponse || (DeleteAutoScalingConfigurationResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
  /**
   * @internal
   */
  DeleteConnectionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteConnectionRequest || (DeleteConnectionRequest = {}));
export var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
  /**
   * @internal
   */
  DeleteConnectionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteConnectionResponse || (DeleteConnectionResponse = {}));
export var DeleteServiceRequest;
(function (DeleteServiceRequest) {
  /**
   * @internal
   */
  DeleteServiceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteServiceRequest || (DeleteServiceRequest = {}));
export var DeleteServiceResponse;
(function (DeleteServiceResponse) {
  /**
   * @internal
   */
  DeleteServiceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Service && { Service: Service.filterSensitiveLog(obj.Service) });
  };
})(DeleteServiceResponse || (DeleteServiceResponse = {}));
export var DescribeAutoScalingConfigurationRequest;
(function (DescribeAutoScalingConfigurationRequest) {
  /**
   * @internal
   */
  DescribeAutoScalingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAutoScalingConfigurationRequest || (DescribeAutoScalingConfigurationRequest = {}));
export var DescribeAutoScalingConfigurationResponse;
(function (DescribeAutoScalingConfigurationResponse) {
  /**
   * @internal
   */
  DescribeAutoScalingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAutoScalingConfigurationResponse || (DescribeAutoScalingConfigurationResponse = {}));
export var DescribeCustomDomainsRequest;
(function (DescribeCustomDomainsRequest) {
  /**
   * @internal
   */
  DescribeCustomDomainsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCustomDomainsRequest || (DescribeCustomDomainsRequest = {}));
export var DescribeCustomDomainsResponse;
(function (DescribeCustomDomainsResponse) {
  /**
   * @internal
   */
  DescribeCustomDomainsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCustomDomainsResponse || (DescribeCustomDomainsResponse = {}));
export var DescribeServiceRequest;
(function (DescribeServiceRequest) {
  /**
   * @internal
   */
  DescribeServiceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeServiceRequest || (DescribeServiceRequest = {}));
export var DescribeServiceResponse;
(function (DescribeServiceResponse) {
  /**
   * @internal
   */
  DescribeServiceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Service && { Service: Service.filterSensitiveLog(obj.Service) });
  };
})(DescribeServiceResponse || (DescribeServiceResponse = {}));
export var DisassociateCustomDomainRequest;
(function (DisassociateCustomDomainRequest) {
  /**
   * @internal
   */
  DisassociateCustomDomainRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateCustomDomainRequest || (DisassociateCustomDomainRequest = {}));
export var DisassociateCustomDomainResponse;
(function (DisassociateCustomDomainResponse) {
  /**
   * @internal
   */
  DisassociateCustomDomainResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateCustomDomainResponse || (DisassociateCustomDomainResponse = {}));
export var ListAutoScalingConfigurationsRequest;
(function (ListAutoScalingConfigurationsRequest) {
  /**
   * @internal
   */
  ListAutoScalingConfigurationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAutoScalingConfigurationsRequest || (ListAutoScalingConfigurationsRequest = {}));
export var ListAutoScalingConfigurationsResponse;
(function (ListAutoScalingConfigurationsResponse) {
  /**
   * @internal
   */
  ListAutoScalingConfigurationsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAutoScalingConfigurationsResponse || (ListAutoScalingConfigurationsResponse = {}));
export var ListConnectionsRequest;
(function (ListConnectionsRequest) {
  /**
   * @internal
   */
  ListConnectionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListConnectionsRequest || (ListConnectionsRequest = {}));
export var ConnectionSummary;
(function (ConnectionSummary) {
  /**
   * @internal
   */
  ConnectionSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectionSummary || (ConnectionSummary = {}));
export var ListConnectionsResponse;
(function (ListConnectionsResponse) {
  /**
   * @internal
   */
  ListConnectionsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListConnectionsResponse || (ListConnectionsResponse = {}));
export var ListOperationsRequest;
(function (ListOperationsRequest) {
  /**
   * @internal
   */
  ListOperationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListOperationsRequest || (ListOperationsRequest = {}));
export var OperationStatus;
(function (OperationStatus) {
  OperationStatus["FAILED"] = "FAILED";
  OperationStatus["IN_PROGRESS"] = "IN_PROGRESS";
  OperationStatus["PENDING"] = "PENDING";
  OperationStatus["ROLLBACK_FAILED"] = "ROLLBACK_FAILED";
  OperationStatus["ROLLBACK_IN_PROGRESS"] = "ROLLBACK_IN_PROGRESS";
  OperationStatus["ROLLBACK_SUCCEEDED"] = "ROLLBACK_SUCCEEDED";
  OperationStatus["SUCCEEDED"] = "SUCCEEDED";
})(OperationStatus || (OperationStatus = {}));
export var OperationType;
(function (OperationType) {
  OperationType["CREATE_SERVICE"] = "CREATE_SERVICE";
  OperationType["DELETE_SERVICE"] = "DELETE_SERVICE";
  OperationType["PAUSE_SERVICE"] = "PAUSE_SERVICE";
  OperationType["RESUME_SERVICE"] = "RESUME_SERVICE";
  OperationType["START_DEPLOYMENT"] = "START_DEPLOYMENT";
})(OperationType || (OperationType = {}));
export var OperationSummary;
(function (OperationSummary) {
  /**
   * @internal
   */
  OperationSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OperationSummary || (OperationSummary = {}));
export var ListOperationsResponse;
(function (ListOperationsResponse) {
  /**
   * @internal
   */
  ListOperationsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListOperationsResponse || (ListOperationsResponse = {}));
export var ListServicesRequest;
(function (ListServicesRequest) {
  /**
   * @internal
   */
  ListServicesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListServicesRequest || (ListServicesRequest = {}));
export var ServiceSummary;
(function (ServiceSummary) {
  /**
   * @internal
   */
  ServiceSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceSummary || (ServiceSummary = {}));
export var ListServicesResponse;
(function (ListServicesResponse) {
  /**
   * @internal
   */
  ListServicesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListServicesResponse || (ListServicesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var PauseServiceRequest;
(function (PauseServiceRequest) {
  /**
   * @internal
   */
  PauseServiceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PauseServiceRequest || (PauseServiceRequest = {}));
export var PauseServiceResponse;
(function (PauseServiceResponse) {
  /**
   * @internal
   */
  PauseServiceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Service && { Service: Service.filterSensitiveLog(obj.Service) });
  };
})(PauseServiceResponse || (PauseServiceResponse = {}));
export var ResumeServiceRequest;
(function (ResumeServiceRequest) {
  /**
   * @internal
   */
  ResumeServiceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResumeServiceRequest || (ResumeServiceRequest = {}));
export var ResumeServiceResponse;
(function (ResumeServiceResponse) {
  /**
   * @internal
   */
  ResumeServiceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Service && { Service: Service.filterSensitiveLog(obj.Service) });
  };
})(ResumeServiceResponse || (ResumeServiceResponse = {}));
export var StartDeploymentRequest;
(function (StartDeploymentRequest) {
  /**
   * @internal
   */
  StartDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartDeploymentRequest || (StartDeploymentRequest = {}));
export var StartDeploymentResponse;
(function (StartDeploymentResponse) {
  /**
   * @internal
   */
  StartDeploymentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartDeploymentResponse || (StartDeploymentResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateServiceRequest;
(function (UpdateServiceRequest) {
  /**
   * @internal
   */
  UpdateServiceRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SourceConfiguration && {
        SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
      }
    );
  };
})(UpdateServiceRequest || (UpdateServiceRequest = {}));
export var UpdateServiceResponse;
(function (UpdateServiceResponse) {
  /**
   * @internal
   */
  UpdateServiceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Service && { Service: Service.filterSensitiveLog(obj.Service) });
  };
})(UpdateServiceResponse || (UpdateServiceResponse = {}));
//# sourceMappingURL=models_0.js.map
