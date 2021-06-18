import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var Stage;
(function (Stage) {
  Stage["BETA"] = "BETA";
  Stage["DEVELOPMENT"] = "DEVELOPMENT";
  Stage["EXPERIMENTAL"] = "EXPERIMENTAL";
  Stage["PRODUCTION"] = "PRODUCTION";
  Stage["PULL_REQUEST"] = "PULL_REQUEST";
})(Stage || (Stage = {}));
export var AutoBranchCreationConfig;
(function (AutoBranchCreationConfig) {
  /**
   * @internal
   */
  AutoBranchCreationConfig.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING });
  };
})(AutoBranchCreationConfig || (AutoBranchCreationConfig = {}));
export var CustomRule;
(function (CustomRule) {
  /**
   * @internal
   */
  CustomRule.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomRule || (CustomRule = {}));
export var Platform;
(function (Platform) {
  Platform["WEB"] = "WEB";
})(Platform || (Platform = {}));
export var CreateAppRequest;
(function (CreateAppRequest) {
  /**
   * @internal
   */
  CreateAppRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(__assign({}, obj), obj.oauthToken && { oauthToken: SENSITIVE_STRING }),
          obj.accessToken && { accessToken: SENSITIVE_STRING }
        ),
        obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }
      ),
      obj.autoBranchCreationConfig && {
        autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
      }
    );
  };
})(CreateAppRequest || (CreateAppRequest = {}));
export var ProductionBranch;
(function (ProductionBranch) {
  /**
   * @internal
   */
  ProductionBranch.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ProductionBranch || (ProductionBranch = {}));
export var App;
(function (App) {
  /**
   * @internal
   */
  App.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
      obj.autoBranchCreationConfig && {
        autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
      }
    );
  };
})(App || (App = {}));
export var CreateAppResult;
(function (CreateAppResult) {
  /**
   * @internal
   */
  CreateAppResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.app && { app: App.filterSensitiveLog(obj.app) });
  };
})(CreateAppResult || (CreateAppResult = {}));
export var DependentServiceFailureException;
(function (DependentServiceFailureException) {
  /**
   * @internal
   */
  DependentServiceFailureException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DependentServiceFailureException || (DependentServiceFailureException = {}));
export var InternalFailureException;
(function (InternalFailureException) {
  /**
   * @internal
   */
  InternalFailureException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalFailureException || (InternalFailureException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var UnauthorizedException;
(function (UnauthorizedException) {
  /**
   * @internal
   */
  UnauthorizedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UnauthorizedException || (UnauthorizedException = {}));
export var CreateBackendEnvironmentRequest;
(function (CreateBackendEnvironmentRequest) {
  /**
   * @internal
   */
  CreateBackendEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendEnvironmentRequest || (CreateBackendEnvironmentRequest = {}));
export var BackendEnvironment;
(function (BackendEnvironment) {
  /**
   * @internal
   */
  BackendEnvironment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendEnvironment || (BackendEnvironment = {}));
export var CreateBackendEnvironmentResult;
(function (CreateBackendEnvironmentResult) {
  /**
   * @internal
   */
  CreateBackendEnvironmentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendEnvironmentResult || (CreateBackendEnvironmentResult = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var CreateBranchRequest;
(function (CreateBranchRequest) {
  /**
   * @internal
   */
  CreateBranchRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING });
  };
})(CreateBranchRequest || (CreateBranchRequest = {}));
export var Branch;
(function (Branch) {
  /**
   * @internal
   */
  Branch.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING });
  };
})(Branch || (Branch = {}));
export var CreateBranchResult;
(function (CreateBranchResult) {
  /**
   * @internal
   */
  CreateBranchResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) });
  };
})(CreateBranchResult || (CreateBranchResult = {}));
export var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
  /**
   * @internal
   */
  CreateDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDeploymentRequest || (CreateDeploymentRequest = {}));
