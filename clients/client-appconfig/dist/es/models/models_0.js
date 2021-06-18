import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var Application;
(function (Application) {
  /**
   * @internal
   */
  Application.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Application || (Application = {}));
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var CreateApplicationRequest;
(function (CreateApplicationRequest) {
  /**
   * @internal
   */
  CreateApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApplicationRequest || (CreateApplicationRequest = {}));
export var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServerException || (InternalServerException = {}));
export var ValidatorType;
(function (ValidatorType) {
  ValidatorType["JSON_SCHEMA"] = "JSON_SCHEMA";
  ValidatorType["LAMBDA"] = "LAMBDA";
})(ValidatorType || (ValidatorType = {}));
export var Validator;
(function (Validator) {
  /**
   * @internal
   */
  Validator.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING });
  };
})(Validator || (Validator = {}));
export var ConfigurationProfile;
(function (ConfigurationProfile) {
  /**
   * @internal
   */
  ConfigurationProfile.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Validators && {
        Validators: obj.Validators.map(function (item) {
          return Validator.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ConfigurationProfile || (ConfigurationProfile = {}));
export var CreateConfigurationProfileRequest;
(function (CreateConfigurationProfileRequest) {
  /**
   * @internal
   */
  CreateConfigurationProfileRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Validators && {
        Validators: obj.Validators.map(function (item) {
          return Validator.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateConfigurationProfileRequest || (CreateConfigurationProfileRequest = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var GrowthType;
(function (GrowthType) {
  GrowthType["EXPONENTIAL"] = "EXPONENTIAL";
  GrowthType["LINEAR"] = "LINEAR";
})(GrowthType || (GrowthType = {}));
export var ReplicateTo;
(function (ReplicateTo) {
  ReplicateTo["NONE"] = "NONE";
  ReplicateTo["SSM_DOCUMENT"] = "SSM_DOCUMENT";
})(ReplicateTo || (ReplicateTo = {}));
export var CreateDeploymentStrategyRequest;
(function (CreateDeploymentStrategyRequest) {
  /**
   * @internal
   */
  CreateDeploymentStrategyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDeploymentStrategyRequest || (CreateDeploymentStrategyRequest = {}));
export var DeploymentStrategy;
(function (DeploymentStrategy) {
  /**
   * @internal
   */
  DeploymentStrategy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeploymentStrategy || (DeploymentStrategy = {}));
export var Monitor;
(function (Monitor) {
  /**
   * @internal
   */
  Monitor.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Monitor || (Monitor = {}));
export var CreateEnvironmentRequest;
(function (CreateEnvironmentRequest) {
  /**
   * @internal
   */
  CreateEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateEnvironmentRequest || (CreateEnvironmentRequest = {}));
export var EnvironmentState;
(function (EnvironmentState) {
  EnvironmentState["DEPLOYING"] = "DEPLOYING";
  EnvironmentState["READY_FOR_DEPLOYMENT"] = "READY_FOR_DEPLOYMENT";
  EnvironmentState["ROLLED_BACK"] = "ROLLED_BACK";
  EnvironmentState["ROLLING_BACK"] = "ROLLING_BACK";
})(EnvironmentState || (EnvironmentState = {}));
export var Environment;
(function (Environment) {
  /**
   * @internal
   */
  Environment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Environment || (Environment = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var CreateHostedConfigurationVersionRequest;
(function (CreateHostedConfigurationVersionRequest) {
  /**
   * @internal
   */
  CreateHostedConfigurationVersionRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING });
  };
})(CreateHostedConfigurationVersionRequest || (CreateHostedConfigurationVersionRequest = {}));
export var HostedConfigurationVersion;
(function (HostedConfigurationVersion) {
  /**
   * @internal
   */
  HostedConfigurationVersion.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING });
  };
})(HostedConfigurationVersion || (HostedConfigurationVersion = {}));
export var BytesMeasure;
(function (BytesMeasure) {
  BytesMeasure["KILOBYTES"] = "KILOBYTES";
})(BytesMeasure || (BytesMeasure = {}));
export var PayloadTooLargeException;
(function (PayloadTooLargeException) {
  /**
   * @internal
   */
  PayloadTooLargeException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PayloadTooLargeException || (PayloadTooLargeException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
  /**
   * @internal
   */
  DeleteApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApplicationRequest || (DeleteApplicationRequest = {}));
export var DeleteConfigurationProfileRequest;
(function (DeleteConfigurationProfileRequest) {
  /**
   * @internal
   */
  DeleteConfigurationProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteConfigurationProfileRequest || (DeleteConfigurationProfileRequest = {}));
export var DeleteDeploymentStrategyRequest;
(function (DeleteDeploymentStrategyRequest) {
  /**
   * @internal
   */
  DeleteDeploymentStrategyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDeploymentStrategyRequest || (DeleteDeploymentStrategyRequest = {}));
export var DeleteEnvironmentRequest;
(function (DeleteEnvironmentRequest) {
  /**
   * @internal
   */
  DeleteEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteEnvironmentRequest || (DeleteEnvironmentRequest = {}));
export var DeleteHostedConfigurationVersionRequest;
(function (DeleteHostedConfigurationVersionRequest) {
  /**
   * @internal
   */
  DeleteHostedConfigurationVersionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteHostedConfigurationVersionRequest || (DeleteHostedConfigurationVersionRequest = {}));
export var GetApplicationRequest;
(function (GetApplicationRequest) {
  /**
   * @internal
   */
  GetApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApplicationRequest || (GetApplicationRequest = {}));
export var Configuration;
(function (Configuration) {
  /**
   * @internal
   */
  Configuration.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING });
  };
})(Configuration || (Configuration = {}));
export var GetConfigurationRequest;
(function (GetConfigurationRequest) {
  /**
   * @internal
   */
  GetConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetConfigurationRequest || (GetConfigurationRequest = {}));
export var GetConfigurationProfileRequest;
(function (GetConfigurationProfileRequest) {
  /**
   * @internal
   */
  GetConfigurationProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetConfigurationProfileRequest || (GetConfigurationProfileRequest = {}));
export var DeploymentEventType;
(function (DeploymentEventType) {
  DeploymentEventType["BAKE_TIME_STARTED"] = "BAKE_TIME_STARTED";
  DeploymentEventType["DEPLOYMENT_COMPLETED"] = "DEPLOYMENT_COMPLETED";
  DeploymentEventType["DEPLOYMENT_STARTED"] = "DEPLOYMENT_STARTED";
  DeploymentEventType["PERCENTAGE_UPDATED"] = "PERCENTAGE_UPDATED";
  DeploymentEventType["ROLLBACK_COMPLETED"] = "ROLLBACK_COMPLETED";
  DeploymentEventType["ROLLBACK_STARTED"] = "ROLLBACK_STARTED";
})(DeploymentEventType || (DeploymentEventType = {}));
export var TriggeredBy;
(function (TriggeredBy) {
  TriggeredBy["APPCONFIG"] = "APPCONFIG";
  TriggeredBy["CLOUDWATCH_ALARM"] = "CLOUDWATCH_ALARM";
  TriggeredBy["INTERNAL_ERROR"] = "INTERNAL_ERROR";
  TriggeredBy["USER"] = "USER";
})(TriggeredBy || (TriggeredBy = {}));
export var DeploymentEvent;
(function (DeploymentEvent) {
  /**
   * @internal
   */
  DeploymentEvent.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeploymentEvent || (DeploymentEvent = {}));
export var DeploymentState;
(function (DeploymentState) {
  DeploymentState["BAKING"] = "BAKING";
  DeploymentState["COMPLETE"] = "COMPLETE";
  DeploymentState["DEPLOYING"] = "DEPLOYING";
  DeploymentState["ROLLED_BACK"] = "ROLLED_BACK";
  DeploymentState["ROLLING_BACK"] = "ROLLING_BACK";
  DeploymentState["VALIDATING"] = "VALIDATING";
})(DeploymentState || (DeploymentState = {}));
export var Deployment;
(function (Deployment) {
  /**
   * @internal
   */
  Deployment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Deployment || (Deployment = {}));
export var GetDeploymentRequest;
(function (GetDeploymentRequest) {
  /**
   * @internal
   */
  GetDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeploymentRequest || (GetDeploymentRequest = {}));
export var GetDeploymentStrategyRequest;
(function (GetDeploymentStrategyRequest) {
  /**
   * @internal
   */
  GetDeploymentStrategyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeploymentStrategyRequest || (GetDeploymentStrategyRequest = {}));
export var GetEnvironmentRequest;
(function (GetEnvironmentRequest) {
  /**
   * @internal
   */
  GetEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEnvironmentRequest || (GetEnvironmentRequest = {}));
export var GetHostedConfigurationVersionRequest;
(function (GetHostedConfigurationVersionRequest) {
  /**
   * @internal
   */
  GetHostedConfigurationVersionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetHostedConfigurationVersionRequest || (GetHostedConfigurationVersionRequest = {}));
export var Applications;
(function (Applications) {
  /**
   * @internal
   */
  Applications.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Applications || (Applications = {}));
export var ListApplicationsRequest;
(function (ListApplicationsRequest) {
  /**
   * @internal
   */
  ListApplicationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListApplicationsRequest || (ListApplicationsRequest = {}));
export var ConfigurationProfileSummary;
(function (ConfigurationProfileSummary) {
  /**
   * @internal
   */
  ConfigurationProfileSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConfigurationProfileSummary || (ConfigurationProfileSummary = {}));
export var ConfigurationProfiles;
(function (ConfigurationProfiles) {
  /**
   * @internal
   */
  ConfigurationProfiles.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConfigurationProfiles || (ConfigurationProfiles = {}));
export var ListConfigurationProfilesRequest;
(function (ListConfigurationProfilesRequest) {
  /**
   * @internal
   */
  ListConfigurationProfilesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListConfigurationProfilesRequest || (ListConfigurationProfilesRequest = {}));
export var DeploymentSummary;
(function (DeploymentSummary) {
  /**
   * @internal
   */
  DeploymentSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeploymentSummary || (DeploymentSummary = {}));
export var Deployments;
(function (Deployments) {
  /**
   * @internal
   */
  Deployments.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Deployments || (Deployments = {}));
export var ListDeploymentsRequest;
(function (ListDeploymentsRequest) {
  /**
   * @internal
   */
  ListDeploymentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDeploymentsRequest || (ListDeploymentsRequest = {}));
export var DeploymentStrategies;
(function (DeploymentStrategies) {
  /**
   * @internal
   */
  DeploymentStrategies.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeploymentStrategies || (DeploymentStrategies = {}));
export var ListDeploymentStrategiesRequest;
(function (ListDeploymentStrategiesRequest) {
  /**
   * @internal
   */
  ListDeploymentStrategiesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDeploymentStrategiesRequest || (ListDeploymentStrategiesRequest = {}));
export var Environments;
(function (Environments) {
  /**
   * @internal
   */
  Environments.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Environments || (Environments = {}));
export var ListEnvironmentsRequest;
(function (ListEnvironmentsRequest) {
  /**
   * @internal
   */
  ListEnvironmentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListEnvironmentsRequest || (ListEnvironmentsRequest = {}));
export var HostedConfigurationVersionSummary;
(function (HostedConfigurationVersionSummary) {
  /**
   * @internal
   */
  HostedConfigurationVersionSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HostedConfigurationVersionSummary || (HostedConfigurationVersionSummary = {}));
export var HostedConfigurationVersions;
(function (HostedConfigurationVersions) {
  /**
   * @internal
   */
  HostedConfigurationVersions.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HostedConfigurationVersions || (HostedConfigurationVersions = {}));
export var ListHostedConfigurationVersionsRequest;
(function (ListHostedConfigurationVersionsRequest) {
  /**
   * @internal
   */
  ListHostedConfigurationVersionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListHostedConfigurationVersionsRequest || (ListHostedConfigurationVersionsRequest = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ResourceTags;
(function (ResourceTags) {
  /**
   * @internal
   */
  ResourceTags.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceTags || (ResourceTags = {}));
export var StartDeploymentRequest;
(function (StartDeploymentRequest) {
  /**
   * @internal
   */
  StartDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartDeploymentRequest || (StartDeploymentRequest = {}));
export var StopDeploymentRequest;
(function (StopDeploymentRequest) {
  /**
   * @internal
   */
  StopDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopDeploymentRequest || (StopDeploymentRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
  /**
   * @internal
   */
  UpdateApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApplicationRequest || (UpdateApplicationRequest = {}));
export var UpdateConfigurationProfileRequest;
(function (UpdateConfigurationProfileRequest) {
  /**
   * @internal
   */
  UpdateConfigurationProfileRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Validators && {
        Validators: obj.Validators.map(function (item) {
          return Validator.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateConfigurationProfileRequest || (UpdateConfigurationProfileRequest = {}));
export var UpdateDeploymentStrategyRequest;
(function (UpdateDeploymentStrategyRequest) {
  /**
   * @internal
   */
  UpdateDeploymentStrategyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDeploymentStrategyRequest || (UpdateDeploymentStrategyRequest = {}));
export var UpdateEnvironmentRequest;
(function (UpdateEnvironmentRequest) {
  /**
   * @internal
   */
  UpdateEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateEnvironmentRequest || (UpdateEnvironmentRequest = {}));
export var ValidateConfigurationRequest;
(function (ValidateConfigurationRequest) {
  /**
   * @internal
   */
  ValidateConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidateConfigurationRequest || (ValidateConfigurationRequest = {}));
//# sourceMappingURL=models_0.js.map
