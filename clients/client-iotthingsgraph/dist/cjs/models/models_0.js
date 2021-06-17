"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowExecutionStatus = exports.FlowExecutionMessage = exports.FlowExecutionEventType = exports.EntityFilter = exports.EntityFilterName = exports.EntityDescription = exports.DissociateEntityFromThingResponse = exports.DissociateEntityFromThingRequest = exports.EntityType = exports.DescribeNamespaceResponse = exports.DescribeNamespaceRequest = exports.DeprecateSystemTemplateResponse = exports.DeprecateSystemTemplateRequest = exports.DeprecateFlowTemplateResponse = exports.DeprecateFlowTemplateRequest = exports.DeploySystemInstanceResponse = exports.DeploySystemInstanceRequest = exports.DependencyRevision = exports.DeleteSystemTemplateResponse = exports.DeleteSystemTemplateRequest = exports.DeleteSystemInstanceResponse = exports.DeleteSystemInstanceRequest = exports.DeleteNamespaceResponse = exports.DeleteNamespaceRequest = exports.ResourceInUseException = exports.DeleteFlowTemplateResponse = exports.DeleteFlowTemplateRequest = exports.CreateSystemTemplateResponse = exports.SystemTemplateSummary = exports.CreateSystemTemplateRequest = exports.CreateSystemInstanceResponse = exports.SystemInstanceSummary = exports.SystemInstanceDeploymentStatus = exports.CreateSystemInstanceRequest = exports.DeploymentTarget = exports.Tag = exports.MetricsConfiguration = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.CreateFlowTemplateResponse = exports.FlowTemplateSummary = exports.CreateFlowTemplateRequest = exports.DefinitionDocument = exports.DefinitionLanguage = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InvalidRequestException = exports.InternalFailureException = exports.AssociateEntityToThingResponse = exports.AssociateEntityToThingRequest = void 0;
exports.UndeploySystemInstanceResponse = exports.UndeploySystemInstanceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SearchThingsResponse = exports.Thing = exports.SearchThingsRequest = exports.SearchSystemTemplatesResponse = exports.SearchSystemTemplatesRequest = exports.SystemTemplateFilter = exports.SystemTemplateFilterName = exports.SearchSystemInstancesResponse = exports.SearchSystemInstancesRequest = exports.SystemInstanceFilter = exports.SystemInstanceFilterName = exports.SearchFlowTemplatesResponse = exports.SearchFlowTemplatesRequest = exports.SearchFlowExecutionsResponse = exports.SearchFlowExecutionsRequest = exports.SearchEntitiesResponse = exports.SearchEntitiesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListFlowExecutionMessagesResponse = exports.ListFlowExecutionMessagesRequest = exports.GetUploadStatusResponse = exports.UploadStatus = exports.GetUploadStatusRequest = exports.GetSystemTemplateRevisionsResponse = exports.GetSystemTemplateRevisionsRequest = exports.GetSystemTemplateResponse = exports.SystemTemplateDescription = exports.GetSystemTemplateRequest = exports.GetSystemInstanceResponse = exports.SystemInstanceDescription = exports.GetSystemInstanceRequest = exports.GetNamespaceDeletionStatusResponse = exports.NamespaceDeletionStatus = exports.NamespaceDeletionStatusErrorCodes = exports.GetNamespaceDeletionStatusRequest = exports.GetFlowTemplateRevisionsResponse = exports.GetFlowTemplateRevisionsRequest = exports.GetFlowTemplateResponse = exports.GetFlowTemplateRequest = exports.GetEntitiesResponse = exports.GetEntitiesRequest = exports.FlowTemplateFilter = exports.FlowTemplateFilterName = exports.FlowTemplateDescription = exports.FlowExecutionSummary = void 0;
exports.UploadEntityDefinitionsResponse = exports.UploadEntityDefinitionsRequest = exports.UpdateSystemTemplateResponse = exports.UpdateSystemTemplateRequest = exports.UpdateFlowTemplateResponse = exports.UpdateFlowTemplateRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = void 0;
var AssociateEntityToThingRequest;
(function (AssociateEntityToThingRequest) {
    /**
     * @internal
     */
    AssociateEntityToThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEntityToThingRequest = exports.AssociateEntityToThingRequest || (exports.AssociateEntityToThingRequest = {}));
var AssociateEntityToThingResponse;
(function (AssociateEntityToThingResponse) {
    /**
     * @internal
     */
    AssociateEntityToThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEntityToThingResponse = exports.AssociateEntityToThingResponse || (exports.AssociateEntityToThingResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var DefinitionLanguage;
(function (DefinitionLanguage) {
    DefinitionLanguage["GRAPHQL"] = "GRAPHQL";
})(DefinitionLanguage = exports.DefinitionLanguage || (exports.DefinitionLanguage = {}));
var DefinitionDocument;
(function (DefinitionDocument) {
    /**
     * @internal
     */
    DefinitionDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefinitionDocument = exports.DefinitionDocument || (exports.DefinitionDocument = {}));
var CreateFlowTemplateRequest;
(function (CreateFlowTemplateRequest) {
    /**
     * @internal
     */
    CreateFlowTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowTemplateRequest = exports.CreateFlowTemplateRequest || (exports.CreateFlowTemplateRequest = {}));
var FlowTemplateSummary;
(function (FlowTemplateSummary) {
    /**
     * @internal
     */
    FlowTemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowTemplateSummary = exports.FlowTemplateSummary || (exports.FlowTemplateSummary = {}));
var CreateFlowTemplateResponse;
(function (CreateFlowTemplateResponse) {
    /**
     * @internal
     */
    CreateFlowTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowTemplateResponse = exports.CreateFlowTemplateResponse || (exports.CreateFlowTemplateResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var MetricsConfiguration;
(function (MetricsConfiguration) {
    /**
     * @internal
     */
    MetricsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricsConfiguration = exports.MetricsConfiguration || (exports.MetricsConfiguration = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var DeploymentTarget;
(function (DeploymentTarget) {
    DeploymentTarget["CLOUD"] = "CLOUD";
    DeploymentTarget["GREENGRASS"] = "GREENGRASS";
})(DeploymentTarget = exports.DeploymentTarget || (exports.DeploymentTarget = {}));
var CreateSystemInstanceRequest;
(function (CreateSystemInstanceRequest) {
    /**
     * @internal
     */
    CreateSystemInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSystemInstanceRequest = exports.CreateSystemInstanceRequest || (exports.CreateSystemInstanceRequest = {}));
var SystemInstanceDeploymentStatus;
(function (SystemInstanceDeploymentStatus) {
    SystemInstanceDeploymentStatus["BOOTSTRAP"] = "BOOTSTRAP";
    SystemInstanceDeploymentStatus["DELETED_IN_TARGET"] = "DELETED_IN_TARGET";
    SystemInstanceDeploymentStatus["DEPLOYED_IN_TARGET"] = "DEPLOYED_IN_TARGET";
    SystemInstanceDeploymentStatus["DEPLOY_IN_PROGRESS"] = "DEPLOY_IN_PROGRESS";
    SystemInstanceDeploymentStatus["FAILED"] = "FAILED";
    SystemInstanceDeploymentStatus["NOT_DEPLOYED"] = "NOT_DEPLOYED";
    SystemInstanceDeploymentStatus["PENDING_DELETE"] = "PENDING_DELETE";
    SystemInstanceDeploymentStatus["UNDEPLOY_IN_PROGRESS"] = "UNDEPLOY_IN_PROGRESS";
})(SystemInstanceDeploymentStatus = exports.SystemInstanceDeploymentStatus || (exports.SystemInstanceDeploymentStatus = {}));
var SystemInstanceSummary;
(function (SystemInstanceSummary) {
    /**
     * @internal
     */
    SystemInstanceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemInstanceSummary = exports.SystemInstanceSummary || (exports.SystemInstanceSummary = {}));
var CreateSystemInstanceResponse;
(function (CreateSystemInstanceResponse) {
    /**
     * @internal
     */
    CreateSystemInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSystemInstanceResponse = exports.CreateSystemInstanceResponse || (exports.CreateSystemInstanceResponse = {}));
var CreateSystemTemplateRequest;
(function (CreateSystemTemplateRequest) {
    /**
     * @internal
     */
    CreateSystemTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSystemTemplateRequest = exports.CreateSystemTemplateRequest || (exports.CreateSystemTemplateRequest = {}));
var SystemTemplateSummary;
(function (SystemTemplateSummary) {
    /**
     * @internal
     */
    SystemTemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemTemplateSummary = exports.SystemTemplateSummary || (exports.SystemTemplateSummary = {}));
var CreateSystemTemplateResponse;
(function (CreateSystemTemplateResponse) {
    /**
     * @internal
     */
    CreateSystemTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSystemTemplateResponse = exports.CreateSystemTemplateResponse || (exports.CreateSystemTemplateResponse = {}));
var DeleteFlowTemplateRequest;
(function (DeleteFlowTemplateRequest) {
    /**
     * @internal
     */
    DeleteFlowTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowTemplateRequest = exports.DeleteFlowTemplateRequest || (exports.DeleteFlowTemplateRequest = {}));
var DeleteFlowTemplateResponse;
(function (DeleteFlowTemplateResponse) {
    /**
     * @internal
     */
    DeleteFlowTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowTemplateResponse = exports.DeleteFlowTemplateResponse || (exports.DeleteFlowTemplateResponse = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteNamespaceRequest;
(function (DeleteNamespaceRequest) {
    /**
     * @internal
     */
    DeleteNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNamespaceRequest = exports.DeleteNamespaceRequest || (exports.DeleteNamespaceRequest = {}));
var DeleteNamespaceResponse;
(function (DeleteNamespaceResponse) {
    /**
     * @internal
     */
    DeleteNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNamespaceResponse = exports.DeleteNamespaceResponse || (exports.DeleteNamespaceResponse = {}));
var DeleteSystemInstanceRequest;
(function (DeleteSystemInstanceRequest) {
    /**
     * @internal
     */
    DeleteSystemInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSystemInstanceRequest = exports.DeleteSystemInstanceRequest || (exports.DeleteSystemInstanceRequest = {}));
var DeleteSystemInstanceResponse;
(function (DeleteSystemInstanceResponse) {
    /**
     * @internal
     */
    DeleteSystemInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSystemInstanceResponse = exports.DeleteSystemInstanceResponse || (exports.DeleteSystemInstanceResponse = {}));
var DeleteSystemTemplateRequest;
(function (DeleteSystemTemplateRequest) {
    /**
     * @internal
     */
    DeleteSystemTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSystemTemplateRequest = exports.DeleteSystemTemplateRequest || (exports.DeleteSystemTemplateRequest = {}));
var DeleteSystemTemplateResponse;
(function (DeleteSystemTemplateResponse) {
    /**
     * @internal
     */
    DeleteSystemTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSystemTemplateResponse = exports.DeleteSystemTemplateResponse || (exports.DeleteSystemTemplateResponse = {}));
var DependencyRevision;
(function (DependencyRevision) {
    /**
     * @internal
     */
    DependencyRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependencyRevision = exports.DependencyRevision || (exports.DependencyRevision = {}));
var DeploySystemInstanceRequest;
(function (DeploySystemInstanceRequest) {
    /**
     * @internal
     */
    DeploySystemInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploySystemInstanceRequest = exports.DeploySystemInstanceRequest || (exports.DeploySystemInstanceRequest = {}));
var DeploySystemInstanceResponse;
(function (DeploySystemInstanceResponse) {
    /**
     * @internal
     */
    DeploySystemInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploySystemInstanceResponse = exports.DeploySystemInstanceResponse || (exports.DeploySystemInstanceResponse = {}));
var DeprecateFlowTemplateRequest;
(function (DeprecateFlowTemplateRequest) {
    /**
     * @internal
     */
    DeprecateFlowTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateFlowTemplateRequest = exports.DeprecateFlowTemplateRequest || (exports.DeprecateFlowTemplateRequest = {}));
var DeprecateFlowTemplateResponse;
(function (DeprecateFlowTemplateResponse) {
    /**
     * @internal
     */
    DeprecateFlowTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateFlowTemplateResponse = exports.DeprecateFlowTemplateResponse || (exports.DeprecateFlowTemplateResponse = {}));
var DeprecateSystemTemplateRequest;
(function (DeprecateSystemTemplateRequest) {
    /**
     * @internal
     */
    DeprecateSystemTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateSystemTemplateRequest = exports.DeprecateSystemTemplateRequest || (exports.DeprecateSystemTemplateRequest = {}));
var DeprecateSystemTemplateResponse;
(function (DeprecateSystemTemplateResponse) {
    /**
     * @internal
     */
    DeprecateSystemTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateSystemTemplateResponse = exports.DeprecateSystemTemplateResponse || (exports.DeprecateSystemTemplateResponse = {}));
var DescribeNamespaceRequest;
(function (DescribeNamespaceRequest) {
    /**
     * @internal
     */
    DescribeNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNamespaceRequest = exports.DescribeNamespaceRequest || (exports.DescribeNamespaceRequest = {}));
var DescribeNamespaceResponse;
(function (DescribeNamespaceResponse) {
    /**
     * @internal
     */
    DescribeNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNamespaceResponse = exports.DescribeNamespaceResponse || (exports.DescribeNamespaceResponse = {}));
var EntityType;
(function (EntityType) {
    EntityType["ACTION"] = "ACTION";
    EntityType["CAPABILITY"] = "CAPABILITY";
    EntityType["DEVICE"] = "DEVICE";
    EntityType["DEVICE_MODEL"] = "DEVICE_MODEL";
    EntityType["ENUM"] = "ENUM";
    EntityType["EVENT"] = "EVENT";
    EntityType["MAPPING"] = "MAPPING";
    EntityType["PROPERTY"] = "PROPERTY";
    EntityType["SERVICE"] = "SERVICE";
    EntityType["STATE"] = "STATE";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var DissociateEntityFromThingRequest;
(function (DissociateEntityFromThingRequest) {
    /**
     * @internal
     */
    DissociateEntityFromThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DissociateEntityFromThingRequest = exports.DissociateEntityFromThingRequest || (exports.DissociateEntityFromThingRequest = {}));
var DissociateEntityFromThingResponse;
(function (DissociateEntityFromThingResponse) {
    /**
     * @internal
     */
    DissociateEntityFromThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DissociateEntityFromThingResponse = exports.DissociateEntityFromThingResponse || (exports.DissociateEntityFromThingResponse = {}));
var EntityDescription;
(function (EntityDescription) {
    /**
     * @internal
     */
    EntityDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityDescription = exports.EntityDescription || (exports.EntityDescription = {}));
var EntityFilterName;
(function (EntityFilterName) {
    EntityFilterName["NAME"] = "NAME";
    EntityFilterName["NAMESPACE"] = "NAMESPACE";
    EntityFilterName["REFERENCED_ENTITY_ID"] = "REFERENCED_ENTITY_ID";
    EntityFilterName["SEMANTIC_TYPE_PATH"] = "SEMANTIC_TYPE_PATH";
})(EntityFilterName = exports.EntityFilterName || (exports.EntityFilterName = {}));
var EntityFilter;
(function (EntityFilter) {
    /**
     * @internal
     */
    EntityFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityFilter = exports.EntityFilter || (exports.EntityFilter = {}));
var FlowExecutionEventType;
(function (FlowExecutionEventType) {
    FlowExecutionEventType["ACKNOWLEDGE_TASK_MESSAGE"] = "ACKNOWLEDGE_TASK_MESSAGE";
    FlowExecutionEventType["ACTIVITY_FAILED"] = "ACTIVITY_FAILED";
    FlowExecutionEventType["ACTIVITY_SCHEDULED"] = "ACTIVITY_SCHEDULED";
    FlowExecutionEventType["ACTIVITY_STARTED"] = "ACTIVITY_STARTED";
    FlowExecutionEventType["ACTIVITY_SUCCEEDED"] = "ACTIVITY_SUCCEEDED";
    FlowExecutionEventType["EXECUTION_ABORTED"] = "EXECUTION_ABORTED";
    FlowExecutionEventType["EXECUTION_FAILED"] = "EXECUTION_FAILED";
    FlowExecutionEventType["EXECUTION_STARTED"] = "EXECUTION_STARTED";
    FlowExecutionEventType["EXECUTION_SUCCEEDED"] = "EXECUTION_SUCCEEDED";
    FlowExecutionEventType["SCHEDULE_NEXT_READY_STEPS_TASK"] = "SCHEDULE_NEXT_READY_STEPS_TASK";
    FlowExecutionEventType["START_FLOW_EXECUTION_TASK"] = "START_FLOW_EXECUTION_TASK";
    FlowExecutionEventType["STEP_FAILED"] = "STEP_FAILED";
    FlowExecutionEventType["STEP_STARTED"] = "STEP_STARTED";
    FlowExecutionEventType["STEP_SUCCEEDED"] = "STEP_SUCCEEDED";
    FlowExecutionEventType["THING_ACTION_TASK"] = "THING_ACTION_TASK";
    FlowExecutionEventType["THING_ACTION_TASK_FAILED"] = "THING_ACTION_TASK_FAILED";
    FlowExecutionEventType["THING_ACTION_TASK_SUCCEEDED"] = "THING_ACTION_TASK_SUCCEEDED";
})(FlowExecutionEventType = exports.FlowExecutionEventType || (exports.FlowExecutionEventType = {}));
var FlowExecutionMessage;
(function (FlowExecutionMessage) {
    /**
     * @internal
     */
    FlowExecutionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowExecutionMessage = exports.FlowExecutionMessage || (exports.FlowExecutionMessage = {}));
var FlowExecutionStatus;
(function (FlowExecutionStatus) {
    FlowExecutionStatus["ABORTED"] = "ABORTED";
    FlowExecutionStatus["FAILED"] = "FAILED";
    FlowExecutionStatus["RUNNING"] = "RUNNING";
    FlowExecutionStatus["SUCCEEDED"] = "SUCCEEDED";
})(FlowExecutionStatus = exports.FlowExecutionStatus || (exports.FlowExecutionStatus = {}));
var FlowExecutionSummary;
(function (FlowExecutionSummary) {
    /**
     * @internal
     */
    FlowExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowExecutionSummary = exports.FlowExecutionSummary || (exports.FlowExecutionSummary = {}));
var FlowTemplateDescription;
(function (FlowTemplateDescription) {
    /**
     * @internal
     */
    FlowTemplateDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowTemplateDescription = exports.FlowTemplateDescription || (exports.FlowTemplateDescription = {}));
var FlowTemplateFilterName;
(function (FlowTemplateFilterName) {
    FlowTemplateFilterName["DEVICE_MODEL_ID"] = "DEVICE_MODEL_ID";
})(FlowTemplateFilterName = exports.FlowTemplateFilterName || (exports.FlowTemplateFilterName = {}));
var FlowTemplateFilter;
(function (FlowTemplateFilter) {
    /**
     * @internal
     */
    FlowTemplateFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowTemplateFilter = exports.FlowTemplateFilter || (exports.FlowTemplateFilter = {}));
var GetEntitiesRequest;
(function (GetEntitiesRequest) {
    /**
     * @internal
     */
    GetEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEntitiesRequest = exports.GetEntitiesRequest || (exports.GetEntitiesRequest = {}));
var GetEntitiesResponse;
(function (GetEntitiesResponse) {
    /**
     * @internal
     */
    GetEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEntitiesResponse = exports.GetEntitiesResponse || (exports.GetEntitiesResponse = {}));
var GetFlowTemplateRequest;
(function (GetFlowTemplateRequest) {
    /**
     * @internal
     */
    GetFlowTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFlowTemplateRequest = exports.GetFlowTemplateRequest || (exports.GetFlowTemplateRequest = {}));
var GetFlowTemplateResponse;
(function (GetFlowTemplateResponse) {
    /**
     * @internal
     */
    GetFlowTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFlowTemplateResponse = exports.GetFlowTemplateResponse || (exports.GetFlowTemplateResponse = {}));
var GetFlowTemplateRevisionsRequest;
(function (GetFlowTemplateRevisionsRequest) {
    /**
     * @internal
     */
    GetFlowTemplateRevisionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFlowTemplateRevisionsRequest = exports.GetFlowTemplateRevisionsRequest || (exports.GetFlowTemplateRevisionsRequest = {}));
var GetFlowTemplateRevisionsResponse;
(function (GetFlowTemplateRevisionsResponse) {
    /**
     * @internal
     */
    GetFlowTemplateRevisionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFlowTemplateRevisionsResponse = exports.GetFlowTemplateRevisionsResponse || (exports.GetFlowTemplateRevisionsResponse = {}));
var GetNamespaceDeletionStatusRequest;
(function (GetNamespaceDeletionStatusRequest) {
    /**
     * @internal
     */
    GetNamespaceDeletionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNamespaceDeletionStatusRequest = exports.GetNamespaceDeletionStatusRequest || (exports.GetNamespaceDeletionStatusRequest = {}));
var NamespaceDeletionStatusErrorCodes;
(function (NamespaceDeletionStatusErrorCodes) {
    NamespaceDeletionStatusErrorCodes["VALIDATION_FAILED"] = "VALIDATION_FAILED";
})(NamespaceDeletionStatusErrorCodes = exports.NamespaceDeletionStatusErrorCodes || (exports.NamespaceDeletionStatusErrorCodes = {}));
var NamespaceDeletionStatus;
(function (NamespaceDeletionStatus) {
    NamespaceDeletionStatus["FAILED"] = "FAILED";
    NamespaceDeletionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    NamespaceDeletionStatus["SUCCEEDED"] = "SUCCEEDED";
})(NamespaceDeletionStatus = exports.NamespaceDeletionStatus || (exports.NamespaceDeletionStatus = {}));
var GetNamespaceDeletionStatusResponse;
(function (GetNamespaceDeletionStatusResponse) {
    /**
     * @internal
     */
    GetNamespaceDeletionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNamespaceDeletionStatusResponse = exports.GetNamespaceDeletionStatusResponse || (exports.GetNamespaceDeletionStatusResponse = {}));
var GetSystemInstanceRequest;
(function (GetSystemInstanceRequest) {
    /**
     * @internal
     */
    GetSystemInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSystemInstanceRequest = exports.GetSystemInstanceRequest || (exports.GetSystemInstanceRequest = {}));
var SystemInstanceDescription;
(function (SystemInstanceDescription) {
    /**
     * @internal
     */
    SystemInstanceDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemInstanceDescription = exports.SystemInstanceDescription || (exports.SystemInstanceDescription = {}));
var GetSystemInstanceResponse;
(function (GetSystemInstanceResponse) {
    /**
     * @internal
     */
    GetSystemInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSystemInstanceResponse = exports.GetSystemInstanceResponse || (exports.GetSystemInstanceResponse = {}));
var GetSystemTemplateRequest;
(function (GetSystemTemplateRequest) {
    /**
     * @internal
     */
    GetSystemTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSystemTemplateRequest = exports.GetSystemTemplateRequest || (exports.GetSystemTemplateRequest = {}));
var SystemTemplateDescription;
(function (SystemTemplateDescription) {
    /**
     * @internal
     */
    SystemTemplateDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemTemplateDescription = exports.SystemTemplateDescription || (exports.SystemTemplateDescription = {}));
var GetSystemTemplateResponse;
(function (GetSystemTemplateResponse) {
    /**
     * @internal
     */
    GetSystemTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSystemTemplateResponse = exports.GetSystemTemplateResponse || (exports.GetSystemTemplateResponse = {}));
var GetSystemTemplateRevisionsRequest;
(function (GetSystemTemplateRevisionsRequest) {
    /**
     * @internal
     */
    GetSystemTemplateRevisionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSystemTemplateRevisionsRequest = exports.GetSystemTemplateRevisionsRequest || (exports.GetSystemTemplateRevisionsRequest = {}));
var GetSystemTemplateRevisionsResponse;
(function (GetSystemTemplateRevisionsResponse) {
    /**
     * @internal
     */
    GetSystemTemplateRevisionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSystemTemplateRevisionsResponse = exports.GetSystemTemplateRevisionsResponse || (exports.GetSystemTemplateRevisionsResponse = {}));
var GetUploadStatusRequest;
(function (GetUploadStatusRequest) {
    /**
     * @internal
     */
    GetUploadStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUploadStatusRequest = exports.GetUploadStatusRequest || (exports.GetUploadStatusRequest = {}));
var UploadStatus;
(function (UploadStatus) {
    UploadStatus["FAILED"] = "FAILED";
    UploadStatus["IN_PROGRESS"] = "IN_PROGRESS";
    UploadStatus["SUCCEEDED"] = "SUCCEEDED";
})(UploadStatus = exports.UploadStatus || (exports.UploadStatus = {}));
var GetUploadStatusResponse;
(function (GetUploadStatusResponse) {
    /**
     * @internal
     */
    GetUploadStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUploadStatusResponse = exports.GetUploadStatusResponse || (exports.GetUploadStatusResponse = {}));
var ListFlowExecutionMessagesRequest;
(function (ListFlowExecutionMessagesRequest) {
    /**
     * @internal
     */
    ListFlowExecutionMessagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFlowExecutionMessagesRequest = exports.ListFlowExecutionMessagesRequest || (exports.ListFlowExecutionMessagesRequest = {}));
var ListFlowExecutionMessagesResponse;
(function (ListFlowExecutionMessagesResponse) {
    /**
     * @internal
     */
    ListFlowExecutionMessagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFlowExecutionMessagesResponse = exports.ListFlowExecutionMessagesResponse || (exports.ListFlowExecutionMessagesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var SearchEntitiesRequest;
(function (SearchEntitiesRequest) {
    /**
     * @internal
     */
    SearchEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchEntitiesRequest = exports.SearchEntitiesRequest || (exports.SearchEntitiesRequest = {}));
var SearchEntitiesResponse;
(function (SearchEntitiesResponse) {
    /**
     * @internal
     */
    SearchEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchEntitiesResponse = exports.SearchEntitiesResponse || (exports.SearchEntitiesResponse = {}));
var SearchFlowExecutionsRequest;
(function (SearchFlowExecutionsRequest) {
    /**
     * @internal
     */
    SearchFlowExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFlowExecutionsRequest = exports.SearchFlowExecutionsRequest || (exports.SearchFlowExecutionsRequest = {}));
var SearchFlowExecutionsResponse;
(function (SearchFlowExecutionsResponse) {
    /**
     * @internal
     */
    SearchFlowExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFlowExecutionsResponse = exports.SearchFlowExecutionsResponse || (exports.SearchFlowExecutionsResponse = {}));
var SearchFlowTemplatesRequest;
(function (SearchFlowTemplatesRequest) {
    /**
     * @internal
     */
    SearchFlowTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFlowTemplatesRequest = exports.SearchFlowTemplatesRequest || (exports.SearchFlowTemplatesRequest = {}));
var SearchFlowTemplatesResponse;
(function (SearchFlowTemplatesResponse) {
    /**
     * @internal
     */
    SearchFlowTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFlowTemplatesResponse = exports.SearchFlowTemplatesResponse || (exports.SearchFlowTemplatesResponse = {}));
var SystemInstanceFilterName;
(function (SystemInstanceFilterName) {
    SystemInstanceFilterName["GREENGRASS_GROUP_NAME"] = "GREENGRASS_GROUP_NAME";
    SystemInstanceFilterName["STATUS"] = "STATUS";
    SystemInstanceFilterName["SYSTEM_TEMPLATE_ID"] = "SYSTEM_TEMPLATE_ID";
})(SystemInstanceFilterName = exports.SystemInstanceFilterName || (exports.SystemInstanceFilterName = {}));
var SystemInstanceFilter;
(function (SystemInstanceFilter) {
    /**
     * @internal
     */
    SystemInstanceFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemInstanceFilter = exports.SystemInstanceFilter || (exports.SystemInstanceFilter = {}));
var SearchSystemInstancesRequest;
(function (SearchSystemInstancesRequest) {
    /**
     * @internal
     */
    SearchSystemInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSystemInstancesRequest = exports.SearchSystemInstancesRequest || (exports.SearchSystemInstancesRequest = {}));
var SearchSystemInstancesResponse;
(function (SearchSystemInstancesResponse) {
    /**
     * @internal
     */
    SearchSystemInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSystemInstancesResponse = exports.SearchSystemInstancesResponse || (exports.SearchSystemInstancesResponse = {}));
var SystemTemplateFilterName;
(function (SystemTemplateFilterName) {
    SystemTemplateFilterName["FLOW_TEMPLATE_ID"] = "FLOW_TEMPLATE_ID";
})(SystemTemplateFilterName = exports.SystemTemplateFilterName || (exports.SystemTemplateFilterName = {}));
var SystemTemplateFilter;
(function (SystemTemplateFilter) {
    /**
     * @internal
     */
    SystemTemplateFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemTemplateFilter = exports.SystemTemplateFilter || (exports.SystemTemplateFilter = {}));
var SearchSystemTemplatesRequest;
(function (SearchSystemTemplatesRequest) {
    /**
     * @internal
     */
    SearchSystemTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSystemTemplatesRequest = exports.SearchSystemTemplatesRequest || (exports.SearchSystemTemplatesRequest = {}));
var SearchSystemTemplatesResponse;
(function (SearchSystemTemplatesResponse) {
    /**
     * @internal
     */
    SearchSystemTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSystemTemplatesResponse = exports.SearchSystemTemplatesResponse || (exports.SearchSystemTemplatesResponse = {}));
var SearchThingsRequest;
(function (SearchThingsRequest) {
    /**
     * @internal
     */
    SearchThingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchThingsRequest = exports.SearchThingsRequest || (exports.SearchThingsRequest = {}));
var Thing;
(function (Thing) {
    /**
     * @internal
     */
    Thing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Thing = exports.Thing || (exports.Thing = {}));
var SearchThingsResponse;
(function (SearchThingsResponse) {
    /**
     * @internal
     */
    SearchThingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchThingsResponse = exports.SearchThingsResponse || (exports.SearchThingsResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UndeploySystemInstanceRequest;
(function (UndeploySystemInstanceRequest) {
    /**
     * @internal
     */
    UndeploySystemInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UndeploySystemInstanceRequest = exports.UndeploySystemInstanceRequest || (exports.UndeploySystemInstanceRequest = {}));
var UndeploySystemInstanceResponse;
(function (UndeploySystemInstanceResponse) {
    /**
     * @internal
     */
    UndeploySystemInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UndeploySystemInstanceResponse = exports.UndeploySystemInstanceResponse || (exports.UndeploySystemInstanceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateFlowTemplateRequest;
(function (UpdateFlowTemplateRequest) {
    /**
     * @internal
     */
    UpdateFlowTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowTemplateRequest = exports.UpdateFlowTemplateRequest || (exports.UpdateFlowTemplateRequest = {}));
var UpdateFlowTemplateResponse;
(function (UpdateFlowTemplateResponse) {
    /**
     * @internal
     */
    UpdateFlowTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowTemplateResponse = exports.UpdateFlowTemplateResponse || (exports.UpdateFlowTemplateResponse = {}));
var UpdateSystemTemplateRequest;
(function (UpdateSystemTemplateRequest) {
    /**
     * @internal
     */
    UpdateSystemTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSystemTemplateRequest = exports.UpdateSystemTemplateRequest || (exports.UpdateSystemTemplateRequest = {}));
var UpdateSystemTemplateResponse;
(function (UpdateSystemTemplateResponse) {
    /**
     * @internal
     */
    UpdateSystemTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSystemTemplateResponse = exports.UpdateSystemTemplateResponse || (exports.UpdateSystemTemplateResponse = {}));
var UploadEntityDefinitionsRequest;
(function (UploadEntityDefinitionsRequest) {
    /**
     * @internal
     */
    UploadEntityDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadEntityDefinitionsRequest = exports.UploadEntityDefinitionsRequest || (exports.UploadEntityDefinitionsRequest = {}));
var UploadEntityDefinitionsResponse;
(function (UploadEntityDefinitionsResponse) {
    /**
     * @internal
     */
    UploadEntityDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadEntityDefinitionsResponse = exports.UploadEntityDefinitionsResponse || (exports.UploadEntityDefinitionsResponse = {}));
//# sourceMappingURL=models_0.js.map