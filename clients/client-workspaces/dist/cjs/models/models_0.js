"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceRequest = exports.WorkspaceProperties = exports.RunningMode = exports.CreateWorkspaceBundleResult = exports.CreateWorkspaceBundleRequest = exports.CreateTagsResult = exports.CreateTagsRequest = exports.ResourceCreationFailedException = exports.CreateIpGroupResult = exports.CreateIpGroupRequest = exports.CreateConnectionAliasResult = exports.CreateConnectionAliasRequest = exports.ResourceUnavailableException = exports.ResourceAlreadyExistsException = exports.CopyWorkspaceImageResult = exports.CopyWorkspaceImageRequest = exports.Tag = exports.ConnectionState = exports.ConnectionAliasPermission = exports.ConnectionAlias = exports.ConnectionAliasState = exports.ConnectionAliasAssociation = exports.ClientPropertiesResult = exports.ClientProperties = exports.ReconnectEnum = exports.WorkspaceBundle = exports.UserStorage = exports.RootStorage = exports.ComputeType = exports.Compute = exports.AuthorizeIpRulesResult = exports.AuthorizeIpRulesRequest = exports.IpRuleItem = exports.AssociationStatus = exports.ResourceLimitExceededException = exports.AssociateIpGroupsResult = exports.AssociateIpGroupsRequest = exports.ResourceNotFoundException = exports.ResourceAssociatedException = exports.OperationNotSupportedException = exports.InvalidResourceStateException = exports.InvalidParameterValuesException = exports.AssociateConnectionAliasResult = exports.AssociateConnectionAliasRequest = exports.Application = exports.AccountModification = exports.DedicatedTenancyModificationStateEnum = exports.DedicatedTenancySupportResultEnum = exports.AccessPropertyValue = exports.AccessDeniedException = void 0;
exports.DescribeWorkspaceImagePermissionsResult = exports.ImagePermission = exports.DescribeWorkspaceImagePermissionsRequest = exports.DescribeWorkspaceDirectoriesResult = exports.WorkspaceDirectory = exports.WorkspaceAccessProperties = exports.Tenancy = exports.WorkspaceDirectoryState = exports.SelfservicePermissions = exports.WorkspaceDirectoryType = exports.DescribeWorkspaceDirectoriesRequest = exports.DescribeWorkspaceBundlesResult = exports.DescribeWorkspaceBundlesRequest = exports.DescribeTagsResult = exports.DescribeTagsRequest = exports.DescribeIpGroupsResult = exports.WorkspacesIpGroup = exports.DescribeIpGroupsRequest = exports.DescribeConnectionAliasPermissionsResult = exports.DescribeConnectionAliasPermissionsRequest = exports.DescribeConnectionAliasesResult = exports.DescribeConnectionAliasesRequest = exports.DescribeClientPropertiesResult = exports.DescribeClientPropertiesRequest = exports.DescribeAccountModificationsResult = exports.DescribeAccountModificationsRequest = exports.DescribeAccountResult = exports.DescribeAccountRequest = exports.DeregisterWorkspaceDirectoryResult = exports.DeregisterWorkspaceDirectoryRequest = exports.DeleteWorkspaceImageResult = exports.DeleteWorkspaceImageRequest = exports.DeleteWorkspaceBundleResult = exports.DeleteWorkspaceBundleRequest = exports.DeleteTagsResult = exports.DeleteTagsRequest = exports.DeleteIpGroupResult = exports.DeleteIpGroupRequest = exports.DeleteConnectionAliasResult = exports.DeleteConnectionAliasRequest = exports.DefaultWorkspaceCreationProperties = exports.DedicatedTenancySupportEnum = exports.CreateWorkspacesResult = exports.Workspace = exports.WorkspaceState = exports.ModificationState = exports.ModificationStateEnum = exports.ModificationResourceEnum = exports.FailedCreateWorkspaceRequest = exports.CreateWorkspacesRequest = void 0;
exports.RebuildRequest = exports.RebootWorkspacesResult = exports.RebootWorkspacesRequest = exports.RebootRequest = exports.ModifyWorkspaceStateResult = exports.ModifyWorkspaceStateRequest = exports.TargetWorkspaceState = exports.UnsupportedWorkspaceConfigurationException = exports.ModifyWorkspacePropertiesResult = exports.ModifyWorkspacePropertiesRequest = exports.ModifyWorkspaceCreationPropertiesResult = exports.ModifyWorkspaceCreationPropertiesRequest = exports.WorkspaceCreationProperties = exports.ModifyWorkspaceAccessPropertiesResult = exports.ModifyWorkspaceAccessPropertiesRequest = exports.ModifySelfservicePermissionsResult = exports.ModifySelfservicePermissionsRequest = exports.ModifyClientPropertiesResult = exports.ModifyClientPropertiesRequest = exports.ModifyAccountResult = exports.ModifyAccountRequest = exports.OperationInProgressException = exports.MigrateWorkspaceResult = exports.MigrateWorkspaceRequest = exports.ListAvailableManagementCidrRangesResult = exports.ListAvailableManagementCidrRangesRequest = exports.ImportWorkspaceImageResult = exports.ImportWorkspaceImageRequest = exports.WorkspaceImageIngestionProcess = exports.FailedWorkspaceChangeRequest = exports.DisassociateIpGroupsResult = exports.DisassociateIpGroupsRequest = exports.DisassociateConnectionAliasResult = exports.DisassociateConnectionAliasRequest = exports.DescribeWorkspaceSnapshotsResult = exports.Snapshot = exports.DescribeWorkspaceSnapshotsRequest = exports.DescribeWorkspacesConnectionStatusResult = exports.WorkspaceConnectionStatus = exports.DescribeWorkspacesConnectionStatusRequest = exports.DescribeWorkspacesResult = exports.DescribeWorkspacesRequest = exports.DescribeWorkspaceImagesResult = exports.WorkspaceImage = exports.WorkspaceImageState = exports.WorkspaceImageRequiredTenancy = exports.OperatingSystem = exports.OperatingSystemType = exports.DescribeWorkspaceImagesRequest = exports.ImageType = void 0;
exports.UpdateWorkspaceImagePermissionResult = exports.UpdateWorkspaceImagePermissionRequest = exports.UpdateWorkspaceBundleResult = exports.UpdateWorkspaceBundleRequest = exports.UpdateRulesOfIpGroupResult = exports.UpdateRulesOfIpGroupRequest = exports.UpdateConnectionAliasPermissionResult = exports.UpdateConnectionAliasPermissionRequest = exports.TerminateWorkspacesResult = exports.TerminateWorkspacesRequest = exports.TerminateRequest = exports.StopWorkspacesResult = exports.StopWorkspacesRequest = exports.StopRequest = exports.StartWorkspacesResult = exports.StartWorkspacesRequest = exports.StartRequest = exports.RevokeIpRulesResult = exports.RevokeIpRulesRequest = exports.RestoreWorkspaceResult = exports.RestoreWorkspaceRequest = exports.WorkspacesDefaultRoleNotFoundException = exports.UnsupportedNetworkConfigurationException = exports.RegisterWorkspaceDirectoryResult = exports.RegisterWorkspaceDirectoryRequest = exports.RebuildWorkspacesResult = exports.RebuildWorkspacesRequest = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccessPropertyValue;
(function (AccessPropertyValue) {
    AccessPropertyValue["ALLOW"] = "ALLOW";
    AccessPropertyValue["DENY"] = "DENY";
})(AccessPropertyValue = exports.AccessPropertyValue || (exports.AccessPropertyValue = {}));
var DedicatedTenancySupportResultEnum;
(function (DedicatedTenancySupportResultEnum) {
    DedicatedTenancySupportResultEnum["DISABLED"] = "DISABLED";
    DedicatedTenancySupportResultEnum["ENABLED"] = "ENABLED";
})(DedicatedTenancySupportResultEnum = exports.DedicatedTenancySupportResultEnum || (exports.DedicatedTenancySupportResultEnum = {}));
var DedicatedTenancyModificationStateEnum;
(function (DedicatedTenancyModificationStateEnum) {
    DedicatedTenancyModificationStateEnum["COMPLETED"] = "COMPLETED";
    DedicatedTenancyModificationStateEnum["FAILED"] = "FAILED";
    DedicatedTenancyModificationStateEnum["PENDING"] = "PENDING";
})(DedicatedTenancyModificationStateEnum = exports.DedicatedTenancyModificationStateEnum || (exports.DedicatedTenancyModificationStateEnum = {}));
var AccountModification;
(function (AccountModification) {
    /**
     * @internal
     */
    AccountModification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountModification = exports.AccountModification || (exports.AccountModification = {}));
var Application;
(function (Application) {
    Application["Microsoft_Office_2016"] = "Microsoft_Office_2016";
    Application["Microsoft_Office_2019"] = "Microsoft_Office_2019";
})(Application = exports.Application || (exports.Application = {}));
var AssociateConnectionAliasRequest;
(function (AssociateConnectionAliasRequest) {
    /**
     * @internal
     */
    AssociateConnectionAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateConnectionAliasRequest = exports.AssociateConnectionAliasRequest || (exports.AssociateConnectionAliasRequest = {}));
var AssociateConnectionAliasResult;
(function (AssociateConnectionAliasResult) {
    /**
     * @internal
     */
    AssociateConnectionAliasResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateConnectionAliasResult = exports.AssociateConnectionAliasResult || (exports.AssociateConnectionAliasResult = {}));
var InvalidParameterValuesException;
(function (InvalidParameterValuesException) {
    /**
     * @internal
     */
    InvalidParameterValuesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValuesException = exports.InvalidParameterValuesException || (exports.InvalidParameterValuesException = {}));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    /**
     * @internal
     */
    InvalidResourceStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceStateException = exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}));
var OperationNotSupportedException;
(function (OperationNotSupportedException) {
    /**
     * @internal
     */
    OperationNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotSupportedException = exports.OperationNotSupportedException || (exports.OperationNotSupportedException = {}));
var ResourceAssociatedException;
(function (ResourceAssociatedException) {
    /**
     * @internal
     */
    ResourceAssociatedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAssociatedException = exports.ResourceAssociatedException || (exports.ResourceAssociatedException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var AssociateIpGroupsRequest;
(function (AssociateIpGroupsRequest) {
    /**
     * @internal
     */
    AssociateIpGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateIpGroupsRequest = exports.AssociateIpGroupsRequest || (exports.AssociateIpGroupsRequest = {}));
var AssociateIpGroupsResult;
(function (AssociateIpGroupsResult) {
    /**
     * @internal
     */
    AssociateIpGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateIpGroupsResult = exports.AssociateIpGroupsResult || (exports.AssociateIpGroupsResult = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var AssociationStatus;
(function (AssociationStatus) {
    AssociationStatus["ASSOCIATED_WITH_OWNER_ACCOUNT"] = "ASSOCIATED_WITH_OWNER_ACCOUNT";
    AssociationStatus["ASSOCIATED_WITH_SHARED_ACCOUNT"] = "ASSOCIATED_WITH_SHARED_ACCOUNT";
    AssociationStatus["NOT_ASSOCIATED"] = "NOT_ASSOCIATED";
    AssociationStatus["PENDING_ASSOCIATION"] = "PENDING_ASSOCIATION";
    AssociationStatus["PENDING_DISASSOCIATION"] = "PENDING_DISASSOCIATION";
})(AssociationStatus = exports.AssociationStatus || (exports.AssociationStatus = {}));
var IpRuleItem;
(function (IpRuleItem) {
    /**
     * @internal
     */
    IpRuleItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpRuleItem = exports.IpRuleItem || (exports.IpRuleItem = {}));
var AuthorizeIpRulesRequest;
(function (AuthorizeIpRulesRequest) {
    /**
     * @internal
     */
    AuthorizeIpRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeIpRulesRequest = exports.AuthorizeIpRulesRequest || (exports.AuthorizeIpRulesRequest = {}));
var AuthorizeIpRulesResult;
(function (AuthorizeIpRulesResult) {
    /**
     * @internal
     */
    AuthorizeIpRulesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeIpRulesResult = exports.AuthorizeIpRulesResult || (exports.AuthorizeIpRulesResult = {}));
var Compute;
(function (Compute) {
    Compute["GRAPHICS"] = "GRAPHICS";
    Compute["GRAPHICSPRO"] = "GRAPHICSPRO";
    Compute["PERFORMANCE"] = "PERFORMANCE";
    Compute["POWER"] = "POWER";
    Compute["POWERPRO"] = "POWERPRO";
    Compute["STANDARD"] = "STANDARD";
    Compute["VALUE"] = "VALUE";
})(Compute = exports.Compute || (exports.Compute = {}));
var ComputeType;
(function (ComputeType) {
    /**
     * @internal
     */
    ComputeType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComputeType = exports.ComputeType || (exports.ComputeType = {}));
var RootStorage;
(function (RootStorage) {
    /**
     * @internal
     */
    RootStorage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RootStorage = exports.RootStorage || (exports.RootStorage = {}));
var UserStorage;
(function (UserStorage) {
    /**
     * @internal
     */
    UserStorage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserStorage = exports.UserStorage || (exports.UserStorage = {}));
var WorkspaceBundle;
(function (WorkspaceBundle) {
    /**
     * @internal
     */
    WorkspaceBundle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceBundle = exports.WorkspaceBundle || (exports.WorkspaceBundle = {}));
var ReconnectEnum;
(function (ReconnectEnum) {
    ReconnectEnum["DISABLED"] = "DISABLED";
    ReconnectEnum["ENABLED"] = "ENABLED";
})(ReconnectEnum = exports.ReconnectEnum || (exports.ReconnectEnum = {}));
var ClientProperties;
(function (ClientProperties) {
    /**
     * @internal
     */
    ClientProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientProperties = exports.ClientProperties || (exports.ClientProperties = {}));
var ClientPropertiesResult;
(function (ClientPropertiesResult) {
    /**
     * @internal
     */
    ClientPropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientPropertiesResult = exports.ClientPropertiesResult || (exports.ClientPropertiesResult = {}));
var ConnectionAliasAssociation;
(function (ConnectionAliasAssociation) {
    /**
     * @internal
     */
    ConnectionAliasAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionAliasAssociation = exports.ConnectionAliasAssociation || (exports.ConnectionAliasAssociation = {}));
var ConnectionAliasState;
(function (ConnectionAliasState) {
    ConnectionAliasState["CREATED"] = "CREATED";
    ConnectionAliasState["CREATING"] = "CREATING";
    ConnectionAliasState["DELETING"] = "DELETING";
})(ConnectionAliasState = exports.ConnectionAliasState || (exports.ConnectionAliasState = {}));
var ConnectionAlias;
(function (ConnectionAlias) {
    /**
     * @internal
     */
    ConnectionAlias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionAlias = exports.ConnectionAlias || (exports.ConnectionAlias = {}));
var ConnectionAliasPermission;
(function (ConnectionAliasPermission) {
    /**
     * @internal
     */
    ConnectionAliasPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionAliasPermission = exports.ConnectionAliasPermission || (exports.ConnectionAliasPermission = {}));
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["CONNECTED"] = "CONNECTED";
    ConnectionState["DISCONNECTED"] = "DISCONNECTED";
    ConnectionState["UNKNOWN"] = "UNKNOWN";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CopyWorkspaceImageRequest;
(function (CopyWorkspaceImageRequest) {
    /**
     * @internal
     */
    CopyWorkspaceImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyWorkspaceImageRequest = exports.CopyWorkspaceImageRequest || (exports.CopyWorkspaceImageRequest = {}));
var CopyWorkspaceImageResult;
(function (CopyWorkspaceImageResult) {
    /**
     * @internal
     */
    CopyWorkspaceImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyWorkspaceImageResult = exports.CopyWorkspaceImageResult || (exports.CopyWorkspaceImageResult = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var CreateConnectionAliasRequest;
(function (CreateConnectionAliasRequest) {
    /**
     * @internal
     */
    CreateConnectionAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionAliasRequest = exports.CreateConnectionAliasRequest || (exports.CreateConnectionAliasRequest = {}));
var CreateConnectionAliasResult;
(function (CreateConnectionAliasResult) {
    /**
     * @internal
     */
    CreateConnectionAliasResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionAliasResult = exports.CreateConnectionAliasResult || (exports.CreateConnectionAliasResult = {}));
var CreateIpGroupRequest;
(function (CreateIpGroupRequest) {
    /**
     * @internal
     */
    CreateIpGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIpGroupRequest = exports.CreateIpGroupRequest || (exports.CreateIpGroupRequest = {}));
var CreateIpGroupResult;
(function (CreateIpGroupResult) {
    /**
     * @internal
     */
    CreateIpGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIpGroupResult = exports.CreateIpGroupResult || (exports.CreateIpGroupResult = {}));
var ResourceCreationFailedException;
(function (ResourceCreationFailedException) {
    /**
     * @internal
     */
    ResourceCreationFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceCreationFailedException = exports.ResourceCreationFailedException || (exports.ResourceCreationFailedException = {}));
var CreateTagsRequest;
(function (CreateTagsRequest) {
    /**
     * @internal
     */
    CreateTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var CreateTagsResult;
(function (CreateTagsResult) {
    /**
     * @internal
     */
    CreateTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsResult = exports.CreateTagsResult || (exports.CreateTagsResult = {}));
var CreateWorkspaceBundleRequest;
(function (CreateWorkspaceBundleRequest) {
    /**
     * @internal
     */
    CreateWorkspaceBundleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkspaceBundleRequest = exports.CreateWorkspaceBundleRequest || (exports.CreateWorkspaceBundleRequest = {}));
var CreateWorkspaceBundleResult;
(function (CreateWorkspaceBundleResult) {
    /**
     * @internal
     */
    CreateWorkspaceBundleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkspaceBundleResult = exports.CreateWorkspaceBundleResult || (exports.CreateWorkspaceBundleResult = {}));
var RunningMode;
(function (RunningMode) {
    RunningMode["ALWAYS_ON"] = "ALWAYS_ON";
    RunningMode["AUTO_STOP"] = "AUTO_STOP";
})(RunningMode = exports.RunningMode || (exports.RunningMode = {}));
var WorkspaceProperties;
(function (WorkspaceProperties) {
    /**
     * @internal
     */
    WorkspaceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceProperties = exports.WorkspaceProperties || (exports.WorkspaceProperties = {}));
var WorkspaceRequest;
(function (WorkspaceRequest) {
    /**
     * @internal
     */
    WorkspaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceRequest = exports.WorkspaceRequest || (exports.WorkspaceRequest = {}));
var CreateWorkspacesRequest;
(function (CreateWorkspacesRequest) {
    /**
     * @internal
     */
    CreateWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkspacesRequest = exports.CreateWorkspacesRequest || (exports.CreateWorkspacesRequest = {}));
var FailedCreateWorkspaceRequest;
(function (FailedCreateWorkspaceRequest) {
    /**
     * @internal
     */
    FailedCreateWorkspaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedCreateWorkspaceRequest = exports.FailedCreateWorkspaceRequest || (exports.FailedCreateWorkspaceRequest = {}));
var ModificationResourceEnum;
(function (ModificationResourceEnum) {
    ModificationResourceEnum["COMPUTE_TYPE"] = "COMPUTE_TYPE";
    ModificationResourceEnum["ROOT_VOLUME"] = "ROOT_VOLUME";
    ModificationResourceEnum["USER_VOLUME"] = "USER_VOLUME";
})(ModificationResourceEnum = exports.ModificationResourceEnum || (exports.ModificationResourceEnum = {}));
var ModificationStateEnum;
(function (ModificationStateEnum) {
    ModificationStateEnum["UPDATE_INITIATED"] = "UPDATE_INITIATED";
    ModificationStateEnum["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(ModificationStateEnum = exports.ModificationStateEnum || (exports.ModificationStateEnum = {}));
var ModificationState;
(function (ModificationState) {
    /**
     * @internal
     */
    ModificationState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModificationState = exports.ModificationState || (exports.ModificationState = {}));
var WorkspaceState;
(function (WorkspaceState) {
    WorkspaceState["ADMIN_MAINTENANCE"] = "ADMIN_MAINTENANCE";
    WorkspaceState["AVAILABLE"] = "AVAILABLE";
    WorkspaceState["ERROR"] = "ERROR";
    WorkspaceState["IMPAIRED"] = "IMPAIRED";
    WorkspaceState["MAINTENANCE"] = "MAINTENANCE";
    WorkspaceState["PENDING"] = "PENDING";
    WorkspaceState["REBOOTING"] = "REBOOTING";
    WorkspaceState["REBUILDING"] = "REBUILDING";
    WorkspaceState["RESTORING"] = "RESTORING";
    WorkspaceState["STARTING"] = "STARTING";
    WorkspaceState["STOPPED"] = "STOPPED";
    WorkspaceState["STOPPING"] = "STOPPING";
    WorkspaceState["SUSPENDED"] = "SUSPENDED";
    WorkspaceState["TERMINATED"] = "TERMINATED";
    WorkspaceState["TERMINATING"] = "TERMINATING";
    WorkspaceState["UNHEALTHY"] = "UNHEALTHY";
    WorkspaceState["UPDATING"] = "UPDATING";
})(WorkspaceState = exports.WorkspaceState || (exports.WorkspaceState = {}));
var Workspace;
(function (Workspace) {
    /**
     * @internal
     */
    Workspace.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Workspace = exports.Workspace || (exports.Workspace = {}));
var CreateWorkspacesResult;
(function (CreateWorkspacesResult) {
    /**
     * @internal
     */
    CreateWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkspacesResult = exports.CreateWorkspacesResult || (exports.CreateWorkspacesResult = {}));
var DedicatedTenancySupportEnum;
(function (DedicatedTenancySupportEnum) {
    DedicatedTenancySupportEnum["ENABLED"] = "ENABLED";
})(DedicatedTenancySupportEnum = exports.DedicatedTenancySupportEnum || (exports.DedicatedTenancySupportEnum = {}));
var DefaultWorkspaceCreationProperties;
(function (DefaultWorkspaceCreationProperties) {
    /**
     * @internal
     */
    DefaultWorkspaceCreationProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultWorkspaceCreationProperties = exports.DefaultWorkspaceCreationProperties || (exports.DefaultWorkspaceCreationProperties = {}));
var DeleteConnectionAliasRequest;
(function (DeleteConnectionAliasRequest) {
    /**
     * @internal
     */
    DeleteConnectionAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionAliasRequest = exports.DeleteConnectionAliasRequest || (exports.DeleteConnectionAliasRequest = {}));
var DeleteConnectionAliasResult;
(function (DeleteConnectionAliasResult) {
    /**
     * @internal
     */
    DeleteConnectionAliasResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionAliasResult = exports.DeleteConnectionAliasResult || (exports.DeleteConnectionAliasResult = {}));
var DeleteIpGroupRequest;
(function (DeleteIpGroupRequest) {
    /**
     * @internal
     */
    DeleteIpGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIpGroupRequest = exports.DeleteIpGroupRequest || (exports.DeleteIpGroupRequest = {}));
var DeleteIpGroupResult;
(function (DeleteIpGroupResult) {
    /**
     * @internal
     */
    DeleteIpGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIpGroupResult = exports.DeleteIpGroupResult || (exports.DeleteIpGroupResult = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    /**
     * @internal
     */
    DeleteTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DeleteTagsResult;
(function (DeleteTagsResult) {
    /**
     * @internal
     */
    DeleteTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsResult = exports.DeleteTagsResult || (exports.DeleteTagsResult = {}));
var DeleteWorkspaceBundleRequest;
(function (DeleteWorkspaceBundleRequest) {
    /**
     * @internal
     */
    DeleteWorkspaceBundleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkspaceBundleRequest = exports.DeleteWorkspaceBundleRequest || (exports.DeleteWorkspaceBundleRequest = {}));
var DeleteWorkspaceBundleResult;
(function (DeleteWorkspaceBundleResult) {
    /**
     * @internal
     */
    DeleteWorkspaceBundleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkspaceBundleResult = exports.DeleteWorkspaceBundleResult || (exports.DeleteWorkspaceBundleResult = {}));
var DeleteWorkspaceImageRequest;
(function (DeleteWorkspaceImageRequest) {
    /**
     * @internal
     */
    DeleteWorkspaceImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkspaceImageRequest = exports.DeleteWorkspaceImageRequest || (exports.DeleteWorkspaceImageRequest = {}));
var DeleteWorkspaceImageResult;
(function (DeleteWorkspaceImageResult) {
    /**
     * @internal
     */
    DeleteWorkspaceImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkspaceImageResult = exports.DeleteWorkspaceImageResult || (exports.DeleteWorkspaceImageResult = {}));
var DeregisterWorkspaceDirectoryRequest;
(function (DeregisterWorkspaceDirectoryRequest) {
    /**
     * @internal
     */
    DeregisterWorkspaceDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterWorkspaceDirectoryRequest = exports.DeregisterWorkspaceDirectoryRequest || (exports.DeregisterWorkspaceDirectoryRequest = {}));
var DeregisterWorkspaceDirectoryResult;
(function (DeregisterWorkspaceDirectoryResult) {
    /**
     * @internal
     */
    DeregisterWorkspaceDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterWorkspaceDirectoryResult = exports.DeregisterWorkspaceDirectoryResult || (exports.DeregisterWorkspaceDirectoryResult = {}));
var DescribeAccountRequest;
(function (DescribeAccountRequest) {
    /**
     * @internal
     */
    DescribeAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountRequest = exports.DescribeAccountRequest || (exports.DescribeAccountRequest = {}));
var DescribeAccountResult;
(function (DescribeAccountResult) {
    /**
     * @internal
     */
    DescribeAccountResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountResult = exports.DescribeAccountResult || (exports.DescribeAccountResult = {}));
var DescribeAccountModificationsRequest;
(function (DescribeAccountModificationsRequest) {
    /**
     * @internal
     */
    DescribeAccountModificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountModificationsRequest = exports.DescribeAccountModificationsRequest || (exports.DescribeAccountModificationsRequest = {}));
var DescribeAccountModificationsResult;
(function (DescribeAccountModificationsResult) {
    /**
     * @internal
     */
    DescribeAccountModificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountModificationsResult = exports.DescribeAccountModificationsResult || (exports.DescribeAccountModificationsResult = {}));
var DescribeClientPropertiesRequest;
(function (DescribeClientPropertiesRequest) {
    /**
     * @internal
     */
    DescribeClientPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientPropertiesRequest = exports.DescribeClientPropertiesRequest || (exports.DescribeClientPropertiesRequest = {}));
var DescribeClientPropertiesResult;
(function (DescribeClientPropertiesResult) {
    /**
     * @internal
     */
    DescribeClientPropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientPropertiesResult = exports.DescribeClientPropertiesResult || (exports.DescribeClientPropertiesResult = {}));
var DescribeConnectionAliasesRequest;
(function (DescribeConnectionAliasesRequest) {
    /**
     * @internal
     */
    DescribeConnectionAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionAliasesRequest = exports.DescribeConnectionAliasesRequest || (exports.DescribeConnectionAliasesRequest = {}));
var DescribeConnectionAliasesResult;
(function (DescribeConnectionAliasesResult) {
    /**
     * @internal
     */
    DescribeConnectionAliasesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionAliasesResult = exports.DescribeConnectionAliasesResult || (exports.DescribeConnectionAliasesResult = {}));
var DescribeConnectionAliasPermissionsRequest;
(function (DescribeConnectionAliasPermissionsRequest) {
    /**
     * @internal
     */
    DescribeConnectionAliasPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionAliasPermissionsRequest = exports.DescribeConnectionAliasPermissionsRequest || (exports.DescribeConnectionAliasPermissionsRequest = {}));
var DescribeConnectionAliasPermissionsResult;
(function (DescribeConnectionAliasPermissionsResult) {
    /**
     * @internal
     */
    DescribeConnectionAliasPermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionAliasPermissionsResult = exports.DescribeConnectionAliasPermissionsResult || (exports.DescribeConnectionAliasPermissionsResult = {}));
var DescribeIpGroupsRequest;
(function (DescribeIpGroupsRequest) {
    /**
     * @internal
     */
    DescribeIpGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIpGroupsRequest = exports.DescribeIpGroupsRequest || (exports.DescribeIpGroupsRequest = {}));
var WorkspacesIpGroup;
(function (WorkspacesIpGroup) {
    /**
     * @internal
     */
    WorkspacesIpGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspacesIpGroup = exports.WorkspacesIpGroup || (exports.WorkspacesIpGroup = {}));
var DescribeIpGroupsResult;
(function (DescribeIpGroupsResult) {
    /**
     * @internal
     */
    DescribeIpGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIpGroupsResult = exports.DescribeIpGroupsResult || (exports.DescribeIpGroupsResult = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    /**
     * @internal
     */
    DescribeTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var DescribeTagsResult;
(function (DescribeTagsResult) {
    /**
     * @internal
     */
    DescribeTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsResult = exports.DescribeTagsResult || (exports.DescribeTagsResult = {}));
var DescribeWorkspaceBundlesRequest;
(function (DescribeWorkspaceBundlesRequest) {
    /**
     * @internal
     */
    DescribeWorkspaceBundlesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceBundlesRequest = exports.DescribeWorkspaceBundlesRequest || (exports.DescribeWorkspaceBundlesRequest = {}));
var DescribeWorkspaceBundlesResult;
(function (DescribeWorkspaceBundlesResult) {
    /**
     * @internal
     */
    DescribeWorkspaceBundlesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceBundlesResult = exports.DescribeWorkspaceBundlesResult || (exports.DescribeWorkspaceBundlesResult = {}));
var DescribeWorkspaceDirectoriesRequest;
(function (DescribeWorkspaceDirectoriesRequest) {
    /**
     * @internal
     */
    DescribeWorkspaceDirectoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceDirectoriesRequest = exports.DescribeWorkspaceDirectoriesRequest || (exports.DescribeWorkspaceDirectoriesRequest = {}));
var WorkspaceDirectoryType;
(function (WorkspaceDirectoryType) {
    WorkspaceDirectoryType["AD_CONNECTOR"] = "AD_CONNECTOR";
    WorkspaceDirectoryType["SIMPLE_AD"] = "SIMPLE_AD";
})(WorkspaceDirectoryType = exports.WorkspaceDirectoryType || (exports.WorkspaceDirectoryType = {}));
var SelfservicePermissions;
(function (SelfservicePermissions) {
    /**
     * @internal
     */
    SelfservicePermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelfservicePermissions = exports.SelfservicePermissions || (exports.SelfservicePermissions = {}));
var WorkspaceDirectoryState;
(function (WorkspaceDirectoryState) {
    WorkspaceDirectoryState["DEREGISTERED"] = "DEREGISTERED";
    WorkspaceDirectoryState["DEREGISTERING"] = "DEREGISTERING";
    WorkspaceDirectoryState["ERROR"] = "ERROR";
    WorkspaceDirectoryState["REGISTERED"] = "REGISTERED";
    WorkspaceDirectoryState["REGISTERING"] = "REGISTERING";
})(WorkspaceDirectoryState = exports.WorkspaceDirectoryState || (exports.WorkspaceDirectoryState = {}));
var Tenancy;
(function (Tenancy) {
    Tenancy["DEDICATED"] = "DEDICATED";
    Tenancy["SHARED"] = "SHARED";
})(Tenancy = exports.Tenancy || (exports.Tenancy = {}));
var WorkspaceAccessProperties;
(function (WorkspaceAccessProperties) {
    /**
     * @internal
     */
    WorkspaceAccessProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceAccessProperties = exports.WorkspaceAccessProperties || (exports.WorkspaceAccessProperties = {}));
var WorkspaceDirectory;
(function (WorkspaceDirectory) {
    /**
     * @internal
     */
    WorkspaceDirectory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceDirectory = exports.WorkspaceDirectory || (exports.WorkspaceDirectory = {}));
var DescribeWorkspaceDirectoriesResult;
(function (DescribeWorkspaceDirectoriesResult) {
    /**
     * @internal
     */
    DescribeWorkspaceDirectoriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceDirectoriesResult = exports.DescribeWorkspaceDirectoriesResult || (exports.DescribeWorkspaceDirectoriesResult = {}));
var DescribeWorkspaceImagePermissionsRequest;
(function (DescribeWorkspaceImagePermissionsRequest) {
    /**
     * @internal
     */
    DescribeWorkspaceImagePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceImagePermissionsRequest = exports.DescribeWorkspaceImagePermissionsRequest || (exports.DescribeWorkspaceImagePermissionsRequest = {}));
var ImagePermission;
(function (ImagePermission) {
    /**
     * @internal
     */
    ImagePermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImagePermission = exports.ImagePermission || (exports.ImagePermission = {}));
var DescribeWorkspaceImagePermissionsResult;
(function (DescribeWorkspaceImagePermissionsResult) {
    /**
     * @internal
     */
    DescribeWorkspaceImagePermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceImagePermissionsResult = exports.DescribeWorkspaceImagePermissionsResult || (exports.DescribeWorkspaceImagePermissionsResult = {}));
var ImageType;
(function (ImageType) {
    ImageType["OWNED"] = "OWNED";
    ImageType["SHARED"] = "SHARED";
})(ImageType = exports.ImageType || (exports.ImageType = {}));
var DescribeWorkspaceImagesRequest;
(function (DescribeWorkspaceImagesRequest) {
    /**
     * @internal
     */
    DescribeWorkspaceImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceImagesRequest = exports.DescribeWorkspaceImagesRequest || (exports.DescribeWorkspaceImagesRequest = {}));
var OperatingSystemType;
(function (OperatingSystemType) {
    OperatingSystemType["LINUX"] = "LINUX";
    OperatingSystemType["WINDOWS"] = "WINDOWS";
})(OperatingSystemType = exports.OperatingSystemType || (exports.OperatingSystemType = {}));
var OperatingSystem;
(function (OperatingSystem) {
    /**
     * @internal
     */
    OperatingSystem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var WorkspaceImageRequiredTenancy;
(function (WorkspaceImageRequiredTenancy) {
    WorkspaceImageRequiredTenancy["DEDICATED"] = "DEDICATED";
    WorkspaceImageRequiredTenancy["DEFAULT"] = "DEFAULT";
})(WorkspaceImageRequiredTenancy = exports.WorkspaceImageRequiredTenancy || (exports.WorkspaceImageRequiredTenancy = {}));
var WorkspaceImageState;
(function (WorkspaceImageState) {
    WorkspaceImageState["AVAILABLE"] = "AVAILABLE";
    WorkspaceImageState["ERROR"] = "ERROR";
    WorkspaceImageState["PENDING"] = "PENDING";
})(WorkspaceImageState = exports.WorkspaceImageState || (exports.WorkspaceImageState = {}));
var WorkspaceImage;
(function (WorkspaceImage) {
    /**
     * @internal
     */
    WorkspaceImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceImage = exports.WorkspaceImage || (exports.WorkspaceImage = {}));
var DescribeWorkspaceImagesResult;
(function (DescribeWorkspaceImagesResult) {
    /**
     * @internal
     */
    DescribeWorkspaceImagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceImagesResult = exports.DescribeWorkspaceImagesResult || (exports.DescribeWorkspaceImagesResult = {}));
var DescribeWorkspacesRequest;
(function (DescribeWorkspacesRequest) {
    /**
     * @internal
     */
    DescribeWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspacesRequest = exports.DescribeWorkspacesRequest || (exports.DescribeWorkspacesRequest = {}));
var DescribeWorkspacesResult;
(function (DescribeWorkspacesResult) {
    /**
     * @internal
     */
    DescribeWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspacesResult = exports.DescribeWorkspacesResult || (exports.DescribeWorkspacesResult = {}));
var DescribeWorkspacesConnectionStatusRequest;
(function (DescribeWorkspacesConnectionStatusRequest) {
    /**
     * @internal
     */
    DescribeWorkspacesConnectionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspacesConnectionStatusRequest = exports.DescribeWorkspacesConnectionStatusRequest || (exports.DescribeWorkspacesConnectionStatusRequest = {}));
var WorkspaceConnectionStatus;
(function (WorkspaceConnectionStatus) {
    /**
     * @internal
     */
    WorkspaceConnectionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceConnectionStatus = exports.WorkspaceConnectionStatus || (exports.WorkspaceConnectionStatus = {}));
var DescribeWorkspacesConnectionStatusResult;
(function (DescribeWorkspacesConnectionStatusResult) {
    /**
     * @internal
     */
    DescribeWorkspacesConnectionStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspacesConnectionStatusResult = exports.DescribeWorkspacesConnectionStatusResult || (exports.DescribeWorkspacesConnectionStatusResult = {}));
var DescribeWorkspaceSnapshotsRequest;
(function (DescribeWorkspaceSnapshotsRequest) {
    /**
     * @internal
     */
    DescribeWorkspaceSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceSnapshotsRequest = exports.DescribeWorkspaceSnapshotsRequest || (exports.DescribeWorkspaceSnapshotsRequest = {}));
var Snapshot;
(function (Snapshot) {
    /**
     * @internal
     */
    Snapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var DescribeWorkspaceSnapshotsResult;
(function (DescribeWorkspaceSnapshotsResult) {
    /**
     * @internal
     */
    DescribeWorkspaceSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkspaceSnapshotsResult = exports.DescribeWorkspaceSnapshotsResult || (exports.DescribeWorkspaceSnapshotsResult = {}));
var DisassociateConnectionAliasRequest;
(function (DisassociateConnectionAliasRequest) {
    /**
     * @internal
     */
    DisassociateConnectionAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateConnectionAliasRequest = exports.DisassociateConnectionAliasRequest || (exports.DisassociateConnectionAliasRequest = {}));
var DisassociateConnectionAliasResult;
(function (DisassociateConnectionAliasResult) {
    /**
     * @internal
     */
    DisassociateConnectionAliasResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateConnectionAliasResult = exports.DisassociateConnectionAliasResult || (exports.DisassociateConnectionAliasResult = {}));
var DisassociateIpGroupsRequest;
(function (DisassociateIpGroupsRequest) {
    /**
     * @internal
     */
    DisassociateIpGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateIpGroupsRequest = exports.DisassociateIpGroupsRequest || (exports.DisassociateIpGroupsRequest = {}));
var DisassociateIpGroupsResult;
(function (DisassociateIpGroupsResult) {
    /**
     * @internal
     */
    DisassociateIpGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateIpGroupsResult = exports.DisassociateIpGroupsResult || (exports.DisassociateIpGroupsResult = {}));
var FailedWorkspaceChangeRequest;
(function (FailedWorkspaceChangeRequest) {
    /**
     * @internal
     */
    FailedWorkspaceChangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedWorkspaceChangeRequest = exports.FailedWorkspaceChangeRequest || (exports.FailedWorkspaceChangeRequest = {}));
var WorkspaceImageIngestionProcess;
(function (WorkspaceImageIngestionProcess) {
    WorkspaceImageIngestionProcess["BYOL_GRAPHICS"] = "BYOL_GRAPHICS";
    WorkspaceImageIngestionProcess["BYOL_GRAPHICSPRO"] = "BYOL_GRAPHICSPRO";
    WorkspaceImageIngestionProcess["BYOL_REGULAR"] = "BYOL_REGULAR";
    WorkspaceImageIngestionProcess["BYOL_REGULAR_WSP"] = "BYOL_REGULAR_WSP";
})(WorkspaceImageIngestionProcess = exports.WorkspaceImageIngestionProcess || (exports.WorkspaceImageIngestionProcess = {}));
var ImportWorkspaceImageRequest;
(function (ImportWorkspaceImageRequest) {
    /**
     * @internal
     */
    ImportWorkspaceImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportWorkspaceImageRequest = exports.ImportWorkspaceImageRequest || (exports.ImportWorkspaceImageRequest = {}));
var ImportWorkspaceImageResult;
(function (ImportWorkspaceImageResult) {
    /**
     * @internal
     */
    ImportWorkspaceImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportWorkspaceImageResult = exports.ImportWorkspaceImageResult || (exports.ImportWorkspaceImageResult = {}));
var ListAvailableManagementCidrRangesRequest;
(function (ListAvailableManagementCidrRangesRequest) {
    /**
     * @internal
     */
    ListAvailableManagementCidrRangesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableManagementCidrRangesRequest = exports.ListAvailableManagementCidrRangesRequest || (exports.ListAvailableManagementCidrRangesRequest = {}));
var ListAvailableManagementCidrRangesResult;
(function (ListAvailableManagementCidrRangesResult) {
    /**
     * @internal
     */
    ListAvailableManagementCidrRangesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableManagementCidrRangesResult = exports.ListAvailableManagementCidrRangesResult || (exports.ListAvailableManagementCidrRangesResult = {}));
var MigrateWorkspaceRequest;
(function (MigrateWorkspaceRequest) {
    /**
     * @internal
     */
    MigrateWorkspaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MigrateWorkspaceRequest = exports.MigrateWorkspaceRequest || (exports.MigrateWorkspaceRequest = {}));
var MigrateWorkspaceResult;
(function (MigrateWorkspaceResult) {
    /**
     * @internal
     */
    MigrateWorkspaceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MigrateWorkspaceResult = exports.MigrateWorkspaceResult || (exports.MigrateWorkspaceResult = {}));
var OperationInProgressException;
(function (OperationInProgressException) {
    /**
     * @internal
     */
    OperationInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationInProgressException = exports.OperationInProgressException || (exports.OperationInProgressException = {}));
var ModifyAccountRequest;
(function (ModifyAccountRequest) {
    /**
     * @internal
     */
    ModifyAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAccountRequest = exports.ModifyAccountRequest || (exports.ModifyAccountRequest = {}));
var ModifyAccountResult;
(function (ModifyAccountResult) {
    /**
     * @internal
     */
    ModifyAccountResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAccountResult = exports.ModifyAccountResult || (exports.ModifyAccountResult = {}));
var ModifyClientPropertiesRequest;
(function (ModifyClientPropertiesRequest) {
    /**
     * @internal
     */
    ModifyClientPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClientPropertiesRequest = exports.ModifyClientPropertiesRequest || (exports.ModifyClientPropertiesRequest = {}));
var ModifyClientPropertiesResult;
(function (ModifyClientPropertiesResult) {
    /**
     * @internal
     */
    ModifyClientPropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClientPropertiesResult = exports.ModifyClientPropertiesResult || (exports.ModifyClientPropertiesResult = {}));
var ModifySelfservicePermissionsRequest;
(function (ModifySelfservicePermissionsRequest) {
    /**
     * @internal
     */
    ModifySelfservicePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySelfservicePermissionsRequest = exports.ModifySelfservicePermissionsRequest || (exports.ModifySelfservicePermissionsRequest = {}));
var ModifySelfservicePermissionsResult;
(function (ModifySelfservicePermissionsResult) {
    /**
     * @internal
     */
    ModifySelfservicePermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySelfservicePermissionsResult = exports.ModifySelfservicePermissionsResult || (exports.ModifySelfservicePermissionsResult = {}));
var ModifyWorkspaceAccessPropertiesRequest;
(function (ModifyWorkspaceAccessPropertiesRequest) {
    /**
     * @internal
     */
    ModifyWorkspaceAccessPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspaceAccessPropertiesRequest = exports.ModifyWorkspaceAccessPropertiesRequest || (exports.ModifyWorkspaceAccessPropertiesRequest = {}));
var ModifyWorkspaceAccessPropertiesResult;
(function (ModifyWorkspaceAccessPropertiesResult) {
    /**
     * @internal
     */
    ModifyWorkspaceAccessPropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspaceAccessPropertiesResult = exports.ModifyWorkspaceAccessPropertiesResult || (exports.ModifyWorkspaceAccessPropertiesResult = {}));
var WorkspaceCreationProperties;
(function (WorkspaceCreationProperties) {
    /**
     * @internal
     */
    WorkspaceCreationProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspaceCreationProperties = exports.WorkspaceCreationProperties || (exports.WorkspaceCreationProperties = {}));
var ModifyWorkspaceCreationPropertiesRequest;
(function (ModifyWorkspaceCreationPropertiesRequest) {
    /**
     * @internal
     */
    ModifyWorkspaceCreationPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspaceCreationPropertiesRequest = exports.ModifyWorkspaceCreationPropertiesRequest || (exports.ModifyWorkspaceCreationPropertiesRequest = {}));
var ModifyWorkspaceCreationPropertiesResult;
(function (ModifyWorkspaceCreationPropertiesResult) {
    /**
     * @internal
     */
    ModifyWorkspaceCreationPropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspaceCreationPropertiesResult = exports.ModifyWorkspaceCreationPropertiesResult || (exports.ModifyWorkspaceCreationPropertiesResult = {}));
var ModifyWorkspacePropertiesRequest;
(function (ModifyWorkspacePropertiesRequest) {
    /**
     * @internal
     */
    ModifyWorkspacePropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspacePropertiesRequest = exports.ModifyWorkspacePropertiesRequest || (exports.ModifyWorkspacePropertiesRequest = {}));
var ModifyWorkspacePropertiesResult;
(function (ModifyWorkspacePropertiesResult) {
    /**
     * @internal
     */
    ModifyWorkspacePropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspacePropertiesResult = exports.ModifyWorkspacePropertiesResult || (exports.ModifyWorkspacePropertiesResult = {}));
var UnsupportedWorkspaceConfigurationException;
(function (UnsupportedWorkspaceConfigurationException) {
    /**
     * @internal
     */
    UnsupportedWorkspaceConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedWorkspaceConfigurationException = exports.UnsupportedWorkspaceConfigurationException || (exports.UnsupportedWorkspaceConfigurationException = {}));
var TargetWorkspaceState;
(function (TargetWorkspaceState) {
    TargetWorkspaceState["ADMIN_MAINTENANCE"] = "ADMIN_MAINTENANCE";
    TargetWorkspaceState["AVAILABLE"] = "AVAILABLE";
})(TargetWorkspaceState = exports.TargetWorkspaceState || (exports.TargetWorkspaceState = {}));
var ModifyWorkspaceStateRequest;
(function (ModifyWorkspaceStateRequest) {
    /**
     * @internal
     */
    ModifyWorkspaceStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspaceStateRequest = exports.ModifyWorkspaceStateRequest || (exports.ModifyWorkspaceStateRequest = {}));
var ModifyWorkspaceStateResult;
(function (ModifyWorkspaceStateResult) {
    /**
     * @internal
     */
    ModifyWorkspaceStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyWorkspaceStateResult = exports.ModifyWorkspaceStateResult || (exports.ModifyWorkspaceStateResult = {}));
var RebootRequest;
(function (RebootRequest) {
    /**
     * @internal
     */
    RebootRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootRequest = exports.RebootRequest || (exports.RebootRequest = {}));
var RebootWorkspacesRequest;
(function (RebootWorkspacesRequest) {
    /**
     * @internal
     */
    RebootWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootWorkspacesRequest = exports.RebootWorkspacesRequest || (exports.RebootWorkspacesRequest = {}));
var RebootWorkspacesResult;
(function (RebootWorkspacesResult) {
    /**
     * @internal
     */
    RebootWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootWorkspacesResult = exports.RebootWorkspacesResult || (exports.RebootWorkspacesResult = {}));
var RebuildRequest;
(function (RebuildRequest) {
    /**
     * @internal
     */
    RebuildRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebuildRequest = exports.RebuildRequest || (exports.RebuildRequest = {}));
var RebuildWorkspacesRequest;
(function (RebuildWorkspacesRequest) {
    /**
     * @internal
     */
    RebuildWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebuildWorkspacesRequest = exports.RebuildWorkspacesRequest || (exports.RebuildWorkspacesRequest = {}));
var RebuildWorkspacesResult;
(function (RebuildWorkspacesResult) {
    /**
     * @internal
     */
    RebuildWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebuildWorkspacesResult = exports.RebuildWorkspacesResult || (exports.RebuildWorkspacesResult = {}));
var RegisterWorkspaceDirectoryRequest;
(function (RegisterWorkspaceDirectoryRequest) {
    /**
     * @internal
     */
    RegisterWorkspaceDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterWorkspaceDirectoryRequest = exports.RegisterWorkspaceDirectoryRequest || (exports.RegisterWorkspaceDirectoryRequest = {}));
var RegisterWorkspaceDirectoryResult;
(function (RegisterWorkspaceDirectoryResult) {
    /**
     * @internal
     */
    RegisterWorkspaceDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterWorkspaceDirectoryResult = exports.RegisterWorkspaceDirectoryResult || (exports.RegisterWorkspaceDirectoryResult = {}));
var UnsupportedNetworkConfigurationException;
(function (UnsupportedNetworkConfigurationException) {
    /**
     * @internal
     */
    UnsupportedNetworkConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedNetworkConfigurationException = exports.UnsupportedNetworkConfigurationException || (exports.UnsupportedNetworkConfigurationException = {}));
var WorkspacesDefaultRoleNotFoundException;
(function (WorkspacesDefaultRoleNotFoundException) {
    /**
     * @internal
     */
    WorkspacesDefaultRoleNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkspacesDefaultRoleNotFoundException = exports.WorkspacesDefaultRoleNotFoundException || (exports.WorkspacesDefaultRoleNotFoundException = {}));
var RestoreWorkspaceRequest;
(function (RestoreWorkspaceRequest) {
    /**
     * @internal
     */
    RestoreWorkspaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreWorkspaceRequest = exports.RestoreWorkspaceRequest || (exports.RestoreWorkspaceRequest = {}));
var RestoreWorkspaceResult;
(function (RestoreWorkspaceResult) {
    /**
     * @internal
     */
    RestoreWorkspaceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreWorkspaceResult = exports.RestoreWorkspaceResult || (exports.RestoreWorkspaceResult = {}));
var RevokeIpRulesRequest;
(function (RevokeIpRulesRequest) {
    /**
     * @internal
     */
    RevokeIpRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeIpRulesRequest = exports.RevokeIpRulesRequest || (exports.RevokeIpRulesRequest = {}));
var RevokeIpRulesResult;
(function (RevokeIpRulesResult) {
    /**
     * @internal
     */
    RevokeIpRulesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeIpRulesResult = exports.RevokeIpRulesResult || (exports.RevokeIpRulesResult = {}));
var StartRequest;
(function (StartRequest) {
    /**
     * @internal
     */
    StartRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartRequest = exports.StartRequest || (exports.StartRequest = {}));
var StartWorkspacesRequest;
(function (StartWorkspacesRequest) {
    /**
     * @internal
     */
    StartWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartWorkspacesRequest = exports.StartWorkspacesRequest || (exports.StartWorkspacesRequest = {}));
var StartWorkspacesResult;
(function (StartWorkspacesResult) {
    /**
     * @internal
     */
    StartWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartWorkspacesResult = exports.StartWorkspacesResult || (exports.StartWorkspacesResult = {}));
var StopRequest;
(function (StopRequest) {
    /**
     * @internal
     */
    StopRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRequest = exports.StopRequest || (exports.StopRequest = {}));
var StopWorkspacesRequest;
(function (StopWorkspacesRequest) {
    /**
     * @internal
     */
    StopWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopWorkspacesRequest = exports.StopWorkspacesRequest || (exports.StopWorkspacesRequest = {}));
var StopWorkspacesResult;
(function (StopWorkspacesResult) {
    /**
     * @internal
     */
    StopWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopWorkspacesResult = exports.StopWorkspacesResult || (exports.StopWorkspacesResult = {}));
var TerminateRequest;
(function (TerminateRequest) {
    /**
     * @internal
     */
    TerminateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateRequest = exports.TerminateRequest || (exports.TerminateRequest = {}));
var TerminateWorkspacesRequest;
(function (TerminateWorkspacesRequest) {
    /**
     * @internal
     */
    TerminateWorkspacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateWorkspacesRequest = exports.TerminateWorkspacesRequest || (exports.TerminateWorkspacesRequest = {}));
var TerminateWorkspacesResult;
(function (TerminateWorkspacesResult) {
    /**
     * @internal
     */
    TerminateWorkspacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateWorkspacesResult = exports.TerminateWorkspacesResult || (exports.TerminateWorkspacesResult = {}));
var UpdateConnectionAliasPermissionRequest;
(function (UpdateConnectionAliasPermissionRequest) {
    /**
     * @internal
     */
    UpdateConnectionAliasPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionAliasPermissionRequest = exports.UpdateConnectionAliasPermissionRequest || (exports.UpdateConnectionAliasPermissionRequest = {}));
var UpdateConnectionAliasPermissionResult;
(function (UpdateConnectionAliasPermissionResult) {
    /**
     * @internal
     */
    UpdateConnectionAliasPermissionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionAliasPermissionResult = exports.UpdateConnectionAliasPermissionResult || (exports.UpdateConnectionAliasPermissionResult = {}));
var UpdateRulesOfIpGroupRequest;
(function (UpdateRulesOfIpGroupRequest) {
    /**
     * @internal
     */
    UpdateRulesOfIpGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRulesOfIpGroupRequest = exports.UpdateRulesOfIpGroupRequest || (exports.UpdateRulesOfIpGroupRequest = {}));
var UpdateRulesOfIpGroupResult;
(function (UpdateRulesOfIpGroupResult) {
    /**
     * @internal
     */
    UpdateRulesOfIpGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRulesOfIpGroupResult = exports.UpdateRulesOfIpGroupResult || (exports.UpdateRulesOfIpGroupResult = {}));
var UpdateWorkspaceBundleRequest;
(function (UpdateWorkspaceBundleRequest) {
    /**
     * @internal
     */
    UpdateWorkspaceBundleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkspaceBundleRequest = exports.UpdateWorkspaceBundleRequest || (exports.UpdateWorkspaceBundleRequest = {}));
var UpdateWorkspaceBundleResult;
(function (UpdateWorkspaceBundleResult) {
    /**
     * @internal
     */
    UpdateWorkspaceBundleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkspaceBundleResult = exports.UpdateWorkspaceBundleResult || (exports.UpdateWorkspaceBundleResult = {}));
var UpdateWorkspaceImagePermissionRequest;
(function (UpdateWorkspaceImagePermissionRequest) {
    /**
     * @internal
     */
    UpdateWorkspaceImagePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkspaceImagePermissionRequest = exports.UpdateWorkspaceImagePermissionRequest || (exports.UpdateWorkspaceImagePermissionRequest = {}));
var UpdateWorkspaceImagePermissionResult;
(function (UpdateWorkspaceImagePermissionResult) {
    /**
     * @internal
     */
    UpdateWorkspaceImagePermissionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkspaceImagePermissionResult = exports.UpdateWorkspaceImagePermissionResult || (exports.UpdateWorkspaceImagePermissionResult = {}));
//# sourceMappingURL=models_0.js.map