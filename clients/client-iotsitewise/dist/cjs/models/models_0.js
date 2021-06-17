"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetState = exports.AssetRelationshipSummary = exports.AssetRelationshipType = exports.AssetPropertyValue = exports.Variant = exports.TimeInNanos = exports.AssetModelSummary = exports.AssetModelStatus = exports.ErrorDetails = exports.ErrorCode = exports.AssetModelState = exports.AssetModelHierarchyDefinition = exports.AssetModelHierarchy = exports.AssetModelCompositeModelDefinition = exports.AssetModelPropertyDefinition = exports.AssetModelCompositeModel = exports.AssetModelProperty = exports.PropertyType = exports.Transform = exports.Metric = exports.MetricWindow = exports.TumblingWindow = exports.ExpressionVariable = exports.VariableValue = exports.Measurement = exports.Attribute = exports.AssetHierarchyInfo = exports.AssetHierarchy = exports.AssetErrorDetails = exports.AssetErrorCode = exports.AssetCompositeModel = exports.AssetProperty = exports.PropertyNotification = exports.PropertyNotificationState = exports.PropertyDataType = exports.Alarms = exports.AggregateType = exports.AggregatedValue = exports.Aggregates = exports.Quality = exports.AccessPolicySummary = exports.Resource = exports.ProjectResource = exports.PortalResource = exports.Permission = exports.Identity = exports.UserIdentity = exports.IAMUserIdentity = exports.IAMRoleIdentity = exports.GroupIdentity = void 0;
exports.DeleteAssetModelRequest = exports.DeleteAssetResponse = exports.DeleteAssetRequest = exports.DeleteAccessPolicyResponse = exports.DeleteAccessPolicyRequest = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.CreatePortalResponse = exports.PortalStatus = exports.PortalState = exports.MonitorErrorDetails = exports.MonitorErrorCode = exports.CreatePortalRequest = exports.ImageFile = exports.ImageFileType = exports.CreateGatewayResponse = exports.CreateGatewayRequest = exports.GatewayPlatform = exports.Greengrass = exports.CreateDashboardResponse = exports.CreateDashboardRequest = exports.CreateAssetModelResponse = exports.CreateAssetModelRequest = exports.ResourceAlreadyExistsException = exports.CreateAssetResponse = exports.CreateAssetRequest = exports.CreateAccessPolicyResponse = exports.CreateAccessPolicyRequest = exports.ServiceUnavailableException = exports.BatchPutAssetPropertyValueResponse = exports.BatchPutAssetPropertyErrorEntry = exports.BatchPutAssetPropertyError = exports.BatchPutAssetPropertyValueErrorCode = exports.BatchPutAssetPropertyValueRequest = exports.PutAssetPropertyValueEntry = exports.BatchDisassociateProjectAssetsResponse = exports.BatchDisassociateProjectAssetsRequest = exports.BatchAssociateProjectAssetsResponse = exports.BatchAssociateProjectAssetsRequest = exports.AuthMode = exports.AssociatedAssetsSummary = exports.ThrottlingException = exports.ResourceNotFoundException = exports.LimitExceededException = exports.InvalidRequestException = exports.InternalFailureException = exports.ConflictingOperationException = exports.AssociateAssetsRequest = exports.AssetSummary = exports.AssetStatus = void 0;
exports.GetInterpolatedAssetPropertyValuesRequest = exports.GetAssetPropertyValueHistoryResponse = exports.GetAssetPropertyValueHistoryRequest = exports.GetAssetPropertyValueResponse = exports.GetAssetPropertyValueRequest = exports.GetAssetPropertyAggregatesResponse = exports.GetAssetPropertyAggregatesRequest = exports.TimeOrdering = exports.DisassociateAssetsRequest = exports.DescribeProjectResponse = exports.DescribeProjectRequest = exports.DescribePortalResponse = exports.ImageLocation = exports.DescribePortalRequest = exports.DescribeLoggingOptionsResponse = exports.LoggingOptions = exports.LoggingLevel = exports.DescribeLoggingOptionsRequest = exports.DescribeGatewayCapabilityConfigurationResponse = exports.DescribeGatewayCapabilityConfigurationRequest = exports.DescribeGatewayResponse = exports.GatewayCapabilitySummary = exports.CapabilitySyncStatus = exports.DescribeGatewayRequest = exports.DescribeDefaultEncryptionConfigurationResponse = exports.EncryptionType = exports.ConfigurationStatus = exports.ConfigurationState = exports.ConfigurationErrorDetails = exports.DescribeDefaultEncryptionConfigurationRequest = exports.DescribeDashboardResponse = exports.DescribeDashboardRequest = exports.DescribeAssetPropertyResponse = exports.CompositeModelProperty = exports.Property = exports.DescribeAssetPropertyRequest = exports.DescribeAssetModelResponse = exports.DescribeAssetModelRequest = exports.DescribeAssetResponse = exports.DescribeAssetRequest = exports.DescribeAccessPolicyResponse = exports.DescribeAccessPolicyRequest = exports.DeleteProjectResponse = exports.DeleteProjectRequest = exports.DeletePortalResponse = exports.DeletePortalRequest = exports.DeleteGatewayRequest = exports.DeleteDashboardResponse = exports.DeleteDashboardRequest = exports.DeleteAssetModelResponse = void 0;
exports.UpdateAssetPropertyRequest = exports.UpdateAssetModelResponse = exports.UpdateAssetModelRequest = exports.UpdateAssetResponse = exports.UpdateAssetRequest = exports.UpdateAccessPolicyResponse = exports.UpdateAccessPolicyRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TooManyTagsException = exports.TagResourceResponse = exports.TagResourceRequest = exports.PutLoggingOptionsResponse = exports.PutLoggingOptionsRequest = exports.PutDefaultEncryptionConfigurationResponse = exports.PutDefaultEncryptionConfigurationRequest = exports.UnauthorizedException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListProjectsResponse = exports.ProjectSummary = exports.ListProjectsRequest = exports.ListProjectAssetsResponse = exports.ListProjectAssetsRequest = exports.ListPortalsResponse = exports.PortalSummary = exports.ListPortalsRequest = exports.ListGatewaysResponse = exports.GatewaySummary = exports.ListGatewaysRequest = exports.ListDashboardsResponse = exports.DashboardSummary = exports.ListDashboardsRequest = exports.ListAssociatedAssetsResponse = exports.ListAssociatedAssetsRequest = exports.TraversalDirection = exports.ListAssetsResponse = exports.ListAssetsRequest = exports.ListAssetsFilter = exports.ListAssetRelationshipsResponse = exports.ListAssetRelationshipsRequest = exports.TraversalType = exports.ListAssetModelsResponse = exports.ListAssetModelsRequest = exports.ListAccessPoliciesResponse = exports.ListAccessPoliciesRequest = exports.ResourceType = exports.IdentityType = exports.GetInterpolatedAssetPropertyValuesResponse = exports.InterpolatedAssetPropertyValue = void 0;
exports.UpdateProjectResponse = exports.UpdateProjectRequest = exports.UpdatePortalResponse = exports.UpdatePortalRequest = exports.Image = exports.UpdateGatewayCapabilityConfigurationResponse = exports.UpdateGatewayCapabilityConfigurationRequest = exports.UpdateGatewayRequest = exports.UpdateDashboardResponse = exports.UpdateDashboardRequest = void 0;
var GroupIdentity;
(function (GroupIdentity) {
    /**
     * @internal
     */
    GroupIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupIdentity = exports.GroupIdentity || (exports.GroupIdentity = {}));
var IAMRoleIdentity;
(function (IAMRoleIdentity) {
    /**
     * @internal
     */
    IAMRoleIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IAMRoleIdentity = exports.IAMRoleIdentity || (exports.IAMRoleIdentity = {}));
var IAMUserIdentity;
(function (IAMUserIdentity) {
    /**
     * @internal
     */
    IAMUserIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IAMUserIdentity = exports.IAMUserIdentity || (exports.IAMUserIdentity = {}));
var UserIdentity;
(function (UserIdentity) {
    /**
     * @internal
     */
    UserIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserIdentity = exports.UserIdentity || (exports.UserIdentity = {}));
var Identity;
(function (Identity) {
    /**
     * @internal
     */
    Identity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Identity = exports.Identity || (exports.Identity = {}));
var Permission;
(function (Permission) {
    Permission["ADMINISTRATOR"] = "ADMINISTRATOR";
    Permission["VIEWER"] = "VIEWER";
})(Permission = exports.Permission || (exports.Permission = {}));
var PortalResource;
(function (PortalResource) {
    /**
     * @internal
     */
    PortalResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortalResource = exports.PortalResource || (exports.PortalResource = {}));
var ProjectResource;
(function (ProjectResource) {
    /**
     * @internal
     */
    ProjectResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectResource = exports.ProjectResource || (exports.ProjectResource = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var AccessPolicySummary;
(function (AccessPolicySummary) {
    /**
     * @internal
     */
    AccessPolicySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPolicySummary = exports.AccessPolicySummary || (exports.AccessPolicySummary = {}));
var Quality;
(function (Quality) {
    Quality["BAD"] = "BAD";
    Quality["GOOD"] = "GOOD";
    Quality["UNCERTAIN"] = "UNCERTAIN";
})(Quality = exports.Quality || (exports.Quality = {}));
var Aggregates;
(function (Aggregates) {
    /**
     * @internal
     */
    Aggregates.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Aggregates = exports.Aggregates || (exports.Aggregates = {}));
var AggregatedValue;
(function (AggregatedValue) {
    /**
     * @internal
     */
    AggregatedValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregatedValue = exports.AggregatedValue || (exports.AggregatedValue = {}));
var AggregateType;
(function (AggregateType) {
    AggregateType["AVERAGE"] = "AVERAGE";
    AggregateType["COUNT"] = "COUNT";
    AggregateType["MAXIMUM"] = "MAXIMUM";
    AggregateType["MINIMUM"] = "MINIMUM";
    AggregateType["STANDARD_DEVIATION"] = "STANDARD_DEVIATION";
    AggregateType["SUM"] = "SUM";
})(AggregateType = exports.AggregateType || (exports.AggregateType = {}));
var Alarms;
(function (Alarms) {
    /**
     * @internal
     */
    Alarms.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alarms = exports.Alarms || (exports.Alarms = {}));
var PropertyDataType;
(function (PropertyDataType) {
    PropertyDataType["BOOLEAN"] = "BOOLEAN";
    PropertyDataType["DOUBLE"] = "DOUBLE";
    PropertyDataType["INTEGER"] = "INTEGER";
    PropertyDataType["STRING"] = "STRING";
    PropertyDataType["STRUCT"] = "STRUCT";
})(PropertyDataType = exports.PropertyDataType || (exports.PropertyDataType = {}));
var PropertyNotificationState;
(function (PropertyNotificationState) {
    PropertyNotificationState["DISABLED"] = "DISABLED";
    PropertyNotificationState["ENABLED"] = "ENABLED";
})(PropertyNotificationState = exports.PropertyNotificationState || (exports.PropertyNotificationState = {}));
var PropertyNotification;
(function (PropertyNotification) {
    /**
     * @internal
     */
    PropertyNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropertyNotification = exports.PropertyNotification || (exports.PropertyNotification = {}));
var AssetProperty;
(function (AssetProperty) {
    /**
     * @internal
     */
    AssetProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetProperty = exports.AssetProperty || (exports.AssetProperty = {}));
var AssetCompositeModel;
(function (AssetCompositeModel) {
    /**
     * @internal
     */
    AssetCompositeModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetCompositeModel = exports.AssetCompositeModel || (exports.AssetCompositeModel = {}));
var AssetErrorCode;
(function (AssetErrorCode) {
    AssetErrorCode["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
})(AssetErrorCode = exports.AssetErrorCode || (exports.AssetErrorCode = {}));
var AssetErrorDetails;
(function (AssetErrorDetails) {
    /**
     * @internal
     */
    AssetErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetErrorDetails = exports.AssetErrorDetails || (exports.AssetErrorDetails = {}));
var AssetHierarchy;
(function (AssetHierarchy) {
    /**
     * @internal
     */
    AssetHierarchy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetHierarchy = exports.AssetHierarchy || (exports.AssetHierarchy = {}));
var AssetHierarchyInfo;
(function (AssetHierarchyInfo) {
    /**
     * @internal
     */
    AssetHierarchyInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetHierarchyInfo = exports.AssetHierarchyInfo || (exports.AssetHierarchyInfo = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var Measurement;
(function (Measurement) {
    /**
     * @internal
     */
    Measurement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Measurement = exports.Measurement || (exports.Measurement = {}));
var VariableValue;
(function (VariableValue) {
    /**
     * @internal
     */
    VariableValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VariableValue = exports.VariableValue || (exports.VariableValue = {}));
var ExpressionVariable;
(function (ExpressionVariable) {
    /**
     * @internal
     */
    ExpressionVariable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExpressionVariable = exports.ExpressionVariable || (exports.ExpressionVariable = {}));
var TumblingWindow;
(function (TumblingWindow) {
    /**
     * @internal
     */
    TumblingWindow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TumblingWindow = exports.TumblingWindow || (exports.TumblingWindow = {}));
var MetricWindow;
(function (MetricWindow) {
    /**
     * @internal
     */
    MetricWindow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricWindow = exports.MetricWindow || (exports.MetricWindow = {}));
var Metric;
(function (Metric) {
    /**
     * @internal
     */
    Metric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metric = exports.Metric || (exports.Metric = {}));
var Transform;
(function (Transform) {
    /**
     * @internal
     */
    Transform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transform = exports.Transform || (exports.Transform = {}));
var PropertyType;
(function (PropertyType) {
    /**
     * @internal
     */
    PropertyType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
var AssetModelProperty;
(function (AssetModelProperty) {
    /**
     * @internal
     */
    AssetModelProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelProperty = exports.AssetModelProperty || (exports.AssetModelProperty = {}));
var AssetModelCompositeModel;
(function (AssetModelCompositeModel) {
    /**
     * @internal
     */
    AssetModelCompositeModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelCompositeModel = exports.AssetModelCompositeModel || (exports.AssetModelCompositeModel = {}));
var AssetModelPropertyDefinition;
(function (AssetModelPropertyDefinition) {
    /**
     * @internal
     */
    AssetModelPropertyDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelPropertyDefinition = exports.AssetModelPropertyDefinition || (exports.AssetModelPropertyDefinition = {}));
var AssetModelCompositeModelDefinition;
(function (AssetModelCompositeModelDefinition) {
    /**
     * @internal
     */
    AssetModelCompositeModelDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelCompositeModelDefinition = exports.AssetModelCompositeModelDefinition || (exports.AssetModelCompositeModelDefinition = {}));
var AssetModelHierarchy;
(function (AssetModelHierarchy) {
    /**
     * @internal
     */
    AssetModelHierarchy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelHierarchy = exports.AssetModelHierarchy || (exports.AssetModelHierarchy = {}));
var AssetModelHierarchyDefinition;
(function (AssetModelHierarchyDefinition) {
    /**
     * @internal
     */
    AssetModelHierarchyDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelHierarchyDefinition = exports.AssetModelHierarchyDefinition || (exports.AssetModelHierarchyDefinition = {}));
var AssetModelState;
(function (AssetModelState) {
    AssetModelState["ACTIVE"] = "ACTIVE";
    AssetModelState["CREATING"] = "CREATING";
    AssetModelState["DELETING"] = "DELETING";
    AssetModelState["FAILED"] = "FAILED";
    AssetModelState["PROPAGATING"] = "PROPAGATING";
    AssetModelState["UPDATING"] = "UPDATING";
})(AssetModelState = exports.AssetModelState || (exports.AssetModelState = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    ErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var AssetModelStatus;
(function (AssetModelStatus) {
    /**
     * @internal
     */
    AssetModelStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelStatus = exports.AssetModelStatus || (exports.AssetModelStatus = {}));
var AssetModelSummary;
(function (AssetModelSummary) {
    /**
     * @internal
     */
    AssetModelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetModelSummary = exports.AssetModelSummary || (exports.AssetModelSummary = {}));
var TimeInNanos;
(function (TimeInNanos) {
    /**
     * @internal
     */
    TimeInNanos.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeInNanos = exports.TimeInNanos || (exports.TimeInNanos = {}));
var Variant;
(function (Variant) {
    /**
     * @internal
     */
    Variant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Variant = exports.Variant || (exports.Variant = {}));
var AssetPropertyValue;
(function (AssetPropertyValue) {
    /**
     * @internal
     */
    AssetPropertyValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetPropertyValue = exports.AssetPropertyValue || (exports.AssetPropertyValue = {}));
var AssetRelationshipType;
(function (AssetRelationshipType) {
    AssetRelationshipType["HIERARCHY"] = "HIERARCHY";
})(AssetRelationshipType = exports.AssetRelationshipType || (exports.AssetRelationshipType = {}));
var AssetRelationshipSummary;
(function (AssetRelationshipSummary) {
    /**
     * @internal
     */
    AssetRelationshipSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetRelationshipSummary = exports.AssetRelationshipSummary || (exports.AssetRelationshipSummary = {}));
var AssetState;
(function (AssetState) {
    AssetState["ACTIVE"] = "ACTIVE";
    AssetState["CREATING"] = "CREATING";
    AssetState["DELETING"] = "DELETING";
    AssetState["FAILED"] = "FAILED";
    AssetState["UPDATING"] = "UPDATING";
})(AssetState = exports.AssetState || (exports.AssetState = {}));
var AssetStatus;
(function (AssetStatus) {
    /**
     * @internal
     */
    AssetStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetStatus = exports.AssetStatus || (exports.AssetStatus = {}));
var AssetSummary;
(function (AssetSummary) {
    /**
     * @internal
     */
    AssetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetSummary = exports.AssetSummary || (exports.AssetSummary = {}));
var AssociateAssetsRequest;
(function (AssociateAssetsRequest) {
    /**
     * @internal
     */
    AssociateAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateAssetsRequest = exports.AssociateAssetsRequest || (exports.AssociateAssetsRequest = {}));
var ConflictingOperationException;
(function (ConflictingOperationException) {
    /**
     * @internal
     */
    ConflictingOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictingOperationException = exports.ConflictingOperationException || (exports.ConflictingOperationException = {}));
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
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
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
var AssociatedAssetsSummary;
(function (AssociatedAssetsSummary) {
    /**
     * @internal
     */
    AssociatedAssetsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedAssetsSummary = exports.AssociatedAssetsSummary || (exports.AssociatedAssetsSummary = {}));
var AuthMode;
(function (AuthMode) {
    AuthMode["IAM"] = "IAM";
    AuthMode["SSO"] = "SSO";
})(AuthMode = exports.AuthMode || (exports.AuthMode = {}));
var BatchAssociateProjectAssetsRequest;
(function (BatchAssociateProjectAssetsRequest) {
    /**
     * @internal
     */
    BatchAssociateProjectAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateProjectAssetsRequest = exports.BatchAssociateProjectAssetsRequest || (exports.BatchAssociateProjectAssetsRequest = {}));
var BatchAssociateProjectAssetsResponse;
(function (BatchAssociateProjectAssetsResponse) {
    /**
     * @internal
     */
    BatchAssociateProjectAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateProjectAssetsResponse = exports.BatchAssociateProjectAssetsResponse || (exports.BatchAssociateProjectAssetsResponse = {}));
var BatchDisassociateProjectAssetsRequest;
(function (BatchDisassociateProjectAssetsRequest) {
    /**
     * @internal
     */
    BatchDisassociateProjectAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateProjectAssetsRequest = exports.BatchDisassociateProjectAssetsRequest || (exports.BatchDisassociateProjectAssetsRequest = {}));
var BatchDisassociateProjectAssetsResponse;
(function (BatchDisassociateProjectAssetsResponse) {
    /**
     * @internal
     */
    BatchDisassociateProjectAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateProjectAssetsResponse = exports.BatchDisassociateProjectAssetsResponse || (exports.BatchDisassociateProjectAssetsResponse = {}));
var PutAssetPropertyValueEntry;
(function (PutAssetPropertyValueEntry) {
    /**
     * @internal
     */
    PutAssetPropertyValueEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAssetPropertyValueEntry = exports.PutAssetPropertyValueEntry || (exports.PutAssetPropertyValueEntry = {}));
var BatchPutAssetPropertyValueRequest;
(function (BatchPutAssetPropertyValueRequest) {
    /**
     * @internal
     */
    BatchPutAssetPropertyValueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutAssetPropertyValueRequest = exports.BatchPutAssetPropertyValueRequest || (exports.BatchPutAssetPropertyValueRequest = {}));
var BatchPutAssetPropertyValueErrorCode;
(function (BatchPutAssetPropertyValueErrorCode) {
    BatchPutAssetPropertyValueErrorCode["AccessDeniedException"] = "AccessDeniedException";
    BatchPutAssetPropertyValueErrorCode["ConflictingOperationException"] = "ConflictingOperationException";
    BatchPutAssetPropertyValueErrorCode["InternalFailureException"] = "InternalFailureException";
    BatchPutAssetPropertyValueErrorCode["InvalidRequestException"] = "InvalidRequestException";
    BatchPutAssetPropertyValueErrorCode["LimitExceededException"] = "LimitExceededException";
    BatchPutAssetPropertyValueErrorCode["ResourceNotFoundException"] = "ResourceNotFoundException";
    BatchPutAssetPropertyValueErrorCode["ServiceUnavailableException"] = "ServiceUnavailableException";
    BatchPutAssetPropertyValueErrorCode["ThrottlingException"] = "ThrottlingException";
    BatchPutAssetPropertyValueErrorCode["TimestampOutOfRangeException"] = "TimestampOutOfRangeException";
})(BatchPutAssetPropertyValueErrorCode = exports.BatchPutAssetPropertyValueErrorCode || (exports.BatchPutAssetPropertyValueErrorCode = {}));
var BatchPutAssetPropertyError;
(function (BatchPutAssetPropertyError) {
    /**
     * @internal
     */
    BatchPutAssetPropertyError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutAssetPropertyError = exports.BatchPutAssetPropertyError || (exports.BatchPutAssetPropertyError = {}));
var BatchPutAssetPropertyErrorEntry;
(function (BatchPutAssetPropertyErrorEntry) {
    /**
     * @internal
     */
    BatchPutAssetPropertyErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutAssetPropertyErrorEntry = exports.BatchPutAssetPropertyErrorEntry || (exports.BatchPutAssetPropertyErrorEntry = {}));
var BatchPutAssetPropertyValueResponse;
(function (BatchPutAssetPropertyValueResponse) {
    /**
     * @internal
     */
    BatchPutAssetPropertyValueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutAssetPropertyValueResponse = exports.BatchPutAssetPropertyValueResponse || (exports.BatchPutAssetPropertyValueResponse = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var CreateAccessPolicyRequest;
(function (CreateAccessPolicyRequest) {
    /**
     * @internal
     */
    CreateAccessPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessPolicyRequest = exports.CreateAccessPolicyRequest || (exports.CreateAccessPolicyRequest = {}));
var CreateAccessPolicyResponse;
(function (CreateAccessPolicyResponse) {
    /**
     * @internal
     */
    CreateAccessPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessPolicyResponse = exports.CreateAccessPolicyResponse || (exports.CreateAccessPolicyResponse = {}));
var CreateAssetRequest;
(function (CreateAssetRequest) {
    /**
     * @internal
     */
    CreateAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssetRequest = exports.CreateAssetRequest || (exports.CreateAssetRequest = {}));
var CreateAssetResponse;
(function (CreateAssetResponse) {
    /**
     * @internal
     */
    CreateAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssetResponse = exports.CreateAssetResponse || (exports.CreateAssetResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var CreateAssetModelRequest;
(function (CreateAssetModelRequest) {
    /**
     * @internal
     */
    CreateAssetModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssetModelRequest = exports.CreateAssetModelRequest || (exports.CreateAssetModelRequest = {}));
var CreateAssetModelResponse;
(function (CreateAssetModelResponse) {
    /**
     * @internal
     */
    CreateAssetModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssetModelResponse = exports.CreateAssetModelResponse || (exports.CreateAssetModelResponse = {}));
var CreateDashboardRequest;
(function (CreateDashboardRequest) {
    /**
     * @internal
     */
    CreateDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDashboardRequest = exports.CreateDashboardRequest || (exports.CreateDashboardRequest = {}));
var CreateDashboardResponse;
(function (CreateDashboardResponse) {
    /**
     * @internal
     */
    CreateDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDashboardResponse = exports.CreateDashboardResponse || (exports.CreateDashboardResponse = {}));
var Greengrass;
(function (Greengrass) {
    /**
     * @internal
     */
    Greengrass.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Greengrass = exports.Greengrass || (exports.Greengrass = {}));
var GatewayPlatform;
(function (GatewayPlatform) {
    /**
     * @internal
     */
    GatewayPlatform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GatewayPlatform = exports.GatewayPlatform || (exports.GatewayPlatform = {}));
var CreateGatewayRequest;
(function (CreateGatewayRequest) {
    /**
     * @internal
     */
    CreateGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGatewayRequest = exports.CreateGatewayRequest || (exports.CreateGatewayRequest = {}));
var CreateGatewayResponse;
(function (CreateGatewayResponse) {
    /**
     * @internal
     */
    CreateGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGatewayResponse = exports.CreateGatewayResponse || (exports.CreateGatewayResponse = {}));
var ImageFileType;
(function (ImageFileType) {
    ImageFileType["PNG"] = "PNG";
})(ImageFileType = exports.ImageFileType || (exports.ImageFileType = {}));
var ImageFile;
(function (ImageFile) {
    /**
     * @internal
     */
    ImageFile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageFile = exports.ImageFile || (exports.ImageFile = {}));
var CreatePortalRequest;
(function (CreatePortalRequest) {
    /**
     * @internal
     */
    CreatePortalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePortalRequest = exports.CreatePortalRequest || (exports.CreatePortalRequest = {}));
var MonitorErrorCode;
(function (MonitorErrorCode) {
    MonitorErrorCode["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    MonitorErrorCode["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
    MonitorErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(MonitorErrorCode = exports.MonitorErrorCode || (exports.MonitorErrorCode = {}));
var MonitorErrorDetails;
(function (MonitorErrorDetails) {
    /**
     * @internal
     */
    MonitorErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitorErrorDetails = exports.MonitorErrorDetails || (exports.MonitorErrorDetails = {}));
var PortalState;
(function (PortalState) {
    PortalState["ACTIVE"] = "ACTIVE";
    PortalState["CREATING"] = "CREATING";
    PortalState["DELETING"] = "DELETING";
    PortalState["FAILED"] = "FAILED";
    PortalState["UPDATING"] = "UPDATING";
})(PortalState = exports.PortalState || (exports.PortalState = {}));
var PortalStatus;
(function (PortalStatus) {
    /**
     * @internal
     */
    PortalStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortalStatus = exports.PortalStatus || (exports.PortalStatus = {}));
var CreatePortalResponse;
(function (CreatePortalResponse) {
    /**
     * @internal
     */
    CreatePortalResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePortalResponse = exports.CreatePortalResponse || (exports.CreatePortalResponse = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResponse = exports.CreateProjectResponse || (exports.CreateProjectResponse = {}));
var DeleteAccessPolicyRequest;
(function (DeleteAccessPolicyRequest) {
    /**
     * @internal
     */
    DeleteAccessPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPolicyRequest = exports.DeleteAccessPolicyRequest || (exports.DeleteAccessPolicyRequest = {}));
var DeleteAccessPolicyResponse;
(function (DeleteAccessPolicyResponse) {
    /**
     * @internal
     */
    DeleteAccessPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPolicyResponse = exports.DeleteAccessPolicyResponse || (exports.DeleteAccessPolicyResponse = {}));
var DeleteAssetRequest;
(function (DeleteAssetRequest) {
    /**
     * @internal
     */
    DeleteAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetRequest = exports.DeleteAssetRequest || (exports.DeleteAssetRequest = {}));
var DeleteAssetResponse;
(function (DeleteAssetResponse) {
    /**
     * @internal
     */
    DeleteAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetResponse = exports.DeleteAssetResponse || (exports.DeleteAssetResponse = {}));
var DeleteAssetModelRequest;
(function (DeleteAssetModelRequest) {
    /**
     * @internal
     */
    DeleteAssetModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetModelRequest = exports.DeleteAssetModelRequest || (exports.DeleteAssetModelRequest = {}));
var DeleteAssetModelResponse;
(function (DeleteAssetModelResponse) {
    /**
     * @internal
     */
    DeleteAssetModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetModelResponse = exports.DeleteAssetModelResponse || (exports.DeleteAssetModelResponse = {}));
var DeleteDashboardRequest;
(function (DeleteDashboardRequest) {
    /**
     * @internal
     */
    DeleteDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDashboardRequest = exports.DeleteDashboardRequest || (exports.DeleteDashboardRequest = {}));
var DeleteDashboardResponse;
(function (DeleteDashboardResponse) {
    /**
     * @internal
     */
    DeleteDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDashboardResponse = exports.DeleteDashboardResponse || (exports.DeleteDashboardResponse = {}));
var DeleteGatewayRequest;
(function (DeleteGatewayRequest) {
    /**
     * @internal
     */
    DeleteGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGatewayRequest = exports.DeleteGatewayRequest || (exports.DeleteGatewayRequest = {}));
var DeletePortalRequest;
(function (DeletePortalRequest) {
    /**
     * @internal
     */
    DeletePortalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePortalRequest = exports.DeletePortalRequest || (exports.DeletePortalRequest = {}));
var DeletePortalResponse;
(function (DeletePortalResponse) {
    /**
     * @internal
     */
    DeletePortalResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePortalResponse = exports.DeletePortalResponse || (exports.DeletePortalResponse = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResponse = exports.DeleteProjectResponse || (exports.DeleteProjectResponse = {}));
var DescribeAccessPolicyRequest;
(function (DescribeAccessPolicyRequest) {
    /**
     * @internal
     */
    DescribeAccessPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccessPolicyRequest = exports.DescribeAccessPolicyRequest || (exports.DescribeAccessPolicyRequest = {}));
var DescribeAccessPolicyResponse;
(function (DescribeAccessPolicyResponse) {
    /**
     * @internal
     */
    DescribeAccessPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccessPolicyResponse = exports.DescribeAccessPolicyResponse || (exports.DescribeAccessPolicyResponse = {}));
var DescribeAssetRequest;
(function (DescribeAssetRequest) {
    /**
     * @internal
     */
    DescribeAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetRequest = exports.DescribeAssetRequest || (exports.DescribeAssetRequest = {}));
var DescribeAssetResponse;
(function (DescribeAssetResponse) {
    /**
     * @internal
     */
    DescribeAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetResponse = exports.DescribeAssetResponse || (exports.DescribeAssetResponse = {}));
var DescribeAssetModelRequest;
(function (DescribeAssetModelRequest) {
    /**
     * @internal
     */
    DescribeAssetModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetModelRequest = exports.DescribeAssetModelRequest || (exports.DescribeAssetModelRequest = {}));
var DescribeAssetModelResponse;
(function (DescribeAssetModelResponse) {
    /**
     * @internal
     */
    DescribeAssetModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetModelResponse = exports.DescribeAssetModelResponse || (exports.DescribeAssetModelResponse = {}));
var DescribeAssetPropertyRequest;
(function (DescribeAssetPropertyRequest) {
    /**
     * @internal
     */
    DescribeAssetPropertyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetPropertyRequest = exports.DescribeAssetPropertyRequest || (exports.DescribeAssetPropertyRequest = {}));
var Property;
(function (Property) {
    /**
     * @internal
     */
    Property.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Property = exports.Property || (exports.Property = {}));
var CompositeModelProperty;
(function (CompositeModelProperty) {
    /**
     * @internal
     */
    CompositeModelProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompositeModelProperty = exports.CompositeModelProperty || (exports.CompositeModelProperty = {}));
var DescribeAssetPropertyResponse;
(function (DescribeAssetPropertyResponse) {
    /**
     * @internal
     */
    DescribeAssetPropertyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetPropertyResponse = exports.DescribeAssetPropertyResponse || (exports.DescribeAssetPropertyResponse = {}));
var DescribeDashboardRequest;
(function (DescribeDashboardRequest) {
    /**
     * @internal
     */
    DescribeDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDashboardRequest = exports.DescribeDashboardRequest || (exports.DescribeDashboardRequest = {}));
var DescribeDashboardResponse;
(function (DescribeDashboardResponse) {
    /**
     * @internal
     */
    DescribeDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDashboardResponse = exports.DescribeDashboardResponse || (exports.DescribeDashboardResponse = {}));
var DescribeDefaultEncryptionConfigurationRequest;
(function (DescribeDefaultEncryptionConfigurationRequest) {
    /**
     * @internal
     */
    DescribeDefaultEncryptionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultEncryptionConfigurationRequest = exports.DescribeDefaultEncryptionConfigurationRequest || (exports.DescribeDefaultEncryptionConfigurationRequest = {}));
var ConfigurationErrorDetails;
(function (ConfigurationErrorDetails) {
    /**
     * @internal
     */
    ConfigurationErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationErrorDetails = exports.ConfigurationErrorDetails || (exports.ConfigurationErrorDetails = {}));
var ConfigurationState;
(function (ConfigurationState) {
    ConfigurationState["ACTIVE"] = "ACTIVE";
    ConfigurationState["UPDATE_FAILED"] = "UPDATE_FAILED";
    ConfigurationState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(ConfigurationState = exports.ConfigurationState || (exports.ConfigurationState = {}));
var ConfigurationStatus;
(function (ConfigurationStatus) {
    /**
     * @internal
     */
    ConfigurationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationStatus = exports.ConfigurationStatus || (exports.ConfigurationStatus = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS_BASED_ENCRYPTION"] = "KMS_BASED_ENCRYPTION";
    EncryptionType["SITEWISE_DEFAULT_ENCRYPTION"] = "SITEWISE_DEFAULT_ENCRYPTION";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var DescribeDefaultEncryptionConfigurationResponse;
(function (DescribeDefaultEncryptionConfigurationResponse) {
    /**
     * @internal
     */
    DescribeDefaultEncryptionConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultEncryptionConfigurationResponse = exports.DescribeDefaultEncryptionConfigurationResponse || (exports.DescribeDefaultEncryptionConfigurationResponse = {}));
var DescribeGatewayRequest;
(function (DescribeGatewayRequest) {
    /**
     * @internal
     */
    DescribeGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGatewayRequest = exports.DescribeGatewayRequest || (exports.DescribeGatewayRequest = {}));
var CapabilitySyncStatus;
(function (CapabilitySyncStatus) {
    CapabilitySyncStatus["IN_SYNC"] = "IN_SYNC";
    CapabilitySyncStatus["OUT_OF_SYNC"] = "OUT_OF_SYNC";
    CapabilitySyncStatus["SYNC_FAILED"] = "SYNC_FAILED";
})(CapabilitySyncStatus = exports.CapabilitySyncStatus || (exports.CapabilitySyncStatus = {}));
var GatewayCapabilitySummary;
(function (GatewayCapabilitySummary) {
    /**
     * @internal
     */
    GatewayCapabilitySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GatewayCapabilitySummary = exports.GatewayCapabilitySummary || (exports.GatewayCapabilitySummary = {}));
var DescribeGatewayResponse;
(function (DescribeGatewayResponse) {
    /**
     * @internal
     */
    DescribeGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGatewayResponse = exports.DescribeGatewayResponse || (exports.DescribeGatewayResponse = {}));
var DescribeGatewayCapabilityConfigurationRequest;
(function (DescribeGatewayCapabilityConfigurationRequest) {
    /**
     * @internal
     */
    DescribeGatewayCapabilityConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGatewayCapabilityConfigurationRequest = exports.DescribeGatewayCapabilityConfigurationRequest || (exports.DescribeGatewayCapabilityConfigurationRequest = {}));
var DescribeGatewayCapabilityConfigurationResponse;
(function (DescribeGatewayCapabilityConfigurationResponse) {
    /**
     * @internal
     */
    DescribeGatewayCapabilityConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGatewayCapabilityConfigurationResponse = exports.DescribeGatewayCapabilityConfigurationResponse || (exports.DescribeGatewayCapabilityConfigurationResponse = {}));
var DescribeLoggingOptionsRequest;
(function (DescribeLoggingOptionsRequest) {
    /**
     * @internal
     */
    DescribeLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingOptionsRequest = exports.DescribeLoggingOptionsRequest || (exports.DescribeLoggingOptionsRequest = {}));
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["ERROR"] = "ERROR";
    LoggingLevel["INFO"] = "INFO";
    LoggingLevel["OFF"] = "OFF";
})(LoggingLevel = exports.LoggingLevel || (exports.LoggingLevel = {}));
var LoggingOptions;
(function (LoggingOptions) {
    /**
     * @internal
     */
    LoggingOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingOptions = exports.LoggingOptions || (exports.LoggingOptions = {}));
var DescribeLoggingOptionsResponse;
(function (DescribeLoggingOptionsResponse) {
    /**
     * @internal
     */
    DescribeLoggingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingOptionsResponse = exports.DescribeLoggingOptionsResponse || (exports.DescribeLoggingOptionsResponse = {}));
var DescribePortalRequest;
(function (DescribePortalRequest) {
    /**
     * @internal
     */
    DescribePortalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortalRequest = exports.DescribePortalRequest || (exports.DescribePortalRequest = {}));
var ImageLocation;
(function (ImageLocation) {
    /**
     * @internal
     */
    ImageLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageLocation = exports.ImageLocation || (exports.ImageLocation = {}));
var DescribePortalResponse;
(function (DescribePortalResponse) {
    /**
     * @internal
     */
    DescribePortalResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortalResponse = exports.DescribePortalResponse || (exports.DescribePortalResponse = {}));
var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectRequest = exports.DescribeProjectRequest || (exports.DescribeProjectRequest = {}));
var DescribeProjectResponse;
(function (DescribeProjectResponse) {
    /**
     * @internal
     */
    DescribeProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectResponse = exports.DescribeProjectResponse || (exports.DescribeProjectResponse = {}));
var DisassociateAssetsRequest;
(function (DisassociateAssetsRequest) {
    /**
     * @internal
     */
    DisassociateAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAssetsRequest = exports.DisassociateAssetsRequest || (exports.DisassociateAssetsRequest = {}));
var TimeOrdering;
(function (TimeOrdering) {
    TimeOrdering["ASCENDING"] = "ASCENDING";
    TimeOrdering["DESCENDING"] = "DESCENDING";
})(TimeOrdering = exports.TimeOrdering || (exports.TimeOrdering = {}));
var GetAssetPropertyAggregatesRequest;
(function (GetAssetPropertyAggregatesRequest) {
    /**
     * @internal
     */
    GetAssetPropertyAggregatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetPropertyAggregatesRequest = exports.GetAssetPropertyAggregatesRequest || (exports.GetAssetPropertyAggregatesRequest = {}));
var GetAssetPropertyAggregatesResponse;
(function (GetAssetPropertyAggregatesResponse) {
    /**
     * @internal
     */
    GetAssetPropertyAggregatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetPropertyAggregatesResponse = exports.GetAssetPropertyAggregatesResponse || (exports.GetAssetPropertyAggregatesResponse = {}));
var GetAssetPropertyValueRequest;
(function (GetAssetPropertyValueRequest) {
    /**
     * @internal
     */
    GetAssetPropertyValueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetPropertyValueRequest = exports.GetAssetPropertyValueRequest || (exports.GetAssetPropertyValueRequest = {}));
var GetAssetPropertyValueResponse;
(function (GetAssetPropertyValueResponse) {
    /**
     * @internal
     */
    GetAssetPropertyValueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetPropertyValueResponse = exports.GetAssetPropertyValueResponse || (exports.GetAssetPropertyValueResponse = {}));
var GetAssetPropertyValueHistoryRequest;
(function (GetAssetPropertyValueHistoryRequest) {
    /**
     * @internal
     */
    GetAssetPropertyValueHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetPropertyValueHistoryRequest = exports.GetAssetPropertyValueHistoryRequest || (exports.GetAssetPropertyValueHistoryRequest = {}));
var GetAssetPropertyValueHistoryResponse;
(function (GetAssetPropertyValueHistoryResponse) {
    /**
     * @internal
     */
    GetAssetPropertyValueHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetPropertyValueHistoryResponse = exports.GetAssetPropertyValueHistoryResponse || (exports.GetAssetPropertyValueHistoryResponse = {}));
var GetInterpolatedAssetPropertyValuesRequest;
(function (GetInterpolatedAssetPropertyValuesRequest) {
    /**
     * @internal
     */
    GetInterpolatedAssetPropertyValuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInterpolatedAssetPropertyValuesRequest = exports.GetInterpolatedAssetPropertyValuesRequest || (exports.GetInterpolatedAssetPropertyValuesRequest = {}));
var InterpolatedAssetPropertyValue;
(function (InterpolatedAssetPropertyValue) {
    /**
     * @internal
     */
    InterpolatedAssetPropertyValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InterpolatedAssetPropertyValue = exports.InterpolatedAssetPropertyValue || (exports.InterpolatedAssetPropertyValue = {}));
var GetInterpolatedAssetPropertyValuesResponse;
(function (GetInterpolatedAssetPropertyValuesResponse) {
    /**
     * @internal
     */
    GetInterpolatedAssetPropertyValuesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInterpolatedAssetPropertyValuesResponse = exports.GetInterpolatedAssetPropertyValuesResponse || (exports.GetInterpolatedAssetPropertyValuesResponse = {}));
var IdentityType;
(function (IdentityType) {
    IdentityType["GROUP"] = "GROUP";
    IdentityType["IAM"] = "IAM";
    IdentityType["USER"] = "USER";
})(IdentityType = exports.IdentityType || (exports.IdentityType = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["PORTAL"] = "PORTAL";
    ResourceType["PROJECT"] = "PROJECT";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ListAccessPoliciesRequest;
(function (ListAccessPoliciesRequest) {
    /**
     * @internal
     */
    ListAccessPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessPoliciesRequest = exports.ListAccessPoliciesRequest || (exports.ListAccessPoliciesRequest = {}));
var ListAccessPoliciesResponse;
(function (ListAccessPoliciesResponse) {
    /**
     * @internal
     */
    ListAccessPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessPoliciesResponse = exports.ListAccessPoliciesResponse || (exports.ListAccessPoliciesResponse = {}));
var ListAssetModelsRequest;
(function (ListAssetModelsRequest) {
    /**
     * @internal
     */
    ListAssetModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetModelsRequest = exports.ListAssetModelsRequest || (exports.ListAssetModelsRequest = {}));
var ListAssetModelsResponse;
(function (ListAssetModelsResponse) {
    /**
     * @internal
     */
    ListAssetModelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetModelsResponse = exports.ListAssetModelsResponse || (exports.ListAssetModelsResponse = {}));
var TraversalType;
(function (TraversalType) {
    TraversalType["PATH_TO_ROOT"] = "PATH_TO_ROOT";
})(TraversalType = exports.TraversalType || (exports.TraversalType = {}));
var ListAssetRelationshipsRequest;
(function (ListAssetRelationshipsRequest) {
    /**
     * @internal
     */
    ListAssetRelationshipsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetRelationshipsRequest = exports.ListAssetRelationshipsRequest || (exports.ListAssetRelationshipsRequest = {}));
var ListAssetRelationshipsResponse;
(function (ListAssetRelationshipsResponse) {
    /**
     * @internal
     */
    ListAssetRelationshipsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetRelationshipsResponse = exports.ListAssetRelationshipsResponse || (exports.ListAssetRelationshipsResponse = {}));
var ListAssetsFilter;
(function (ListAssetsFilter) {
    ListAssetsFilter["ALL"] = "ALL";
    ListAssetsFilter["TOP_LEVEL"] = "TOP_LEVEL";
})(ListAssetsFilter = exports.ListAssetsFilter || (exports.ListAssetsFilter = {}));
var ListAssetsRequest;
(function (ListAssetsRequest) {
    /**
     * @internal
     */
    ListAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetsRequest = exports.ListAssetsRequest || (exports.ListAssetsRequest = {}));
var ListAssetsResponse;
(function (ListAssetsResponse) {
    /**
     * @internal
     */
    ListAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetsResponse = exports.ListAssetsResponse || (exports.ListAssetsResponse = {}));
var TraversalDirection;
(function (TraversalDirection) {
    TraversalDirection["CHILD"] = "CHILD";
    TraversalDirection["PARENT"] = "PARENT";
})(TraversalDirection = exports.TraversalDirection || (exports.TraversalDirection = {}));
var ListAssociatedAssetsRequest;
(function (ListAssociatedAssetsRequest) {
    /**
     * @internal
     */
    ListAssociatedAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedAssetsRequest = exports.ListAssociatedAssetsRequest || (exports.ListAssociatedAssetsRequest = {}));
var ListAssociatedAssetsResponse;
(function (ListAssociatedAssetsResponse) {
    /**
     * @internal
     */
    ListAssociatedAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedAssetsResponse = exports.ListAssociatedAssetsResponse || (exports.ListAssociatedAssetsResponse = {}));
var ListDashboardsRequest;
(function (ListDashboardsRequest) {
    /**
     * @internal
     */
    ListDashboardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardsRequest = exports.ListDashboardsRequest || (exports.ListDashboardsRequest = {}));
var DashboardSummary;
(function (DashboardSummary) {
    /**
     * @internal
     */
    DashboardSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardSummary = exports.DashboardSummary || (exports.DashboardSummary = {}));
var ListDashboardsResponse;
(function (ListDashboardsResponse) {
    /**
     * @internal
     */
    ListDashboardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardsResponse = exports.ListDashboardsResponse || (exports.ListDashboardsResponse = {}));
var ListGatewaysRequest;
(function (ListGatewaysRequest) {
    /**
     * @internal
     */
    ListGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGatewaysRequest = exports.ListGatewaysRequest || (exports.ListGatewaysRequest = {}));
var GatewaySummary;
(function (GatewaySummary) {
    /**
     * @internal
     */
    GatewaySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GatewaySummary = exports.GatewaySummary || (exports.GatewaySummary = {}));
var ListGatewaysResponse;
(function (ListGatewaysResponse) {
    /**
     * @internal
     */
    ListGatewaysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGatewaysResponse = exports.ListGatewaysResponse || (exports.ListGatewaysResponse = {}));
var ListPortalsRequest;
(function (ListPortalsRequest) {
    /**
     * @internal
     */
    ListPortalsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortalsRequest = exports.ListPortalsRequest || (exports.ListPortalsRequest = {}));
var PortalSummary;
(function (PortalSummary) {
    /**
     * @internal
     */
    PortalSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortalSummary = exports.PortalSummary || (exports.PortalSummary = {}));
var ListPortalsResponse;
(function (ListPortalsResponse) {
    /**
     * @internal
     */
    ListPortalsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortalsResponse = exports.ListPortalsResponse || (exports.ListPortalsResponse = {}));
var ListProjectAssetsRequest;
(function (ListProjectAssetsRequest) {
    /**
     * @internal
     */
    ListProjectAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectAssetsRequest = exports.ListProjectAssetsRequest || (exports.ListProjectAssetsRequest = {}));
var ListProjectAssetsResponse;
(function (ListProjectAssetsResponse) {
    /**
     * @internal
     */
    ListProjectAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectAssetsResponse = exports.ListProjectAssetsResponse || (exports.ListProjectAssetsResponse = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ProjectSummary;
(function (ProjectSummary) {
    /**
     * @internal
     */
    ProjectSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSummary = exports.ProjectSummary || (exports.ProjectSummary = {}));
var ListProjectsResponse;
(function (ListProjectsResponse) {
    /**
     * @internal
     */
    ListProjectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResponse = exports.ListProjectsResponse || (exports.ListProjectsResponse = {}));
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
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var PutDefaultEncryptionConfigurationRequest;
(function (PutDefaultEncryptionConfigurationRequest) {
    /**
     * @internal
     */
    PutDefaultEncryptionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDefaultEncryptionConfigurationRequest = exports.PutDefaultEncryptionConfigurationRequest || (exports.PutDefaultEncryptionConfigurationRequest = {}));
var PutDefaultEncryptionConfigurationResponse;
(function (PutDefaultEncryptionConfigurationResponse) {
    /**
     * @internal
     */
    PutDefaultEncryptionConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDefaultEncryptionConfigurationResponse = exports.PutDefaultEncryptionConfigurationResponse || (exports.PutDefaultEncryptionConfigurationResponse = {}));
var PutLoggingOptionsRequest;
(function (PutLoggingOptionsRequest) {
    /**
     * @internal
     */
    PutLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLoggingOptionsRequest = exports.PutLoggingOptionsRequest || (exports.PutLoggingOptionsRequest = {}));
var PutLoggingOptionsResponse;
(function (PutLoggingOptionsResponse) {
    /**
     * @internal
     */
    PutLoggingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLoggingOptionsResponse = exports.PutLoggingOptionsResponse || (exports.PutLoggingOptionsResponse = {}));
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
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
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
var UpdateAccessPolicyRequest;
(function (UpdateAccessPolicyRequest) {
    /**
     * @internal
     */
    UpdateAccessPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccessPolicyRequest = exports.UpdateAccessPolicyRequest || (exports.UpdateAccessPolicyRequest = {}));
var UpdateAccessPolicyResponse;
(function (UpdateAccessPolicyResponse) {
    /**
     * @internal
     */
    UpdateAccessPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccessPolicyResponse = exports.UpdateAccessPolicyResponse || (exports.UpdateAccessPolicyResponse = {}));
var UpdateAssetRequest;
(function (UpdateAssetRequest) {
    /**
     * @internal
     */
    UpdateAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetRequest = exports.UpdateAssetRequest || (exports.UpdateAssetRequest = {}));
var UpdateAssetResponse;
(function (UpdateAssetResponse) {
    /**
     * @internal
     */
    UpdateAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetResponse = exports.UpdateAssetResponse || (exports.UpdateAssetResponse = {}));
var UpdateAssetModelRequest;
(function (UpdateAssetModelRequest) {
    /**
     * @internal
     */
    UpdateAssetModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetModelRequest = exports.UpdateAssetModelRequest || (exports.UpdateAssetModelRequest = {}));
var UpdateAssetModelResponse;
(function (UpdateAssetModelResponse) {
    /**
     * @internal
     */
    UpdateAssetModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetModelResponse = exports.UpdateAssetModelResponse || (exports.UpdateAssetModelResponse = {}));
var UpdateAssetPropertyRequest;
(function (UpdateAssetPropertyRequest) {
    /**
     * @internal
     */
    UpdateAssetPropertyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetPropertyRequest = exports.UpdateAssetPropertyRequest || (exports.UpdateAssetPropertyRequest = {}));
var UpdateDashboardRequest;
(function (UpdateDashboardRequest) {
    /**
     * @internal
     */
    UpdateDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardRequest = exports.UpdateDashboardRequest || (exports.UpdateDashboardRequest = {}));
var UpdateDashboardResponse;
(function (UpdateDashboardResponse) {
    /**
     * @internal
     */
    UpdateDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardResponse = exports.UpdateDashboardResponse || (exports.UpdateDashboardResponse = {}));
var UpdateGatewayRequest;
(function (UpdateGatewayRequest) {
    /**
     * @internal
     */
    UpdateGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewayRequest = exports.UpdateGatewayRequest || (exports.UpdateGatewayRequest = {}));
var UpdateGatewayCapabilityConfigurationRequest;
(function (UpdateGatewayCapabilityConfigurationRequest) {
    /**
     * @internal
     */
    UpdateGatewayCapabilityConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewayCapabilityConfigurationRequest = exports.UpdateGatewayCapabilityConfigurationRequest || (exports.UpdateGatewayCapabilityConfigurationRequest = {}));
var UpdateGatewayCapabilityConfigurationResponse;
(function (UpdateGatewayCapabilityConfigurationResponse) {
    /**
     * @internal
     */
    UpdateGatewayCapabilityConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewayCapabilityConfigurationResponse = exports.UpdateGatewayCapabilityConfigurationResponse || (exports.UpdateGatewayCapabilityConfigurationResponse = {}));
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
var UpdatePortalRequest;
(function (UpdatePortalRequest) {
    /**
     * @internal
     */
    UpdatePortalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePortalRequest = exports.UpdatePortalRequest || (exports.UpdatePortalRequest = {}));
var UpdatePortalResponse;
(function (UpdatePortalResponse) {
    /**
     * @internal
     */
    UpdatePortalResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePortalResponse = exports.UpdatePortalResponse || (exports.UpdatePortalResponse = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResponse;
(function (UpdateProjectResponse) {
    /**
     * @internal
     */
    UpdateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectResponse = exports.UpdateProjectResponse || (exports.UpdateProjectResponse = {}));
//# sourceMappingURL=models_0.js.map