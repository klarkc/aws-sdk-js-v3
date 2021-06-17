import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var ActiveDirectoryBackupAttributes;
(function (ActiveDirectoryBackupAttributes) {
    /**
     * @internal
     */
    ActiveDirectoryBackupAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveDirectoryBackupAttributes || (ActiveDirectoryBackupAttributes = {}));
export var ActiveDirectoryErrorType;
(function (ActiveDirectoryErrorType) {
    ActiveDirectoryErrorType["DOMAIN_NOT_FOUND"] = "DOMAIN_NOT_FOUND";
    ActiveDirectoryErrorType["INCOMPATIBLE_DOMAIN_MODE"] = "INCOMPATIBLE_DOMAIN_MODE";
    ActiveDirectoryErrorType["INVALID_DOMAIN_STAGE"] = "INVALID_DOMAIN_STAGE";
    ActiveDirectoryErrorType["WRONG_VPC"] = "WRONG_VPC";
})(ActiveDirectoryErrorType || (ActiveDirectoryErrorType = {}));
export var ActiveDirectoryError;
(function (ActiveDirectoryError) {
    /**
     * @internal
     */
    ActiveDirectoryError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveDirectoryError || (ActiveDirectoryError = {}));
export var AdministrativeActionType;
(function (AdministrativeActionType) {
    AdministrativeActionType["FILE_SYSTEM_ALIAS_ASSOCIATION"] = "FILE_SYSTEM_ALIAS_ASSOCIATION";
    AdministrativeActionType["FILE_SYSTEM_ALIAS_DISASSOCIATION"] = "FILE_SYSTEM_ALIAS_DISASSOCIATION";
    AdministrativeActionType["FILE_SYSTEM_UPDATE"] = "FILE_SYSTEM_UPDATE";
    AdministrativeActionType["STORAGE_OPTIMIZATION"] = "STORAGE_OPTIMIZATION";
})(AdministrativeActionType || (AdministrativeActionType = {}));
export var AdministrativeActionFailureDetails;
(function (AdministrativeActionFailureDetails) {
    /**
     * @internal
     */
    AdministrativeActionFailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdministrativeActionFailureDetails || (AdministrativeActionFailureDetails = {}));
export var Status;
(function (Status) {
    Status["COMPLETED"] = "COMPLETED";
    Status["FAILED"] = "FAILED";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["PENDING"] = "PENDING";
    Status["UPDATED_OPTIMIZING"] = "UPDATED_OPTIMIZING";
})(Status || (Status = {}));
export var FileSystemFailureDetails;
(function (FileSystemFailureDetails) {
    /**
     * @internal
     */
    FileSystemFailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystemFailureDetails || (FileSystemFailureDetails = {}));
export var FileSystemType;
(function (FileSystemType) {
    FileSystemType["LUSTRE"] = "LUSTRE";
    FileSystemType["WINDOWS"] = "WINDOWS";
})(FileSystemType || (FileSystemType = {}));
export var FileSystemLifecycle;
(function (FileSystemLifecycle) {
    FileSystemLifecycle["AVAILABLE"] = "AVAILABLE";
    FileSystemLifecycle["CREATING"] = "CREATING";
    FileSystemLifecycle["DELETING"] = "DELETING";
    FileSystemLifecycle["FAILED"] = "FAILED";
    FileSystemLifecycle["MISCONFIGURED"] = "MISCONFIGURED";
    FileSystemLifecycle["UPDATING"] = "UPDATING";
})(FileSystemLifecycle || (FileSystemLifecycle = {}));
export var DataCompressionType;
(function (DataCompressionType) {
    DataCompressionType["LZ4"] = "LZ4";
    DataCompressionType["NONE"] = "NONE";
})(DataCompressionType || (DataCompressionType = {}));
export var AutoImportPolicyType;
(function (AutoImportPolicyType) {
    AutoImportPolicyType["NEW"] = "NEW";
    AutoImportPolicyType["NEW_CHANGED"] = "NEW_CHANGED";
    AutoImportPolicyType["NONE"] = "NONE";
})(AutoImportPolicyType || (AutoImportPolicyType = {}));
export var DataRepositoryFailureDetails;
(function (DataRepositoryFailureDetails) {
    /**
     * @internal
     */
    DataRepositoryFailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryFailureDetails || (DataRepositoryFailureDetails = {}));
export var DataRepositoryLifecycle;
(function (DataRepositoryLifecycle) {
    DataRepositoryLifecycle["AVAILABLE"] = "AVAILABLE";
    DataRepositoryLifecycle["CREATING"] = "CREATING";
    DataRepositoryLifecycle["DELETING"] = "DELETING";
    DataRepositoryLifecycle["MISCONFIGURED"] = "MISCONFIGURED";
    DataRepositoryLifecycle["UPDATING"] = "UPDATING";
})(DataRepositoryLifecycle || (DataRepositoryLifecycle = {}));
export var DataRepositoryConfiguration;
(function (DataRepositoryConfiguration) {
    /**
     * @internal
     */
    DataRepositoryConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryConfiguration || (DataRepositoryConfiguration = {}));
export var LustreDeploymentType;
(function (LustreDeploymentType) {
    LustreDeploymentType["PERSISTENT_1"] = "PERSISTENT_1";
    LustreDeploymentType["SCRATCH_1"] = "SCRATCH_1";
    LustreDeploymentType["SCRATCH_2"] = "SCRATCH_2";
})(LustreDeploymentType || (LustreDeploymentType = {}));
export var DriveCacheType;
(function (DriveCacheType) {
    DriveCacheType["NONE"] = "NONE";
    DriveCacheType["READ"] = "READ";
})(DriveCacheType || (DriveCacheType = {}));
export var LustreFileSystemConfiguration;
(function (LustreFileSystemConfiguration) {
    /**
     * @internal
     */
    LustreFileSystemConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LustreFileSystemConfiguration || (LustreFileSystemConfiguration = {}));
export var StorageType;
(function (StorageType) {
    StorageType["HDD"] = "HDD";
    StorageType["SSD"] = "SSD";
})(StorageType || (StorageType = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AliasLifecycle;
(function (AliasLifecycle) {
    AliasLifecycle["AVAILABLE"] = "AVAILABLE";
    AliasLifecycle["CREATE_FAILED"] = "CREATE_FAILED";
    AliasLifecycle["CREATING"] = "CREATING";
    AliasLifecycle["DELETE_FAILED"] = "DELETE_FAILED";
    AliasLifecycle["DELETING"] = "DELETING";
})(AliasLifecycle || (AliasLifecycle = {}));
export var Alias;
(function (Alias) {
    /**
     * @internal
     */
    Alias.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alias || (Alias = {}));
export var WindowsDeploymentType;
(function (WindowsDeploymentType) {
    WindowsDeploymentType["MULTI_AZ_1"] = "MULTI_AZ_1";
    WindowsDeploymentType["SINGLE_AZ_1"] = "SINGLE_AZ_1";
    WindowsDeploymentType["SINGLE_AZ_2"] = "SINGLE_AZ_2";
})(WindowsDeploymentType || (WindowsDeploymentType = {}));
export var FileSystemMaintenanceOperation;
(function (FileSystemMaintenanceOperation) {
    FileSystemMaintenanceOperation["BACKING_UP"] = "BACKING_UP";
    FileSystemMaintenanceOperation["PATCHING"] = "PATCHING";
})(FileSystemMaintenanceOperation || (FileSystemMaintenanceOperation = {}));
export var SelfManagedActiveDirectoryAttributes;
(function (SelfManagedActiveDirectoryAttributes) {
    /**
     * @internal
     */
    SelfManagedActiveDirectoryAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SelfManagedActiveDirectoryAttributes || (SelfManagedActiveDirectoryAttributes = {}));
export var WindowsFileSystemConfiguration;
(function (WindowsFileSystemConfiguration) {
    /**
     * @internal
     */
    WindowsFileSystemConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WindowsFileSystemConfiguration || (WindowsFileSystemConfiguration = {}));
export var AssociateFileSystemAliasesRequest;
(function (AssociateFileSystemAliasesRequest) {
    /**
     * @internal
     */
    AssociateFileSystemAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateFileSystemAliasesRequest || (AssociateFileSystemAliasesRequest = {}));
export var AssociateFileSystemAliasesResponse;
(function (AssociateFileSystemAliasesResponse) {
    /**
     * @internal
     */
    AssociateFileSystemAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateFileSystemAliasesResponse || (AssociateFileSystemAliasesResponse = {}));
export var BadRequest;
(function (BadRequest) {
    /**
     * @internal
     */
    BadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequest || (BadRequest = {}));
export var FileSystemNotFound;
(function (FileSystemNotFound) {
    /**
     * @internal
     */
    FileSystemNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystemNotFound || (FileSystemNotFound = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var CancelDataRepositoryTaskRequest;
(function (CancelDataRepositoryTaskRequest) {
    /**
     * @internal
     */
    CancelDataRepositoryTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDataRepositoryTaskRequest || (CancelDataRepositoryTaskRequest = {}));
export var DataRepositoryTaskLifecycle;
(function (DataRepositoryTaskLifecycle) {
    DataRepositoryTaskLifecycle["CANCELED"] = "CANCELED";
    DataRepositoryTaskLifecycle["CANCELING"] = "CANCELING";
    DataRepositoryTaskLifecycle["EXECUTING"] = "EXECUTING";
    DataRepositoryTaskLifecycle["FAILED"] = "FAILED";
    DataRepositoryTaskLifecycle["PENDING"] = "PENDING";
    DataRepositoryTaskLifecycle["SUCCEEDED"] = "SUCCEEDED";
})(DataRepositoryTaskLifecycle || (DataRepositoryTaskLifecycle = {}));
export var CancelDataRepositoryTaskResponse;
(function (CancelDataRepositoryTaskResponse) {
    /**
     * @internal
     */
    CancelDataRepositoryTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDataRepositoryTaskResponse || (CancelDataRepositoryTaskResponse = {}));
export var DataRepositoryTaskEnded;
(function (DataRepositoryTaskEnded) {
    /**
     * @internal
     */
    DataRepositoryTaskEnded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTaskEnded || (DataRepositoryTaskEnded = {}));
export var DataRepositoryTaskNotFound;
(function (DataRepositoryTaskNotFound) {
    /**
     * @internal
     */
    DataRepositoryTaskNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTaskNotFound || (DataRepositoryTaskNotFound = {}));
export var UnsupportedOperation;
(function (UnsupportedOperation) {
    /**
     * @internal
     */
    UnsupportedOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedOperation || (UnsupportedOperation = {}));
export var BackupNotFound;
(function (BackupNotFound) {
    /**
     * @internal
     */
    BackupNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackupNotFound || (BackupNotFound = {}));
export var CopyBackupRequest;
(function (CopyBackupRequest) {
    /**
     * @internal
     */
    CopyBackupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyBackupRequest || (CopyBackupRequest = {}));
export var BackupFailureDetails;
(function (BackupFailureDetails) {
    /**
     * @internal
     */
    BackupFailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackupFailureDetails || (BackupFailureDetails = {}));
export var BackupLifecycle;
(function (BackupLifecycle) {
    BackupLifecycle["AVAILABLE"] = "AVAILABLE";
    BackupLifecycle["COPYING"] = "COPYING";
    BackupLifecycle["CREATING"] = "CREATING";
    BackupLifecycle["DELETED"] = "DELETED";
    BackupLifecycle["FAILED"] = "FAILED";
    BackupLifecycle["PENDING"] = "PENDING";
    BackupLifecycle["TRANSFERRING"] = "TRANSFERRING";
})(BackupLifecycle || (BackupLifecycle = {}));
export var BackupType;
(function (BackupType) {
    BackupType["AUTOMATIC"] = "AUTOMATIC";
    BackupType["AWS_BACKUP"] = "AWS_BACKUP";
    BackupType["USER_INITIATED"] = "USER_INITIATED";
})(BackupType || (BackupType = {}));
export var IncompatibleParameterError;
(function (IncompatibleParameterError) {
    /**
     * @internal
     */
    IncompatibleParameterError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncompatibleParameterError || (IncompatibleParameterError = {}));
export var IncompatibleRegionForMultiAZ;
(function (IncompatibleRegionForMultiAZ) {
    /**
     * @internal
     */
    IncompatibleRegionForMultiAZ.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncompatibleRegionForMultiAZ || (IncompatibleRegionForMultiAZ = {}));
export var InvalidDestinationKmsKey;
(function (InvalidDestinationKmsKey) {
    /**
     * @internal
     */
    InvalidDestinationKmsKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDestinationKmsKey || (InvalidDestinationKmsKey = {}));
export var InvalidRegion;
(function (InvalidRegion) {
    /**
     * @internal
     */
    InvalidRegion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRegion || (InvalidRegion = {}));
export var InvalidSourceKmsKey;
(function (InvalidSourceKmsKey) {
    /**
     * @internal
     */
    InvalidSourceKmsKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSourceKmsKey || (InvalidSourceKmsKey = {}));
export var ServiceLimit;
(function (ServiceLimit) {
    ServiceLimit["FILE_SYSTEM_COUNT"] = "FILE_SYSTEM_COUNT";
    ServiceLimit["TOTAL_IN_PROGRESS_COPY_BACKUPS"] = "TOTAL_IN_PROGRESS_COPY_BACKUPS";
    ServiceLimit["TOTAL_STORAGE"] = "TOTAL_STORAGE";
    ServiceLimit["TOTAL_THROUGHPUT_CAPACITY"] = "TOTAL_THROUGHPUT_CAPACITY";
    ServiceLimit["TOTAL_USER_INITIATED_BACKUPS"] = "TOTAL_USER_INITIATED_BACKUPS";
    ServiceLimit["TOTAL_USER_TAGS"] = "TOTAL_USER_TAGS";
})(ServiceLimit || (ServiceLimit = {}));
export var ServiceLimitExceeded;
(function (ServiceLimitExceeded) {
    /**
     * @internal
     */
    ServiceLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceLimitExceeded || (ServiceLimitExceeded = {}));
export var SourceBackupUnavailable;
(function (SourceBackupUnavailable) {
    /**
     * @internal
     */
    SourceBackupUnavailable.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceBackupUnavailable || (SourceBackupUnavailable = {}));
export var BackupInProgress;
(function (BackupInProgress) {
    /**
     * @internal
     */
    BackupInProgress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackupInProgress || (BackupInProgress = {}));
export var CreateBackupRequest;
(function (CreateBackupRequest) {
    /**
     * @internal
     */
    CreateBackupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBackupRequest || (CreateBackupRequest = {}));
export var ReportFormat;
(function (ReportFormat) {
    ReportFormat["REPORT_CSV_20191124"] = "REPORT_CSV_20191124";
})(ReportFormat || (ReportFormat = {}));
export var ReportScope;
(function (ReportScope) {
    ReportScope["FAILED_FILES_ONLY"] = "FAILED_FILES_ONLY";
})(ReportScope || (ReportScope = {}));
export var CompletionReport;
(function (CompletionReport) {
    /**
     * @internal
     */
    CompletionReport.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompletionReport || (CompletionReport = {}));
export var DataRepositoryTaskType;
(function (DataRepositoryTaskType) {
    DataRepositoryTaskType["EXPORT"] = "EXPORT_TO_REPOSITORY";
})(DataRepositoryTaskType || (DataRepositoryTaskType = {}));
export var CreateDataRepositoryTaskRequest;
(function (CreateDataRepositoryTaskRequest) {
    /**
     * @internal
     */
    CreateDataRepositoryTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataRepositoryTaskRequest || (CreateDataRepositoryTaskRequest = {}));
export var DataRepositoryTaskFailureDetails;
(function (DataRepositoryTaskFailureDetails) {
    /**
     * @internal
     */
    DataRepositoryTaskFailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTaskFailureDetails || (DataRepositoryTaskFailureDetails = {}));
export var DataRepositoryTaskStatus;
(function (DataRepositoryTaskStatus) {
    /**
     * @internal
     */
    DataRepositoryTaskStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTaskStatus || (DataRepositoryTaskStatus = {}));
export var DataRepositoryTask;
(function (DataRepositoryTask) {
    /**
     * @internal
     */
    DataRepositoryTask.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTask || (DataRepositoryTask = {}));
export var CreateDataRepositoryTaskResponse;
(function (CreateDataRepositoryTaskResponse) {
    /**
     * @internal
     */
    CreateDataRepositoryTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataRepositoryTaskResponse || (CreateDataRepositoryTaskResponse = {}));
export var DataRepositoryTaskExecuting;
(function (DataRepositoryTaskExecuting) {
    /**
     * @internal
     */
    DataRepositoryTaskExecuting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTaskExecuting || (DataRepositoryTaskExecuting = {}));
export var CreateFileSystemLustreConfiguration;
(function (CreateFileSystemLustreConfiguration) {
    /**
     * @internal
     */
    CreateFileSystemLustreConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFileSystemLustreConfiguration || (CreateFileSystemLustreConfiguration = {}));
export var SelfManagedActiveDirectoryConfiguration;
(function (SelfManagedActiveDirectoryConfiguration) {
    /**
     * @internal
     */
    SelfManagedActiveDirectoryConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(SelfManagedActiveDirectoryConfiguration || (SelfManagedActiveDirectoryConfiguration = {}));
export var CreateFileSystemWindowsConfiguration;
(function (CreateFileSystemWindowsConfiguration) {
    /**
     * @internal
     */
    CreateFileSystemWindowsConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SelfManagedActiveDirectoryConfiguration && {
        SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration.filterSensitiveLog(obj.SelfManagedActiveDirectoryConfiguration),
    }))); };
})(CreateFileSystemWindowsConfiguration || (CreateFileSystemWindowsConfiguration = {}));
export var CreateFileSystemRequest;
(function (CreateFileSystemRequest) {
    /**
     * @internal
     */
    CreateFileSystemRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.WindowsConfiguration && {
        WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }))); };
})(CreateFileSystemRequest || (CreateFileSystemRequest = {}));
export var InvalidExportPath;
(function (InvalidExportPath) {
    /**
     * @internal
     */
    InvalidExportPath.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidExportPath || (InvalidExportPath = {}));
export var InvalidImportPath;
(function (InvalidImportPath) {
    /**
     * @internal
     */
    InvalidImportPath.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidImportPath || (InvalidImportPath = {}));
export var InvalidNetworkSettings;
(function (InvalidNetworkSettings) {
    /**
     * @internal
     */
    InvalidNetworkSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNetworkSettings || (InvalidNetworkSettings = {}));
export var InvalidPerUnitStorageThroughput;
(function (InvalidPerUnitStorageThroughput) {
    /**
     * @internal
     */
    InvalidPerUnitStorageThroughput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPerUnitStorageThroughput || (InvalidPerUnitStorageThroughput = {}));
export var MissingFileSystemConfiguration;
(function (MissingFileSystemConfiguration) {
    /**
     * @internal
     */
    MissingFileSystemConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MissingFileSystemConfiguration || (MissingFileSystemConfiguration = {}));
export var CreateFileSystemFromBackupRequest;
(function (CreateFileSystemFromBackupRequest) {
    /**
     * @internal
     */
    CreateFileSystemFromBackupRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.WindowsConfiguration && {
        WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }))); };
})(CreateFileSystemFromBackupRequest || (CreateFileSystemFromBackupRequest = {}));
export var BackupBeingCopied;
(function (BackupBeingCopied) {
    /**
     * @internal
     */
    BackupBeingCopied.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackupBeingCopied || (BackupBeingCopied = {}));
export var BackupRestoring;
(function (BackupRestoring) {
    /**
     * @internal
     */
    BackupRestoring.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackupRestoring || (BackupRestoring = {}));
export var DeleteBackupRequest;
(function (DeleteBackupRequest) {
    /**
     * @internal
     */
    DeleteBackupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBackupRequest || (DeleteBackupRequest = {}));
export var DeleteBackupResponse;
(function (DeleteBackupResponse) {
    /**
     * @internal
     */
    DeleteBackupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBackupResponse || (DeleteBackupResponse = {}));
export var DeleteFileSystemLustreConfiguration;
(function (DeleteFileSystemLustreConfiguration) {
    /**
     * @internal
     */
    DeleteFileSystemLustreConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileSystemLustreConfiguration || (DeleteFileSystemLustreConfiguration = {}));
export var DeleteFileSystemWindowsConfiguration;
(function (DeleteFileSystemWindowsConfiguration) {
    /**
     * @internal
     */
    DeleteFileSystemWindowsConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileSystemWindowsConfiguration || (DeleteFileSystemWindowsConfiguration = {}));
export var DeleteFileSystemRequest;
(function (DeleteFileSystemRequest) {
    /**
     * @internal
     */
    DeleteFileSystemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileSystemRequest || (DeleteFileSystemRequest = {}));
export var DeleteFileSystemLustreResponse;
(function (DeleteFileSystemLustreResponse) {
    /**
     * @internal
     */
    DeleteFileSystemLustreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileSystemLustreResponse || (DeleteFileSystemLustreResponse = {}));
export var DeleteFileSystemWindowsResponse;
(function (DeleteFileSystemWindowsResponse) {
    /**
     * @internal
     */
    DeleteFileSystemWindowsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileSystemWindowsResponse || (DeleteFileSystemWindowsResponse = {}));
export var DeleteFileSystemResponse;
(function (DeleteFileSystemResponse) {
    /**
     * @internal
     */
    DeleteFileSystemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileSystemResponse || (DeleteFileSystemResponse = {}));
export var FilterName;
(function (FilterName) {
    FilterName["BACKUP_TYPE"] = "backup-type";
    FilterName["FILE_SYSTEM_ID"] = "file-system-id";
    FilterName["FILE_SYSTEM_TYPE"] = "file-system-type";
})(FilterName || (FilterName = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
    /**
     * @internal
     */
    DescribeBackupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBackupsRequest || (DescribeBackupsRequest = {}));
export var DataRepositoryTaskFilterName;
(function (DataRepositoryTaskFilterName) {
    DataRepositoryTaskFilterName["FILE_SYSTEM_ID"] = "file-system-id";
    DataRepositoryTaskFilterName["TASK_LIFECYCLE"] = "task-lifecycle";
})(DataRepositoryTaskFilterName || (DataRepositoryTaskFilterName = {}));
export var DataRepositoryTaskFilter;
(function (DataRepositoryTaskFilter) {
    /**
     * @internal
     */
    DataRepositoryTaskFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataRepositoryTaskFilter || (DataRepositoryTaskFilter = {}));
export var DescribeDataRepositoryTasksRequest;
(function (DescribeDataRepositoryTasksRequest) {
    /**
     * @internal
     */
    DescribeDataRepositoryTasksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataRepositoryTasksRequest || (DescribeDataRepositoryTasksRequest = {}));
export var DescribeDataRepositoryTasksResponse;
(function (DescribeDataRepositoryTasksResponse) {
    /**
     * @internal
     */
    DescribeDataRepositoryTasksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataRepositoryTasksResponse || (DescribeDataRepositoryTasksResponse = {}));
export var DescribeFileSystemAliasesRequest;
(function (DescribeFileSystemAliasesRequest) {
    /**
     * @internal
     */
    DescribeFileSystemAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFileSystemAliasesRequest || (DescribeFileSystemAliasesRequest = {}));
export var DescribeFileSystemAliasesResponse;
(function (DescribeFileSystemAliasesResponse) {
    /**
     * @internal
     */
    DescribeFileSystemAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFileSystemAliasesResponse || (DescribeFileSystemAliasesResponse = {}));
export var DescribeFileSystemsRequest;
(function (DescribeFileSystemsRequest) {
    /**
     * @internal
     */
    DescribeFileSystemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFileSystemsRequest || (DescribeFileSystemsRequest = {}));
export var DisassociateFileSystemAliasesRequest;
(function (DisassociateFileSystemAliasesRequest) {
    /**
     * @internal
     */
    DisassociateFileSystemAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFileSystemAliasesRequest || (DisassociateFileSystemAliasesRequest = {}));
export var DisassociateFileSystemAliasesResponse;
(function (DisassociateFileSystemAliasesResponse) {
    /**
     * @internal
     */
    DisassociateFileSystemAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFileSystemAliasesResponse || (DisassociateFileSystemAliasesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var NotServiceResourceError;
(function (NotServiceResourceError) {
    /**
     * @internal
     */
    NotServiceResourceError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotServiceResourceError || (NotServiceResourceError = {}));
export var ResourceDoesNotSupportTagging;
(function (ResourceDoesNotSupportTagging) {
    /**
     * @internal
     */
    ResourceDoesNotSupportTagging.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDoesNotSupportTagging || (ResourceDoesNotSupportTagging = {}));
export var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFound || (ResourceNotFound = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateFileSystemLustreConfiguration;
(function (UpdateFileSystemLustreConfiguration) {
    /**
     * @internal
     */
    UpdateFileSystemLustreConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFileSystemLustreConfiguration || (UpdateFileSystemLustreConfiguration = {}));
export var SelfManagedActiveDirectoryConfigurationUpdates;
(function (SelfManagedActiveDirectoryConfigurationUpdates) {
    /**
     * @internal
     */
    SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(SelfManagedActiveDirectoryConfigurationUpdates || (SelfManagedActiveDirectoryConfigurationUpdates = {}));
export var UpdateFileSystemWindowsConfiguration;
(function (UpdateFileSystemWindowsConfiguration) {
    /**
     * @internal
     */
    UpdateFileSystemWindowsConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SelfManagedActiveDirectoryConfiguration && {
        SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog(obj.SelfManagedActiveDirectoryConfiguration),
    }))); };
})(UpdateFileSystemWindowsConfiguration || (UpdateFileSystemWindowsConfiguration = {}));
export var UpdateFileSystemRequest;
(function (UpdateFileSystemRequest) {
    /**
     * @internal
     */
    UpdateFileSystemRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.WindowsConfiguration && {
        WindowsConfiguration: UpdateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }))); };
})(UpdateFileSystemRequest || (UpdateFileSystemRequest = {}));
export var AdministrativeAction;
(function (AdministrativeAction) {
    /**
     * @internal
     */
    AdministrativeAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdministrativeAction || (AdministrativeAction = {}));
export var FileSystem;
(function (FileSystem) {
    /**
     * @internal
     */
    FileSystem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystem || (FileSystem = {}));
export var Backup;
(function (Backup) {
    /**
     * @internal
     */
    Backup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Backup || (Backup = {}));
export var CreateFileSystemFromBackupResponse;
(function (CreateFileSystemFromBackupResponse) {
    /**
     * @internal
     */
    CreateFileSystemFromBackupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFileSystemFromBackupResponse || (CreateFileSystemFromBackupResponse = {}));
export var CreateFileSystemResponse;
(function (CreateFileSystemResponse) {
    /**
     * @internal
     */
    CreateFileSystemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFileSystemResponse || (CreateFileSystemResponse = {}));
export var UpdateFileSystemResponse;
(function (UpdateFileSystemResponse) {
    /**
     * @internal
     */
    UpdateFileSystemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFileSystemResponse || (UpdateFileSystemResponse = {}));
export var CopyBackupResponse;
(function (CopyBackupResponse) {
    /**
     * @internal
     */
    CopyBackupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyBackupResponse || (CopyBackupResponse = {}));
export var CreateBackupResponse;
(function (CreateBackupResponse) {
    /**
     * @internal
     */
    CreateBackupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBackupResponse || (CreateBackupResponse = {}));
export var DescribeFileSystemsResponse;
(function (DescribeFileSystemsResponse) {
    /**
     * @internal
     */
    DescribeFileSystemsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFileSystemsResponse || (DescribeFileSystemsResponse = {}));
export var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
    /**
     * @internal
     */
    DescribeBackupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBackupsResponse || (DescribeBackupsResponse = {}));
//# sourceMappingURL=models_0.js.map