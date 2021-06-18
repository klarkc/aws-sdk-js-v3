"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppResult =
  exports.GetAppRequest =
  exports.GenerateAccessLogsResult =
  exports.GenerateAccessLogsRequest =
  exports.DeleteWebhookResult =
  exports.DeleteWebhookRequest =
  exports.DeleteJobResult =
  exports.JobSummary =
  exports.JobStatus =
  exports.JobType =
  exports.DeleteJobRequest =
  exports.DeleteDomainAssociationResult =
  exports.DeleteDomainAssociationRequest =
  exports.DeleteBranchResult =
  exports.DeleteBranchRequest =
  exports.DeleteBackendEnvironmentResult =
  exports.DeleteBackendEnvironmentRequest =
  exports.DeleteAppResult =
  exports.DeleteAppRequest =
  exports.CreateWebhookResult =
  exports.Webhook =
  exports.CreateWebhookRequest =
  exports.CreateDomainAssociationResult =
  exports.DomainAssociation =
  exports.SubDomain =
  exports.DomainStatus =
  exports.CreateDomainAssociationRequest =
  exports.SubDomainSetting =
  exports.CreateDeploymentResult =
  exports.CreateDeploymentRequest =
  exports.CreateBranchResult =
  exports.Branch =
  exports.CreateBranchRequest =
  exports.NotFoundException =
  exports.CreateBackendEnvironmentResult =
  exports.BackendEnvironment =
  exports.CreateBackendEnvironmentRequest =
  exports.UnauthorizedException =
  exports.LimitExceededException =
  exports.InternalFailureException =
  exports.DependentServiceFailureException =
  exports.CreateAppResult =
  exports.App =
  exports.ProductionBranch =
  exports.CreateAppRequest =
  exports.Platform =
  exports.CustomRule =
  exports.AutoBranchCreationConfig =
  exports.Stage =
  exports.BadRequestException =
    void 0;
exports.UpdateWebhookResult =
  exports.UpdateWebhookRequest =
  exports.UpdateDomainAssociationResult =
  exports.UpdateDomainAssociationRequest =
  exports.UpdateBranchResult =
  exports.UpdateBranchRequest =
  exports.UpdateAppResult =
  exports.UpdateAppRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.StopJobResult =
  exports.StopJobRequest =
  exports.StartJobResult =
  exports.StartJobRequest =
  exports.StartDeploymentResult =
  exports.StartDeploymentRequest =
  exports.ListWebhooksResult =
  exports.ListWebhooksRequest =
  exports.ResourceNotFoundException =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListJobsResult =
  exports.ListJobsRequest =
  exports.ListDomainAssociationsResult =
  exports.ListDomainAssociationsRequest =
  exports.ListBranchesResult =
  exports.ListBranchesRequest =
  exports.ListBackendEnvironmentsResult =
  exports.ListBackendEnvironmentsRequest =
  exports.ListArtifactsResult =
  exports.Artifact =
  exports.ListArtifactsRequest =
  exports.ListAppsResult =
  exports.ListAppsRequest =
  exports.GetWebhookResult =
  exports.GetWebhookRequest =
  exports.GetJobResult =
  exports.Job =
  exports.Step =
  exports.GetJobRequest =
  exports.GetDomainAssociationResult =
  exports.GetDomainAssociationRequest =
  exports.GetBranchResult =
  exports.GetBranchRequest =
  exports.GetBackendEnvironmentResult =
  exports.GetBackendEnvironmentRequest =
  exports.GetArtifactUrlResult =
  exports.GetArtifactUrlRequest =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var Stage;
(function (Stage) {
  Stage["BETA"] = "BETA";
  Stage["DEVELOPMENT"] = "DEVELOPMENT";
  Stage["EXPERIMENTAL"] = "EXPERIMENTAL";
  Stage["PRODUCTION"] = "PRODUCTION";
  Stage["PULL_REQUEST"] = "PULL_REQUEST";
})((Stage = exports.Stage || (exports.Stage = {})));
var AutoBranchCreationConfig;
(function (AutoBranchCreationConfig) {
  /**
   * @internal
   */
  AutoBranchCreationConfig.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
  });
})((AutoBranchCreationConfig = exports.AutoBranchCreationConfig || (exports.AutoBranchCreationConfig = {})));
var CustomRule;
(function (CustomRule) {
  /**
   * @internal
   */
  CustomRule.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomRule = exports.CustomRule || (exports.CustomRule = {})));
