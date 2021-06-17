"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyApplicationStateRequest = exports.ListProgressUpdateStreamsResult = exports.ProgressUpdateStreamSummary = exports.ListProgressUpdateStreamsRequest = exports.ListMigrationTasksResult = exports.MigrationTaskSummary = exports.ListMigrationTasksRequest = exports.ListDiscoveredResourcesResult = exports.ListDiscoveredResourcesRequest = exports.ListCreatedArtifactsResult = exports.ListCreatedArtifactsRequest = exports.ListApplicationStatesResult = exports.ListApplicationStatesRequest = exports.ImportMigrationTaskResult = exports.ImportMigrationTaskRequest = exports.DisassociateDiscoveredResourceResult = exports.DisassociateDiscoveredResourceRequest = exports.DisassociateCreatedArtifactResult = exports.DisassociateCreatedArtifactRequest = exports.DescribeMigrationTaskResult = exports.MigrationTask = exports.Task = exports.Status = exports.ResourceAttribute = exports.ResourceAttributeType = exports.DescribeMigrationTaskRequest = exports.DescribeApplicationStateResult = exports.DescribeApplicationStateRequest = exports.DeleteProgressUpdateStreamResult = exports.DeleteProgressUpdateStreamRequest = exports.CreateProgressUpdateStreamResult = exports.CreateProgressUpdateStreamRequest = exports.PolicyErrorException = exports.AssociateDiscoveredResourceResult = exports.AssociateDiscoveredResourceRequest = exports.DiscoveredResource = exports.UnauthorizedOperation = exports.ThrottlingException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.InvalidInputException = exports.InternalServerError = exports.HomeRegionNotSetException = exports.DryRunOperation = exports.AssociateCreatedArtifactResult = exports.AssociateCreatedArtifactRequest = exports.CreatedArtifact = exports.ApplicationState = exports.ApplicationStatus = exports.AccessDeniedException = void 0;
exports.PutResourceAttributesResult = exports.PutResourceAttributesRequest = exports.NotifyMigrationTaskStateResult = exports.NotifyMigrationTaskStateRequest = exports.NotifyApplicationStateResult = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["COMPLETED"] = "COMPLETED";
    ApplicationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ApplicationStatus["NOT_STARTED"] = "NOT_STARTED";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
