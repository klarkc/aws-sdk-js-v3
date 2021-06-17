"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceIdType = exports.DescribeAccountPreferencesRequest = exports.DescribeAccessPointsResponse = exports.DescribeAccessPointsRequest = exports.DeleteTagsRequest = exports.MountTargetNotFound = exports.DependencyTimeout = exports.DeleteMountTargetRequest = exports.DeleteFileSystemPolicyRequest = exports.FileSystemInUse = exports.DeleteFileSystemRequest = exports.DeleteAccessPointRequest = exports.CreateTagsRequest = exports.SubnetNotFound = exports.SecurityGroupNotFound = exports.SecurityGroupLimitExceeded = exports.NoFreeAddressesInSubnet = exports.NetworkInterfaceLimitExceeded = exports.MountTargetDescription = exports.MountTargetConflict = exports.IpAddressInUse = exports.CreateMountTargetRequest = exports.UnsupportedAvailabilityZone = exports.ThroughputLimitExceeded = exports.InsufficientThroughputCapacity = exports.FileSystemLimitExceeded = exports.FileSystemDescription = exports.FileSystemSize = exports.FileSystemAlreadyExists = exports.CreateFileSystemRequest = exports.ThroughputMode = exports.PerformanceMode = exports.InternalServerError = exports.IncorrectFileSystemLifeCycleState = exports.FileSystemNotFound = exports.CreateAccessPointRequest = exports.BadRequest = exports.BackupPolicyDescription = exports.BackupPolicy = exports.Status = exports.AvailabilityZonesMismatch = exports.AccessPointNotFound = exports.AccessPointLimitExceeded = exports.AccessPointDescription = exports.Tag = exports.RootDirectory = exports.CreationInfo = exports.PosixUser = exports.LifeCycleState = exports.AccessPointAlreadyExists = void 0;
exports.UpdateFileSystemRequest = exports.TooManyRequests = exports.UntagResourceRequest = exports.TagResourceRequest = exports.PutLifecycleConfigurationRequest = exports.PutFileSystemPolicyRequest = exports.PutBackupPolicyRequest = exports.PutAccountPreferencesResponse = exports.PutAccountPreferencesRequest = exports.ModifyMountTargetSecurityGroupsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.InvalidPolicyException = exports.DescribeTagsResponse = exports.DescribeTagsRequest = exports.IncorrectMountTargetState = exports.DescribeMountTargetSecurityGroupsResponse = exports.DescribeMountTargetSecurityGroupsRequest = exports.DescribeMountTargetsResponse = exports.DescribeMountTargetsRequest = exports.LifecycleConfigurationDescription = exports.LifecyclePolicy = exports.TransitionToIARules = exports.DescribeLifecycleConfigurationRequest = exports.DescribeFileSystemsResponse = exports.DescribeFileSystemsRequest = exports.FileSystemPolicyDescription = exports.DescribeFileSystemPolicyRequest = exports.ValidationException = exports.PolicyNotFound = exports.DescribeBackupPolicyRequest = exports.DescribeAccountPreferencesResponse = exports.ResourceIdPreference = exports.Resource = void 0;
var AccessPointAlreadyExists;
(function (AccessPointAlreadyExists) {
    /**
     * @internal
     */
    AccessPointAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPointAlreadyExists = exports.AccessPointAlreadyExists || (exports.AccessPointAlreadyExists = {}));
var LifeCycleState;
(function (LifeCycleState) {
    LifeCycleState["AVAILABLE"] = "available";
    LifeCycleState["CREATING"] = "creating";
    LifeCycleState["DELETED"] = "deleted";
    LifeCycleState["DELETING"] = "deleting";
    LifeCycleState["ERROR"] = "error";
    LifeCycleState["UPDATING"] = "updating";
})(LifeCycleState = exports.LifeCycleState || (exports.LifeCycleState = {}));
var PosixUser;
(function (PosixUser) {
    /**
     * @internal
     */
    PosixUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PosixUser = exports.PosixUser || (exports.PosixUser = {}));
var CreationInfo;
(function (CreationInfo) {
    /**
     * @internal
     */
    CreationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreationInfo = exports.CreationInfo || (exports.CreationInfo = {}));
var RootDirectory;
(function (RootDirectory) {
    /**
     * @internal
     */
    RootDirectory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RootDirectory = exports.RootDirectory || (exports.RootDirectory = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AccessPointDescription;
(function (AccessPointDescription) {
    /**
     * @internal
     */
    AccessPointDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPointDescription = exports.AccessPointDescription || (exports.AccessPointDescription = {}));
var AccessPointLimitExceeded;
(function (AccessPointLimitExceeded) {
    /**
     * @internal
     */
    AccessPointLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPointLimitExceeded = exports.AccessPointLimitExceeded || (exports.AccessPointLimitExceeded = {}));
var AccessPointNotFound;
(function (AccessPointNotFound) {
    /**
     * @internal
     */
    AccessPointNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPointNotFound = exports.AccessPointNotFound || (exports.AccessPointNotFound = {}));
var AvailabilityZonesMismatch;
(function (AvailabilityZonesMismatch) {
    /**
     * @internal
     */
    AvailabilityZonesMismatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZonesMismatch = exports.AvailabilityZonesMismatch || (exports.AvailabilityZonesMismatch = {}));
var Status;
(function (Status) {
    Status["DISABLED"] = "DISABLED";
    Status["DISABLING"] = "DISABLING";
    Status["ENABLED"] = "ENABLED";
    Status["ENABLING"] = "ENABLING";
})(Status = exports.Status || (exports.Status = {}));
var BackupPolicy;
(function (BackupPolicy) {
    /**
     * @internal
     */
    BackupPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupPolicy = exports.BackupPolicy || (exports.BackupPolicy = {}));
var BackupPolicyDescription;
(function (BackupPolicyDescription) {
    /**
     * @internal
     */
    BackupPolicyDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupPolicyDescription = exports.BackupPolicyDescription || (exports.BackupPolicyDescription = {}));
var BadRequest;
(function (BadRequest) {
    /**
     * @internal
     */
    BadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequest = exports.BadRequest || (exports.BadRequest = {}));
var CreateAccessPointRequest;
(function (CreateAccessPointRequest) {
    /**
     * @internal
     */
    CreateAccessPointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessPointRequest = exports.CreateAccessPointRequest || (exports.CreateAccessPointRequest = {}));
var FileSystemNotFound;
(function (FileSystemNotFound) {
    /**
     * @internal
     */
    FileSystemNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemNotFound = exports.FileSystemNotFound || (exports.FileSystemNotFound = {}));
var IncorrectFileSystemLifeCycleState;
(function (IncorrectFileSystemLifeCycleState) {
    /**
     * @internal
     */
    IncorrectFileSystemLifeCycleState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncorrectFileSystemLifeCycleState = exports.IncorrectFileSystemLifeCycleState || (exports.IncorrectFileSystemLifeCycleState = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var PerformanceMode;
(function (PerformanceMode) {
    PerformanceMode["GENERAL_PURPOSE"] = "generalPurpose";
    PerformanceMode["MAX_IO"] = "maxIO";
})(PerformanceMode = exports.PerformanceMode || (exports.PerformanceMode = {}));
var ThroughputMode;
(function (ThroughputMode) {
    ThroughputMode["BURSTING"] = "bursting";
    ThroughputMode["PROVISIONED"] = "provisioned";
})(ThroughputMode = exports.ThroughputMode || (exports.ThroughputMode = {}));
var CreateFileSystemRequest;
(function (CreateFileSystemRequest) {
    /**
     * @internal
     */
    CreateFileSystemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFileSystemRequest = exports.CreateFileSystemRequest || (exports.CreateFileSystemRequest = {}));
var FileSystemAlreadyExists;
(function (FileSystemAlreadyExists) {
    /**
     * @internal
     */
    FileSystemAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemAlreadyExists = exports.FileSystemAlreadyExists || (exports.FileSystemAlreadyExists = {}));
var FileSystemSize;
(function (FileSystemSize) {
    /**
     * @internal
     */
    FileSystemSize.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemSize = exports.FileSystemSize || (exports.FileSystemSize = {}));
var FileSystemDescription;
(function (FileSystemDescription) {
    /**
     * @internal
     */
    FileSystemDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemDescription = exports.FileSystemDescription || (exports.FileSystemDescription = {}));
var FileSystemLimitExceeded;
(function (FileSystemLimitExceeded) {
    /**
     * @internal
     */
    FileSystemLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemLimitExceeded = exports.FileSystemLimitExceeded || (exports.FileSystemLimitExceeded = {}));
var InsufficientThroughputCapacity;
(function (InsufficientThroughputCapacity) {
    /**
     * @internal
     */
    InsufficientThroughputCapacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientThroughputCapacity = exports.InsufficientThroughputCapacity || (exports.InsufficientThroughputCapacity = {}));
var ThroughputLimitExceeded;
(function (ThroughputLimitExceeded) {
    /**
     * @internal
     */
    ThroughputLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThroughputLimitExceeded = exports.ThroughputLimitExceeded || (exports.ThroughputLimitExceeded = {}));
var UnsupportedAvailabilityZone;
(function (UnsupportedAvailabilityZone) {
    /**
     * @internal
     */
    UnsupportedAvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedAvailabilityZone = exports.UnsupportedAvailabilityZone || (exports.UnsupportedAvailabilityZone = {}));
var CreateMountTargetRequest;
(function (CreateMountTargetRequest) {
    /**
     * @internal
     */
    CreateMountTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMountTargetRequest = exports.CreateMountTargetRequest || (exports.CreateMountTargetRequest = {}));
var IpAddressInUse;
(function (IpAddressInUse) {
    /**
     * @internal
     */
    IpAddressInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpAddressInUse = exports.IpAddressInUse || (exports.IpAddressInUse = {}));
var MountTargetConflict;
(function (MountTargetConflict) {
    /**
     * @internal
     */
    MountTargetConflict.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MountTargetConflict = exports.MountTargetConflict || (exports.MountTargetConflict = {}));
var MountTargetDescription;
(function (MountTargetDescription) {
    /**
     * @internal
     */
    MountTargetDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MountTargetDescription = exports.MountTargetDescription || (exports.MountTargetDescription = {}));
var NetworkInterfaceLimitExceeded;
(function (NetworkInterfaceLimitExceeded) {
    /**
     * @internal
     */
    NetworkInterfaceLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfaceLimitExceeded = exports.NetworkInterfaceLimitExceeded || (exports.NetworkInterfaceLimitExceeded = {}));
var NoFreeAddressesInSubnet;
(function (NoFreeAddressesInSubnet) {
    /**
     * @internal
     */
    NoFreeAddressesInSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoFreeAddressesInSubnet = exports.NoFreeAddressesInSubnet || (exports.NoFreeAddressesInSubnet = {}));
var SecurityGroupLimitExceeded;
(function (SecurityGroupLimitExceeded) {
    /**
     * @internal
     */
    SecurityGroupLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupLimitExceeded = exports.SecurityGroupLimitExceeded || (exports.SecurityGroupLimitExceeded = {}));
var SecurityGroupNotFound;
(function (SecurityGroupNotFound) {
    /**
     * @internal
     */
    SecurityGroupNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupNotFound = exports.SecurityGroupNotFound || (exports.SecurityGroupNotFound = {}));
var SubnetNotFound;
(function (SubnetNotFound) {
    /**
     * @internal
     */
    SubnetNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetNotFound = exports.SubnetNotFound || (exports.SubnetNotFound = {}));
var CreateTagsRequest;
(function (CreateTagsRequest) {
    /**
     * @internal
     */
    CreateTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var DeleteAccessPointRequest;
(function (DeleteAccessPointRequest) {
    /**
     * @internal
     */
    DeleteAccessPointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPointRequest = exports.DeleteAccessPointRequest || (exports.DeleteAccessPointRequest = {}));
var DeleteFileSystemRequest;
(function (DeleteFileSystemRequest) {
    /**
     * @internal
     */
    DeleteFileSystemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemRequest = exports.DeleteFileSystemRequest || (exports.DeleteFileSystemRequest = {}));
var FileSystemInUse;
(function (FileSystemInUse) {
    /**
     * @internal
     */
    FileSystemInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemInUse = exports.FileSystemInUse || (exports.FileSystemInUse = {}));
var DeleteFileSystemPolicyRequest;
(function (DeleteFileSystemPolicyRequest) {
    /**
     * @internal
     */
    DeleteFileSystemPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemPolicyRequest = exports.DeleteFileSystemPolicyRequest || (exports.DeleteFileSystemPolicyRequest = {}));
var DeleteMountTargetRequest;
(function (DeleteMountTargetRequest) {
    /**
     * @internal
     */
    DeleteMountTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMountTargetRequest = exports.DeleteMountTargetRequest || (exports.DeleteMountTargetRequest = {}));
var DependencyTimeout;
(function (DependencyTimeout) {
    /**
     * @internal
     */
    DependencyTimeout.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependencyTimeout = exports.DependencyTimeout || (exports.DependencyTimeout = {}));
var MountTargetNotFound;
(function (MountTargetNotFound) {
    /**
     * @internal
     */
    MountTargetNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MountTargetNotFound = exports.MountTargetNotFound || (exports.MountTargetNotFound = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    /**
     * @internal
     */
    DeleteTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DescribeAccessPointsRequest;
(function (DescribeAccessPointsRequest) {
    /**
     * @internal
     */
    DescribeAccessPointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccessPointsRequest = exports.DescribeAccessPointsRequest || (exports.DescribeAccessPointsRequest = {}));
var DescribeAccessPointsResponse;
(function (DescribeAccessPointsResponse) {
    /**
     * @internal
     */
    DescribeAccessPointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccessPointsResponse = exports.DescribeAccessPointsResponse || (exports.DescribeAccessPointsResponse = {}));
var DescribeAccountPreferencesRequest;
(function (DescribeAccountPreferencesRequest) {
    /**
     * @internal
     */
    DescribeAccountPreferencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountPreferencesRequest = exports.DescribeAccountPreferencesRequest || (exports.DescribeAccountPreferencesRequest = {}));
var ResourceIdType;
(function (ResourceIdType) {
    ResourceIdType["LongId"] = "LONG_ID";
    ResourceIdType["ShortId"] = "SHORT_ID";
})(ResourceIdType = exports.ResourceIdType || (exports.ResourceIdType = {}));
var Resource;
(function (Resource) {
    Resource["FileSystem"] = "FILE_SYSTEM";
    Resource["MountTarget"] = "MOUNT_TARGET";
})(Resource = exports.Resource || (exports.Resource = {}));
var ResourceIdPreference;
(function (ResourceIdPreference) {
    /**
     * @internal
     */
    ResourceIdPreference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceIdPreference = exports.ResourceIdPreference || (exports.ResourceIdPreference = {}));
var DescribeAccountPreferencesResponse;
(function (DescribeAccountPreferencesResponse) {
    /**
     * @internal
     */
    DescribeAccountPreferencesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountPreferencesResponse = exports.DescribeAccountPreferencesResponse || (exports.DescribeAccountPreferencesResponse = {}));
var DescribeBackupPolicyRequest;
(function (DescribeBackupPolicyRequest) {
    /**
     * @internal
     */
    DescribeBackupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupPolicyRequest = exports.DescribeBackupPolicyRequest || (exports.DescribeBackupPolicyRequest = {}));
var PolicyNotFound;
(function (PolicyNotFound) {
    /**
     * @internal
     */
    PolicyNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyNotFound = exports.PolicyNotFound || (exports.PolicyNotFound = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DescribeFileSystemPolicyRequest;
(function (DescribeFileSystemPolicyRequest) {
    /**
     * @internal
     */
    DescribeFileSystemPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemPolicyRequest = exports.DescribeFileSystemPolicyRequest || (exports.DescribeFileSystemPolicyRequest = {}));
var FileSystemPolicyDescription;
(function (FileSystemPolicyDescription) {
    /**
     * @internal
     */
    FileSystemPolicyDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemPolicyDescription = exports.FileSystemPolicyDescription || (exports.FileSystemPolicyDescription = {}));
var DescribeFileSystemsRequest;
(function (DescribeFileSystemsRequest) {
    /**
     * @internal
     */
    DescribeFileSystemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemsRequest = exports.DescribeFileSystemsRequest || (exports.DescribeFileSystemsRequest = {}));
var DescribeFileSystemsResponse;
(function (DescribeFileSystemsResponse) {
    /**
     * @internal
     */
    DescribeFileSystemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemsResponse = exports.DescribeFileSystemsResponse || (exports.DescribeFileSystemsResponse = {}));
var DescribeLifecycleConfigurationRequest;
(function (DescribeLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    DescribeLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLifecycleConfigurationRequest = exports.DescribeLifecycleConfigurationRequest || (exports.DescribeLifecycleConfigurationRequest = {}));
var TransitionToIARules;
(function (TransitionToIARules) {
    TransitionToIARules["AFTER_14_DAYS"] = "AFTER_14_DAYS";
    TransitionToIARules["AFTER_30_DAYS"] = "AFTER_30_DAYS";
    TransitionToIARules["AFTER_60_DAYS"] = "AFTER_60_DAYS";
    TransitionToIARules["AFTER_7_DAYS"] = "AFTER_7_DAYS";
    TransitionToIARules["AFTER_90_DAYS"] = "AFTER_90_DAYS";
})(TransitionToIARules = exports.TransitionToIARules || (exports.TransitionToIARules = {}));
var LifecyclePolicy;
(function (LifecyclePolicy) {
    /**
     * @internal
     */
    LifecyclePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicy = exports.LifecyclePolicy || (exports.LifecyclePolicy = {}));
var LifecycleConfigurationDescription;
(function (LifecycleConfigurationDescription) {
    /**
     * @internal
     */
    LifecycleConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleConfigurationDescription = exports.LifecycleConfigurationDescription || (exports.LifecycleConfigurationDescription = {}));
var DescribeMountTargetsRequest;
(function (DescribeMountTargetsRequest) {
    /**
     * @internal
     */
    DescribeMountTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMountTargetsRequest = exports.DescribeMountTargetsRequest || (exports.DescribeMountTargetsRequest = {}));
var DescribeMountTargetsResponse;
(function (DescribeMountTargetsResponse) {
    /**
     * @internal
     */
    DescribeMountTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMountTargetsResponse = exports.DescribeMountTargetsResponse || (exports.DescribeMountTargetsResponse = {}));
var DescribeMountTargetSecurityGroupsRequest;
(function (DescribeMountTargetSecurityGroupsRequest) {
    /**
     * @internal
     */
    DescribeMountTargetSecurityGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMountTargetSecurityGroupsRequest = exports.DescribeMountTargetSecurityGroupsRequest || (exports.DescribeMountTargetSecurityGroupsRequest = {}));
var DescribeMountTargetSecurityGroupsResponse;
(function (DescribeMountTargetSecurityGroupsResponse) {
    /**
     * @internal
     */
    DescribeMountTargetSecurityGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMountTargetSecurityGroupsResponse = exports.DescribeMountTargetSecurityGroupsResponse || (exports.DescribeMountTargetSecurityGroupsResponse = {}));
var IncorrectMountTargetState;
(function (IncorrectMountTargetState) {
    /**
     * @internal
     */
    IncorrectMountTargetState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncorrectMountTargetState = exports.IncorrectMountTargetState || (exports.IncorrectMountTargetState = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    /**
     * @internal
     */
    DescribeTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var DescribeTagsResponse;
(function (DescribeTagsResponse) {
    /**
     * @internal
     */
    DescribeTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsResponse = exports.DescribeTagsResponse || (exports.DescribeTagsResponse = {}));
var InvalidPolicyException;
(function (InvalidPolicyException) {
    /**
     * @internal
     */
    InvalidPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPolicyException = exports.InvalidPolicyException || (exports.InvalidPolicyException = {}));
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
var ModifyMountTargetSecurityGroupsRequest;
(function (ModifyMountTargetSecurityGroupsRequest) {
    /**
     * @internal
     */
    ModifyMountTargetSecurityGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyMountTargetSecurityGroupsRequest = exports.ModifyMountTargetSecurityGroupsRequest || (exports.ModifyMountTargetSecurityGroupsRequest = {}));
var PutAccountPreferencesRequest;
(function (PutAccountPreferencesRequest) {
    /**
     * @internal
     */
    PutAccountPreferencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountPreferencesRequest = exports.PutAccountPreferencesRequest || (exports.PutAccountPreferencesRequest = {}));
var PutAccountPreferencesResponse;
(function (PutAccountPreferencesResponse) {
    /**
     * @internal
     */
    PutAccountPreferencesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountPreferencesResponse = exports.PutAccountPreferencesResponse || (exports.PutAccountPreferencesResponse = {}));
var PutBackupPolicyRequest;
(function (PutBackupPolicyRequest) {
    /**
     * @internal
     */
    PutBackupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBackupPolicyRequest = exports.PutBackupPolicyRequest || (exports.PutBackupPolicyRequest = {}));
var PutFileSystemPolicyRequest;
(function (PutFileSystemPolicyRequest) {
    /**
     * @internal
     */
    PutFileSystemPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFileSystemPolicyRequest = exports.PutFileSystemPolicyRequest || (exports.PutFileSystemPolicyRequest = {}));
var PutLifecycleConfigurationRequest;
(function (PutLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    PutLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecycleConfigurationRequest = exports.PutLifecycleConfigurationRequest || (exports.PutLifecycleConfigurationRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var TooManyRequests;
(function (TooManyRequests) {
    /**
     * @internal
     */
    TooManyRequests.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequests = exports.TooManyRequests || (exports.TooManyRequests = {}));
var UpdateFileSystemRequest;
(function (UpdateFileSystemRequest) {
    /**
     * @internal
     */
    UpdateFileSystemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFileSystemRequest = exports.UpdateFileSystemRequest || (exports.UpdateFileSystemRequest = {}));
//# sourceMappingURL=models_0.js.map