var Platform;
(function (Platform) {
  Platform["WEB"] = "WEB";
})((Platform = exports.Platform || (exports.Platform = {})));
var CreateAppRequest;
(function (CreateAppRequest) {
  /**
   * @internal
   */
  CreateAppRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.oauthToken && { oauthToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.autoBranchCreationConfig && {
      autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
    }),
  });
})((CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {})));
var ProductionBranch;
(function (ProductionBranch) {
  /**
   * @internal
   */
  ProductionBranch.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ProductionBranch = exports.ProductionBranch || (exports.ProductionBranch = {})));
var App;
(function (App) {
  /**
   * @internal
   */
  App.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.autoBranchCreationConfig && {
      autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
    }),
  });
})((App = exports.App || (exports.App = {})));
var CreateAppResult;
(function (CreateAppResult) {
  /**
   * @internal
   */
  CreateAppResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
})((CreateAppResult = exports.CreateAppResult || (exports.CreateAppResult = {})));
var DependentServiceFailureException;
(function (DependentServiceFailureException) {
  /**
   * @internal
   */
  DependentServiceFailureException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DependentServiceFailureException =
    exports.DependentServiceFailureException || (exports.DependentServiceFailureException = {}))
);
var InternalFailureException;
(function (InternalFailureException) {
  /**
   * @internal
   */
  InternalFailureException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var UnauthorizedException;
(function (UnauthorizedException) {
  /**
   * @internal
   */
  UnauthorizedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {})));
var CreateBackendEnvironmentRequest;
(function (CreateBackendEnvironmentRequest) {
  /**
   * @internal
   */
  CreateBackendEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendEnvironmentRequest =
    exports.CreateBackendEnvironmentRequest || (exports.CreateBackendEnvironmentRequest = {}))
);
var BackendEnvironment;
(function (BackendEnvironment) {
  /**
   * @internal
   */
  BackendEnvironment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackendEnvironment = exports.BackendEnvironment || (exports.BackendEnvironment = {})));
var CreateBackendEnvironmentResult;
(function (CreateBackendEnvironmentResult) {
  /**
   * @internal
   */
  CreateBackendEnvironmentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendEnvironmentResult =
    exports.CreateBackendEnvironmentResult || (exports.CreateBackendEnvironmentResult = {}))
);
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var CreateBranchRequest;
(function (CreateBranchRequest) {
  /**
   * @internal
   */
  CreateBranchRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateBranchRequest = exports.CreateBranchRequest || (exports.CreateBranchRequest = {})));
var Branch;
(function (Branch) {
  /**
   * @internal
   */
  Branch.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
  });
})((Branch = exports.Branch || (exports.Branch = {})));
var CreateBranchResult;
(function (CreateBranchResult) {
  /**
   * @internal
   */
  CreateBranchResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
})((CreateBranchResult = exports.CreateBranchResult || (exports.CreateBranchResult = {})));
var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
  /**
   * @internal
   */
  CreateDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDeploymentRequest = exports.CreateDeploymentRequest || (exports.CreateDeploymentRequest = {})));
var CreateDeploymentResult;
(function (CreateDeploymentResult) {
  /**
   * @internal
   */
  CreateDeploymentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDeploymentResult = exports.CreateDeploymentResult || (exports.CreateDeploymentResult = {})));
var SubDomainSetting;
(function (SubDomainSetting) {
  /**
   * @internal
   */
  SubDomainSetting.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SubDomainSetting = exports.SubDomainSetting || (exports.SubDomainSetting = {})));
