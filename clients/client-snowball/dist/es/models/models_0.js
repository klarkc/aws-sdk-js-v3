import { __assign } from "tslib";
export var Address;
(function (Address) {
    /**
     * @internal
     */
    Address.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Address || (Address = {}));
export var CancelClusterRequest;
(function (CancelClusterRequest) {
    /**
     * @internal
     */
    CancelClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelClusterRequest || (CancelClusterRequest = {}));
export var CancelClusterResult;
(function (CancelClusterResult) {
    /**
     * @internal
     */
    CancelClusterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelClusterResult || (CancelClusterResult = {}));
export var InvalidJobStateException;
(function (InvalidJobStateException) {
    /**
     * @internal
     */
    InvalidJobStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidJobStateException || (InvalidJobStateException = {}));
export var InvalidResourceException;
(function (InvalidResourceException) {
    /**
     * @internal
     */
    InvalidResourceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidResourceException || (InvalidResourceException = {}));
export var KMSRequestFailedException;
(function (KMSRequestFailedException) {
    /**
     * @internal
     */
    KMSRequestFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSRequestFailedException || (KMSRequestFailedException = {}));
export var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobRequest || (CancelJobRequest = {}));
export var CancelJobResult;
(function (CancelJobResult) {
    /**
     * @internal
     */
    CancelJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobResult || (CancelJobResult = {}));
export var CreateAddressRequest;
(function (CreateAddressRequest) {
    /**
     * @internal
     */
    CreateAddressRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAddressRequest || (CreateAddressRequest = {}));
export var CreateAddressResult;
(function (CreateAddressResult) {
    /**
     * @internal
     */
    CreateAddressResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAddressResult || (CreateAddressResult = {}));
export var InvalidAddressException;
(function (InvalidAddressException) {
    /**
     * @internal
     */
    InvalidAddressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAddressException || (InvalidAddressException = {}));
export var UnsupportedAddressException;
(function (UnsupportedAddressException) {
    /**
     * @internal
     */
    UnsupportedAddressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedAddressException || (UnsupportedAddressException = {}));
export var JobType;
(function (JobType) {
    JobType["EXPORT"] = "EXPORT";
    JobType["IMPORT"] = "IMPORT";
    JobType["LOCAL_USE"] = "LOCAL_USE";
})(JobType || (JobType = {}));
export var JobState;
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
})(JobState || (JobState = {}));
export var Notification;
(function (Notification) {
    /**
     * @internal
     */
    Notification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Notification || (Notification = {}));
export var Ec2AmiResource;
(function (Ec2AmiResource) {
    /**
     * @internal
     */
    Ec2AmiResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ec2AmiResource || (Ec2AmiResource = {}));
export var EventTriggerDefinition;
(function (EventTriggerDefinition) {
    /**
     * @internal
     */
    EventTriggerDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventTriggerDefinition || (EventTriggerDefinition = {}));
export var LambdaResource;
(function (LambdaResource) {
    /**
     * @internal
     */
    LambdaResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaResource || (LambdaResource = {}));
export var KeyRange;
(function (KeyRange) {
    /**
     * @internal
     */
    KeyRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyRange || (KeyRange = {}));
export var S3Resource;
(function (S3Resource) {
    /**
     * @internal
     */
    S3Resource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Resource || (S3Resource = {}));
export var JobResource;
(function (JobResource) {
    /**
     * @internal
     */
    JobResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobResource || (JobResource = {}));
export var ShippingOption;
(function (ShippingOption) {
    ShippingOption["EXPRESS"] = "EXPRESS";
    ShippingOption["NEXT_DAY"] = "NEXT_DAY";
    ShippingOption["SECOND_DAY"] = "SECOND_DAY";
    ShippingOption["STANDARD"] = "STANDARD";
})(ShippingOption || (ShippingOption = {}));
export var SnowballType;
(function (SnowballType) {
    SnowballType["EDGE"] = "EDGE";
    SnowballType["EDGE_C"] = "EDGE_C";
    SnowballType["EDGE_CG"] = "EDGE_CG";
    SnowballType["EDGE_S"] = "EDGE_S";
    SnowballType["SNC1_HDD"] = "SNC1_HDD";
    SnowballType["SNC1_SSD"] = "SNC1_SSD";
    SnowballType["STANDARD"] = "STANDARD";
})(SnowballType || (SnowballType = {}));
export var INDTaxDocuments;
(function (INDTaxDocuments) {
    /**
     * @internal
     */
    INDTaxDocuments.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(INDTaxDocuments || (INDTaxDocuments = {}));
export var TaxDocuments;
(function (TaxDocuments) {
    /**
     * @internal
     */
    TaxDocuments.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaxDocuments || (TaxDocuments = {}));
export var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterRequest || (CreateClusterRequest = {}));
export var CreateClusterResult;
(function (CreateClusterResult) {
    /**
     * @internal
     */
    CreateClusterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterResult || (CreateClusterResult = {}));
export var Ec2RequestFailedException;
(function (Ec2RequestFailedException) {
    /**
     * @internal
     */
    Ec2RequestFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ec2RequestFailedException || (Ec2RequestFailedException = {}));
export var InvalidInputCombinationException;
(function (InvalidInputCombinationException) {
    /**
     * @internal
     */
    InvalidInputCombinationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputCombinationException || (InvalidInputCombinationException = {}));
export var ClusterLimitExceededException;
(function (ClusterLimitExceededException) {
    /**
     * @internal
     */
    ClusterLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterLimitExceededException || (ClusterLimitExceededException = {}));
export var WirelessConnection;
(function (WirelessConnection) {
    /**
     * @internal
     */
    WirelessConnection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessConnection || (WirelessConnection = {}));
export var SnowconeDeviceConfiguration;
(function (SnowconeDeviceConfiguration) {
    /**
     * @internal
     */
    SnowconeDeviceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnowconeDeviceConfiguration || (SnowconeDeviceConfiguration = {}));
export var DeviceConfiguration;
(function (DeviceConfiguration) {
    /**
     * @internal
     */
    DeviceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceConfiguration || (DeviceConfiguration = {}));
export var SnowballCapacity;
(function (SnowballCapacity) {
    SnowballCapacity["NO_PREFERENCE"] = "NoPreference";
    SnowballCapacity["T100"] = "T100";
    SnowballCapacity["T14"] = "T14";
    SnowballCapacity["T42"] = "T42";
    SnowballCapacity["T50"] = "T50";
    SnowballCapacity["T8"] = "T8";
    SnowballCapacity["T80"] = "T80";
    SnowballCapacity["T98"] = "T98";
})(SnowballCapacity || (SnowballCapacity = {}));
export var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobRequest || (CreateJobRequest = {}));
export var CreateJobResult;
(function (CreateJobResult) {
    /**
     * @internal
     */
    CreateJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobResult || (CreateJobResult = {}));
export var LongTermPricingType;
(function (LongTermPricingType) {
    LongTermPricingType["ONE_YEAR"] = "OneYear";
    LongTermPricingType["THREE_YEAR"] = "ThreeYear";
})(LongTermPricingType || (LongTermPricingType = {}));
export var CreateLongTermPricingRequest;
(function (CreateLongTermPricingRequest) {
    /**
     * @internal
     */
    CreateLongTermPricingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLongTermPricingRequest || (CreateLongTermPricingRequest = {}));
export var CreateLongTermPricingResult;
(function (CreateLongTermPricingResult) {
    /**
     * @internal
     */
    CreateLongTermPricingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLongTermPricingResult || (CreateLongTermPricingResult = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var CreateReturnShippingLabelRequest;
(function (CreateReturnShippingLabelRequest) {
    /**
     * @internal
     */
    CreateReturnShippingLabelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReturnShippingLabelRequest || (CreateReturnShippingLabelRequest = {}));
export var ShippingLabelStatus;
(function (ShippingLabelStatus) {
    ShippingLabelStatus["FAILED"] = "Failed";
    ShippingLabelStatus["IN_PROGRESS"] = "InProgress";
    ShippingLabelStatus["SUCCEEDED"] = "Succeeded";
    ShippingLabelStatus["TIMED_OUT"] = "TimedOut";
})(ShippingLabelStatus || (ShippingLabelStatus = {}));
export var CreateReturnShippingLabelResult;
(function (CreateReturnShippingLabelResult) {
    /**
     * @internal
     */
    CreateReturnShippingLabelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReturnShippingLabelResult || (CreateReturnShippingLabelResult = {}));
export var ReturnShippingLabelAlreadyExistsException;
(function (ReturnShippingLabelAlreadyExistsException) {
    /**
     * @internal
     */
    ReturnShippingLabelAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReturnShippingLabelAlreadyExistsException || (ReturnShippingLabelAlreadyExistsException = {}));
export var DescribeAddressRequest;
(function (DescribeAddressRequest) {
    /**
     * @internal
     */
    DescribeAddressRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddressRequest || (DescribeAddressRequest = {}));
export var DescribeAddressResult;
(function (DescribeAddressResult) {
    /**
     * @internal
     */
    DescribeAddressResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddressResult || (DescribeAddressResult = {}));
export var DescribeAddressesRequest;
(function (DescribeAddressesRequest) {
    /**
     * @internal
     */
    DescribeAddressesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddressesRequest || (DescribeAddressesRequest = {}));
export var DescribeAddressesResult;
(function (DescribeAddressesResult) {
    /**
     * @internal
     */
    DescribeAddressesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddressesResult || (DescribeAddressesResult = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    /**
     * @internal
     */
    DescribeClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterRequest || (DescribeClusterRequest = {}));
export var ClusterState;
(function (ClusterState) {
    ClusterState["AWAITING_QUORUM"] = "AwaitingQuorum";
    ClusterState["CANCELLED"] = "Cancelled";
    ClusterState["COMPLETE"] = "Complete";
    ClusterState["IN_USE"] = "InUse";
    ClusterState["PENDING"] = "Pending";
})(ClusterState || (ClusterState = {}));
export var ClusterMetadata;
(function (ClusterMetadata) {
    /**
     * @internal
     */
    ClusterMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterMetadata || (ClusterMetadata = {}));
export var DescribeClusterResult;
(function (DescribeClusterResult) {
    /**
     * @internal
     */
    DescribeClusterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterResult || (DescribeClusterResult = {}));
export var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobRequest || (DescribeJobRequest = {}));
export var DataTransfer;
(function (DataTransfer) {
    /**
     * @internal
     */
    DataTransfer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataTransfer || (DataTransfer = {}));
export var JobLogs;
(function (JobLogs) {
    /**
     * @internal
     */
    JobLogs.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobLogs || (JobLogs = {}));
export var Shipment;
(function (Shipment) {
    /**
     * @internal
     */
    Shipment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Shipment || (Shipment = {}));
export var ShippingDetails;
(function (ShippingDetails) {
    /**
     * @internal
     */
    ShippingDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShippingDetails || (ShippingDetails = {}));
export var JobMetadata;
(function (JobMetadata) {
    /**
     * @internal
     */
    JobMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobMetadata || (JobMetadata = {}));
export var DescribeJobResult;
(function (DescribeJobResult) {
    /**
     * @internal
     */
    DescribeJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobResult || (DescribeJobResult = {}));
export var DescribeReturnShippingLabelRequest;
(function (DescribeReturnShippingLabelRequest) {
    /**
     * @internal
     */
    DescribeReturnShippingLabelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReturnShippingLabelRequest || (DescribeReturnShippingLabelRequest = {}));
export var DescribeReturnShippingLabelResult;
(function (DescribeReturnShippingLabelResult) {
    /**
     * @internal
     */
    DescribeReturnShippingLabelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReturnShippingLabelResult || (DescribeReturnShippingLabelResult = {}));
export var GetJobManifestRequest;
(function (GetJobManifestRequest) {
    /**
     * @internal
     */
    GetJobManifestRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobManifestRequest || (GetJobManifestRequest = {}));
export var GetJobManifestResult;
(function (GetJobManifestResult) {
    /**
     * @internal
     */
    GetJobManifestResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobManifestResult || (GetJobManifestResult = {}));
export var GetJobUnlockCodeRequest;
(function (GetJobUnlockCodeRequest) {
    /**
     * @internal
     */
    GetJobUnlockCodeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobUnlockCodeRequest || (GetJobUnlockCodeRequest = {}));
export var GetJobUnlockCodeResult;
(function (GetJobUnlockCodeResult) {
    /**
     * @internal
     */
    GetJobUnlockCodeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobUnlockCodeResult || (GetJobUnlockCodeResult = {}));
export var GetSnowballUsageRequest;
(function (GetSnowballUsageRequest) {
    /**
     * @internal
     */
    GetSnowballUsageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSnowballUsageRequest || (GetSnowballUsageRequest = {}));
export var GetSnowballUsageResult;
(function (GetSnowballUsageResult) {
    /**
     * @internal
     */
    GetSnowballUsageResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSnowballUsageResult || (GetSnowballUsageResult = {}));
export var GetSoftwareUpdatesRequest;
(function (GetSoftwareUpdatesRequest) {
    /**
     * @internal
     */
    GetSoftwareUpdatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSoftwareUpdatesRequest || (GetSoftwareUpdatesRequest = {}));
export var GetSoftwareUpdatesResult;
(function (GetSoftwareUpdatesResult) {
    /**
     * @internal
     */
    GetSoftwareUpdatesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSoftwareUpdatesResult || (GetSoftwareUpdatesResult = {}));
export var ListClusterJobsRequest;
(function (ListClusterJobsRequest) {
    /**
     * @internal
     */
    ListClusterJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClusterJobsRequest || (ListClusterJobsRequest = {}));
export var JobListEntry;
(function (JobListEntry) {
    /**
     * @internal
     */
    JobListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobListEntry || (JobListEntry = {}));
export var ListClusterJobsResult;
(function (ListClusterJobsResult) {
    /**
     * @internal
     */
    ListClusterJobsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClusterJobsResult || (ListClusterJobsResult = {}));
export var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersRequest || (ListClustersRequest = {}));
export var ClusterListEntry;
(function (ClusterListEntry) {
    /**
     * @internal
     */
    ClusterListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterListEntry || (ClusterListEntry = {}));
export var ListClustersResult;
(function (ListClustersResult) {
    /**
     * @internal
     */
    ListClustersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersResult || (ListClustersResult = {}));
export var ListCompatibleImagesRequest;
(function (ListCompatibleImagesRequest) {
    /**
     * @internal
     */
    ListCompatibleImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCompatibleImagesRequest || (ListCompatibleImagesRequest = {}));
export var CompatibleImage;
(function (CompatibleImage) {
    /**
     * @internal
     */
    CompatibleImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompatibleImage || (CompatibleImage = {}));
export var ListCompatibleImagesResult;
(function (ListCompatibleImagesResult) {
    /**
     * @internal
     */
    ListCompatibleImagesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCompatibleImagesResult || (ListCompatibleImagesResult = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsRequest || (ListJobsRequest = {}));
export var ListJobsResult;
(function (ListJobsResult) {
    /**
     * @internal
     */
    ListJobsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsResult || (ListJobsResult = {}));
export var ListLongTermPricingRequest;
(function (ListLongTermPricingRequest) {
    /**
     * @internal
     */
    ListLongTermPricingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLongTermPricingRequest || (ListLongTermPricingRequest = {}));
export var LongTermPricingListEntry;
(function (LongTermPricingListEntry) {
    /**
     * @internal
     */
    LongTermPricingListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LongTermPricingListEntry || (LongTermPricingListEntry = {}));
export var ListLongTermPricingResult;
(function (ListLongTermPricingResult) {
    /**
     * @internal
     */
    ListLongTermPricingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLongTermPricingResult || (ListLongTermPricingResult = {}));
export var UpdateClusterRequest;
(function (UpdateClusterRequest) {
    /**
     * @internal
     */
    UpdateClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterRequest || (UpdateClusterRequest = {}));
export var UpdateClusterResult;
(function (UpdateClusterResult) {
    /**
     * @internal
     */
    UpdateClusterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterResult || (UpdateClusterResult = {}));
export var UpdateJobRequest;
(function (UpdateJobRequest) {
    /**
     * @internal
     */
    UpdateJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobRequest || (UpdateJobRequest = {}));
export var UpdateJobResult;
(function (UpdateJobResult) {
    /**
     * @internal
     */
    UpdateJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobResult || (UpdateJobResult = {}));
export var ShipmentState;
(function (ShipmentState) {
    ShipmentState["RECEIVED"] = "RECEIVED";
    ShipmentState["RETURNED"] = "RETURNED";
})(ShipmentState || (ShipmentState = {}));
export var UpdateJobShipmentStateRequest;
(function (UpdateJobShipmentStateRequest) {
    /**
     * @internal
     */
    UpdateJobShipmentStateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobShipmentStateRequest || (UpdateJobShipmentStateRequest = {}));
export var UpdateJobShipmentStateResult;
(function (UpdateJobShipmentStateResult) {
    /**
     * @internal
     */
    UpdateJobShipmentStateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobShipmentStateResult || (UpdateJobShipmentStateResult = {}));
export var UpdateLongTermPricingRequest;
(function (UpdateLongTermPricingRequest) {
    /**
     * @internal
     */
    UpdateLongTermPricingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLongTermPricingRequest || (UpdateLongTermPricingRequest = {}));
export var UpdateLongTermPricingResult;
(function (UpdateLongTermPricingResult) {
    /**
     * @internal
     */
    UpdateLongTermPricingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLongTermPricingResult || (UpdateLongTermPricingResult = {}));
//# sourceMappingURL=models_0.js.map