export var CreateDeploymentResult;
(function (CreateDeploymentResult) {
  /**
   * @internal
   */
  CreateDeploymentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDeploymentResult || (CreateDeploymentResult = {}));
export var SubDomainSetting;
(function (SubDomainSetting) {
  /**
   * @internal
   */
  SubDomainSetting.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SubDomainSetting || (SubDomainSetting = {}));
export var CreateDomainAssociationRequest;
(function (CreateDomainAssociationRequest) {
  /**
   * @internal
   */
  CreateDomainAssociationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDomainAssociationRequest || (CreateDomainAssociationRequest = {}));
export var DomainStatus;
(function (DomainStatus) {
  DomainStatus["AVAILABLE"] = "AVAILABLE";
  DomainStatus["CREATING"] = "CREATING";
  DomainStatus["FAILED"] = "FAILED";
  DomainStatus["IN_PROGRESS"] = "IN_PROGRESS";
  DomainStatus["PENDING_DEPLOYMENT"] = "PENDING_DEPLOYMENT";
  DomainStatus["PENDING_VERIFICATION"] = "PENDING_VERIFICATION";
  DomainStatus["REQUESTING_CERTIFICATE"] = "REQUESTING_CERTIFICATE";
  DomainStatus["UPDATING"] = "UPDATING";
})(DomainStatus || (DomainStatus = {}));
export var SubDomain;
(function (SubDomain) {
  /**
   * @internal
   */
  SubDomain.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SubDomain || (SubDomain = {}));
export var DomainAssociation;
(function (DomainAssociation) {
  /**
   * @internal
   */
  DomainAssociation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DomainAssociation || (DomainAssociation = {}));
export var CreateDomainAssociationResult;
(function (CreateDomainAssociationResult) {
  /**
   * @internal
   */
  CreateDomainAssociationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDomainAssociationResult || (CreateDomainAssociationResult = {}));
export var CreateWebhookRequest;
(function (CreateWebhookRequest) {
  /**
   * @internal
   */
  CreateWebhookRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateWebhookRequest || (CreateWebhookRequest = {}));
export var Webhook;
(function (Webhook) {
  /**
   * @internal
   */
  Webhook.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Webhook || (Webhook = {}));
export var CreateWebhookResult;
(function (CreateWebhookResult) {
  /**
   * @internal
   */
  CreateWebhookResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateWebhookResult || (CreateWebhookResult = {}));
export var DeleteAppRequest;
(function (DeleteAppRequest) {
  /**
   * @internal
   */
  DeleteAppRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAppRequest || (DeleteAppRequest = {}));
export var DeleteAppResult;
(function (DeleteAppResult) {
  /**
   * @internal
   */
  DeleteAppResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.app && { app: App.filterSensitiveLog(obj.app) });
  };
})(DeleteAppResult || (DeleteAppResult = {}));
export var DeleteBackendEnvironmentRequest;
(function (DeleteBackendEnvironmentRequest) {
  /**
   * @internal
   */
  DeleteBackendEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendEnvironmentRequest || (DeleteBackendEnvironmentRequest = {}));
export var DeleteBackendEnvironmentResult;
(function (DeleteBackendEnvironmentResult) {
  /**
   * @internal
   */
  DeleteBackendEnvironmentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendEnvironmentResult || (DeleteBackendEnvironmentResult = {}));
export var DeleteBranchRequest;
(function (DeleteBranchRequest) {
  /**
   * @internal
   */
  DeleteBranchRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBranchRequest || (DeleteBranchRequest = {}));
export var DeleteBranchResult;
(function (DeleteBranchResult) {
  /**
   * @internal
   */
  DeleteBranchResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) });
  };
})(DeleteBranchResult || (DeleteBranchResult = {}));
export var DeleteDomainAssociationRequest;
(function (DeleteDomainAssociationRequest) {
  /**
   * @internal
   */
  DeleteDomainAssociationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDomainAssociationRequest || (DeleteDomainAssociationRequest = {}));
export var DeleteDomainAssociationResult;
(function (DeleteDomainAssociationResult) {
  /**
   * @internal
   */
  DeleteDomainAssociationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDomainAssociationResult || (DeleteDomainAssociationResult = {}));
export var DeleteJobRequest;
(function (DeleteJobRequest) {
  /**
   * @internal
   */
  DeleteJobRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteJobRequest || (DeleteJobRequest = {}));
export var JobType;
(function (JobType) {
  JobType["MANUAL"] = "MANUAL";
  JobType["RELEASE"] = "RELEASE";
  JobType["RETRY"] = "RETRY";
  JobType["WEB_HOOK"] = "WEB_HOOK";
})(JobType || (JobType = {}));
export var JobStatus;
(function (JobStatus) {
  JobStatus["CANCELLED"] = "CANCELLED";
  JobStatus["CANCELLING"] = "CANCELLING";
  JobStatus["FAILED"] = "FAILED";
  JobStatus["PENDING"] = "PENDING";
  JobStatus["PROVISIONING"] = "PROVISIONING";
  JobStatus["RUNNING"] = "RUNNING";
  JobStatus["SUCCEED"] = "SUCCEED";
})(JobStatus || (JobStatus = {}));
export var JobSummary;
(function (JobSummary) {
  /**
   * @internal
   */
  JobSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(JobSummary || (JobSummary = {}));
export var DeleteJobResult;
(function (DeleteJobResult) {
  /**
   * @internal
   */
  DeleteJobResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteJobResult || (DeleteJobResult = {}));
export var DeleteWebhookRequest;
(function (DeleteWebhookRequest) {
  /**
   * @internal
   */
  DeleteWebhookRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteWebhookRequest || (DeleteWebhookRequest = {}));
export var DeleteWebhookResult;
(function (DeleteWebhookResult) {
  /**
   * @internal
   */
  DeleteWebhookResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteWebhookResult || (DeleteWebhookResult = {}));
export var GenerateAccessLogsRequest;
(function (GenerateAccessLogsRequest) {
  /**
   * @internal
   */
  GenerateAccessLogsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GenerateAccessLogsRequest || (GenerateAccessLogsRequest = {}));
export var GenerateAccessLogsResult;
(function (GenerateAccessLogsResult) {
  /**
   * @internal
   */
  GenerateAccessLogsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GenerateAccessLogsResult || (GenerateAccessLogsResult = {}));
export var GetAppRequest;
(function (GetAppRequest) {
  /**
   * @internal
   */
  GetAppRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAppRequest || (GetAppRequest = {}));
export var GetAppResult;
(function (GetAppResult) {
  /**
   * @internal
   */
  GetAppResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.app && { app: App.filterSensitiveLog(obj.app) });
  };
})(GetAppResult || (GetAppResult = {}));
export var GetArtifactUrlRequest;
(function (GetArtifactUrlRequest) {
  /**
   * @internal
   */
  GetArtifactUrlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetArtifactUrlRequest || (GetArtifactUrlRequest = {}));
export var GetArtifactUrlResult;
(function (GetArtifactUrlResult) {
  /**
   * @internal
   */
  GetArtifactUrlResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetArtifactUrlResult || (GetArtifactUrlResult = {}));
export var GetBackendEnvironmentRequest;
(function (GetBackendEnvironmentRequest) {
  /**
   * @internal
   */
  GetBackendEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendEnvironmentRequest || (GetBackendEnvironmentRequest = {}));
export var GetBackendEnvironmentResult;
(function (GetBackendEnvironmentResult) {
  /**
   * @internal
   */
  GetBackendEnvironmentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendEnvironmentResult || (GetBackendEnvironmentResult = {}));
export var GetBranchRequest;
(function (GetBranchRequest) {
  /**
   * @internal
   */
  GetBranchRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBranchRequest || (GetBranchRequest = {}));
export var GetBranchResult;
(function (GetBranchResult) {
  /**
   * @internal
   */
  GetBranchResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) });
  };
})(GetBranchResult || (GetBranchResult = {}));
export var GetDomainAssociationRequest;
(function (GetDomainAssociationRequest) {
  /**
   * @internal
   */
  GetDomainAssociationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDomainAssociationRequest || (GetDomainAssociationRequest = {}));
export var GetDomainAssociationResult;
(function (GetDomainAssociationResult) {
  /**
   * @internal
   */
  GetDomainAssociationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDomainAssociationResult || (GetDomainAssociationResult = {}));
export var GetJobRequest;
(function (GetJobRequest) {
  /**
   * @internal
   */
  GetJobRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetJobRequest || (GetJobRequest = {}));
export var Step;
(function (Step) {
  /**
   * @internal
   */
  Step.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Step || (Step = {}));
export var Job;
(function (Job) {
  /**
   * @internal
   */
  Job.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Job || (Job = {}));
export var GetJobResult;
(function (GetJobResult) {
  /**
   * @internal
   */
  GetJobResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetJobResult || (GetJobResult = {}));
export var GetWebhookRequest;
(function (GetWebhookRequest) {
  /**
   * @internal
   */
  GetWebhookRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetWebhookRequest || (GetWebhookRequest = {}));
export var GetWebhookResult;
(function (GetWebhookResult) {
  /**
   * @internal
   */
  GetWebhookResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetWebhookResult || (GetWebhookResult = {}));
export var ListAppsRequest;
(function (ListAppsRequest) {
  /**
   * @internal
   */
  ListAppsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAppsRequest || (ListAppsRequest = {}));
export var ListAppsResult;
(function (ListAppsResult) {
  /**
   * @internal
   */
  ListAppsResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.apps && {
        apps: obj.apps.map(function (item) {
          return App.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListAppsResult || (ListAppsResult = {}));
export var ListArtifactsRequest;
(function (ListArtifactsRequest) {
  /**
   * @internal
   */
  ListArtifactsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListArtifactsRequest || (ListArtifactsRequest = {}));
export var Artifact;
(function (Artifact) {
  /**
   * @internal
   */
  Artifact.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Artifact || (Artifact = {}));
export var ListArtifactsResult;
(function (ListArtifactsResult) {
  /**
   * @internal
   */
  ListArtifactsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListArtifactsResult || (ListArtifactsResult = {}));
export var ListBackendEnvironmentsRequest;
(function (ListBackendEnvironmentsRequest) {
  /**
   * @internal
   */
  ListBackendEnvironmentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackendEnvironmentsRequest || (ListBackendEnvironmentsRequest = {}));
export var ListBackendEnvironmentsResult;
(function (ListBackendEnvironmentsResult) {
  /**
   * @internal
   */
  ListBackendEnvironmentsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackendEnvironmentsResult || (ListBackendEnvironmentsResult = {}));
export var ListBranchesRequest;
(function (ListBranchesRequest) {
  /**
   * @internal
   */
  ListBranchesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBranchesRequest || (ListBranchesRequest = {}));
export var ListBranchesResult;
(function (ListBranchesResult) {
  /**
   * @internal
   */
  ListBranchesResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.branches && {
        branches: obj.branches.map(function (item) {
          return Branch.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListBranchesResult || (ListBranchesResult = {}));
export var ListDomainAssociationsRequest;
(function (ListDomainAssociationsRequest) {
  /**
   * @internal
   */
  ListDomainAssociationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDomainAssociationsRequest || (ListDomainAssociationsRequest = {}));
export var ListDomainAssociationsResult;
(function (ListDomainAssociationsResult) {
  /**
   * @internal
   */
  ListDomainAssociationsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDomainAssociationsResult || (ListDomainAssociationsResult = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
  /**
   * @internal
   */
  ListJobsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListJobsRequest || (ListJobsRequest = {}));
export var ListJobsResult;
(function (ListJobsResult) {
  /**
   * @internal
   */
  ListJobsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListJobsResult || (ListJobsResult = {}));
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
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ListWebhooksRequest;
(function (ListWebhooksRequest) {
  /**
   * @internal
   */
  ListWebhooksRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListWebhooksRequest || (ListWebhooksRequest = {}));
export var ListWebhooksResult;
(function (ListWebhooksResult) {
  /**
   * @internal
   */
  ListWebhooksResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListWebhooksResult || (ListWebhooksResult = {}));
export var StartDeploymentRequest;
(function (StartDeploymentRequest) {
  /**
   * @internal
   */
  StartDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartDeploymentRequest || (StartDeploymentRequest = {}));
export var StartDeploymentResult;
(function (StartDeploymentResult) {
  /**
   * @internal
   */
  StartDeploymentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartDeploymentResult || (StartDeploymentResult = {}));
export var StartJobRequest;
(function (StartJobRequest) {
  /**
   * @internal
   */
  StartJobRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartJobRequest || (StartJobRequest = {}));
export var StartJobResult;
(function (StartJobResult) {
  /**
   * @internal
   */
  StartJobResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartJobResult || (StartJobResult = {}));
export var StopJobRequest;
(function (StopJobRequest) {
  /**
   * @internal
   */
  StopJobRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopJobRequest || (StopJobRequest = {}));
export var StopJobResult;
(function (StopJobResult) {
  /**
   * @internal
   */
  StopJobResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopJobResult || (StopJobResult = {}));
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
export var UpdateAppRequest;
(function (UpdateAppRequest) {
  /**
   * @internal
   */
  UpdateAppRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(__assign({}, obj), obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
          obj.autoBranchCreationConfig && {
            autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
          }
        ),
        obj.oauthToken && { oauthToken: SENSITIVE_STRING }
      ),
      obj.accessToken && { accessToken: SENSITIVE_STRING }
    );
  };
})(UpdateAppRequest || (UpdateAppRequest = {}));
export var UpdateAppResult;
(function (UpdateAppResult) {
  /**
   * @internal
   */
  UpdateAppResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.app && { app: App.filterSensitiveLog(obj.app) });
  };
})(UpdateAppResult || (UpdateAppResult = {}));
export var UpdateBranchRequest;
(function (UpdateBranchRequest) {
  /**
   * @internal
   */
  UpdateBranchRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING });
  };
})(UpdateBranchRequest || (UpdateBranchRequest = {}));
export var UpdateBranchResult;
(function (UpdateBranchResult) {
  /**
   * @internal
   */
  UpdateBranchResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) });
  };
})(UpdateBranchResult || (UpdateBranchResult = {}));
export var UpdateDomainAssociationRequest;
(function (UpdateDomainAssociationRequest) {
  /**
   * @internal
   */
  UpdateDomainAssociationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDomainAssociationRequest || (UpdateDomainAssociationRequest = {}));
export var UpdateDomainAssociationResult;
(function (UpdateDomainAssociationResult) {
  /**
   * @internal
   */
  UpdateDomainAssociationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDomainAssociationResult || (UpdateDomainAssociationResult = {}));
export var UpdateWebhookRequest;
(function (UpdateWebhookRequest) {
  /**
   * @internal
   */
  UpdateWebhookRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateWebhookRequest || (UpdateWebhookRequest = {}));
export var UpdateWebhookResult;
(function (UpdateWebhookResult) {
  /**
   * @internal
   */
  UpdateWebhookResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateWebhookResult || (UpdateWebhookResult = {}));
//# sourceMappingURL=models_0.js.map