var CreateDomainAssociationRequest;
(function (CreateDomainAssociationRequest) {
  /**
   * @internal
   */
  CreateDomainAssociationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateDomainAssociationRequest =
    exports.CreateDomainAssociationRequest || (exports.CreateDomainAssociationRequest = {}))
);
var DomainStatus;
(function (DomainStatus) {
  DomainStatus["AVAILABLE"] = "AVAILABLE";
  DomainStatus["CREATING"] = "CREATING";
  DomainStatus["FAILED"] = "FAILED";
  DomainStatus["IN_PROGRESS"] = "IN_PROGRESS";
  DomainStatus["PENDING_DEPLOYMENT"] = "PENDING_DEPLOYMENT";
  DomainStatus["PENDING_VERIFICATION"] = "PENDING_VERIFICATION";
  DomainStatus["REQUESTING_CERTIFICATE"] = "REQUESTING_CERTIFICATE";
  DomainStatus["UPDATING"] = "UPDATING";
})((DomainStatus = exports.DomainStatus || (exports.DomainStatus = {})));
var SubDomain;
(function (SubDomain) {
  /**
   * @internal
   */
  SubDomain.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SubDomain = exports.SubDomain || (exports.SubDomain = {})));
var DomainAssociation;
(function (DomainAssociation) {
  /**
   * @internal
   */
  DomainAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainAssociation = exports.DomainAssociation || (exports.DomainAssociation = {})));
var CreateDomainAssociationResult;
(function (CreateDomainAssociationResult) {
  /**
   * @internal
   */
  CreateDomainAssociationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateDomainAssociationResult =
    exports.CreateDomainAssociationResult || (exports.CreateDomainAssociationResult = {}))
);
var CreateWebhookRequest;
(function (CreateWebhookRequest) {
  /**
   * @internal
   */
  CreateWebhookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateWebhookRequest = exports.CreateWebhookRequest || (exports.CreateWebhookRequest = {})));
var Webhook;
(function (Webhook) {
  /**
   * @internal
   */
  Webhook.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Webhook = exports.Webhook || (exports.Webhook = {})));
var CreateWebhookResult;
(function (CreateWebhookResult) {
  /**
   * @internal
   */
  CreateWebhookResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateWebhookResult = exports.CreateWebhookResult || (exports.CreateWebhookResult = {})));
var DeleteAppRequest;
(function (DeleteAppRequest) {
  /**
   * @internal
   */
  DeleteAppRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {})));
var DeleteAppResult;
(function (DeleteAppResult) {
  /**
   * @internal
   */
  DeleteAppResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
})((DeleteAppResult = exports.DeleteAppResult || (exports.DeleteAppResult = {})));
var DeleteBackendEnvironmentRequest;
(function (DeleteBackendEnvironmentRequest) {
  /**
   * @internal
   */
  DeleteBackendEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBackendEnvironmentRequest =
    exports.DeleteBackendEnvironmentRequest || (exports.DeleteBackendEnvironmentRequest = {}))
);
var DeleteBackendEnvironmentResult;
(function (DeleteBackendEnvironmentResult) {
  /**
   * @internal
   */
  DeleteBackendEnvironmentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBackendEnvironmentResult =
    exports.DeleteBackendEnvironmentResult || (exports.DeleteBackendEnvironmentResult = {}))
);
var DeleteBranchRequest;
(function (DeleteBranchRequest) {
  /**
   * @internal
   */
  DeleteBranchRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBranchRequest = exports.DeleteBranchRequest || (exports.DeleteBranchRequest = {})));
var DeleteBranchResult;
(function (DeleteBranchResult) {
  /**
   * @internal
   */
  DeleteBranchResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
})((DeleteBranchResult = exports.DeleteBranchResult || (exports.DeleteBranchResult = {})));
var DeleteDomainAssociationRequest;
(function (DeleteDomainAssociationRequest) {
  /**
   * @internal
   */
  DeleteDomainAssociationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDomainAssociationRequest =
    exports.DeleteDomainAssociationRequest || (exports.DeleteDomainAssociationRequest = {}))
);
var DeleteDomainAssociationResult;
(function (DeleteDomainAssociationResult) {
  /**
   * @internal
   */
  DeleteDomainAssociationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDomainAssociationResult =
    exports.DeleteDomainAssociationResult || (exports.DeleteDomainAssociationResult = {}))
);
var DeleteJobRequest;
(function (DeleteJobRequest) {
  /**
   * @internal
   */
  DeleteJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteJobRequest = exports.DeleteJobRequest || (exports.DeleteJobRequest = {})));
