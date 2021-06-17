"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultAccessPolicy = exports.GetVaultAccessPolicyInput = exports.GetJobOutputOutput = exports.GetJobOutputInput = exports.GetDataRetrievalPolicyOutput = exports.GetDataRetrievalPolicyInput = exports.DescribeVaultOutput = exports.DescribeVaultInput = exports.GlacierJobDescription = exports.StatusCode = exports.SelectParameters = exports.OutputSerialization = exports.InputSerialization = exports.ExpressionType = exports.OutputLocation = exports.S3Location = exports.StorageClass = exports.Encryption = exports.EncryptionType = exports.InventoryRetrievalJobDescription = exports.DescribeJobInput = exports.DeleteVaultNotificationsInput = exports.DeleteVaultAccessPolicyInput = exports.DeleteVaultInput = exports.DeleteArchiveInput = exports.DataRetrievalPolicy = exports.DataRetrievalRule = exports.CSVOutput = exports.QuoteFields = exports.CSVInput = exports.FileHeaderInfo = exports.CreateVaultOutput = exports.CreateVaultInput = exports.CompleteVaultLockInput = exports.CompleteMultipartUploadInput = exports.CannedACL = exports.ArchiveCreationOutput = exports.LimitExceededException = exports.AddTagsToVaultInput = exports.ActionCode = exports.Grant = exports.Permission = exports.Grantee = exports.Type = exports.AbortVaultLockInput = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.MissingParameterValueException = exports.InvalidParameterValueException = exports.AbortMultipartUploadInput = void 0;
exports.UploadMultipartPartOutput = exports.UploadMultipartPartInput = exports.UploadArchiveInput = exports.RequestTimeoutException = exports.SetVaultNotificationsInput = exports.SetVaultAccessPolicyInput = exports.SetDataRetrievalPolicyInput = exports.RemoveTagsFromVaultInput = exports.PurchaseProvisionedCapacityOutput = exports.PurchaseProvisionedCapacityInput = exports.ListVaultsOutput = exports.ListVaultsInput = exports.ListTagsForVaultOutput = exports.ListTagsForVaultInput = exports.ListProvisionedCapacityOutput = exports.ProvisionedCapacityDescription = exports.ListProvisionedCapacityInput = exports.ListPartsOutput = exports.PartListElement = exports.ListPartsInput = exports.ListMultipartUploadsOutput = exports.UploadListElement = exports.ListMultipartUploadsInput = exports.ListJobsOutput = exports.ListJobsInput = exports.InitiateVaultLockOutput = exports.InitiateVaultLockInput = exports.VaultLockPolicy = exports.InitiateMultipartUploadOutput = exports.InitiateMultipartUploadInput = exports.PolicyEnforcedException = exports.InsufficientCapacityException = exports.InitiateJobOutput = exports.InitiateJobInput = exports.JobParameters = exports.InventoryRetrievalJobInput = exports.GetVaultNotificationsOutput = exports.VaultNotificationConfig = exports.GetVaultNotificationsInput = exports.GetVaultLockOutput = exports.GetVaultLockInput = exports.GetVaultAccessPolicyOutput = void 0;
var AbortMultipartUploadInput;
(function (AbortMultipartUploadInput) {
    /**
     * @internal
     */
    AbortMultipartUploadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortMultipartUploadInput = exports.AbortMultipartUploadInput || (exports.AbortMultipartUploadInput = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var MissingParameterValueException;
(function (MissingParameterValueException) {
    /**
     * @internal
     */
    MissingParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingParameterValueException = exports.MissingParameterValueException || (exports.MissingParameterValueException = {}));
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
var AbortVaultLockInput;
(function (AbortVaultLockInput) {
    /**
     * @internal
     */
    AbortVaultLockInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortVaultLockInput = exports.AbortVaultLockInput || (exports.AbortVaultLockInput = {}));
var Type;
(function (Type) {
    Type["AmazonCustomerByEmail"] = "AmazonCustomerByEmail";
    Type["CanonicalUser"] = "CanonicalUser";
    Type["Group"] = "Group";
})(Type = exports.Type || (exports.Type = {}));
var Grantee;
(function (Grantee) {
    /**
     * @internal
     */
    Grantee.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Grantee = exports.Grantee || (exports.Grantee = {}));
var Permission;
(function (Permission) {
    Permission["FULL_CONTROL"] = "FULL_CONTROL";
    Permission["READ"] = "READ";
    Permission["READ_ACP"] = "READ_ACP";
    Permission["WRITE"] = "WRITE";
    Permission["WRITE_ACP"] = "WRITE_ACP";
})(Permission = exports.Permission || (exports.Permission = {}));
var Grant;
(function (Grant) {
    /**
     * @internal
     */
    Grant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Grant = exports.Grant || (exports.Grant = {}));
var ActionCode;
(function (ActionCode) {
    ActionCode["ArchiveRetrieval"] = "ArchiveRetrieval";
    ActionCode["InventoryRetrieval"] = "InventoryRetrieval";
    ActionCode["Select"] = "Select";
})(ActionCode = exports.ActionCode || (exports.ActionCode = {}));
var AddTagsToVaultInput;
(function (AddTagsToVaultInput) {
    /**
     * @internal
     */
    AddTagsToVaultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToVaultInput = exports.AddTagsToVaultInput || (exports.AddTagsToVaultInput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ArchiveCreationOutput;
(function (ArchiveCreationOutput) {
    /**
     * @internal
     */
    ArchiveCreationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveCreationOutput = exports.ArchiveCreationOutput || (exports.ArchiveCreationOutput = {}));
var CannedACL;
(function (CannedACL) {
    CannedACL["AuthenticatedRead"] = "authenticated-read";
    CannedACL["AwsExecRead"] = "aws-exec-read";
    CannedACL["BucketOwnerFullControl"] = "bucket-owner-full-control";
    CannedACL["BucketOwnerRead"] = "bucket-owner-read";
    CannedACL["Private"] = "private";
    CannedACL["PublicRead"] = "public-read";
    CannedACL["PublicReadWrite"] = "public-read-write";
})(CannedACL = exports.CannedACL || (exports.CannedACL = {}));
var CompleteMultipartUploadInput;
(function (CompleteMultipartUploadInput) {
    /**
     * @internal
     */
    CompleteMultipartUploadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteMultipartUploadInput = exports.CompleteMultipartUploadInput || (exports.CompleteMultipartUploadInput = {}));
var CompleteVaultLockInput;
(function (CompleteVaultLockInput) {
    /**
     * @internal
     */
    CompleteVaultLockInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteVaultLockInput = exports.CompleteVaultLockInput || (exports.CompleteVaultLockInput = {}));
var CreateVaultInput;
(function (CreateVaultInput) {
    /**
     * @internal
     */
    CreateVaultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVaultInput = exports.CreateVaultInput || (exports.CreateVaultInput = {}));
var CreateVaultOutput;
(function (CreateVaultOutput) {
    /**
     * @internal
     */
    CreateVaultOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVaultOutput = exports.CreateVaultOutput || (exports.CreateVaultOutput = {}));
var FileHeaderInfo;
(function (FileHeaderInfo) {
    FileHeaderInfo["Ignore"] = "IGNORE";
    FileHeaderInfo["None"] = "NONE";
    FileHeaderInfo["Use"] = "USE";
})(FileHeaderInfo = exports.FileHeaderInfo || (exports.FileHeaderInfo = {}));
var CSVInput;
(function (CSVInput) {
    /**
     * @internal
     */
    CSVInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CSVInput = exports.CSVInput || (exports.CSVInput = {}));
var QuoteFields;
(function (QuoteFields) {
    QuoteFields["Always"] = "ALWAYS";
    QuoteFields["AsNeeded"] = "ASNEEDED";
})(QuoteFields = exports.QuoteFields || (exports.QuoteFields = {}));
var CSVOutput;
(function (CSVOutput) {
    /**
     * @internal
     */
    CSVOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CSVOutput = exports.CSVOutput || (exports.CSVOutput = {}));
var DataRetrievalRule;
(function (DataRetrievalRule) {
    /**
     * @internal
     */
    DataRetrievalRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRetrievalRule = exports.DataRetrievalRule || (exports.DataRetrievalRule = {}));
var DataRetrievalPolicy;
(function (DataRetrievalPolicy) {
    /**
     * @internal
     */
    DataRetrievalPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataRetrievalPolicy = exports.DataRetrievalPolicy || (exports.DataRetrievalPolicy = {}));
var DeleteArchiveInput;
(function (DeleteArchiveInput) {
    /**
     * @internal
     */
    DeleteArchiveInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteArchiveInput = exports.DeleteArchiveInput || (exports.DeleteArchiveInput = {}));
var DeleteVaultInput;
(function (DeleteVaultInput) {
    /**
     * @internal
     */
    DeleteVaultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVaultInput = exports.DeleteVaultInput || (exports.DeleteVaultInput = {}));
var DeleteVaultAccessPolicyInput;
(function (DeleteVaultAccessPolicyInput) {
    /**
     * @internal
     */
    DeleteVaultAccessPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVaultAccessPolicyInput = exports.DeleteVaultAccessPolicyInput || (exports.DeleteVaultAccessPolicyInput = {}));
var DeleteVaultNotificationsInput;
(function (DeleteVaultNotificationsInput) {
    /**
     * @internal
     */
    DeleteVaultNotificationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVaultNotificationsInput = exports.DeleteVaultNotificationsInput || (exports.DeleteVaultNotificationsInput = {}));
var DescribeJobInput;
(function (DescribeJobInput) {
    /**
     * @internal
     */
    DescribeJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobInput = exports.DescribeJobInput || (exports.DescribeJobInput = {}));
var InventoryRetrievalJobDescription;
(function (InventoryRetrievalJobDescription) {
    /**
     * @internal
     */
    InventoryRetrievalJobDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryRetrievalJobDescription = exports.InventoryRetrievalJobDescription || (exports.InventoryRetrievalJobDescription = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "aws:kms";
    EncryptionType["S3"] = "AES256";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var Encryption;
(function (Encryption) {
    /**
     * @internal
     */
    Encryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Encryption = exports.Encryption || (exports.Encryption = {}));
var StorageClass;
(function (StorageClass) {
    StorageClass["ReducedRedundancy"] = "REDUCED_REDUNDANCY";
    StorageClass["Standard"] = "STANDARD";
    StorageClass["StandardInfrequentAccess"] = "STANDARD_IA";
})(StorageClass = exports.StorageClass || (exports.StorageClass = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var OutputLocation;
(function (OutputLocation) {
    /**
     * @internal
     */
    OutputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputLocation = exports.OutputLocation || (exports.OutputLocation = {}));
var ExpressionType;
(function (ExpressionType) {
    ExpressionType["SQL"] = "SQL";
})(ExpressionType = exports.ExpressionType || (exports.ExpressionType = {}));
var InputSerialization;
(function (InputSerialization) {
    /**
     * @internal
     */
    InputSerialization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSerialization = exports.InputSerialization || (exports.InputSerialization = {}));
var OutputSerialization;
(function (OutputSerialization) {
    /**
     * @internal
     */
    OutputSerialization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputSerialization = exports.OutputSerialization || (exports.OutputSerialization = {}));
var SelectParameters;
(function (SelectParameters) {
    /**
     * @internal
     */
    SelectParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelectParameters = exports.SelectParameters || (exports.SelectParameters = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["Failed"] = "Failed";
    StatusCode["InProgress"] = "InProgress";
    StatusCode["Succeeded"] = "Succeeded";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var GlacierJobDescription;
(function (GlacierJobDescription) {
    /**
     * @internal
     */
    GlacierJobDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlacierJobDescription = exports.GlacierJobDescription || (exports.GlacierJobDescription = {}));
var DescribeVaultInput;
(function (DescribeVaultInput) {
    /**
     * @internal
     */
    DescribeVaultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVaultInput = exports.DescribeVaultInput || (exports.DescribeVaultInput = {}));
var DescribeVaultOutput;
(function (DescribeVaultOutput) {
    /**
     * @internal
     */
    DescribeVaultOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVaultOutput = exports.DescribeVaultOutput || (exports.DescribeVaultOutput = {}));
var GetDataRetrievalPolicyInput;
(function (GetDataRetrievalPolicyInput) {
    /**
     * @internal
     */
    GetDataRetrievalPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataRetrievalPolicyInput = exports.GetDataRetrievalPolicyInput || (exports.GetDataRetrievalPolicyInput = {}));
var GetDataRetrievalPolicyOutput;
(function (GetDataRetrievalPolicyOutput) {
    /**
     * @internal
     */
    GetDataRetrievalPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataRetrievalPolicyOutput = exports.GetDataRetrievalPolicyOutput || (exports.GetDataRetrievalPolicyOutput = {}));
var GetJobOutputInput;
(function (GetJobOutputInput) {
    /**
     * @internal
     */
    GetJobOutputInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobOutputInput = exports.GetJobOutputInput || (exports.GetJobOutputInput = {}));
var GetJobOutputOutput;
(function (GetJobOutputOutput) {
    /**
     * @internal
     */
    GetJobOutputOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobOutputOutput = exports.GetJobOutputOutput || (exports.GetJobOutputOutput = {}));
var GetVaultAccessPolicyInput;
(function (GetVaultAccessPolicyInput) {
    /**
     * @internal
     */
    GetVaultAccessPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVaultAccessPolicyInput = exports.GetVaultAccessPolicyInput || (exports.GetVaultAccessPolicyInput = {}));
var VaultAccessPolicy;
(function (VaultAccessPolicy) {
    /**
     * @internal
     */
    VaultAccessPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VaultAccessPolicy = exports.VaultAccessPolicy || (exports.VaultAccessPolicy = {}));
var GetVaultAccessPolicyOutput;
(function (GetVaultAccessPolicyOutput) {
    /**
     * @internal
     */
    GetVaultAccessPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVaultAccessPolicyOutput = exports.GetVaultAccessPolicyOutput || (exports.GetVaultAccessPolicyOutput = {}));
var GetVaultLockInput;
(function (GetVaultLockInput) {
    /**
     * @internal
     */
    GetVaultLockInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVaultLockInput = exports.GetVaultLockInput || (exports.GetVaultLockInput = {}));
var GetVaultLockOutput;
(function (GetVaultLockOutput) {
    /**
     * @internal
     */
    GetVaultLockOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVaultLockOutput = exports.GetVaultLockOutput || (exports.GetVaultLockOutput = {}));
var GetVaultNotificationsInput;
(function (GetVaultNotificationsInput) {
    /**
     * @internal
     */
    GetVaultNotificationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVaultNotificationsInput = exports.GetVaultNotificationsInput || (exports.GetVaultNotificationsInput = {}));
var VaultNotificationConfig;
(function (VaultNotificationConfig) {
    /**
     * @internal
     */
    VaultNotificationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VaultNotificationConfig = exports.VaultNotificationConfig || (exports.VaultNotificationConfig = {}));
var GetVaultNotificationsOutput;
(function (GetVaultNotificationsOutput) {
    /**
     * @internal
     */
    GetVaultNotificationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVaultNotificationsOutput = exports.GetVaultNotificationsOutput || (exports.GetVaultNotificationsOutput = {}));
var InventoryRetrievalJobInput;
(function (InventoryRetrievalJobInput) {
    /**
     * @internal
     */
    InventoryRetrievalJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryRetrievalJobInput = exports.InventoryRetrievalJobInput || (exports.InventoryRetrievalJobInput = {}));
var JobParameters;
(function (JobParameters) {
    /**
     * @internal
     */
    JobParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobParameters = exports.JobParameters || (exports.JobParameters = {}));
var InitiateJobInput;
(function (InitiateJobInput) {
    /**
     * @internal
     */
    InitiateJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateJobInput = exports.InitiateJobInput || (exports.InitiateJobInput = {}));
var InitiateJobOutput;
(function (InitiateJobOutput) {
    /**
     * @internal
     */
    InitiateJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateJobOutput = exports.InitiateJobOutput || (exports.InitiateJobOutput = {}));
var InsufficientCapacityException;
(function (InsufficientCapacityException) {
    /**
     * @internal
     */
    InsufficientCapacityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientCapacityException = exports.InsufficientCapacityException || (exports.InsufficientCapacityException = {}));
var PolicyEnforcedException;
(function (PolicyEnforcedException) {
    /**
     * @internal
     */
    PolicyEnforcedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyEnforcedException = exports.PolicyEnforcedException || (exports.PolicyEnforcedException = {}));
var InitiateMultipartUploadInput;
(function (InitiateMultipartUploadInput) {
    /**
     * @internal
     */
    InitiateMultipartUploadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateMultipartUploadInput = exports.InitiateMultipartUploadInput || (exports.InitiateMultipartUploadInput = {}));
var InitiateMultipartUploadOutput;
(function (InitiateMultipartUploadOutput) {
    /**
     * @internal
     */
    InitiateMultipartUploadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateMultipartUploadOutput = exports.InitiateMultipartUploadOutput || (exports.InitiateMultipartUploadOutput = {}));
var VaultLockPolicy;
(function (VaultLockPolicy) {
    /**
     * @internal
     */
    VaultLockPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VaultLockPolicy = exports.VaultLockPolicy || (exports.VaultLockPolicy = {}));
var InitiateVaultLockInput;
(function (InitiateVaultLockInput) {
    /**
     * @internal
     */
    InitiateVaultLockInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateVaultLockInput = exports.InitiateVaultLockInput || (exports.InitiateVaultLockInput = {}));
var InitiateVaultLockOutput;
(function (InitiateVaultLockOutput) {
    /**
     * @internal
     */
    InitiateVaultLockOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateVaultLockOutput = exports.InitiateVaultLockOutput || (exports.InitiateVaultLockOutput = {}));
var ListJobsInput;
(function (ListJobsInput) {
    /**
     * @internal
     */
    ListJobsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsInput = exports.ListJobsInput || (exports.ListJobsInput = {}));
var ListJobsOutput;
(function (ListJobsOutput) {
    /**
     * @internal
     */
    ListJobsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsOutput = exports.ListJobsOutput || (exports.ListJobsOutput = {}));
var ListMultipartUploadsInput;
(function (ListMultipartUploadsInput) {
    /**
     * @internal
     */
    ListMultipartUploadsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultipartUploadsInput = exports.ListMultipartUploadsInput || (exports.ListMultipartUploadsInput = {}));
var UploadListElement;
(function (UploadListElement) {
    /**
     * @internal
     */
    UploadListElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadListElement = exports.UploadListElement || (exports.UploadListElement = {}));
var ListMultipartUploadsOutput;
(function (ListMultipartUploadsOutput) {
    /**
     * @internal
     */
    ListMultipartUploadsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultipartUploadsOutput = exports.ListMultipartUploadsOutput || (exports.ListMultipartUploadsOutput = {}));
var ListPartsInput;
(function (ListPartsInput) {
    /**
     * @internal
     */
    ListPartsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartsInput = exports.ListPartsInput || (exports.ListPartsInput = {}));
var PartListElement;
(function (PartListElement) {
    /**
     * @internal
     */
    PartListElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartListElement = exports.PartListElement || (exports.PartListElement = {}));
var ListPartsOutput;
(function (ListPartsOutput) {
    /**
     * @internal
     */
    ListPartsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartsOutput = exports.ListPartsOutput || (exports.ListPartsOutput = {}));
var ListProvisionedCapacityInput;
(function (ListProvisionedCapacityInput) {
    /**
     * @internal
     */
    ListProvisionedCapacityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisionedCapacityInput = exports.ListProvisionedCapacityInput || (exports.ListProvisionedCapacityInput = {}));
var ProvisionedCapacityDescription;
(function (ProvisionedCapacityDescription) {
    /**
     * @internal
     */
    ProvisionedCapacityDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedCapacityDescription = exports.ProvisionedCapacityDescription || (exports.ProvisionedCapacityDescription = {}));
var ListProvisionedCapacityOutput;
(function (ListProvisionedCapacityOutput) {
    /**
     * @internal
     */
    ListProvisionedCapacityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisionedCapacityOutput = exports.ListProvisionedCapacityOutput || (exports.ListProvisionedCapacityOutput = {}));
var ListTagsForVaultInput;
(function (ListTagsForVaultInput) {
    /**
     * @internal
     */
    ListTagsForVaultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForVaultInput = exports.ListTagsForVaultInput || (exports.ListTagsForVaultInput = {}));
var ListTagsForVaultOutput;
(function (ListTagsForVaultOutput) {
    /**
     * @internal
     */
    ListTagsForVaultOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForVaultOutput = exports.ListTagsForVaultOutput || (exports.ListTagsForVaultOutput = {}));
var ListVaultsInput;
(function (ListVaultsInput) {
    /**
     * @internal
     */
    ListVaultsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVaultsInput = exports.ListVaultsInput || (exports.ListVaultsInput = {}));
var ListVaultsOutput;
(function (ListVaultsOutput) {
    /**
     * @internal
     */
    ListVaultsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVaultsOutput = exports.ListVaultsOutput || (exports.ListVaultsOutput = {}));
var PurchaseProvisionedCapacityInput;
(function (PurchaseProvisionedCapacityInput) {
    /**
     * @internal
     */
    PurchaseProvisionedCapacityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseProvisionedCapacityInput = exports.PurchaseProvisionedCapacityInput || (exports.PurchaseProvisionedCapacityInput = {}));
var PurchaseProvisionedCapacityOutput;
(function (PurchaseProvisionedCapacityOutput) {
    /**
     * @internal
     */
    PurchaseProvisionedCapacityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseProvisionedCapacityOutput = exports.PurchaseProvisionedCapacityOutput || (exports.PurchaseProvisionedCapacityOutput = {}));
var RemoveTagsFromVaultInput;
(function (RemoveTagsFromVaultInput) {
    /**
     * @internal
     */
    RemoveTagsFromVaultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromVaultInput = exports.RemoveTagsFromVaultInput || (exports.RemoveTagsFromVaultInput = {}));
var SetDataRetrievalPolicyInput;
(function (SetDataRetrievalPolicyInput) {
    /**
     * @internal
     */
    SetDataRetrievalPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetDataRetrievalPolicyInput = exports.SetDataRetrievalPolicyInput || (exports.SetDataRetrievalPolicyInput = {}));
var SetVaultAccessPolicyInput;
(function (SetVaultAccessPolicyInput) {
    /**
     * @internal
     */
    SetVaultAccessPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetVaultAccessPolicyInput = exports.SetVaultAccessPolicyInput || (exports.SetVaultAccessPolicyInput = {}));
var SetVaultNotificationsInput;
(function (SetVaultNotificationsInput) {
    /**
     * @internal
     */
    SetVaultNotificationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetVaultNotificationsInput = exports.SetVaultNotificationsInput || (exports.SetVaultNotificationsInput = {}));
var RequestTimeoutException;
(function (RequestTimeoutException) {
    /**
     * @internal
     */
    RequestTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestTimeoutException = exports.RequestTimeoutException || (exports.RequestTimeoutException = {}));
var UploadArchiveInput;
(function (UploadArchiveInput) {
    /**
     * @internal
     */
    UploadArchiveInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadArchiveInput = exports.UploadArchiveInput || (exports.UploadArchiveInput = {}));
var UploadMultipartPartInput;
(function (UploadMultipartPartInput) {
    /**
     * @internal
     */
    UploadMultipartPartInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadMultipartPartInput = exports.UploadMultipartPartInput || (exports.UploadMultipartPartInput = {}));
var UploadMultipartPartOutput;
(function (UploadMultipartPartOutput) {
    /**
     * @internal
     */
    UploadMultipartPartOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadMultipartPartOutput = exports.UploadMultipartPartOutput || (exports.UploadMultipartPartOutput = {}));
//# sourceMappingURL=models_0.js.map