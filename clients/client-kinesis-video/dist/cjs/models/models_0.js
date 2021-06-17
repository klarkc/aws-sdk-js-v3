"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsForStreamInput = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListStreamsOutput = exports.ListStreamsInput = exports.StreamNameCondition = exports.ListSignalingChannelsOutput = exports.ListSignalingChannelsInput = exports.InvalidResourceFormatException = exports.GetSignalingChannelEndpointOutput = exports.ResourceEndpointListItem = exports.GetSignalingChannelEndpointInput = exports.SingleMasterChannelEndpointConfiguration = exports.GetDataEndpointOutput = exports.GetDataEndpointInput = exports.DescribeStreamOutput = exports.StreamInfo = exports.DescribeStreamInput = exports.DescribeSignalingChannelOutput = exports.DescribeSignalingChannelInput = exports.NotAuthorizedException = exports.DeleteStreamOutput = exports.DeleteStreamInput = exports.VersionMismatchException = exports.ResourceNotFoundException = exports.DeleteSignalingChannelOutput = exports.DeleteSignalingChannelInput = exports.InvalidDeviceException = exports.DeviceStreamLimitExceededException = exports.CreateStreamOutput = exports.CreateStreamInput = exports.TagsPerResourceExceededLimitException = exports.ResourceInUseException = exports.InvalidArgumentException = exports.CreateSignalingChannelOutput = exports.CreateSignalingChannelInput = exports.Tag = exports.ClientLimitExceededException = exports.ChannelRole = exports.ChannelProtocol = exports.ChannelNameCondition = exports.ComparisonOperator = exports.ChannelInfo = exports.SingleMasterConfiguration = exports.ChannelType = exports.Status = exports.APIName = exports.AccountStreamLimitExceededException = exports.AccountChannelLimitExceededException = exports.AccessDeniedException = void 0;
exports.UpdateStreamOutput = exports.UpdateStreamInput = exports.UpdateSignalingChannelOutput = exports.UpdateSignalingChannelInput = exports.UpdateDataRetentionOutput = exports.UpdateDataRetentionInput = exports.UpdateDataRetentionOperation = exports.UntagStreamOutput = exports.UntagStreamInput = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagStreamOutput = exports.TagStreamInput = exports.TagResourceOutput = exports.TagResourceInput = exports.ListTagsForStreamOutput = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccountChannelLimitExceededException;
(function (AccountChannelLimitExceededException) {
    /**
     * @internal
     */
    AccountChannelLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountChannelLimitExceededException = exports.AccountChannelLimitExceededException || (exports.AccountChannelLimitExceededException = {}));
var AccountStreamLimitExceededException;
(function (AccountStreamLimitExceededException) {
    /**
     * @internal
     */
    AccountStreamLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountStreamLimitExceededException = exports.AccountStreamLimitExceededException || (exports.AccountStreamLimitExceededException = {}));
var APIName;
(function (APIName) {
    APIName["GET_CLIP"] = "GET_CLIP";
    APIName["GET_DASH_STREAMING_SESSION_URL"] = "GET_DASH_STREAMING_SESSION_URL";
    APIName["GET_HLS_STREAMING_SESSION_URL"] = "GET_HLS_STREAMING_SESSION_URL";
    APIName["GET_MEDIA"] = "GET_MEDIA";
    APIName["GET_MEDIA_FOR_FRAGMENT_LIST"] = "GET_MEDIA_FOR_FRAGMENT_LIST";
    APIName["LIST_FRAGMENTS"] = "LIST_FRAGMENTS";
    APIName["PUT_MEDIA"] = "PUT_MEDIA";
})(APIName = exports.APIName || (exports.APIName = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["CREATING"] = "CREATING";
    Status["DELETING"] = "DELETING";
    Status["UPDATING"] = "UPDATING";
})(Status = exports.Status || (exports.Status = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType["SINGLE_MASTER"] = "SINGLE_MASTER";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var SingleMasterConfiguration;
(function (SingleMasterConfiguration) {
    /**
     * @internal
     */
    SingleMasterConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SingleMasterConfiguration = exports.SingleMasterConfiguration || (exports.SingleMasterConfiguration = {}));
var ChannelInfo;
(function (ChannelInfo) {
    /**
     * @internal
     */
    ChannelInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelInfo = exports.ChannelInfo || (exports.ChannelInfo = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["BEGINS_WITH"] = "BEGINS_WITH";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var ChannelNameCondition;
(function (ChannelNameCondition) {
    /**
     * @internal
     */
    ChannelNameCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelNameCondition = exports.ChannelNameCondition || (exports.ChannelNameCondition = {}));
var ChannelProtocol;
(function (ChannelProtocol) {
    ChannelProtocol["HTTPS"] = "HTTPS";
    ChannelProtocol["WSS"] = "WSS";
})(ChannelProtocol = exports.ChannelProtocol || (exports.ChannelProtocol = {}));
var ChannelRole;
(function (ChannelRole) {
    ChannelRole["MASTER"] = "MASTER";
    ChannelRole["VIEWER"] = "VIEWER";
})(ChannelRole = exports.ChannelRole || (exports.ChannelRole = {}));
var ClientLimitExceededException;
(function (ClientLimitExceededException) {
    /**
     * @internal
     */
    ClientLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientLimitExceededException = exports.ClientLimitExceededException || (exports.ClientLimitExceededException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateSignalingChannelInput;
(function (CreateSignalingChannelInput) {
    /**
     * @internal
     */
    CreateSignalingChannelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSignalingChannelInput = exports.CreateSignalingChannelInput || (exports.CreateSignalingChannelInput = {}));
var CreateSignalingChannelOutput;
(function (CreateSignalingChannelOutput) {
    /**
     * @internal
     */
    CreateSignalingChannelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSignalingChannelOutput = exports.CreateSignalingChannelOutput || (exports.CreateSignalingChannelOutput = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var TagsPerResourceExceededLimitException;
(function (TagsPerResourceExceededLimitException) {
    /**
     * @internal
     */
    TagsPerResourceExceededLimitException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagsPerResourceExceededLimitException = exports.TagsPerResourceExceededLimitException || (exports.TagsPerResourceExceededLimitException = {}));
var CreateStreamInput;
(function (CreateStreamInput) {
    /**
     * @internal
     */
    CreateStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamInput = exports.CreateStreamInput || (exports.CreateStreamInput = {}));
var CreateStreamOutput;
(function (CreateStreamOutput) {
    /**
     * @internal
     */
    CreateStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamOutput = exports.CreateStreamOutput || (exports.CreateStreamOutput = {}));
var DeviceStreamLimitExceededException;
(function (DeviceStreamLimitExceededException) {
    /**
     * @internal
     */
    DeviceStreamLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceStreamLimitExceededException = exports.DeviceStreamLimitExceededException || (exports.DeviceStreamLimitExceededException = {}));
var InvalidDeviceException;
(function (InvalidDeviceException) {
    /**
     * @internal
     */
    InvalidDeviceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeviceException = exports.InvalidDeviceException || (exports.InvalidDeviceException = {}));
var DeleteSignalingChannelInput;
(function (DeleteSignalingChannelInput) {
    /**
     * @internal
     */
    DeleteSignalingChannelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSignalingChannelInput = exports.DeleteSignalingChannelInput || (exports.DeleteSignalingChannelInput = {}));
var DeleteSignalingChannelOutput;
(function (DeleteSignalingChannelOutput) {
    /**
     * @internal
     */
    DeleteSignalingChannelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSignalingChannelOutput = exports.DeleteSignalingChannelOutput || (exports.DeleteSignalingChannelOutput = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var VersionMismatchException;
(function (VersionMismatchException) {
    /**
     * @internal
     */
    VersionMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionMismatchException = exports.VersionMismatchException || (exports.VersionMismatchException = {}));
var DeleteStreamInput;
(function (DeleteStreamInput) {
    /**
     * @internal
     */
    DeleteStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamInput = exports.DeleteStreamInput || (exports.DeleteStreamInput = {}));
var DeleteStreamOutput;
(function (DeleteStreamOutput) {
    /**
     * @internal
     */
    DeleteStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamOutput = exports.DeleteStreamOutput || (exports.DeleteStreamOutput = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var DescribeSignalingChannelInput;
(function (DescribeSignalingChannelInput) {
    /**
     * @internal
     */
    DescribeSignalingChannelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSignalingChannelInput = exports.DescribeSignalingChannelInput || (exports.DescribeSignalingChannelInput = {}));
var DescribeSignalingChannelOutput;
(function (DescribeSignalingChannelOutput) {
    /**
     * @internal
     */
    DescribeSignalingChannelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSignalingChannelOutput = exports.DescribeSignalingChannelOutput || (exports.DescribeSignalingChannelOutput = {}));
var DescribeStreamInput;
(function (DescribeStreamInput) {
    /**
     * @internal
     */
    DescribeStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamInput = exports.DescribeStreamInput || (exports.DescribeStreamInput = {}));
var StreamInfo;
(function (StreamInfo) {
    /**
     * @internal
     */
    StreamInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamInfo = exports.StreamInfo || (exports.StreamInfo = {}));
var DescribeStreamOutput;
(function (DescribeStreamOutput) {
    /**
     * @internal
     */
    DescribeStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamOutput = exports.DescribeStreamOutput || (exports.DescribeStreamOutput = {}));
var GetDataEndpointInput;
(function (GetDataEndpointInput) {
    /**
     * @internal
     */
    GetDataEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataEndpointInput = exports.GetDataEndpointInput || (exports.GetDataEndpointInput = {}));
var GetDataEndpointOutput;
(function (GetDataEndpointOutput) {
    /**
     * @internal
     */
    GetDataEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataEndpointOutput = exports.GetDataEndpointOutput || (exports.GetDataEndpointOutput = {}));
var SingleMasterChannelEndpointConfiguration;
(function (SingleMasterChannelEndpointConfiguration) {
    /**
     * @internal
     */
    SingleMasterChannelEndpointConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SingleMasterChannelEndpointConfiguration = exports.SingleMasterChannelEndpointConfiguration || (exports.SingleMasterChannelEndpointConfiguration = {}));
var GetSignalingChannelEndpointInput;
(function (GetSignalingChannelEndpointInput) {
    /**
     * @internal
     */
    GetSignalingChannelEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSignalingChannelEndpointInput = exports.GetSignalingChannelEndpointInput || (exports.GetSignalingChannelEndpointInput = {}));
var ResourceEndpointListItem;
(function (ResourceEndpointListItem) {
    /**
     * @internal
     */
    ResourceEndpointListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceEndpointListItem = exports.ResourceEndpointListItem || (exports.ResourceEndpointListItem = {}));
var GetSignalingChannelEndpointOutput;
(function (GetSignalingChannelEndpointOutput) {
    /**
     * @internal
     */
    GetSignalingChannelEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSignalingChannelEndpointOutput = exports.GetSignalingChannelEndpointOutput || (exports.GetSignalingChannelEndpointOutput = {}));
var InvalidResourceFormatException;
(function (InvalidResourceFormatException) {
    /**
     * @internal
     */
    InvalidResourceFormatException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceFormatException = exports.InvalidResourceFormatException || (exports.InvalidResourceFormatException = {}));
var ListSignalingChannelsInput;
(function (ListSignalingChannelsInput) {
    /**
     * @internal
     */
    ListSignalingChannelsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSignalingChannelsInput = exports.ListSignalingChannelsInput || (exports.ListSignalingChannelsInput = {}));
var ListSignalingChannelsOutput;
(function (ListSignalingChannelsOutput) {
    /**
     * @internal
     */
    ListSignalingChannelsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSignalingChannelsOutput = exports.ListSignalingChannelsOutput || (exports.ListSignalingChannelsOutput = {}));
var StreamNameCondition;
(function (StreamNameCondition) {
    /**
     * @internal
     */
    StreamNameCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamNameCondition = exports.StreamNameCondition || (exports.StreamNameCondition = {}));
var ListStreamsInput;
(function (ListStreamsInput) {
    /**
     * @internal
     */
    ListStreamsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamsInput = exports.ListStreamsInput || (exports.ListStreamsInput = {}));
var ListStreamsOutput;
(function (ListStreamsOutput) {
    /**
     * @internal
     */
    ListStreamsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamsOutput = exports.ListStreamsOutput || (exports.ListStreamsOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ListTagsForStreamInput;
(function (ListTagsForStreamInput) {
    /**
     * @internal
     */
    ListTagsForStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForStreamInput = exports.ListTagsForStreamInput || (exports.ListTagsForStreamInput = {}));
var ListTagsForStreamOutput;
(function (ListTagsForStreamOutput) {
    /**
     * @internal
     */
    ListTagsForStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForStreamOutput = exports.ListTagsForStreamOutput || (exports.ListTagsForStreamOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var TagStreamInput;
(function (TagStreamInput) {
    /**
     * @internal
     */
    TagStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagStreamInput = exports.TagStreamInput || (exports.TagStreamInput = {}));
var TagStreamOutput;
(function (TagStreamOutput) {
    /**
     * @internal
     */
    TagStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagStreamOutput = exports.TagStreamOutput || (exports.TagStreamOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var UntagStreamInput;
(function (UntagStreamInput) {
    /**
     * @internal
     */
    UntagStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagStreamInput = exports.UntagStreamInput || (exports.UntagStreamInput = {}));
var UntagStreamOutput;
(function (UntagStreamOutput) {
    /**
     * @internal
     */
    UntagStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagStreamOutput = exports.UntagStreamOutput || (exports.UntagStreamOutput = {}));
var UpdateDataRetentionOperation;
(function (UpdateDataRetentionOperation) {
    UpdateDataRetentionOperation["DECREASE_DATA_RETENTION"] = "DECREASE_DATA_RETENTION";
    UpdateDataRetentionOperation["INCREASE_DATA_RETENTION"] = "INCREASE_DATA_RETENTION";
})(UpdateDataRetentionOperation = exports.UpdateDataRetentionOperation || (exports.UpdateDataRetentionOperation = {}));
var UpdateDataRetentionInput;
(function (UpdateDataRetentionInput) {
    /**
     * @internal
     */
    UpdateDataRetentionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataRetentionInput = exports.UpdateDataRetentionInput || (exports.UpdateDataRetentionInput = {}));
var UpdateDataRetentionOutput;
(function (UpdateDataRetentionOutput) {
    /**
     * @internal
     */
    UpdateDataRetentionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataRetentionOutput = exports.UpdateDataRetentionOutput || (exports.UpdateDataRetentionOutput = {}));
var UpdateSignalingChannelInput;
(function (UpdateSignalingChannelInput) {
    /**
     * @internal
     */
    UpdateSignalingChannelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSignalingChannelInput = exports.UpdateSignalingChannelInput || (exports.UpdateSignalingChannelInput = {}));
var UpdateSignalingChannelOutput;
(function (UpdateSignalingChannelOutput) {
    /**
     * @internal
     */
    UpdateSignalingChannelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSignalingChannelOutput = exports.UpdateSignalingChannelOutput || (exports.UpdateSignalingChannelOutput = {}));
var UpdateStreamInput;
(function (UpdateStreamInput) {
    /**
     * @internal
     */
    UpdateStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStreamInput = exports.UpdateStreamInput || (exports.UpdateStreamInput = {}));
var UpdateStreamOutput;
(function (UpdateStreamOutput) {
    /**
     * @internal
     */
    UpdateStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStreamOutput = exports.UpdateStreamOutput || (exports.UpdateStreamOutput = {}));
//# sourceMappingURL=models_0.js.map