var ApplicationState;
(function (ApplicationState) {
    /**
     * @internal
     */
    ApplicationState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationState = exports.ApplicationState || (exports.ApplicationState = {}));
var CreatedArtifact;
(function (CreatedArtifact) {
    /**
     * @internal
     */
    CreatedArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatedArtifact = exports.CreatedArtifact || (exports.CreatedArtifact = {}));
var AssociateCreatedArtifactRequest;
(function (AssociateCreatedArtifactRequest) {
    /**
     * @internal
     */
    AssociateCreatedArtifactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateCreatedArtifactRequest = exports.AssociateCreatedArtifactRequest || (exports.AssociateCreatedArtifactRequest = {}));
var AssociateCreatedArtifactResult;
(function (AssociateCreatedArtifactResult) {
    /**
     * @internal
     */
    AssociateCreatedArtifactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateCreatedArtifactResult = exports.AssociateCreatedArtifactResult || (exports.AssociateCreatedArtifactResult = {}));
var DryRunOperation;
(function (DryRunOperation) {
    /**
     * @internal
     */
    DryRunOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DryRunOperation = exports.DryRunOperation || (exports.DryRunOperation = {}));
var HomeRegionNotSetException;
(function (HomeRegionNotSetException) {
    /**
     * @internal
     */
    HomeRegionNotSetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HomeRegionNotSetException = exports.HomeRegionNotSetException || (exports.HomeRegionNotSetException = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var UnauthorizedOperation;
(function (UnauthorizedOperation) {
    /**
     * @internal
     */
    UnauthorizedOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedOperation = exports.UnauthorizedOperation || (exports.UnauthorizedOperation = {}));
var DiscoveredResource;
(function (DiscoveredResource) {
    /**
     * @internal
     */
    DiscoveredResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoveredResource = exports.DiscoveredResource || (exports.DiscoveredResource = {}));
var AssociateDiscoveredResourceRequest;
(function (AssociateDiscoveredResourceRequest) {
    /**
     * @internal
     */
    AssociateDiscoveredResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDiscoveredResourceRequest = exports.AssociateDiscoveredResourceRequest || (exports.AssociateDiscoveredResourceRequest = {}));
var AssociateDiscoveredResourceResult;
(function (AssociateDiscoveredResourceResult) {
    /**
     * @internal
     */
    AssociateDiscoveredResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDiscoveredResourceResult = exports.AssociateDiscoveredResourceResult || (exports.AssociateDiscoveredResourceResult = {}));
var PolicyErrorException;
(function (PolicyErrorException) {
    /**
     * @internal
     */
    PolicyErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyErrorException = exports.PolicyErrorException || (exports.PolicyErrorException = {}));
var CreateProgressUpdateStreamRequest;
(function (CreateProgressUpdateStreamRequest) {
    /**
     * @internal
     */
    CreateProgressUpdateStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProgressUpdateStreamRequest = exports.CreateProgressUpdateStreamRequest || (exports.CreateProgressUpdateStreamRequest = {}));
var CreateProgressUpdateStreamResult;
(function (CreateProgressUpdateStreamResult) {
    /**
     * @internal
     */
    CreateProgressUpdateStreamResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProgressUpdateStreamResult = exports.CreateProgressUpdateStreamResult || (exports.CreateProgressUpdateStreamResult = {}));
var DeleteProgressUpdateStreamRequest;
(function (DeleteProgressUpdateStreamRequest) {
    /**
     * @internal
     */
    DeleteProgressUpdateStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProgressUpdateStreamRequest = exports.DeleteProgressUpdateStreamRequest || (exports.DeleteProgressUpdateStreamRequest = {}));
var DeleteProgressUpdateStreamResult;
(function (DeleteProgressUpdateStreamResult) {
    /**
     * @internal
     */
    DeleteProgressUpdateStreamResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProgressUpdateStreamResult = exports.DeleteProgressUpdateStreamResult || (exports.DeleteProgressUpdateStreamResult = {}));
var DescribeApplicationStateRequest;
(function (DescribeApplicationStateRequest) {
    /**
     * @internal
     */
    DescribeApplicationStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationStateRequest = exports.DescribeApplicationStateRequest || (exports.DescribeApplicationStateRequest = {}));
var DescribeApplicationStateResult;
(function (DescribeApplicationStateResult) {
    /**
     * @internal
     */
    DescribeApplicationStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationStateResult = exports.DescribeApplicationStateResult || (exports.DescribeApplicationStateResult = {}));
var DescribeMigrationTaskRequest;
(function (DescribeMigrationTaskRequest) {
    /**
     * @internal
     */
    DescribeMigrationTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMigrationTaskRequest = exports.DescribeMigrationTaskRequest || (exports.DescribeMigrationTaskRequest = {}));
var ResourceAttributeType;
(function (ResourceAttributeType) {
    ResourceAttributeType["BIOS_ID"] = "BIOS_ID";
    ResourceAttributeType["FQDN"] = "FQDN";
    ResourceAttributeType["IPV4_ADDRESS"] = "IPV4_ADDRESS";
    ResourceAttributeType["IPV6_ADDRESS"] = "IPV6_ADDRESS";
    ResourceAttributeType["MAC_ADDRESS"] = "MAC_ADDRESS";
    ResourceAttributeType["MOTHERBOARD_SERIAL_NUMBER"] = "MOTHERBOARD_SERIAL_NUMBER";
    ResourceAttributeType["VM_MANAGED_OBJECT_REFERENCE"] = "VM_MANAGED_OBJECT_REFERENCE";
    ResourceAttributeType["VM_MANAGER_ID"] = "VM_MANAGER_ID";
    ResourceAttributeType["VM_NAME"] = "VM_NAME";
    ResourceAttributeType["VM_PATH"] = "VM_PATH";
})(ResourceAttributeType = exports.ResourceAttributeType || (exports.ResourceAttributeType = {}));
var ResourceAttribute;
(function (ResourceAttribute) {
    /**
     * @internal
     */
    ResourceAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAttribute = exports.ResourceAttribute || (exports.ResourceAttribute = {}));
var Status;
(function (Status) {
    Status["COMPLETED"] = "COMPLETED";
    Status["FAILED"] = "FAILED";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["NOT_STARTED"] = "NOT_STARTED";
})(Status = exports.Status || (exports.Status = {}));
var Task;
(function (Task) {
    /**
     * @internal
     */
    Task.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Task = exports.Task || (exports.Task = {}));
var MigrationTask;
(function (MigrationTask) {
    /**
     * @internal
     */
    MigrationTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MigrationTask = exports.MigrationTask || (exports.MigrationTask = {}));
var DescribeMigrationTaskResult;
(function (DescribeMigrationTaskResult) {
    /**
     * @internal
     */
    DescribeMigrationTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMigrationTaskResult = exports.DescribeMigrationTaskResult || (exports.DescribeMigrationTaskResult = {}));
var DisassociateCreatedArtifactRequest;
(function (DisassociateCreatedArtifactRequest) {
    /**
     * @internal
     */
    DisassociateCreatedArtifactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateCreatedArtifactRequest = exports.DisassociateCreatedArtifactRequest || (exports.DisassociateCreatedArtifactRequest = {}));
var DisassociateCreatedArtifactResult;
(function (DisassociateCreatedArtifactResult) {
    /**
     * @internal
     */
    DisassociateCreatedArtifactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateCreatedArtifactResult = exports.DisassociateCreatedArtifactResult || (exports.DisassociateCreatedArtifactResult = {}));
var DisassociateDiscoveredResourceRequest;
(function (DisassociateDiscoveredResourceRequest) {
    /**
     * @internal
     */
    DisassociateDiscoveredResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDiscoveredResourceRequest = exports.DisassociateDiscoveredResourceRequest || (exports.DisassociateDiscoveredResourceRequest = {}));
var DisassociateDiscoveredResourceResult;
(function (DisassociateDiscoveredResourceResult) {
    /**
     * @internal
     */
    DisassociateDiscoveredResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDiscoveredResourceResult = exports.DisassociateDiscoveredResourceResult || (exports.DisassociateDiscoveredResourceResult = {}));
var ImportMigrationTaskRequest;
(function (ImportMigrationTaskRequest) {
    /**
     * @internal
     */
    ImportMigrationTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportMigrationTaskRequest = exports.ImportMigrationTaskRequest || (exports.ImportMigrationTaskRequest = {}));
var ImportMigrationTaskResult;
(function (ImportMigrationTaskResult) {
    /**
     * @internal
     */
    ImportMigrationTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportMigrationTaskResult = exports.ImportMigrationTaskResult || (exports.ImportMigrationTaskResult = {}));
var ListApplicationStatesRequest;
(function (ListApplicationStatesRequest) {
    /**
     * @internal
     */
    ListApplicationStatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationStatesRequest = exports.ListApplicationStatesRequest || (exports.ListApplicationStatesRequest = {}));
var ListApplicationStatesResult;
(function (ListApplicationStatesResult) {
    /**
     * @internal
     */
    ListApplicationStatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationStatesResult = exports.ListApplicationStatesResult || (exports.ListApplicationStatesResult = {}));
var ListCreatedArtifactsRequest;
(function (ListCreatedArtifactsRequest) {
    /**
     * @internal
     */
    ListCreatedArtifactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCreatedArtifactsRequest = exports.ListCreatedArtifactsRequest || (exports.ListCreatedArtifactsRequest = {}));
var ListCreatedArtifactsResult;
(function (ListCreatedArtifactsResult) {
    /**
     * @internal
     */
    ListCreatedArtifactsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCreatedArtifactsResult = exports.ListCreatedArtifactsResult || (exports.ListCreatedArtifactsResult = {}));
var ListDiscoveredResourcesRequest;
(function (ListDiscoveredResourcesRequest) {
    /**
     * @internal
     */
    ListDiscoveredResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDiscoveredResourcesRequest = exports.ListDiscoveredResourcesRequest || (exports.ListDiscoveredResourcesRequest = {}));
var ListDiscoveredResourcesResult;
(function (ListDiscoveredResourcesResult) {
    /**
     * @internal
     */
    ListDiscoveredResourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDiscoveredResourcesResult = exports.ListDiscoveredResourcesResult || (exports.ListDiscoveredResourcesResult = {}));
var ListMigrationTasksRequest;
(function (ListMigrationTasksRequest) {
    /**
     * @internal
     */
    ListMigrationTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMigrationTasksRequest = exports.ListMigrationTasksRequest || (exports.ListMigrationTasksRequest = {}));
var MigrationTaskSummary;
(function (MigrationTaskSummary) {
    /**
     * @internal
     */
    MigrationTaskSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MigrationTaskSummary = exports.MigrationTaskSummary || (exports.MigrationTaskSummary = {}));
var ListMigrationTasksResult;
(function (ListMigrationTasksResult) {
    /**
     * @internal
     */
    ListMigrationTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMigrationTasksResult = exports.ListMigrationTasksResult || (exports.ListMigrationTasksResult = {}));
var ListProgressUpdateStreamsRequest;
(function (ListProgressUpdateStreamsRequest) {
    /**
     * @internal
     */
    ListProgressUpdateStreamsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProgressUpdateStreamsRequest = exports.ListProgressUpdateStreamsRequest || (exports.ListProgressUpdateStreamsRequest = {}));
var ProgressUpdateStreamSummary;
(function (ProgressUpdateStreamSummary) {
    /**
     * @internal
     */
    ProgressUpdateStreamSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProgressUpdateStreamSummary = exports.ProgressUpdateStreamSummary || (exports.ProgressUpdateStreamSummary = {}));
var ListProgressUpdateStreamsResult;
(function (ListProgressUpdateStreamsResult) {
    /**
     * @internal
     */
    ListProgressUpdateStreamsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProgressUpdateStreamsResult = exports.ListProgressUpdateStreamsResult || (exports.ListProgressUpdateStreamsResult = {}));
var NotifyApplicationStateRequest;
(function (NotifyApplicationStateRequest) {
    /**
     * @internal
     */
    NotifyApplicationStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyApplicationStateRequest = exports.NotifyApplicationStateRequest || (exports.NotifyApplicationStateRequest = {}));
var NotifyApplicationStateResult;
(function (NotifyApplicationStateResult) {
    /**
     * @internal
     */
    NotifyApplicationStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyApplicationStateResult = exports.NotifyApplicationStateResult || (exports.NotifyApplicationStateResult = {}));
var NotifyMigrationTaskStateRequest;
(function (NotifyMigrationTaskStateRequest) {
    /**
     * @internal
     */
    NotifyMigrationTaskStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyMigrationTaskStateRequest = exports.NotifyMigrationTaskStateRequest || (exports.NotifyMigrationTaskStateRequest = {}));
var NotifyMigrationTaskStateResult;
(function (NotifyMigrationTaskStateResult) {
    /**
     * @internal
     */
    NotifyMigrationTaskStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyMigrationTaskStateResult = exports.NotifyMigrationTaskStateResult || (exports.NotifyMigrationTaskStateResult = {}));
var PutResourceAttributesRequest;
(function (PutResourceAttributesRequest) {
    /**
     * @internal
     */
    PutResourceAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourceAttributesRequest = exports.PutResourceAttributesRequest || (exports.PutResourceAttributesRequest = {}));
var PutResourceAttributesResult;
(function (PutResourceAttributesResult) {
    /**
     * @internal
     */
    PutResourceAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourceAttributesResult = exports.PutResourceAttributesResult || (exports.PutResourceAttributesResult = {}));
//# sourceMappingURL=models_0.js.map