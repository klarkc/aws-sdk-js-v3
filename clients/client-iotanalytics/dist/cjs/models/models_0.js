"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreStorage = exports.ServiceManagedDatastoreS3Storage = exports.CustomerManagedDatastoreS3Storage = exports.CreateDatasetContentResponse = exports.CreateDatasetContentRequest = exports.CreateDatasetResponse = exports.CreateDatasetRequest = exports.VersioningConfiguration = exports.DatasetTrigger = exports.Schedule = exports.TriggeringDataset = exports.LateDataRule = exports.LateDataRuleConfiguration = exports.DeltaTimeSessionWindowConfiguration = exports.DatasetContentDeliveryRule = exports.DatasetContentDeliveryDestination = exports.S3DestinationConfiguration = exports.GlueConfiguration = exports.IotEventsDestinationConfiguration = exports.DatasetAction = exports.SqlQueryDatasetAction = exports.QueryFilter = exports.DeltaTime = exports.ContainerDatasetAction = exports.Variable = exports.OutputFileUriValue = exports.DatasetContentVersionValue = exports.ResourceConfiguration = exports.ComputeType = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.CreateChannelResponse = exports.CreateChannelRequest = exports.Tag = exports.RetentionPeriod = exports.ChannelStorage = exports.ServiceManagedChannelS3Storage = exports.CustomerManagedChannelS3Storage = exports.CancelPipelineReprocessingResponse = exports.CancelPipelineReprocessingRequest = exports.ThrottlingException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.InvalidRequestException = exports.InternalFailureException = exports.BatchPutMessageResponse = exports.BatchPutMessageErrorEntry = exports.BatchPutMessageRequest = exports.Message = exports.AddAttributesActivity = void 0;
exports.DatasetEntry = exports.GetDatasetContentRequest = exports.DescribePipelineResponse = exports.Pipeline = exports.ReprocessingSummary = exports.ReprocessingStatus = exports.DescribePipelineRequest = exports.DescribeLoggingOptionsResponse = exports.LoggingOptions = exports.LoggingLevel = exports.DescribeLoggingOptionsRequest = exports.DescribeDatastoreResponse = exports.DatastoreStatistics = exports.Datastore = exports.DatastoreStatus = exports.DescribeDatastoreRequest = exports.DescribeDatasetResponse = exports.Dataset = exports.DatasetStatus = exports.DescribeDatasetRequest = exports.DescribeChannelResponse = exports.ChannelStatistics = exports.EstimatedResourceSize = exports.Channel = exports.ChannelStatus = exports.DescribeChannelRequest = exports.DeletePipelineRequest = exports.DeleteDatastoreRequest = exports.DeleteDatasetContentRequest = exports.DeleteDatasetRequest = exports.DeleteChannelRequest = exports.CreatePipelineResponse = exports.CreatePipelineRequest = exports.PipelineActivity = exports.SelectAttributesActivity = exports.RemoveAttributesActivity = exports.MathActivity = exports.LambdaActivity = exports.FilterActivity = exports.DeviceShadowEnrichActivity = exports.DeviceRegistryEnrichActivity = exports.DatastoreActivity = exports.ChannelActivity = exports.CreateDatastoreResponse = exports.CreateDatastoreRequest = exports.FileFormatConfiguration = exports.ParquetConfiguration = exports.SchemaDefinition = exports.Column = exports.JsonConfiguration = void 0;
exports.UpdatePipelineRequest = exports.UpdateDatastoreRequest = exports.UpdateDatasetRequest = exports.UpdateChannelRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartPipelineReprocessingResponse = exports.StartPipelineReprocessingRequest = exports.ChannelMessages = exports.SampleChannelDataResponse = exports.SampleChannelDataRequest = exports.RunPipelineActivityResponse = exports.RunPipelineActivityRequest = exports.PutLoggingOptionsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListPipelinesResponse = exports.PipelineSummary = exports.ListPipelinesRequest = exports.ListDatastoresResponse = exports.DatastoreSummary = exports.FileFormatType = exports.DatastoreStorageSummary = exports.ServiceManagedDatastoreS3StorageSummary = exports.CustomerManagedDatastoreS3StorageSummary = exports.ListDatastoresRequest = exports.ListDatasetsResponse = exports.DatasetSummary = exports.DatasetActionSummary = exports.DatasetActionType = exports.ListDatasetsRequest = exports.ListDatasetContentsResponse = exports.DatasetContentSummary = exports.ListDatasetContentsRequest = exports.ListChannelsResponse = exports.ChannelSummary = exports.ChannelStorageSummary = exports.ServiceManagedChannelS3StorageSummary = exports.CustomerManagedChannelS3StorageSummary = exports.ListChannelsRequest = exports.GetDatasetContentResponse = exports.DatasetContentStatus = exports.DatasetContentState = void 0;
var AddAttributesActivity;
(function (AddAttributesActivity) {
    /**
     * @internal
     */
    AddAttributesActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAttributesActivity = exports.AddAttributesActivity || (exports.AddAttributesActivity = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var BatchPutMessageRequest;
(function (BatchPutMessageRequest) {
    /**
     * @internal
     */
    BatchPutMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutMessageRequest = exports.BatchPutMessageRequest || (exports.BatchPutMessageRequest = {}));
var BatchPutMessageErrorEntry;
(function (BatchPutMessageErrorEntry) {
    /**
     * @internal
     */
    BatchPutMessageErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutMessageErrorEntry = exports.BatchPutMessageErrorEntry || (exports.BatchPutMessageErrorEntry = {}));
var BatchPutMessageResponse;
(function (BatchPutMessageResponse) {
    /**
     * @internal
     */
    BatchPutMessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutMessageResponse = exports.BatchPutMessageResponse || (exports.BatchPutMessageResponse = {}));
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
var CancelPipelineReprocessingRequest;
(function (CancelPipelineReprocessingRequest) {
    /**
     * @internal
     */
    CancelPipelineReprocessingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelPipelineReprocessingRequest = exports.CancelPipelineReprocessingRequest || (exports.CancelPipelineReprocessingRequest = {}));
var CancelPipelineReprocessingResponse;
(function (CancelPipelineReprocessingResponse) {
    /**
     * @internal
     */
    CancelPipelineReprocessingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelPipelineReprocessingResponse = exports.CancelPipelineReprocessingResponse || (exports.CancelPipelineReprocessingResponse = {}));
var CustomerManagedChannelS3Storage;
(function (CustomerManagedChannelS3Storage) {
    /**
     * @internal
     */
    CustomerManagedChannelS3Storage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerManagedChannelS3Storage = exports.CustomerManagedChannelS3Storage || (exports.CustomerManagedChannelS3Storage = {}));
var ServiceManagedChannelS3Storage;
(function (ServiceManagedChannelS3Storage) {
    /**
     * @internal
     */
    ServiceManagedChannelS3Storage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceManagedChannelS3Storage = exports.ServiceManagedChannelS3Storage || (exports.ServiceManagedChannelS3Storage = {}));
var ChannelStorage;
(function (ChannelStorage) {
    /**
     * @internal
     */
    ChannelStorage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelStorage = exports.ChannelStorage || (exports.ChannelStorage = {}));
var RetentionPeriod;
(function (RetentionPeriod) {
    /**
     * @internal
     */
    RetentionPeriod.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetentionPeriod = exports.RetentionPeriod || (exports.RetentionPeriod = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateChannelRequest;
(function (CreateChannelRequest) {
    /**
     * @internal
     */
    CreateChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateChannelRequest = exports.CreateChannelRequest || (exports.CreateChannelRequest = {}));
var CreateChannelResponse;
(function (CreateChannelResponse) {
    /**
     * @internal
     */
    CreateChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateChannelResponse = exports.CreateChannelResponse || (exports.CreateChannelResponse = {}));
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
var ComputeType;
(function (ComputeType) {
    ComputeType["ACU_1"] = "ACU_1";
    ComputeType["ACU_2"] = "ACU_2";
})(ComputeType = exports.ComputeType || (exports.ComputeType = {}));
var ResourceConfiguration;
(function (ResourceConfiguration) {
    /**
     * @internal
     */
    ResourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConfiguration = exports.ResourceConfiguration || (exports.ResourceConfiguration = {}));
var DatasetContentVersionValue;
(function (DatasetContentVersionValue) {
    /**
     * @internal
     */
    DatasetContentVersionValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetContentVersionValue = exports.DatasetContentVersionValue || (exports.DatasetContentVersionValue = {}));
var OutputFileUriValue;
(function (OutputFileUriValue) {
    /**
     * @internal
     */
    OutputFileUriValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputFileUriValue = exports.OutputFileUriValue || (exports.OutputFileUriValue = {}));
var Variable;
(function (Variable) {
    /**
     * @internal
     */
    Variable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Variable = exports.Variable || (exports.Variable = {}));
var ContainerDatasetAction;
(function (ContainerDatasetAction) {
    /**
     * @internal
     */
    ContainerDatasetAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerDatasetAction = exports.ContainerDatasetAction || (exports.ContainerDatasetAction = {}));
var DeltaTime;
(function (DeltaTime) {
    /**
     * @internal
     */
    DeltaTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeltaTime = exports.DeltaTime || (exports.DeltaTime = {}));
var QueryFilter;
(function (QueryFilter) {
    /**
     * @internal
     */
    QueryFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryFilter = exports.QueryFilter || (exports.QueryFilter = {}));
var SqlQueryDatasetAction;
(function (SqlQueryDatasetAction) {
    /**
     * @internal
     */
    SqlQueryDatasetAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlQueryDatasetAction = exports.SqlQueryDatasetAction || (exports.SqlQueryDatasetAction = {}));
var DatasetAction;
(function (DatasetAction) {
    /**
     * @internal
     */
    DatasetAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetAction = exports.DatasetAction || (exports.DatasetAction = {}));
var IotEventsDestinationConfiguration;
(function (IotEventsDestinationConfiguration) {
    /**
     * @internal
     */
    IotEventsDestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotEventsDestinationConfiguration = exports.IotEventsDestinationConfiguration || (exports.IotEventsDestinationConfiguration = {}));
var GlueConfiguration;
(function (GlueConfiguration) {
    /**
     * @internal
     */
    GlueConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueConfiguration = exports.GlueConfiguration || (exports.GlueConfiguration = {}));
var S3DestinationConfiguration;
(function (S3DestinationConfiguration) {
    /**
     * @internal
     */
    S3DestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DestinationConfiguration = exports.S3DestinationConfiguration || (exports.S3DestinationConfiguration = {}));
var DatasetContentDeliveryDestination;
(function (DatasetContentDeliveryDestination) {
    /**
     * @internal
     */
    DatasetContentDeliveryDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetContentDeliveryDestination = exports.DatasetContentDeliveryDestination || (exports.DatasetContentDeliveryDestination = {}));
var DatasetContentDeliveryRule;
(function (DatasetContentDeliveryRule) {
    /**
     * @internal
     */
    DatasetContentDeliveryRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetContentDeliveryRule = exports.DatasetContentDeliveryRule || (exports.DatasetContentDeliveryRule = {}));
var DeltaTimeSessionWindowConfiguration;
(function (DeltaTimeSessionWindowConfiguration) {
    /**
     * @internal
     */
    DeltaTimeSessionWindowConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeltaTimeSessionWindowConfiguration = exports.DeltaTimeSessionWindowConfiguration || (exports.DeltaTimeSessionWindowConfiguration = {}));
var LateDataRuleConfiguration;
(function (LateDataRuleConfiguration) {
    /**
     * @internal
     */
    LateDataRuleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LateDataRuleConfiguration = exports.LateDataRuleConfiguration || (exports.LateDataRuleConfiguration = {}));
var LateDataRule;
(function (LateDataRule) {
    /**
     * @internal
     */
    LateDataRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LateDataRule = exports.LateDataRule || (exports.LateDataRule = {}));
var TriggeringDataset;
(function (TriggeringDataset) {
    /**
     * @internal
     */
    TriggeringDataset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggeringDataset = exports.TriggeringDataset || (exports.TriggeringDataset = {}));
var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var DatasetTrigger;
(function (DatasetTrigger) {
    /**
     * @internal
     */
    DatasetTrigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetTrigger = exports.DatasetTrigger || (exports.DatasetTrigger = {}));
var VersioningConfiguration;
(function (VersioningConfiguration) {
    /**
     * @internal
     */
    VersioningConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersioningConfiguration = exports.VersioningConfiguration || (exports.VersioningConfiguration = {}));
var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetRequest = exports.CreateDatasetRequest || (exports.CreateDatasetRequest = {}));
var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetResponse = exports.CreateDatasetResponse || (exports.CreateDatasetResponse = {}));
var CreateDatasetContentRequest;
(function (CreateDatasetContentRequest) {
    /**
     * @internal
     */
    CreateDatasetContentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetContentRequest = exports.CreateDatasetContentRequest || (exports.CreateDatasetContentRequest = {}));
var CreateDatasetContentResponse;
(function (CreateDatasetContentResponse) {
    /**
     * @internal
     */
    CreateDatasetContentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetContentResponse = exports.CreateDatasetContentResponse || (exports.CreateDatasetContentResponse = {}));
var CustomerManagedDatastoreS3Storage;
(function (CustomerManagedDatastoreS3Storage) {
    /**
     * @internal
     */
    CustomerManagedDatastoreS3Storage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerManagedDatastoreS3Storage = exports.CustomerManagedDatastoreS3Storage || (exports.CustomerManagedDatastoreS3Storage = {}));
var ServiceManagedDatastoreS3Storage;
(function (ServiceManagedDatastoreS3Storage) {
    /**
     * @internal
     */
    ServiceManagedDatastoreS3Storage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceManagedDatastoreS3Storage = exports.ServiceManagedDatastoreS3Storage || (exports.ServiceManagedDatastoreS3Storage = {}));
var DatastoreStorage;
(function (DatastoreStorage) {
    DatastoreStorage.visit = (value, visitor) => {
        if (value.serviceManagedS3 !== undefined)
            return visitor.serviceManagedS3(value.serviceManagedS3);
        if (value.customerManagedS3 !== undefined)
            return visitor.customerManagedS3(value.customerManagedS3);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    DatastoreStorage.filterSensitiveLog = (obj) => {
        if (obj.serviceManagedS3 !== undefined)
            return { serviceManagedS3: ServiceManagedDatastoreS3Storage.filterSensitiveLog(obj.serviceManagedS3) };
        if (obj.customerManagedS3 !== undefined)
            return { customerManagedS3: CustomerManagedDatastoreS3Storage.filterSensitiveLog(obj.customerManagedS3) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(DatastoreStorage = exports.DatastoreStorage || (exports.DatastoreStorage = {}));
var JsonConfiguration;
(function (JsonConfiguration) {
    /**
     * @internal
     */
    JsonConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JsonConfiguration = exports.JsonConfiguration || (exports.JsonConfiguration = {}));
var Column;
(function (Column) {
    /**
     * @internal
     */
    Column.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Column = exports.Column || (exports.Column = {}));
var SchemaDefinition;
(function (SchemaDefinition) {
    /**
     * @internal
     */
    SchemaDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaDefinition = exports.SchemaDefinition || (exports.SchemaDefinition = {}));
var ParquetConfiguration;
(function (ParquetConfiguration) {
    /**
     * @internal
     */
    ParquetConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParquetConfiguration = exports.ParquetConfiguration || (exports.ParquetConfiguration = {}));
var FileFormatConfiguration;
(function (FileFormatConfiguration) {
    /**
     * @internal
     */
    FileFormatConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileFormatConfiguration = exports.FileFormatConfiguration || (exports.FileFormatConfiguration = {}));
var CreateDatastoreRequest;
(function (CreateDatastoreRequest) {
    /**
     * @internal
     */
    CreateDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.datastoreStorage && { datastoreStorage: DatastoreStorage.filterSensitiveLog(obj.datastoreStorage) }),
    });
})(CreateDatastoreRequest = exports.CreateDatastoreRequest || (exports.CreateDatastoreRequest = {}));
var CreateDatastoreResponse;
(function (CreateDatastoreResponse) {
    /**
     * @internal
     */
    CreateDatastoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatastoreResponse = exports.CreateDatastoreResponse || (exports.CreateDatastoreResponse = {}));
var ChannelActivity;
(function (ChannelActivity) {
    /**
     * @internal
     */
    ChannelActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelActivity = exports.ChannelActivity || (exports.ChannelActivity = {}));
var DatastoreActivity;
(function (DatastoreActivity) {
    /**
     * @internal
     */
    DatastoreActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatastoreActivity = exports.DatastoreActivity || (exports.DatastoreActivity = {}));
var DeviceRegistryEnrichActivity;
(function (DeviceRegistryEnrichActivity) {
    /**
     * @internal
     */
    DeviceRegistryEnrichActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceRegistryEnrichActivity = exports.DeviceRegistryEnrichActivity || (exports.DeviceRegistryEnrichActivity = {}));
var DeviceShadowEnrichActivity;
(function (DeviceShadowEnrichActivity) {
    /**
     * @internal
     */
    DeviceShadowEnrichActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceShadowEnrichActivity = exports.DeviceShadowEnrichActivity || (exports.DeviceShadowEnrichActivity = {}));
var FilterActivity;
(function (FilterActivity) {
    /**
     * @internal
     */
    FilterActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterActivity = exports.FilterActivity || (exports.FilterActivity = {}));
var LambdaActivity;
(function (LambdaActivity) {
    /**
     * @internal
     */
    LambdaActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaActivity = exports.LambdaActivity || (exports.LambdaActivity = {}));
var MathActivity;
(function (MathActivity) {
    /**
     * @internal
     */
    MathActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MathActivity = exports.MathActivity || (exports.MathActivity = {}));
var RemoveAttributesActivity;
(function (RemoveAttributesActivity) {
    /**
     * @internal
     */
    RemoveAttributesActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAttributesActivity = exports.RemoveAttributesActivity || (exports.RemoveAttributesActivity = {}));
var SelectAttributesActivity;
(function (SelectAttributesActivity) {
    /**
     * @internal
     */
    SelectAttributesActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelectAttributesActivity = exports.SelectAttributesActivity || (exports.SelectAttributesActivity = {}));
var PipelineActivity;
(function (PipelineActivity) {
    /**
     * @internal
     */
    PipelineActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineActivity = exports.PipelineActivity || (exports.PipelineActivity = {}));
var CreatePipelineRequest;
(function (CreatePipelineRequest) {
    /**
     * @internal
     */
    CreatePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineRequest = exports.CreatePipelineRequest || (exports.CreatePipelineRequest = {}));
var CreatePipelineResponse;
(function (CreatePipelineResponse) {
    /**
     * @internal
     */
    CreatePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineResponse = exports.CreatePipelineResponse || (exports.CreatePipelineResponse = {}));
var DeleteChannelRequest;
(function (DeleteChannelRequest) {
    /**
     * @internal
     */
    DeleteChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChannelRequest = exports.DeleteChannelRequest || (exports.DeleteChannelRequest = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var DeleteDatasetContentRequest;
(function (DeleteDatasetContentRequest) {
    /**
     * @internal
     */
    DeleteDatasetContentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetContentRequest = exports.DeleteDatasetContentRequest || (exports.DeleteDatasetContentRequest = {}));
var DeleteDatastoreRequest;
(function (DeleteDatastoreRequest) {
    /**
     * @internal
     */
    DeleteDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatastoreRequest = exports.DeleteDatastoreRequest || (exports.DeleteDatastoreRequest = {}));
var DeletePipelineRequest;
(function (DeletePipelineRequest) {
    /**
     * @internal
     */
    DeletePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineRequest = exports.DeletePipelineRequest || (exports.DeletePipelineRequest = {}));
var DescribeChannelRequest;
(function (DescribeChannelRequest) {
    /**
     * @internal
     */
    DescribeChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChannelRequest = exports.DescribeChannelRequest || (exports.DescribeChannelRequest = {}));
var ChannelStatus;
(function (ChannelStatus) {
    ChannelStatus["ACTIVE"] = "ACTIVE";
    ChannelStatus["CREATING"] = "CREATING";
    ChannelStatus["DELETING"] = "DELETING";
})(ChannelStatus = exports.ChannelStatus || (exports.ChannelStatus = {}));
var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Channel = exports.Channel || (exports.Channel = {}));
var EstimatedResourceSize;
(function (EstimatedResourceSize) {
    /**
     * @internal
     */
    EstimatedResourceSize.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EstimatedResourceSize = exports.EstimatedResourceSize || (exports.EstimatedResourceSize = {}));
var ChannelStatistics;
(function (ChannelStatistics) {
    /**
     * @internal
     */
    ChannelStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelStatistics = exports.ChannelStatistics || (exports.ChannelStatistics = {}));
var DescribeChannelResponse;
(function (DescribeChannelResponse) {
    /**
     * @internal
     */
    DescribeChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChannelResponse = exports.DescribeChannelResponse || (exports.DescribeChannelResponse = {}));
var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetRequest = exports.DescribeDatasetRequest || (exports.DescribeDatasetRequest = {}));
var DatasetStatus;
(function (DatasetStatus) {
    DatasetStatus["ACTIVE"] = "ACTIVE";
    DatasetStatus["CREATING"] = "CREATING";
    DatasetStatus["DELETING"] = "DELETING";
})(DatasetStatus = exports.DatasetStatus || (exports.DatasetStatus = {}));
var Dataset;
(function (Dataset) {
    /**
     * @internal
     */
    Dataset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dataset = exports.Dataset || (exports.Dataset = {}));
var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetResponse = exports.DescribeDatasetResponse || (exports.DescribeDatasetResponse = {}));
var DescribeDatastoreRequest;
(function (DescribeDatastoreRequest) {
    /**
     * @internal
     */
    DescribeDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatastoreRequest = exports.DescribeDatastoreRequest || (exports.DescribeDatastoreRequest = {}));
var DatastoreStatus;
(function (DatastoreStatus) {
    DatastoreStatus["ACTIVE"] = "ACTIVE";
    DatastoreStatus["CREATING"] = "CREATING";
    DatastoreStatus["DELETING"] = "DELETING";
})(DatastoreStatus = exports.DatastoreStatus || (exports.DatastoreStatus = {}));
var Datastore;
(function (Datastore) {
    /**
     * @internal
     */
    Datastore.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.storage && { storage: DatastoreStorage.filterSensitiveLog(obj.storage) }),
    });
})(Datastore = exports.Datastore || (exports.Datastore = {}));
var DatastoreStatistics;
(function (DatastoreStatistics) {
    /**
     * @internal
     */
    DatastoreStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatastoreStatistics = exports.DatastoreStatistics || (exports.DatastoreStatistics = {}));
var DescribeDatastoreResponse;
(function (DescribeDatastoreResponse) {
    /**
     * @internal
     */
    DescribeDatastoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.datastore && { datastore: Datastore.filterSensitiveLog(obj.datastore) }),
    });
})(DescribeDatastoreResponse = exports.DescribeDatastoreResponse || (exports.DescribeDatastoreResponse = {}));
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
var DescribePipelineRequest;
(function (DescribePipelineRequest) {
    /**
     * @internal
     */
    DescribePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineRequest = exports.DescribePipelineRequest || (exports.DescribePipelineRequest = {}));
var ReprocessingStatus;
(function (ReprocessingStatus) {
    ReprocessingStatus["CANCELLED"] = "CANCELLED";
    ReprocessingStatus["FAILED"] = "FAILED";
    ReprocessingStatus["RUNNING"] = "RUNNING";
    ReprocessingStatus["SUCCEEDED"] = "SUCCEEDED";
})(ReprocessingStatus = exports.ReprocessingStatus || (exports.ReprocessingStatus = {}));
var ReprocessingSummary;
(function (ReprocessingSummary) {
    /**
     * @internal
     */
    ReprocessingSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReprocessingSummary = exports.ReprocessingSummary || (exports.ReprocessingSummary = {}));
var Pipeline;
(function (Pipeline) {
    /**
     * @internal
     */
    Pipeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Pipeline = exports.Pipeline || (exports.Pipeline = {}));
var DescribePipelineResponse;
(function (DescribePipelineResponse) {
    /**
     * @internal
     */
    DescribePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineResponse = exports.DescribePipelineResponse || (exports.DescribePipelineResponse = {}));
var GetDatasetContentRequest;
(function (GetDatasetContentRequest) {
    /**
     * @internal
     */
    GetDatasetContentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDatasetContentRequest = exports.GetDatasetContentRequest || (exports.GetDatasetContentRequest = {}));
var DatasetEntry;
(function (DatasetEntry) {
    /**
     * @internal
     */
    DatasetEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetEntry = exports.DatasetEntry || (exports.DatasetEntry = {}));
var DatasetContentState;
(function (DatasetContentState) {
    DatasetContentState["CREATING"] = "CREATING";
    DatasetContentState["FAILED"] = "FAILED";
    DatasetContentState["SUCCEEDED"] = "SUCCEEDED";
})(DatasetContentState = exports.DatasetContentState || (exports.DatasetContentState = {}));
var DatasetContentStatus;
(function (DatasetContentStatus) {
    /**
     * @internal
     */
    DatasetContentStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetContentStatus = exports.DatasetContentStatus || (exports.DatasetContentStatus = {}));
var GetDatasetContentResponse;
(function (GetDatasetContentResponse) {
    /**
     * @internal
     */
    GetDatasetContentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDatasetContentResponse = exports.GetDatasetContentResponse || (exports.GetDatasetContentResponse = {}));
var ListChannelsRequest;
(function (ListChannelsRequest) {
    /**
     * @internal
     */
    ListChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChannelsRequest = exports.ListChannelsRequest || (exports.ListChannelsRequest = {}));
var CustomerManagedChannelS3StorageSummary;
(function (CustomerManagedChannelS3StorageSummary) {
    /**
     * @internal
     */
    CustomerManagedChannelS3StorageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerManagedChannelS3StorageSummary = exports.CustomerManagedChannelS3StorageSummary || (exports.CustomerManagedChannelS3StorageSummary = {}));
var ServiceManagedChannelS3StorageSummary;
(function (ServiceManagedChannelS3StorageSummary) {
    /**
     * @internal
     */
    ServiceManagedChannelS3StorageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceManagedChannelS3StorageSummary = exports.ServiceManagedChannelS3StorageSummary || (exports.ServiceManagedChannelS3StorageSummary = {}));
var ChannelStorageSummary;
(function (ChannelStorageSummary) {
    /**
     * @internal
     */
    ChannelStorageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelStorageSummary = exports.ChannelStorageSummary || (exports.ChannelStorageSummary = {}));
var ChannelSummary;
(function (ChannelSummary) {
    /**
     * @internal
     */
    ChannelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelSummary = exports.ChannelSummary || (exports.ChannelSummary = {}));
var ListChannelsResponse;
(function (ListChannelsResponse) {
    /**
     * @internal
     */
    ListChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChannelsResponse = exports.ListChannelsResponse || (exports.ListChannelsResponse = {}));
var ListDatasetContentsRequest;
(function (ListDatasetContentsRequest) {
    /**
     * @internal
     */
    ListDatasetContentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetContentsRequest = exports.ListDatasetContentsRequest || (exports.ListDatasetContentsRequest = {}));
var DatasetContentSummary;
(function (DatasetContentSummary) {
    /**
     * @internal
     */
    DatasetContentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetContentSummary = exports.DatasetContentSummary || (exports.DatasetContentSummary = {}));
var ListDatasetContentsResponse;
(function (ListDatasetContentsResponse) {
    /**
     * @internal
     */
    ListDatasetContentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetContentsResponse = exports.ListDatasetContentsResponse || (exports.ListDatasetContentsResponse = {}));
var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    /**
     * @internal
     */
    ListDatasetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsRequest = exports.ListDatasetsRequest || (exports.ListDatasetsRequest = {}));
var DatasetActionType;
(function (DatasetActionType) {
    DatasetActionType["CONTAINER"] = "CONTAINER";
    DatasetActionType["QUERY"] = "QUERY";
})(DatasetActionType = exports.DatasetActionType || (exports.DatasetActionType = {}));
var DatasetActionSummary;
(function (DatasetActionSummary) {
    /**
     * @internal
     */
    DatasetActionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetActionSummary = exports.DatasetActionSummary || (exports.DatasetActionSummary = {}));
var DatasetSummary;
(function (DatasetSummary) {
    /**
     * @internal
     */
    DatasetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetSummary = exports.DatasetSummary || (exports.DatasetSummary = {}));
var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    /**
     * @internal
     */
    ListDatasetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsResponse = exports.ListDatasetsResponse || (exports.ListDatasetsResponse = {}));
var ListDatastoresRequest;
(function (ListDatastoresRequest) {
    /**
     * @internal
     */
    ListDatastoresRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatastoresRequest = exports.ListDatastoresRequest || (exports.ListDatastoresRequest = {}));
var CustomerManagedDatastoreS3StorageSummary;
(function (CustomerManagedDatastoreS3StorageSummary) {
    /**
     * @internal
     */
    CustomerManagedDatastoreS3StorageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerManagedDatastoreS3StorageSummary = exports.CustomerManagedDatastoreS3StorageSummary || (exports.CustomerManagedDatastoreS3StorageSummary = {}));
var ServiceManagedDatastoreS3StorageSummary;
(function (ServiceManagedDatastoreS3StorageSummary) {
    /**
     * @internal
     */
    ServiceManagedDatastoreS3StorageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceManagedDatastoreS3StorageSummary = exports.ServiceManagedDatastoreS3StorageSummary || (exports.ServiceManagedDatastoreS3StorageSummary = {}));
var DatastoreStorageSummary;
(function (DatastoreStorageSummary) {
    /**
     * @internal
     */
    DatastoreStorageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatastoreStorageSummary = exports.DatastoreStorageSummary || (exports.DatastoreStorageSummary = {}));
var FileFormatType;
(function (FileFormatType) {
    FileFormatType["JSON"] = "JSON";
    FileFormatType["PARQUET"] = "PARQUET";
})(FileFormatType = exports.FileFormatType || (exports.FileFormatType = {}));
var DatastoreSummary;
(function (DatastoreSummary) {
    /**
     * @internal
     */
    DatastoreSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatastoreSummary = exports.DatastoreSummary || (exports.DatastoreSummary = {}));
var ListDatastoresResponse;
(function (ListDatastoresResponse) {
    /**
     * @internal
     */
    ListDatastoresResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatastoresResponse = exports.ListDatastoresResponse || (exports.ListDatastoresResponse = {}));
var ListPipelinesRequest;
(function (ListPipelinesRequest) {
    /**
     * @internal
     */
    ListPipelinesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesRequest = exports.ListPipelinesRequest || (exports.ListPipelinesRequest = {}));
var PipelineSummary;
(function (PipelineSummary) {
    /**
     * @internal
     */
    PipelineSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineSummary = exports.PipelineSummary || (exports.PipelineSummary = {}));
var ListPipelinesResponse;
(function (ListPipelinesResponse) {
    /**
     * @internal
     */
    ListPipelinesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesResponse = exports.ListPipelinesResponse || (exports.ListPipelinesResponse = {}));
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
var PutLoggingOptionsRequest;
(function (PutLoggingOptionsRequest) {
    /**
     * @internal
     */
    PutLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLoggingOptionsRequest = exports.PutLoggingOptionsRequest || (exports.PutLoggingOptionsRequest = {}));
var RunPipelineActivityRequest;
(function (RunPipelineActivityRequest) {
    /**
     * @internal
     */
    RunPipelineActivityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunPipelineActivityRequest = exports.RunPipelineActivityRequest || (exports.RunPipelineActivityRequest = {}));
var RunPipelineActivityResponse;
(function (RunPipelineActivityResponse) {
    /**
     * @internal
     */
    RunPipelineActivityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunPipelineActivityResponse = exports.RunPipelineActivityResponse || (exports.RunPipelineActivityResponse = {}));
var SampleChannelDataRequest;
(function (SampleChannelDataRequest) {
    /**
     * @internal
     */
    SampleChannelDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SampleChannelDataRequest = exports.SampleChannelDataRequest || (exports.SampleChannelDataRequest = {}));
var SampleChannelDataResponse;
(function (SampleChannelDataResponse) {
    /**
     * @internal
     */
    SampleChannelDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SampleChannelDataResponse = exports.SampleChannelDataResponse || (exports.SampleChannelDataResponse = {}));
var ChannelMessages;
(function (ChannelMessages) {
    /**
     * @internal
     */
    ChannelMessages.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelMessages = exports.ChannelMessages || (exports.ChannelMessages = {}));
var StartPipelineReprocessingRequest;
(function (StartPipelineReprocessingRequest) {
    /**
     * @internal
     */
    StartPipelineReprocessingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPipelineReprocessingRequest = exports.StartPipelineReprocessingRequest || (exports.StartPipelineReprocessingRequest = {}));
var StartPipelineReprocessingResponse;
(function (StartPipelineReprocessingResponse) {
    /**
     * @internal
     */
    StartPipelineReprocessingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPipelineReprocessingResponse = exports.StartPipelineReprocessingResponse || (exports.StartPipelineReprocessingResponse = {}));
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
var UpdateChannelRequest;
(function (UpdateChannelRequest) {
    /**
     * @internal
     */
    UpdateChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateChannelRequest = exports.UpdateChannelRequest || (exports.UpdateChannelRequest = {}));
var UpdateDatasetRequest;
(function (UpdateDatasetRequest) {
    /**
     * @internal
     */
    UpdateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetRequest = exports.UpdateDatasetRequest || (exports.UpdateDatasetRequest = {}));
var UpdateDatastoreRequest;
(function (UpdateDatastoreRequest) {
    /**
     * @internal
     */
    UpdateDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.datastoreStorage && { datastoreStorage: DatastoreStorage.filterSensitiveLog(obj.datastoreStorage) }),
    });
})(UpdateDatastoreRequest = exports.UpdateDatastoreRequest || (exports.UpdateDatastoreRequest = {}));
var UpdatePipelineRequest;
(function (UpdatePipelineRequest) {
    /**
     * @internal
     */
    UpdatePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineRequest = exports.UpdatePipelineRequest || (exports.UpdatePipelineRequest = {}));
//# sourceMappingURL=models_0.js.map