var JobType;
(function (JobType) {
  JobType["MANUAL"] = "MANUAL";
  JobType["RELEASE"] = "RELEASE";
  JobType["RETRY"] = "RETRY";
  JobType["WEB_HOOK"] = "WEB_HOOK";
})((JobType = exports.JobType || (exports.JobType = {})));
var JobStatus;
(function (JobStatus) {
  JobStatus["CANCELLED"] = "CANCELLED";
  JobStatus["CANCELLING"] = "CANCELLING";
  JobStatus["FAILED"] = "FAILED";
  JobStatus["PENDING"] = "PENDING";
  JobStatus["PROVISIONING"] = "PROVISIONING";
  JobStatus["RUNNING"] = "RUNNING";
  JobStatus["SUCCEED"] = "SUCCEED";
})((JobStatus = exports.JobStatus || (exports.JobStatus = {})));
var JobSummary;
(function (JobSummary) {
  /**
   * @internal
   */
  JobSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobSummary = exports.JobSummary || (exports.JobSummary = {})));
var DeleteJobResult;
(function (DeleteJobResult) {
  /**
   * @internal
   */
  DeleteJobResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteJobResult = exports.DeleteJobResult || (exports.DeleteJobResult = {})));
var DeleteWebhookRequest;
(function (DeleteWebhookRequest) {
  /**
   * @internal
   */
  DeleteWebhookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWebhookRequest = exports.DeleteWebhookRequest || (exports.DeleteWebhookRequest = {})));
var DeleteWebhookResult;
(function (DeleteWebhookResult) {
  /**
   * @internal
   */
  DeleteWebhookResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWebhookResult = exports.DeleteWebhookResult || (exports.DeleteWebhookResult = {})));
var GenerateAccessLogsRequest;
(function (GenerateAccessLogsRequest) {
  /**
   * @internal
   */
  GenerateAccessLogsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GenerateAccessLogsRequest = exports.GenerateAccessLogsRequest || (exports.GenerateAccessLogsRequest = {})));
var GenerateAccessLogsResult;
(function (GenerateAccessLogsResult) {
  /**
   * @internal
   */
  GenerateAccessLogsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GenerateAccessLogsResult = exports.GenerateAccessLogsResult || (exports.GenerateAccessLogsResult = {})));
var GetAppRequest;
(function (GetAppRequest) {
  /**
   * @internal
   */
  GetAppRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAppRequest = exports.GetAppRequest || (exports.GetAppRequest = {})));
var GetAppResult;
(function (GetAppResult) {
  /**
   * @internal
   */
  GetAppResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
})((GetAppResult = exports.GetAppResult || (exports.GetAppResult = {})));
var GetArtifactUrlRequest;
(function (GetArtifactUrlRequest) {
  /**
   * @internal
   */
  GetArtifactUrlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetArtifactUrlRequest = exports.GetArtifactUrlRequest || (exports.GetArtifactUrlRequest = {})));
var GetArtifactUrlResult;
(function (GetArtifactUrlResult) {
  /**
   * @internal
   */
  GetArtifactUrlResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetArtifactUrlResult = exports.GetArtifactUrlResult || (exports.GetArtifactUrlResult = {})));
var GetBackendEnvironmentRequest;
(function (GetBackendEnvironmentRequest) {
  /**
   * @internal
   */
  GetBackendEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetBackendEnvironmentRequest = exports.GetBackendEnvironmentRequest || (exports.GetBackendEnvironmentRequest = {}))
);
var GetBackendEnvironmentResult;
(function (GetBackendEnvironmentResult) {
  /**
   * @internal
   */
  GetBackendEnvironmentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendEnvironmentResult = exports.GetBackendEnvironmentResult || (exports.GetBackendEnvironmentResult = {})));
var GetBranchRequest;
(function (GetBranchRequest) {
  /**
   * @internal
   */
  GetBranchRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBranchRequest = exports.GetBranchRequest || (exports.GetBranchRequest = {})));
var GetBranchResult;
(function (GetBranchResult) {
  /**
   * @internal
   */
  GetBranchResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
})((GetBranchResult = exports.GetBranchResult || (exports.GetBranchResult = {})));
var GetDomainAssociationRequest;
(function (GetDomainAssociationRequest) {
  /**
   * @internal
   */
  GetDomainAssociationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainAssociationRequest = exports.GetDomainAssociationRequest || (exports.GetDomainAssociationRequest = {})));
