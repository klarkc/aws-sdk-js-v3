"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupInProgress = exports.SourceBackupUnavailable = exports.ServiceLimitExceeded = exports.ServiceLimit = exports.InvalidSourceKmsKey = exports.InvalidRegion = exports.InvalidDestinationKmsKey = exports.IncompatibleRegionForMultiAZ = exports.IncompatibleParameterError = exports.BackupType = exports.BackupLifecycle = exports.BackupFailureDetails = exports.CopyBackupRequest = exports.BackupNotFound = exports.UnsupportedOperation = exports.DataRepositoryTaskNotFound = exports.DataRepositoryTaskEnded = exports.CancelDataRepositoryTaskResponse = exports.DataRepositoryTaskLifecycle = exports.CancelDataRepositoryTaskRequest = exports.InternalServerError = exports.FileSystemNotFound = exports.BadRequest = exports.AssociateFileSystemAliasesResponse = exports.AssociateFileSystemAliasesRequest = exports.WindowsFileSystemConfiguration = exports.SelfManagedActiveDirectoryAttributes = exports.FileSystemMaintenanceOperation = exports.WindowsDeploymentType = exports.Alias = exports.AliasLifecycle = exports.Tag = exports.StorageType = exports.LustreFileSystemConfiguration = exports.DriveCacheType = exports.LustreDeploymentType = exports.DataRepositoryConfiguration = exports.DataRepositoryLifecycle = exports.DataRepositoryFailureDetails = exports.AutoImportPolicyType = exports.DataCompressionType = exports.FileSystemLifecycle = exports.FileSystemType = exports.FileSystemFailureDetails = exports.Status = exports.AdministrativeActionFailureDetails = exports.AdministrativeActionType = exports.ActiveDirectoryError = exports.ActiveDirectoryErrorType = exports.ActiveDirectoryBackupAttributes = void 0;
exports.TagResourceResponse = exports.TagResourceRequest = exports.ResourceNotFound = exports.ResourceDoesNotSupportTagging = exports.NotServiceResourceError = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.DisassociateFileSystemAliasesResponse = exports.DisassociateFileSystemAliasesRequest = exports.DescribeFileSystemsRequest = exports.DescribeFileSystemAliasesResponse = exports.DescribeFileSystemAliasesRequest = exports.DescribeDataRepositoryTasksResponse = exports.DescribeDataRepositoryTasksRequest = exports.DataRepositoryTaskFilter = exports.DataRepositoryTaskFilterName = exports.DescribeBackupsRequest = exports.Filter = exports.FilterName = exports.DeleteFileSystemResponse = exports.DeleteFileSystemWindowsResponse = exports.DeleteFileSystemLustreResponse = exports.DeleteFileSystemRequest = exports.DeleteFileSystemWindowsConfiguration = exports.DeleteFileSystemLustreConfiguration = exports.DeleteBackupResponse = exports.DeleteBackupRequest = exports.BackupRestoring = exports.BackupBeingCopied = exports.CreateFileSystemFromBackupRequest = exports.MissingFileSystemConfiguration = exports.InvalidPerUnitStorageThroughput = exports.InvalidNetworkSettings = exports.InvalidImportPath = exports.InvalidExportPath = exports.CreateFileSystemRequest = exports.CreateFileSystemWindowsConfiguration = exports.SelfManagedActiveDirectoryConfiguration = exports.CreateFileSystemLustreConfiguration = exports.DataRepositoryTaskExecuting = exports.CreateDataRepositoryTaskResponse = exports.DataRepositoryTask = exports.DataRepositoryTaskStatus = exports.DataRepositoryTaskFailureDetails = exports.CreateDataRepositoryTaskRequest = exports.DataRepositoryTaskType = exports.CompletionReport = exports.ReportScope = exports.ReportFormat = exports.CreateBackupRequest = void 0;
exports.DescribeBackupsResponse = exports.DescribeFileSystemsResponse = exports.CreateBackupResponse = exports.CopyBackupResponse = exports.UpdateFileSystemResponse = exports.CreateFileSystemResponse = exports.CreateFileSystemFromBackupResponse = exports.Backup = exports.FileSystem = exports.AdministrativeAction = exports.UpdateFileSystemRequest = exports.UpdateFileSystemWindowsConfiguration = exports.SelfManagedActiveDirectoryConfigurationUpdates = exports.UpdateFileSystemLustreConfiguration = exports.UntagResourceResponse = exports.UntagResourceRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActiveDirectoryBackupAttributes;
(function (ActiveDirectoryBackupAttributes) {
    /**
     * @internal
     */
    ActiveDirectoryBackupAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveDirectoryBackupAttributes = exports.ActiveDirectoryBackupAttributes || (exports.ActiveDirectoryBackupAttributes = {}));
var ActiveDirectoryErrorType;
(function (ActiveDirectoryErrorType) {
    ActiveDirectoryErrorType["DOMAIN_NOT_FOUND"] = "DOMAIN_NOT_FOUND";
    ActiveDirectoryErrorType["INCOMPATIBLE_DOMAIN_MODE"] = "INCOMPATIBLE_DOMAIN_MODE";
    ActiveDirectoryErrorType["INVALID_DOMAIN_STAGE"] = "INVALID_DOMAIN_STAGE";
    ActiveDirectoryErrorType["WRONG_VPC"] = "WRONG_VPC";
})(ActiveDirectoryErrorType = exports.ActiveDirectoryErrorType || (exports.ActiveDirectoryErrorType = {}));
var ActiveDirectoryError;
(function (ActiveDirectoryError) {
    /**
     * @internal
     */
    ActiveDirectoryError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveDirectoryError = exports.ActiveDirectoryError || (exports.ActiveDirectoryError = {}));
var AdministrativeActionType;
(function (AdministrativeActionType) {
    AdministrativeActionType["FILE_SYSTEM_ALIAS_ASSOCIATION"] = "FILE_SYSTEM_ALIAS_ASSOCIATION";
    AdministrativeActionType["FILE_SYSTEM_ALIAS_DISASSOCIATION"] = "FILE_SYSTEM_ALIAS_DISASSOCIATION";
    AdministrativeActionType["FILE_SYSTEM_UPDATE"] = "FILE_SYSTEM_UPDATE";
    AdministrativeActionType["STORAGE_OPTIMIZATION"] = "STORAGE_OPTIMIZATION";
})(AdministrativeActionType = exports.AdministrativeActionType || (exports.AdministrativeActionType = {}));
var AdministrativeActionFailureDetails;
(function (AdministrativeActionFailureDetails) {
    /**
     * @internal
     */
    AdministrativeActionFailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdministrativeActionFailureDetails = exports.AdministrativeActionFailureDetails || (exports.AdministrativeActionFailureDetails = {}));
var Status;
(function (Status) {
    Status["COMPLETED"] = "COMPLETED";
    Status["FAILED"] = "FAILED";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["PENDING"] = "PENDING";
    Status["UPDATED_OPTIMIZING"] = "UPDATED_OPTIMIZING";
})(Status = exports.Status || (exports.Status = {}));
var FileSystemFailureDetails;
(function (FileSystemFailureDetails) {
    /**
     * @internal
     */
    FileSystemFailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemFailureDetails = exports.FileSystemFailureDetails || (exports.FileSystemFailureDetails = {}));
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["LUSTRE"] = "LUSTRE";
    FileSystemType["WINDOWS"] = "WINDOWS";
})(FileSystemType = exports.FileSystemType || (exports.FileSystemType = {}));
var FileSystemLifecycle;
(function (FileSystemLifecycle) {
    FileSystemLifecycle["AVAILABLE"] = "AVAILABLE";
    FileSystemLifecycle["CREATING"] = "CREATING";
    FileSystemLifecycle["DELETING"] = "DELETING";
    FileSystemLifecycle["FAILED"] = "FAILED";
    FileSystemLifecycle["MISCONFIGURED"] = "MISCONFIGURED";
    FileSystemLifecycle["UPDATING"] = "UPDATING";
})(FileSystemLifecycle = exports.FileSystemLifecycle || (exports.FileSystemLifecycle = {}));
var DataCompressionType;
(function (DataCompressionType) {
    DataCompressionType["LZ4"] = "LZ4";
    DataCompressionType["NONE"] = "NONE";
})(DataCompressionType = exports.DataCompressionType || (exports.DataCompressionType = {}));
var AutoImportPolicyType;
(function (AutoImportPolicyType) {
    AutoImportPolicyType["NEW"] = "NEW";
    AutoImportPolicyType["NEW_CHANGED"] = "NEW_CHANGED";
    AutoImportPolicyType["NONE"] = "NONE";
})(AutoImportPolicyType = exports.AutoImportPolicyType || (exports.AutoImportPolicyType = {}));
var DataRepositoryFailureDetails;
(function (DataRepositoryFailureDetails) {
    /**
     * @internal
     */
    DataRepositoryFailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryFailureDetails = exports.DataRepositoryFailureDetails || (exports.DataRepositoryFailureDetails = {}));
var DataRepositoryLifecycle;
(function (DataRepositoryLifecycle) {
    DataRepositoryLifecycle["AVAILABLE"] = "AVAILABLE";
    DataRepositoryLifecycle["CREATING"] = "CREATING";
    DataRepositoryLifecycle["DELETING"] = "DELETING";
    DataRepositoryLifecycle["MISCONFIGURED"] = "MISCONFIGURED";
    DataRepositoryLifecycle["UPDATING"] = "UPDATING";
})(DataRepositoryLifecycle = exports.DataRepositoryLifecycle || (exports.DataRepositoryLifecycle = {}));
var DataRepositoryConfiguration;
(function (DataRepositoryConfiguration) {
    /**
     * @internal
     */
    DataRepositoryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryConfiguration = exports.DataRepositoryConfiguration || (exports.DataRepositoryConfiguration = {}));
var LustreDeploymentType;
(function (LustreDeploymentType) {
    LustreDeploymentType["PERSISTENT_1"] = "PERSISTENT_1";
    LustreDeploymentType["SCRATCH_1"] = "SCRATCH_1";
    LustreDeploymentType["SCRATCH_2"] = "SCRATCH_2";
})(LustreDeploymentType = exports.LustreDeploymentType || (exports.LustreDeploymentType = {}));
var DriveCacheType;
(function (DriveCacheType) {
    DriveCacheType["NONE"] = "NONE";
    DriveCacheType["READ"] = "READ";
})(DriveCacheType = exports.DriveCacheType || (exports.DriveCacheType = {}));
var LustreFileSystemConfiguration;
(function (LustreFileSystemConfiguration) {
    /**
     * @internal
     */
    LustreFileSystemConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LustreFileSystemConfiguration = exports.LustreFileSystemConfiguration || (exports.LustreFileSystemConfiguration = {}));
var StorageType;
(function (StorageType) {
    StorageType["HDD"] = "HDD";
    StorageType["SSD"] = "SSD";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AliasLifecycle;
(function (AliasLifecycle) {
    AliasLifecycle["AVAILABLE"] = "AVAILABLE";
    AliasLifecycle["CREATE_FAILED"] = "CREATE_FAILED";
    AliasLifecycle["CREATING"] = "CREATING";
    AliasLifecycle["DELETE_FAILED"] = "DELETE_FAILED";
    AliasLifecycle["DELETING"] = "DELETING";
})(AliasLifecycle = exports.AliasLifecycle || (exports.AliasLifecycle = {}));
var Alias;
(function (Alias) {
    /**
     * @internal
     */
    Alias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alias = exports.Alias || (exports.Alias = {}));
var WindowsDeploymentType;
(function (WindowsDeploymentType) {
    WindowsDeploymentType["MULTI_AZ_1"] = "MULTI_AZ_1";
    WindowsDeploymentType["SINGLE_AZ_1"] = "SINGLE_AZ_1";
    WindowsDeploymentType["SINGLE_AZ_2"] = "SINGLE_AZ_2";
})(WindowsDeploymentType = exports.WindowsDeploymentType || (exports.WindowsDeploymentType = {}));
var FileSystemMaintenanceOperation;
(function (FileSystemMaintenanceOperation) {
    FileSystemMaintenanceOperation["BACKING_UP"] = "BACKING_UP";
    FileSystemMaintenanceOperation["PATCHING"] = "PATCHING";
})(FileSystemMaintenanceOperation = exports.FileSystemMaintenanceOperation || (exports.FileSystemMaintenanceOperation = {}));
var SelfManagedActiveDirectoryAttributes;
(function (SelfManagedActiveDirectoryAttributes) {
    /**
     * @internal
     */
    SelfManagedActiveDirectoryAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelfManagedActiveDirectoryAttributes = exports.SelfManagedActiveDirectoryAttributes || (exports.SelfManagedActiveDirectoryAttributes = {}));
var WindowsFileSystemConfiguration;
(function (WindowsFileSystemConfiguration) {
    /**
     * @internal
     */
    WindowsFileSystemConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WindowsFileSystemConfiguration = exports.WindowsFileSystemConfiguration || (exports.WindowsFileSystemConfiguration = {}));
var AssociateFileSystemAliasesRequest;
(function (AssociateFileSystemAliasesRequest) {
    /**
     * @internal
     */
    AssociateFileSystemAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFileSystemAliasesRequest = exports.AssociateFileSystemAliasesRequest || (exports.AssociateFileSystemAliasesRequest = {}));
var AssociateFileSystemAliasesResponse;
(function (AssociateFileSystemAliasesResponse) {
    /**
     * @internal
     */
    AssociateFileSystemAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFileSystemAliasesResponse = exports.AssociateFileSystemAliasesResponse || (exports.AssociateFileSystemAliasesResponse = {}));
var BadRequest;
(function (BadRequest) {
    /**
     * @internal
     */
    BadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequest = exports.BadRequest || (exports.BadRequest = {}));
var FileSystemNotFound;
(function (FileSystemNotFound) {
    /**
     * @internal
     */
    FileSystemNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemNotFound = exports.FileSystemNotFound || (exports.FileSystemNotFound = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var CancelDataRepositoryTaskRequest;
(function (CancelDataRepositoryTaskRequest) {
    /**
     * @internal
     */
    CancelDataRepositoryTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDataRepositoryTaskRequest = exports.CancelDataRepositoryTaskRequest || (exports.CancelDataRepositoryTaskRequest = {}));
var DataRepositoryTaskLifecycle;
(function (DataRepositoryTaskLifecycle) {
    DataRepositoryTaskLifecycle["CANCELED"] = "CANCELED";
    DataRepositoryTaskLifecycle["CANCELING"] = "CANCELING";
    DataRepositoryTaskLifecycle["EXECUTING"] = "EXECUTING";
    DataRepositoryTaskLifecycle["FAILED"] = "FAILED";
    DataRepositoryTaskLifecycle["PENDING"] = "PENDING";
    DataRepositoryTaskLifecycle["SUCCEEDED"] = "SUCCEEDED";
})(DataRepositoryTaskLifecycle = exports.DataRepositoryTaskLifecycle || (exports.DataRepositoryTaskLifecycle = {}));
var CancelDataRepositoryTaskResponse;
(function (CancelDataRepositoryTaskResponse) {
    /**
     * @internal
     */
    CancelDataRepositoryTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDataRepositoryTaskResponse = exports.CancelDataRepositoryTaskResponse || (exports.CancelDataRepositoryTaskResponse = {}));
var DataRepositoryTaskEnded;
(function (DataRepositoryTaskEnded) {
    /**
     * @internal
     */
    DataRepositoryTaskEnded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTaskEnded = exports.DataRepositoryTaskEnded || (exports.DataRepositoryTaskEnded = {}));
var DataRepositoryTaskNotFound;
(function (DataRepositoryTaskNotFound) {
    /**
     * @internal
     */
    DataRepositoryTaskNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTaskNotFound = exports.DataRepositoryTaskNotFound || (exports.DataRepositoryTaskNotFound = {}));
var UnsupportedOperation;
(function (UnsupportedOperation) {
    /**
     * @internal
     */
    UnsupportedOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperation = exports.UnsupportedOperation || (exports.UnsupportedOperation = {}));
var BackupNotFound;
(function (BackupNotFound) {
    /**
     * @internal
     */
    BackupNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupNotFound = exports.BackupNotFound || (exports.BackupNotFound = {}));
var CopyBackupRequest;
(function (CopyBackupRequest) {
    /**
     * @internal
     */
    CopyBackupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyBackupRequest = exports.CopyBackupRequest || (exports.CopyBackupRequest = {}));
var BackupFailureDetails;
(function (BackupFailureDetails) {
    /**
     * @internal
     */
    BackupFailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupFailureDetails = exports.BackupFailureDetails || (exports.BackupFailureDetails = {}));
var BackupLifecycle;
(function (BackupLifecycle) {
    BackupLifecycle["AVAILABLE"] = "AVAILABLE";
    BackupLifecycle["COPYING"] = "COPYING";
    BackupLifecycle["CREATING"] = "CREATING";
    BackupLifecycle["DELETED"] = "DELETED";
    BackupLifecycle["FAILED"] = "FAILED";
    BackupLifecycle["PENDING"] = "PENDING";
    BackupLifecycle["TRANSFERRING"] = "TRANSFERRING";
})(BackupLifecycle = exports.BackupLifecycle || (exports.BackupLifecycle = {}));
var BackupType;
(function (BackupType) {
    BackupType["AUTOMATIC"] = "AUTOMATIC";
    BackupType["AWS_BACKUP"] = "AWS_BACKUP";
    BackupType["USER_INITIATED"] = "USER_INITIATED";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var IncompatibleParameterError;
(function (IncompatibleParameterError) {
    /**
     * @internal
     */
    IncompatibleParameterError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatibleParameterError = exports.IncompatibleParameterError || (exports.IncompatibleParameterError = {}));
var IncompatibleRegionForMultiAZ;
(function (IncompatibleRegionForMultiAZ) {
    /**
     * @internal
     */
    IncompatibleRegionForMultiAZ.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatibleRegionForMultiAZ = exports.IncompatibleRegionForMultiAZ || (exports.IncompatibleRegionForMultiAZ = {}));
var InvalidDestinationKmsKey;
(function (InvalidDestinationKmsKey) {
    /**
     * @internal
     */
    InvalidDestinationKmsKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDestinationKmsKey = exports.InvalidDestinationKmsKey || (exports.InvalidDestinationKmsKey = {}));
var InvalidRegion;
(function (InvalidRegion) {
    /**
     * @internal
     */
    InvalidRegion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRegion = exports.InvalidRegion || (exports.InvalidRegion = {}));
var InvalidSourceKmsKey;
(function (InvalidSourceKmsKey) {
    /**
     * @internal
     */
    InvalidSourceKmsKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSourceKmsKey = exports.InvalidSourceKmsKey || (exports.InvalidSourceKmsKey = {}));
var ServiceLimit;
(function (ServiceLimit) {
    ServiceLimit["FILE_SYSTEM_COUNT"] = "FILE_SYSTEM_COUNT";
    ServiceLimit["TOTAL_IN_PROGRESS_COPY_BACKUPS"] = "TOTAL_IN_PROGRESS_COPY_BACKUPS";
    ServiceLimit["TOTAL_STORAGE"] = "TOTAL_STORAGE";
    ServiceLimit["TOTAL_THROUGHPUT_CAPACITY"] = "TOTAL_THROUGHPUT_CAPACITY";
    ServiceLimit["TOTAL_USER_INITIATED_BACKUPS"] = "TOTAL_USER_INITIATED_BACKUPS";
    ServiceLimit["TOTAL_USER_TAGS"] = "TOTAL_USER_TAGS";
})(ServiceLimit = exports.ServiceLimit || (exports.ServiceLimit = {}));
var ServiceLimitExceeded;
(function (ServiceLimitExceeded) {
    /**
     * @internal
     */
    ServiceLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLimitExceeded = exports.ServiceLimitExceeded || (exports.ServiceLimitExceeded = {}));
var SourceBackupUnavailable;
(function (SourceBackupUnavailable) {
    /**
     * @internal
     */
    SourceBackupUnavailable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceBackupUnavailable = exports.SourceBackupUnavailable || (exports.SourceBackupUnavailable = {}));
var BackupInProgress;
(function (BackupInProgress) {
    /**
     * @internal
     */
    BackupInProgress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupInProgress = exports.BackupInProgress || (exports.BackupInProgress = {}));
var CreateBackupRequest;
(function (CreateBackupRequest) {
    /**
     * @internal
     */
    CreateBackupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBackupRequest = exports.CreateBackupRequest || (exports.CreateBackupRequest = {}));
var ReportFormat;
(function (ReportFormat) {
    ReportFormat["REPORT_CSV_20191124"] = "REPORT_CSV_20191124";
})(ReportFormat = exports.ReportFormat || (exports.ReportFormat = {}));
var ReportScope;
(function (ReportScope) {
    ReportScope["FAILED_FILES_ONLY"] = "FAILED_FILES_ONLY";
})(ReportScope = exports.ReportScope || (exports.ReportScope = {}));
var CompletionReport;
(function (CompletionReport) {
    /**
     * @internal
     */
    CompletionReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompletionReport = exports.CompletionReport || (exports.CompletionReport = {}));
var DataRepositoryTaskType;
(function (DataRepositoryTaskType) {
    DataRepositoryTaskType["EXPORT"] = "EXPORT_TO_REPOSITORY";
})(DataRepositoryTaskType = exports.DataRepositoryTaskType || (exports.DataRepositoryTaskType = {}));
var CreateDataRepositoryTaskRequest;
(function (CreateDataRepositoryTaskRequest) {
    /**
     * @internal
     */
    CreateDataRepositoryTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataRepositoryTaskRequest = exports.CreateDataRepositoryTaskRequest || (exports.CreateDataRepositoryTaskRequest = {}));
var DataRepositoryTaskFailureDetails;
(function (DataRepositoryTaskFailureDetails) {
    /**
     * @internal
     */
    DataRepositoryTaskFailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTaskFailureDetails = exports.DataRepositoryTaskFailureDetails || (exports.DataRepositoryTaskFailureDetails = {}));
var DataRepositoryTaskStatus;
(function (DataRepositoryTaskStatus) {
    /**
     * @internal
     */
    DataRepositoryTaskStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTaskStatus = exports.DataRepositoryTaskStatus || (exports.DataRepositoryTaskStatus = {}));
var DataRepositoryTask;
(function (DataRepositoryTask) {
    /**
     * @internal
     */
    DataRepositoryTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTask = exports.DataRepositoryTask || (exports.DataRepositoryTask = {}));
var CreateDataRepositoryTaskResponse;
(function (CreateDataRepositoryTaskResponse) {
    /**
     * @internal
     */
    CreateDataRepositoryTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataRepositoryTaskResponse = exports.CreateDataRepositoryTaskResponse || (exports.CreateDataRepositoryTaskResponse = {}));
var DataRepositoryTaskExecuting;
(function (DataRepositoryTaskExecuting) {
    /**
     * @internal
     */
    DataRepositoryTaskExecuting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTaskExecuting = exports.DataRepositoryTaskExecuting || (exports.DataRepositoryTaskExecuting = {}));
var CreateFileSystemLustreConfiguration;
(function (CreateFileSystemLustreConfiguration) {
    /**
     * @internal
     */
    CreateFileSystemLustreConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFileSystemLustreConfiguration = exports.CreateFileSystemLustreConfiguration || (exports.CreateFileSystemLustreConfiguration = {}));
var SelfManagedActiveDirectoryConfiguration;
(function (SelfManagedActiveDirectoryConfiguration) {
    /**
     * @internal
     */
    SelfManagedActiveDirectoryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(SelfManagedActiveDirectoryConfiguration = exports.SelfManagedActiveDirectoryConfiguration || (exports.SelfManagedActiveDirectoryConfiguration = {}));
var CreateFileSystemWindowsConfiguration;
(function (CreateFileSystemWindowsConfiguration) {
    /**
     * @internal
     */
    CreateFileSystemWindowsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SelfManagedActiveDirectoryConfiguration && {
            SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration.filterSensitiveLog(obj.SelfManagedActiveDirectoryConfiguration),
        }),
    });
})(CreateFileSystemWindowsConfiguration = exports.CreateFileSystemWindowsConfiguration || (exports.CreateFileSystemWindowsConfiguration = {}));
var CreateFileSystemRequest;
(function (CreateFileSystemRequest) {
    /**
     * @internal
     */
    CreateFileSystemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WindowsConfiguration && {
            WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
        }),
    });
})(CreateFileSystemRequest = exports.CreateFileSystemRequest || (exports.CreateFileSystemRequest = {}));
var InvalidExportPath;
(function (InvalidExportPath) {
    /**
     * @internal
     */
    InvalidExportPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExportPath = exports.InvalidExportPath || (exports.InvalidExportPath = {}));
var InvalidImportPath;
(function (InvalidImportPath) {
    /**
     * @internal
     */
    InvalidImportPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidImportPath = exports.InvalidImportPath || (exports.InvalidImportPath = {}));
var InvalidNetworkSettings;
(function (InvalidNetworkSettings) {
    /**
     * @internal
     */
    InvalidNetworkSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNetworkSettings = exports.InvalidNetworkSettings || (exports.InvalidNetworkSettings = {}));
var InvalidPerUnitStorageThroughput;
(function (InvalidPerUnitStorageThroughput) {
    /**
     * @internal
     */
    InvalidPerUnitStorageThroughput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPerUnitStorageThroughput = exports.InvalidPerUnitStorageThroughput || (exports.InvalidPerUnitStorageThroughput = {}));
var MissingFileSystemConfiguration;
(function (MissingFileSystemConfiguration) {
    /**
     * @internal
     */
    MissingFileSystemConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingFileSystemConfiguration = exports.MissingFileSystemConfiguration || (exports.MissingFileSystemConfiguration = {}));
var CreateFileSystemFromBackupRequest;
(function (CreateFileSystemFromBackupRequest) {
    /**
     * @internal
     */
    CreateFileSystemFromBackupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WindowsConfiguration && {
            WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
        }),
    });
})(CreateFileSystemFromBackupRequest = exports.CreateFileSystemFromBackupRequest || (exports.CreateFileSystemFromBackupRequest = {}));
var BackupBeingCopied;
(function (BackupBeingCopied) {
    /**
     * @internal
     */
    BackupBeingCopied.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupBeingCopied = exports.BackupBeingCopied || (exports.BackupBeingCopied = {}));
var BackupRestoring;
(function (BackupRestoring) {
    /**
     * @internal
     */
    BackupRestoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupRestoring = exports.BackupRestoring || (exports.BackupRestoring = {}));
var DeleteBackupRequest;
(function (DeleteBackupRequest) {
    /**
     * @internal
     */
    DeleteBackupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBackupRequest = exports.DeleteBackupRequest || (exports.DeleteBackupRequest = {}));
var DeleteBackupResponse;
(function (DeleteBackupResponse) {
    /**
     * @internal
     */
    DeleteBackupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBackupResponse = exports.DeleteBackupResponse || (exports.DeleteBackupResponse = {}));
var DeleteFileSystemLustreConfiguration;
(function (DeleteFileSystemLustreConfiguration) {
    /**
     * @internal
     */
    DeleteFileSystemLustreConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemLustreConfiguration = exports.DeleteFileSystemLustreConfiguration || (exports.DeleteFileSystemLustreConfiguration = {}));
var DeleteFileSystemWindowsConfiguration;
(function (DeleteFileSystemWindowsConfiguration) {
    /**
     * @internal
     */
    DeleteFileSystemWindowsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemWindowsConfiguration = exports.DeleteFileSystemWindowsConfiguration || (exports.DeleteFileSystemWindowsConfiguration = {}));
var DeleteFileSystemRequest;
(function (DeleteFileSystemRequest) {
    /**
     * @internal
     */
    DeleteFileSystemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemRequest = exports.DeleteFileSystemRequest || (exports.DeleteFileSystemRequest = {}));
var DeleteFileSystemLustreResponse;
(function (DeleteFileSystemLustreResponse) {
    /**
     * @internal
     */
    DeleteFileSystemLustreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemLustreResponse = exports.DeleteFileSystemLustreResponse || (exports.DeleteFileSystemLustreResponse = {}));
var DeleteFileSystemWindowsResponse;
(function (DeleteFileSystemWindowsResponse) {
    /**
     * @internal
     */
    DeleteFileSystemWindowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemWindowsResponse = exports.DeleteFileSystemWindowsResponse || (exports.DeleteFileSystemWindowsResponse = {}));
var DeleteFileSystemResponse;
(function (DeleteFileSystemResponse) {
    /**
     * @internal
     */
    DeleteFileSystemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileSystemResponse = exports.DeleteFileSystemResponse || (exports.DeleteFileSystemResponse = {}));
var FilterName;
(function (FilterName) {
    FilterName["BACKUP_TYPE"] = "backup-type";
    FilterName["FILE_SYSTEM_ID"] = "file-system-id";
    FilterName["FILE_SYSTEM_TYPE"] = "file-system-type";
})(FilterName = exports.FilterName || (exports.FilterName = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
    /**
     * @internal
     */
    DescribeBackupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupsRequest = exports.DescribeBackupsRequest || (exports.DescribeBackupsRequest = {}));
var DataRepositoryTaskFilterName;
(function (DataRepositoryTaskFilterName) {
    DataRepositoryTaskFilterName["FILE_SYSTEM_ID"] = "file-system-id";
    DataRepositoryTaskFilterName["TASK_LIFECYCLE"] = "task-lifecycle";
})(DataRepositoryTaskFilterName = exports.DataRepositoryTaskFilterName || (exports.DataRepositoryTaskFilterName = {}));
var DataRepositoryTaskFilter;
(function (DataRepositoryTaskFilter) {
    /**
     * @internal
     */
    DataRepositoryTaskFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRepositoryTaskFilter = exports.DataRepositoryTaskFilter || (exports.DataRepositoryTaskFilter = {}));
var DescribeDataRepositoryTasksRequest;
(function (DescribeDataRepositoryTasksRequest) {
    /**
     * @internal
     */
    DescribeDataRepositoryTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataRepositoryTasksRequest = exports.DescribeDataRepositoryTasksRequest || (exports.DescribeDataRepositoryTasksRequest = {}));
var DescribeDataRepositoryTasksResponse;
(function (DescribeDataRepositoryTasksResponse) {
    /**
     * @internal
     */
    DescribeDataRepositoryTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataRepositoryTasksResponse = exports.DescribeDataRepositoryTasksResponse || (exports.DescribeDataRepositoryTasksResponse = {}));
var DescribeFileSystemAliasesRequest;
(function (DescribeFileSystemAliasesRequest) {
    /**
     * @internal
     */
    DescribeFileSystemAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemAliasesRequest = exports.DescribeFileSystemAliasesRequest || (exports.DescribeFileSystemAliasesRequest = {}));
var DescribeFileSystemAliasesResponse;
(function (DescribeFileSystemAliasesResponse) {
    /**
     * @internal
     */
    DescribeFileSystemAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemAliasesResponse = exports.DescribeFileSystemAliasesResponse || (exports.DescribeFileSystemAliasesResponse = {}));
var DescribeFileSystemsRequest;
(function (DescribeFileSystemsRequest) {
    /**
     * @internal
     */
    DescribeFileSystemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemsRequest = exports.DescribeFileSystemsRequest || (exports.DescribeFileSystemsRequest = {}));
var DisassociateFileSystemAliasesRequest;
(function (DisassociateFileSystemAliasesRequest) {
    /**
     * @internal
     */
    DisassociateFileSystemAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFileSystemAliasesRequest = exports.DisassociateFileSystemAliasesRequest || (exports.DisassociateFileSystemAliasesRequest = {}));
var DisassociateFileSystemAliasesResponse;
(function (DisassociateFileSystemAliasesResponse) {
    /**
     * @internal
     */
    DisassociateFileSystemAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFileSystemAliasesResponse = exports.DisassociateFileSystemAliasesResponse || (exports.DisassociateFileSystemAliasesResponse = {}));
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
var NotServiceResourceError;
(function (NotServiceResourceError) {
    /**
     * @internal
     */
    NotServiceResourceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotServiceResourceError = exports.NotServiceResourceError || (exports.NotServiceResourceError = {}));
var ResourceDoesNotSupportTagging;
(function (ResourceDoesNotSupportTagging) {
    /**
     * @internal
     */
    ResourceDoesNotSupportTagging.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDoesNotSupportTagging = exports.ResourceDoesNotSupportTagging || (exports.ResourceDoesNotSupportTagging = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
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
var UpdateFileSystemLustreConfiguration;
(function (UpdateFileSystemLustreConfiguration) {
    /**
     * @internal
     */
    UpdateFileSystemLustreConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFileSystemLustreConfiguration = exports.UpdateFileSystemLustreConfiguration || (exports.UpdateFileSystemLustreConfiguration = {}));
var SelfManagedActiveDirectoryConfigurationUpdates;
(function (SelfManagedActiveDirectoryConfigurationUpdates) {
    /**
     * @internal
     */
    SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(SelfManagedActiveDirectoryConfigurationUpdates = exports.SelfManagedActiveDirectoryConfigurationUpdates || (exports.SelfManagedActiveDirectoryConfigurationUpdates = {}));
var UpdateFileSystemWindowsConfiguration;
(function (UpdateFileSystemWindowsConfiguration) {
    /**
     * @internal
     */
    UpdateFileSystemWindowsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SelfManagedActiveDirectoryConfiguration && {
            SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog(obj.SelfManagedActiveDirectoryConfiguration),
        }),
    });
})(UpdateFileSystemWindowsConfiguration = exports.UpdateFileSystemWindowsConfiguration || (exports.UpdateFileSystemWindowsConfiguration = {}));
var UpdateFileSystemRequest;
(function (UpdateFileSystemRequest) {
    /**
     * @internal
     */
    UpdateFileSystemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WindowsConfiguration && {
            WindowsConfiguration: UpdateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
        }),
    });
})(UpdateFileSystemRequest = exports.UpdateFileSystemRequest || (exports.UpdateFileSystemRequest = {}));
var AdministrativeAction;
(function (AdministrativeAction) {
    /**
     * @internal
     */
    AdministrativeAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdministrativeAction = exports.AdministrativeAction || (exports.AdministrativeAction = {}));
var FileSystem;
(function (FileSystem) {
    /**
     * @internal
     */
    FileSystem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystem = exports.FileSystem || (exports.FileSystem = {}));
var Backup;
(function (Backup) {
    /**
     * @internal
     */
    Backup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Backup = exports.Backup || (exports.Backup = {}));
var CreateFileSystemFromBackupResponse;
(function (CreateFileSystemFromBackupResponse) {
    /**
     * @internal
     */
    CreateFileSystemFromBackupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFileSystemFromBackupResponse = exports.CreateFileSystemFromBackupResponse || (exports.CreateFileSystemFromBackupResponse = {}));
var CreateFileSystemResponse;
(function (CreateFileSystemResponse) {
    /**
     * @internal
     */
    CreateFileSystemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFileSystemResponse = exports.CreateFileSystemResponse || (exports.CreateFileSystemResponse = {}));
var UpdateFileSystemResponse;
(function (UpdateFileSystemResponse) {
    /**
     * @internal
     */
    UpdateFileSystemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFileSystemResponse = exports.UpdateFileSystemResponse || (exports.UpdateFileSystemResponse = {}));
var CopyBackupResponse;
(function (CopyBackupResponse) {
    /**
     * @internal
     */
    CopyBackupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyBackupResponse = exports.CopyBackupResponse || (exports.CopyBackupResponse = {}));
var CreateBackupResponse;
(function (CreateBackupResponse) {
    /**
     * @internal
     */
    CreateBackupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBackupResponse = exports.CreateBackupResponse || (exports.CreateBackupResponse = {}));
var DescribeFileSystemsResponse;
(function (DescribeFileSystemsResponse) {
    /**
     * @internal
     */
    DescribeFileSystemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemsResponse = exports.DescribeFileSystemsResponse || (exports.DescribeFileSystemsResponse = {}));
var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
    /**
     * @internal
     */
    DescribeBackupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupsResponse = exports.DescribeBackupsResponse || (exports.DescribeBackupsResponse = {}));
//# sourceMappingURL=models_0.js.map