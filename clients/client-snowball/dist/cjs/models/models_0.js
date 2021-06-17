"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeClusterRequest = exports.InvalidNextTokenException = exports.DescribeAddressesResult = exports.DescribeAddressesRequest = exports.DescribeAddressResult = exports.DescribeAddressRequest = exports.ReturnShippingLabelAlreadyExistsException = exports.CreateReturnShippingLabelResult = exports.ShippingLabelStatus = exports.CreateReturnShippingLabelRequest = exports.ConflictException = exports.CreateLongTermPricingResult = exports.CreateLongTermPricingRequest = exports.LongTermPricingType = exports.CreateJobResult = exports.CreateJobRequest = exports.SnowballCapacity = exports.DeviceConfiguration = exports.SnowconeDeviceConfiguration = exports.WirelessConnection = exports.ClusterLimitExceededException = exports.InvalidInputCombinationException = exports.Ec2RequestFailedException = exports.CreateClusterResult = exports.CreateClusterRequest = exports.TaxDocuments = exports.INDTaxDocuments = exports.SnowballType = exports.ShippingOption = exports.JobResource = exports.S3Resource = exports.KeyRange = exports.LambdaResource = exports.EventTriggerDefinition = exports.Ec2AmiResource = exports.Notification = exports.JobState = exports.JobType = exports.UnsupportedAddressException = exports.InvalidAddressException = exports.CreateAddressResult = exports.CreateAddressRequest = exports.CancelJobResult = exports.CancelJobRequest = exports.KMSRequestFailedException = exports.InvalidResourceException = exports.InvalidJobStateException = exports.CancelClusterResult = exports.CancelClusterRequest = exports.Address = void 0;
exports.UpdateLongTermPricingResult = exports.UpdateLongTermPricingRequest = exports.UpdateJobShipmentStateResult = exports.UpdateJobShipmentStateRequest = exports.ShipmentState = exports.UpdateJobResult = exports.UpdateJobRequest = exports.UpdateClusterResult = exports.UpdateClusterRequest = exports.ListLongTermPricingResult = exports.LongTermPricingListEntry = exports.ListLongTermPricingRequest = exports.ListJobsResult = exports.ListJobsRequest = exports.ListCompatibleImagesResult = exports.CompatibleImage = exports.ListCompatibleImagesRequest = exports.ListClustersResult = exports.ClusterListEntry = exports.ListClustersRequest = exports.ListClusterJobsResult = exports.JobListEntry = exports.ListClusterJobsRequest = exports.GetSoftwareUpdatesResult = exports.GetSoftwareUpdatesRequest = exports.GetSnowballUsageResult = exports.GetSnowballUsageRequest = exports.GetJobUnlockCodeResult = exports.GetJobUnlockCodeRequest = exports.GetJobManifestResult = exports.GetJobManifestRequest = exports.DescribeReturnShippingLabelResult = exports.DescribeReturnShippingLabelRequest = exports.DescribeJobResult = exports.JobMetadata = exports.ShippingDetails = exports.Shipment = exports.JobLogs = exports.DataTransfer = exports.DescribeJobRequest = exports.DescribeClusterResult = exports.ClusterMetadata = exports.ClusterState = void 0;
var Address;
(function (Address) {
    /**
     * @internal
     */
    Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Address = exports.Address || (exports.Address = {}));
var CancelClusterRequest;
(function (CancelClusterRequest) {
    /**
     * @internal
     */
    CancelClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelClusterRequest = exports.CancelClusterRequest || (exports.CancelClusterRequest = {}));
var CancelClusterResult;
(function (CancelClusterResult) {
    /**
     * @internal
     */
    CancelClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelClusterResult = exports.CancelClusterResult || (exports.CancelClusterResult = {}));
var InvalidJobStateException;
(function (InvalidJobStateException) {
    /**
     * @internal
     */
    InvalidJobStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidJobStateException = exports.InvalidJobStateException || (exports.InvalidJobStateException = {}));
var InvalidResourceException;
(function (InvalidResourceException) {
    /**
     * @internal
     */
    InvalidResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceException = exports.InvalidResourceException || (exports.InvalidResourceException = {}));
var KMSRequestFailedException;
(function (KMSRequestFailedException) {
    /**
     * @internal
     */
    KMSRequestFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSRequestFailedException = exports.KMSRequestFailedException || (exports.KMSRequestFailedException = {}));
var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {}));
var CancelJobResult;
(function (CancelJobResult) {
    /**
     * @internal
     */
    CancelJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobResult = exports.CancelJobResult || (exports.CancelJobResult = {}));
var CreateAddressRequest;
(function (CreateAddressRequest) {
    /**
     * @internal
     */
    CreateAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAddressRequest = exports.CreateAddressRequest || (exports.CreateAddressRequest = {}));
var CreateAddressResult;
(function (CreateAddressResult) {
    /**
     * @internal
     */
    CreateAddressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAddressResult = exports.CreateAddressResult || (exports.CreateAddressResult = {}));
var InvalidAddressException;
(function (InvalidAddressException) {
    /**
     * @internal
     */
    InvalidAddressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAddressException = exports.InvalidAddressException || (exports.InvalidAddressException = {}));
var UnsupportedAddressException;
(function (UnsupportedAddressException) {
    /**
     * @internal
     */
    UnsupportedAddressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedAddressException = exports.UnsupportedAddressException || (exports.UnsupportedAddressException = {}));
var JobType;
(function (JobType) {
    JobType["EXPORT"] = "EXPORT";
    JobType["IMPORT"] = "IMPORT";
    JobType["LOCAL_USE"] = "LOCAL_USE";
})(JobType = exports.JobType || (exports.JobType = {}));
var JobState;
(function (JobState) {
    JobState["CANCELLED"] = "Cancelled";
    JobState["COMPLETE"] = "Complete";
    JobState["IN_PROGRESS"] = "InProgress";
    JobState["IN_TRANSIT_TO_AWS"] = "InTransitToAWS";
    JobState["IN_TRANSIT_TO_CUSTOMER"] = "InTransitToCustomer";
    JobState["LISTING"] = "Listing";
    JobState["NEW"] = "New";
    JobState["PENDING"] = "Pending";
    JobState["PREPARING_APPLIANCE"] = "PreparingAppliance";
    JobState["PREPARING_SHIPMENT"] = "PreparingShipment";
    JobState["WITH_AWS"] = "WithAWS";
    JobState["WITH_AWS_SORTING_FACILITY"] = "WithAWSSortingFacility";
    JobState["WITH_CUSTOMER"] = "WithCustomer";
})(JobState = exports.JobState || (exports.JobState = {}));
var Notification;
(function (Notification) {
    /**
     * @internal
     */
    Notification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Notification = exports.Notification || (exports.Notification = {}));
var Ec2AmiResource;
(function (Ec2AmiResource) {
    /**
     * @internal
     */
    Ec2AmiResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ec2AmiResource = exports.Ec2AmiResource || (exports.Ec2AmiResource = {}));
var EventTriggerDefinition;
(function (EventTriggerDefinition) {
    /**
     * @internal
     */
    EventTriggerDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTriggerDefinition = exports.EventTriggerDefinition || (exports.EventTriggerDefinition = {}));
var LambdaResource;
(function (LambdaResource) {
    /**
     * @internal
     */
    LambdaResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaResource = exports.LambdaResource || (exports.LambdaResource = {}));
var KeyRange;
(function (KeyRange) {
    /**
     * @internal
     */
    KeyRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyRange = exports.KeyRange || (exports.KeyRange = {}));
var S3Resource;
(function (S3Resource) {
    /**
     * @internal
     */
    S3Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Resource = exports.S3Resource || (exports.S3Resource = {}));
var JobResource;
(function (JobResource) {
    /**
     * @internal
     */
    JobResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobResource = exports.JobResource || (exports.JobResource = {}));
var ShippingOption;
(function (ShippingOption) {
    ShippingOption["EXPRESS"] = "EXPRESS";
    ShippingOption["NEXT_DAY"] = "NEXT_DAY";
    ShippingOption["SECOND_DAY"] = "SECOND_DAY";
    ShippingOption["STANDARD"] = "STANDARD";
})(ShippingOption = exports.ShippingOption || (exports.ShippingOption = {}));
var SnowballType;
(function (SnowballType) {
    SnowballType["EDGE"] = "EDGE";
    SnowballType["EDGE_C"] = "EDGE_C";
    SnowballType["EDGE_CG"] = "EDGE_CG";
    SnowballType["EDGE_S"] = "EDGE_S";
    SnowballType["SNC1_HDD"] = "SNC1_HDD";
    SnowballType["SNC1_SSD"] = "SNC1_SSD";
    SnowballType["STANDARD"] = "STANDARD";
})(SnowballType = exports.SnowballType || (exports.SnowballType = {}));
var INDTaxDocuments;
(function (INDTaxDocuments) {
    /**
     * @internal
     */
    INDTaxDocuments.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(INDTaxDocuments = exports.INDTaxDocuments || (exports.INDTaxDocuments = {}));
var TaxDocuments;
(function (TaxDocuments) {
    /**
     * @internal
     */
    TaxDocuments.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaxDocuments = exports.TaxDocuments || (exports.TaxDocuments = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var CreateClusterResult;
(function (CreateClusterResult) {
    /**
     * @internal
     */
    CreateClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterResult = exports.CreateClusterResult || (exports.CreateClusterResult = {}));
var Ec2RequestFailedException;
(function (Ec2RequestFailedException) {
    /**
     * @internal
     */
    Ec2RequestFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ec2RequestFailedException = exports.Ec2RequestFailedException || (exports.Ec2RequestFailedException = {}));
var InvalidInputCombinationException;
(function (InvalidInputCombinationException) {
    /**
     * @internal
     */
    InvalidInputCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputCombinationException = exports.InvalidInputCombinationException || (exports.InvalidInputCombinationException = {}));
var ClusterLimitExceededException;
(function (ClusterLimitExceededException) {
    /**
     * @internal
     */
    ClusterLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterLimitExceededException = exports.ClusterLimitExceededException || (exports.ClusterLimitExceededException = {}));
var WirelessConnection;
(function (WirelessConnection) {
    /**
     * @internal
     */
    WirelessConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessConnection = exports.WirelessConnection || (exports.WirelessConnection = {}));
var SnowconeDeviceConfiguration;
(function (SnowconeDeviceConfiguration) {
    /**
     * @internal
     */
    SnowconeDeviceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnowconeDeviceConfiguration = exports.SnowconeDeviceConfiguration || (exports.SnowconeDeviceConfiguration = {}));
var DeviceConfiguration;
(function (DeviceConfiguration) {
    /**
     * @internal
     */
    DeviceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceConfiguration = exports.DeviceConfiguration || (exports.DeviceConfiguration = {}));
var SnowballCapacity;
(function (SnowballCapacity) {
    SnowballCapacity["NO_PREFERENCE"] = "NoPreference";
    SnowballCapacity["T100"] = "T100";
    SnowballCapacity["T14"] = "T14";
    SnowballCapacity["T42"] = "T42";
    SnowballCapacity["T50"] = "T50";
    SnowballCapacity["T8"] = "T8";
    SnowballCapacity["T80"] = "T80";
    SnowballCapacity["T98"] = "T98";
})(SnowballCapacity = exports.SnowballCapacity || (exports.SnowballCapacity = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResult;
(function (CreateJobResult) {
    /**
     * @internal
     */
    CreateJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResult = exports.CreateJobResult || (exports.CreateJobResult = {}));
var LongTermPricingType;
(function (LongTermPricingType) {
    LongTermPricingType["ONE_YEAR"] = "OneYear";
    LongTermPricingType["THREE_YEAR"] = "ThreeYear";
})(LongTermPricingType = exports.LongTermPricingType || (exports.LongTermPricingType = {}));
var CreateLongTermPricingRequest;
(function (CreateLongTermPricingRequest) {
    /**
     * @internal
     */
    CreateLongTermPricingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLongTermPricingRequest = exports.CreateLongTermPricingRequest || (exports.CreateLongTermPricingRequest = {}));
var CreateLongTermPricingResult;
(function (CreateLongTermPricingResult) {
    /**
     * @internal
     */
    CreateLongTermPricingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLongTermPricingResult = exports.CreateLongTermPricingResult || (exports.CreateLongTermPricingResult = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateReturnShippingLabelRequest;
(function (CreateReturnShippingLabelRequest) {
    /**
     * @internal
     */
    CreateReturnShippingLabelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReturnShippingLabelRequest = exports.CreateReturnShippingLabelRequest || (exports.CreateReturnShippingLabelRequest = {}));
var ShippingLabelStatus;
(function (ShippingLabelStatus) {
    ShippingLabelStatus["FAILED"] = "Failed";
    ShippingLabelStatus["IN_PROGRESS"] = "InProgress";
    ShippingLabelStatus["SUCCEEDED"] = "Succeeded";
    ShippingLabelStatus["TIMED_OUT"] = "TimedOut";
})(ShippingLabelStatus = exports.ShippingLabelStatus || (exports.ShippingLabelStatus = {}));
var CreateReturnShippingLabelResult;
(function (CreateReturnShippingLabelResult) {
    /**
     * @internal
     */
    CreateReturnShippingLabelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReturnShippingLabelResult = exports.CreateReturnShippingLabelResult || (exports.CreateReturnShippingLabelResult = {}));
var ReturnShippingLabelAlreadyExistsException;
(function (ReturnShippingLabelAlreadyExistsException) {
    /**
     * @internal
     */
    ReturnShippingLabelAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReturnShippingLabelAlreadyExistsException = exports.ReturnShippingLabelAlreadyExistsException || (exports.ReturnShippingLabelAlreadyExistsException = {}));
var DescribeAddressRequest;
(function (DescribeAddressRequest) {
    /**
     * @internal
     */
    DescribeAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressRequest = exports.DescribeAddressRequest || (exports.DescribeAddressRequest = {}));
var DescribeAddressResult;
(function (DescribeAddressResult) {
    /**
     * @internal
     */
    DescribeAddressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressResult = exports.DescribeAddressResult || (exports.DescribeAddressResult = {}));
var DescribeAddressesRequest;
(function (DescribeAddressesRequest) {
    /**
     * @internal
     */
    DescribeAddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressesRequest = exports.DescribeAddressesRequest || (exports.DescribeAddressesRequest = {}));
var DescribeAddressesResult;
(function (DescribeAddressesResult) {
    /**
     * @internal
     */
    DescribeAddressesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressesResult = exports.DescribeAddressesResult || (exports.DescribeAddressesResult = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    /**
     * @internal
     */
    DescribeClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterRequest = exports.DescribeClusterRequest || (exports.DescribeClusterRequest = {}));
var ClusterState;
(function (ClusterState) {
    ClusterState["AWAITING_QUORUM"] = "AwaitingQuorum";
    ClusterState["CANCELLED"] = "Cancelled";
    ClusterState["COMPLETE"] = "Complete";
    ClusterState["IN_USE"] = "InUse";
    ClusterState["PENDING"] = "Pending";
})(ClusterState = exports.ClusterState || (exports.ClusterState = {}));
var ClusterMetadata;
(function (ClusterMetadata) {
    /**
     * @internal
     */
    ClusterMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterMetadata = exports.ClusterMetadata || (exports.ClusterMetadata = {}));
var DescribeClusterResult;
(function (DescribeClusterResult) {
    /**
     * @internal
     */
    DescribeClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterResult = exports.DescribeClusterResult || (exports.DescribeClusterResult = {}));
var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRequest = exports.DescribeJobRequest || (exports.DescribeJobRequest = {}));
var DataTransfer;
(function (DataTransfer) {
    /**
     * @internal
     */
    DataTransfer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataTransfer = exports.DataTransfer || (exports.DataTransfer = {}));
var JobLogs;
(function (JobLogs) {
    /**
     * @internal
     */
    JobLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobLogs = exports.JobLogs || (exports.JobLogs = {}));
var Shipment;
(function (Shipment) {
    /**
     * @internal
     */
    Shipment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Shipment = exports.Shipment || (exports.Shipment = {}));
var ShippingDetails;
(function (ShippingDetails) {
    /**
     * @internal
     */
    ShippingDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShippingDetails = exports.ShippingDetails || (exports.ShippingDetails = {}));
var JobMetadata;
(function (JobMetadata) {
    /**
     * @internal
     */
    JobMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobMetadata = exports.JobMetadata || (exports.JobMetadata = {}));
var DescribeJobResult;
(function (DescribeJobResult) {
    /**
     * @internal
     */
    DescribeJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobResult = exports.DescribeJobResult || (exports.DescribeJobResult = {}));
var DescribeReturnShippingLabelRequest;
(function (DescribeReturnShippingLabelRequest) {
    /**
     * @internal
     */
    DescribeReturnShippingLabelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReturnShippingLabelRequest = exports.DescribeReturnShippingLabelRequest || (exports.DescribeReturnShippingLabelRequest = {}));
var DescribeReturnShippingLabelResult;
(function (DescribeReturnShippingLabelResult) {
    /**
     * @internal
     */
    DescribeReturnShippingLabelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReturnShippingLabelResult = exports.DescribeReturnShippingLabelResult || (exports.DescribeReturnShippingLabelResult = {}));
var GetJobManifestRequest;
(function (GetJobManifestRequest) {
    /**
     * @internal
     */
    GetJobManifestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobManifestRequest = exports.GetJobManifestRequest || (exports.GetJobManifestRequest = {}));
var GetJobManifestResult;
(function (GetJobManifestResult) {
    /**
     * @internal
     */
    GetJobManifestResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobManifestResult = exports.GetJobManifestResult || (exports.GetJobManifestResult = {}));
var GetJobUnlockCodeRequest;
(function (GetJobUnlockCodeRequest) {
    /**
     * @internal
     */
    GetJobUnlockCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobUnlockCodeRequest = exports.GetJobUnlockCodeRequest || (exports.GetJobUnlockCodeRequest = {}));
var GetJobUnlockCodeResult;
(function (GetJobUnlockCodeResult) {
    /**
     * @internal
     */
    GetJobUnlockCodeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobUnlockCodeResult = exports.GetJobUnlockCodeResult || (exports.GetJobUnlockCodeResult = {}));
var GetSnowballUsageRequest;
(function (GetSnowballUsageRequest) {
    /**
     * @internal
     */
    GetSnowballUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSnowballUsageRequest = exports.GetSnowballUsageRequest || (exports.GetSnowballUsageRequest = {}));
var GetSnowballUsageResult;
(function (GetSnowballUsageResult) {
    /**
     * @internal
     */
    GetSnowballUsageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSnowballUsageResult = exports.GetSnowballUsageResult || (exports.GetSnowballUsageResult = {}));
var GetSoftwareUpdatesRequest;
(function (GetSoftwareUpdatesRequest) {
    /**
     * @internal
     */
    GetSoftwareUpdatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSoftwareUpdatesRequest = exports.GetSoftwareUpdatesRequest || (exports.GetSoftwareUpdatesRequest = {}));
var GetSoftwareUpdatesResult;
(function (GetSoftwareUpdatesResult) {
    /**
     * @internal
     */
    GetSoftwareUpdatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSoftwareUpdatesResult = exports.GetSoftwareUpdatesResult || (exports.GetSoftwareUpdatesResult = {}));
var ListClusterJobsRequest;
(function (ListClusterJobsRequest) {
    /**
     * @internal
     */
    ListClusterJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClusterJobsRequest = exports.ListClusterJobsRequest || (exports.ListClusterJobsRequest = {}));
var JobListEntry;
(function (JobListEntry) {
    /**
     * @internal
     */
    JobListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobListEntry = exports.JobListEntry || (exports.JobListEntry = {}));
var ListClusterJobsResult;
(function (ListClusterJobsResult) {
    /**
     * @internal
     */
    ListClusterJobsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClusterJobsResult = exports.ListClusterJobsResult || (exports.ListClusterJobsResult = {}));
var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersRequest = exports.ListClustersRequest || (exports.ListClustersRequest = {}));
var ClusterListEntry;
(function (ClusterListEntry) {
    /**
     * @internal
     */
    ClusterListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterListEntry = exports.ClusterListEntry || (exports.ClusterListEntry = {}));
var ListClustersResult;
(function (ListClustersResult) {
    /**
     * @internal
     */
    ListClustersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersResult = exports.ListClustersResult || (exports.ListClustersResult = {}));
var ListCompatibleImagesRequest;
(function (ListCompatibleImagesRequest) {
    /**
     * @internal
     */
    ListCompatibleImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCompatibleImagesRequest = exports.ListCompatibleImagesRequest || (exports.ListCompatibleImagesRequest = {}));
var CompatibleImage;
(function (CompatibleImage) {
    /**
     * @internal
     */
    CompatibleImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompatibleImage = exports.CompatibleImage || (exports.CompatibleImage = {}));
var ListCompatibleImagesResult;
(function (ListCompatibleImagesResult) {
    /**
     * @internal
     */
    ListCompatibleImagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCompatibleImagesResult = exports.ListCompatibleImagesResult || (exports.ListCompatibleImagesResult = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResult;
(function (ListJobsResult) {
    /**
     * @internal
     */
    ListJobsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResult = exports.ListJobsResult || (exports.ListJobsResult = {}));
var ListLongTermPricingRequest;
(function (ListLongTermPricingRequest) {
    /**
     * @internal
     */
    ListLongTermPricingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLongTermPricingRequest = exports.ListLongTermPricingRequest || (exports.ListLongTermPricingRequest = {}));
var LongTermPricingListEntry;
(function (LongTermPricingListEntry) {
    /**
     * @internal
     */
    LongTermPricingListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LongTermPricingListEntry = exports.LongTermPricingListEntry || (exports.LongTermPricingListEntry = {}));
var ListLongTermPricingResult;
(function (ListLongTermPricingResult) {
    /**
     * @internal
     */
    ListLongTermPricingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLongTermPricingResult = exports.ListLongTermPricingResult || (exports.ListLongTermPricingResult = {}));
var UpdateClusterRequest;
(function (UpdateClusterRequest) {
    /**
     * @internal
     */
    UpdateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterRequest = exports.UpdateClusterRequest || (exports.UpdateClusterRequest = {}));
var UpdateClusterResult;
(function (UpdateClusterResult) {
    /**
     * @internal
     */
    UpdateClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterResult = exports.UpdateClusterResult || (exports.UpdateClusterResult = {}));
var UpdateJobRequest;
(function (UpdateJobRequest) {
    /**
     * @internal
     */
    UpdateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobRequest = exports.UpdateJobRequest || (exports.UpdateJobRequest = {}));
var UpdateJobResult;
(function (UpdateJobResult) {
    /**
     * @internal
     */
    UpdateJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobResult = exports.UpdateJobResult || (exports.UpdateJobResult = {}));
var ShipmentState;
(function (ShipmentState) {
    ShipmentState["RECEIVED"] = "RECEIVED";
    ShipmentState["RETURNED"] = "RETURNED";
})(ShipmentState = exports.ShipmentState || (exports.ShipmentState = {}));
var UpdateJobShipmentStateRequest;
(function (UpdateJobShipmentStateRequest) {
    /**
     * @internal
     */
    UpdateJobShipmentStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobShipmentStateRequest = exports.UpdateJobShipmentStateRequest || (exports.UpdateJobShipmentStateRequest = {}));
var UpdateJobShipmentStateResult;
(function (UpdateJobShipmentStateResult) {
    /**
     * @internal
     */
    UpdateJobShipmentStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobShipmentStateResult = exports.UpdateJobShipmentStateResult || (exports.UpdateJobShipmentStateResult = {}));
var UpdateLongTermPricingRequest;
(function (UpdateLongTermPricingRequest) {
    /**
     * @internal
     */
    UpdateLongTermPricingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLongTermPricingRequest = exports.UpdateLongTermPricingRequest || (exports.UpdateLongTermPricingRequest = {}));
var UpdateLongTermPricingResult;
(function (UpdateLongTermPricingResult) {
    /**
     * @internal
     */
    UpdateLongTermPricingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLongTermPricingResult = exports.UpdateLongTermPricingResult || (exports.UpdateLongTermPricingResult = {}));
//# sourceMappingURL=models_0.js.map