var GetDomainAssociationResult;
(function (GetDomainAssociationResult) {
  /**
   * @internal
   */
  GetDomainAssociationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainAssociationResult = exports.GetDomainAssociationResult || (exports.GetDomainAssociationResult = {})));
var GetJobRequest;
(function (GetJobRequest) {
  /**
   * @internal
   */
  GetJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {})));
var Step;
(function (Step) {
  /**
   * @internal
   */
  Step.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Step = exports.Step || (exports.Step = {})));
var Job;
(function (Job) {
  /**
   * @internal
   */
  Job.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Job = exports.Job || (exports.Job = {})));
var GetJobResult;
(function (GetJobResult) {
  /**
   * @internal
   */
  GetJobResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetJobResult = exports.GetJobResult || (exports.GetJobResult = {})));
var GetWebhookRequest;
(function (GetWebhookRequest) {
  /**
   * @internal
   */
  GetWebhookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetWebhookRequest = exports.GetWebhookRequest || (exports.GetWebhookRequest = {})));
var GetWebhookResult;
(function (GetWebhookResult) {
  /**
   * @internal
   */
  GetWebhookResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetWebhookResult = exports.GetWebhookResult || (exports.GetWebhookResult = {})));
var ListAppsRequest;
(function (ListAppsRequest) {
  /**
   * @internal
   */
  ListAppsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAppsRequest = exports.ListAppsRequest || (exports.ListAppsRequest = {})));
var ListAppsResult;
(function (ListAppsResult) {
  /**
   * @internal
   */
  ListAppsResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.apps && { apps: obj.apps.map((item) => App.filterSensitiveLog(item)) }),
  });
})((ListAppsResult = exports.ListAppsResult || (exports.ListAppsResult = {})));
var ListArtifactsRequest;
(function (ListArtifactsRequest) {
  /**
   * @internal
   */
  ListArtifactsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListArtifactsRequest = exports.ListArtifactsRequest || (exports.ListArtifactsRequest = {})));
var Artifact;
(function (Artifact) {
  /**
   * @internal
   */
  Artifact.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Artifact = exports.Artifact || (exports.Artifact = {})));
var ListArtifactsResult;
(function (ListArtifactsResult) {
  /**
   * @internal
   */
  ListArtifactsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListArtifactsResult = exports.ListArtifactsResult || (exports.ListArtifactsResult = {})));
var ListBackendEnvironmentsRequest;
(function (ListBackendEnvironmentsRequest) {
  /**
   * @internal
   */
  ListBackendEnvironmentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBackendEnvironmentsRequest =
    exports.ListBackendEnvironmentsRequest || (exports.ListBackendEnvironmentsRequest = {}))
);
var ListBackendEnvironmentsResult;
(function (ListBackendEnvironmentsResult) {
  /**
   * @internal
   */
  ListBackendEnvironmentsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBackendEnvironmentsResult =
    exports.ListBackendEnvironmentsResult || (exports.ListBackendEnvironmentsResult = {}))
);
var ListBranchesRequest;
(function (ListBranchesRequest) {
  /**
   * @internal
   */
  ListBranchesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBranchesRequest = exports.ListBranchesRequest || (exports.ListBranchesRequest = {})));
var ListBranchesResult;
(function (ListBranchesResult) {
  /**
   * @internal
   */
  ListBranchesResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.branches && { branches: obj.branches.map((item) => Branch.filterSensitiveLog(item)) }),
  });
})((ListBranchesResult = exports.ListBranchesResult || (exports.ListBranchesResult = {})));
var ListDomainAssociationsRequest;
(function (ListDomainAssociationsRequest) {
  /**
   * @internal
   */
  ListDomainAssociationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDomainAssociationsRequest =
    exports.ListDomainAssociationsRequest || (exports.ListDomainAssociationsRequest = {}))
);
var ListDomainAssociationsResult;
(function (ListDomainAssociationsResult) {
  /**
   * @internal
   */
  ListDomainAssociationsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDomainAssociationsResult = exports.ListDomainAssociationsResult || (exports.ListDomainAssociationsResult = {}))
);
var ListJobsRequest;
(function (ListJobsRequest) {
  /**
   * @internal
   */
  ListJobsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {})));
var ListJobsResult;
(function (ListJobsResult) {
  /**
   * @internal
   */
  ListJobsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListJobsResult = exports.ListJobsResult || (exports.ListJobsResult = {})));
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
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var ListWebhooksRequest;
(function (ListWebhooksRequest) {
  /**
   * @internal
   */
  ListWebhooksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListWebhooksRequest = exports.ListWebhooksRequest || (exports.ListWebhooksRequest = {})));
var ListWebhooksResult;
(function (ListWebhooksResult) {
  /**
   * @internal
   */
  ListWebhooksResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListWebhooksResult = exports.ListWebhooksResult || (exports.ListWebhooksResult = {})));
var StartDeploymentRequest;
(function (StartDeploymentRequest) {
  /**
   * @internal
   */
  StartDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartDeploymentRequest = exports.StartDeploymentRequest || (exports.StartDeploymentRequest = {})));
var StartDeploymentResult;
(function (StartDeploymentResult) {
  /**
   * @internal
   */
  StartDeploymentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartDeploymentResult = exports.StartDeploymentResult || (exports.StartDeploymentResult = {})));
var StartJobRequest;
(function (StartJobRequest) {
  /**
   * @internal
   */
  StartJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartJobRequest = exports.StartJobRequest || (exports.StartJobRequest = {})));
var StartJobResult;
(function (StartJobResult) {
  /**
   * @internal
   */
  StartJobResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartJobResult = exports.StartJobResult || (exports.StartJobResult = {})));
var StopJobRequest;
(function (StopJobRequest) {
  /**
   * @internal
   */
  StopJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopJobRequest = exports.StopJobRequest || (exports.StopJobRequest = {})));
var StopJobResult;
(function (StopJobResult) {
  /**
   * @internal
   */
  StopJobResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopJobResult = exports.StopJobResult || (exports.StopJobResult = {})));
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
var UpdateAppRequest;
(function (UpdateAppRequest) {
  /**
   * @internal
   */
  UpdateAppRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.autoBranchCreationConfig && {
      autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
    }),
    ...(obj.oauthToken && { oauthToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateAppRequest = exports.UpdateAppRequest || (exports.UpdateAppRequest = {})));
var UpdateAppResult;
(function (UpdateAppResult) {
  /**
   * @internal
   */
  UpdateAppResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
})((UpdateAppResult = exports.UpdateAppResult || (exports.UpdateAppResult = {})));
var UpdateBranchRequest;
(function (UpdateBranchRequest) {
  /**
   * @internal
   */
  UpdateBranchRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateBranchRequest = exports.UpdateBranchRequest || (exports.UpdateBranchRequest = {})));
var UpdateBranchResult;
(function (UpdateBranchResult) {
  /**
   * @internal
   */
  UpdateBranchResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
})((UpdateBranchResult = exports.UpdateBranchResult || (exports.UpdateBranchResult = {})));
var UpdateDomainAssociationRequest;
(function (UpdateDomainAssociationRequest) {
  /**
   * @internal
   */
  UpdateDomainAssociationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateDomainAssociationRequest =
    exports.UpdateDomainAssociationRequest || (exports.UpdateDomainAssociationRequest = {}))
);
var UpdateDomainAssociationResult;
(function (UpdateDomainAssociationResult) {
  /**
   * @internal
   */
  UpdateDomainAssociationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateDomainAssociationResult =
    exports.UpdateDomainAssociationResult || (exports.UpdateDomainAssociationResult = {}))
);
var UpdateWebhookRequest;
(function (UpdateWebhookRequest) {
  /**
   * @internal
   */
  UpdateWebhookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateWebhookRequest = exports.UpdateWebhookRequest || (exports.UpdateWebhookRequest = {})));
var UpdateWebhookResult;
(function (UpdateWebhookResult) {
  /**
   * @internal
   */
  UpdateWebhookResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateWebhookResult = exports.UpdateWebhookResult || (exports.UpdateWebhookResult = {})));
//# sourceMappingURL=models_0.js.map
