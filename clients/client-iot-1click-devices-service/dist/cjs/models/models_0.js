"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeviceStateResponse = exports.UpdateDeviceStateRequest = exports.UntagResourceRequest = exports.UnclaimDeviceResponse = exports.UnclaimDeviceRequest = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListDevicesResponse = exports.ListDevicesRequest = exports.ListDeviceEventsResponse = exports.ListDeviceEventsRequest = exports.RangeNotSatisfiableException = exports.InvokeDeviceMethodResponse = exports.InvokeDeviceMethodRequest = exports.InitiateDeviceClaimResponse = exports.InitiateDeviceClaimRequest = exports.GetDeviceMethodsResponse = exports.GetDeviceMethodsRequest = exports.ResourceConflictException = exports.PreconditionFailedException = exports.FinalizeDeviceClaimResponse = exports.FinalizeDeviceClaimRequest = exports.ResourceNotFoundException = exports.DescribeDeviceResponse = exports.DescribeDeviceRequest = exports.InvalidRequestException = exports.InternalFailureException = exports.ForbiddenException = exports.ClaimDevicesByClaimCodeResponse = exports.ClaimDevicesByClaimCodeRequest = exports.DeviceMethod = exports.DeviceEvent = exports.Device = exports.Attributes = exports.DeviceDescription = void 0;
var DeviceDescription;
(function (DeviceDescription) {
    /**
     * @internal
     */
    DeviceDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceDescription = exports.DeviceDescription || (exports.DeviceDescription = {}));
var Attributes;
(function (Attributes) {
    /**
     * @internal
     */
    Attributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attributes = exports.Attributes || (exports.Attributes = {}));
var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Device = exports.Device || (exports.Device = {}));
var DeviceEvent;
(function (DeviceEvent) {
    /**
     * @internal
     */
    DeviceEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceEvent = exports.DeviceEvent || (exports.DeviceEvent = {}));
var DeviceMethod;
(function (DeviceMethod) {
    /**
     * @internal
     */
    DeviceMethod.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceMethod = exports.DeviceMethod || (exports.DeviceMethod = {}));
var ClaimDevicesByClaimCodeRequest;
(function (ClaimDevicesByClaimCodeRequest) {
    /**
     * @internal
     */
    ClaimDevicesByClaimCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClaimDevicesByClaimCodeRequest = exports.ClaimDevicesByClaimCodeRequest || (exports.ClaimDevicesByClaimCodeRequest = {}));
var ClaimDevicesByClaimCodeResponse;
(function (ClaimDevicesByClaimCodeResponse) {
    /**
     * @internal
     */
    ClaimDevicesByClaimCodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClaimDevicesByClaimCodeResponse = exports.ClaimDevicesByClaimCodeResponse || (exports.ClaimDevicesByClaimCodeResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
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
var DescribeDeviceRequest;
(function (DescribeDeviceRequest) {
    /**
     * @internal
     */
    DescribeDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceRequest = exports.DescribeDeviceRequest || (exports.DescribeDeviceRequest = {}));
var DescribeDeviceResponse;
(function (DescribeDeviceResponse) {
    /**
     * @internal
     */
    DescribeDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceResponse = exports.DescribeDeviceResponse || (exports.DescribeDeviceResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var FinalizeDeviceClaimRequest;
(function (FinalizeDeviceClaimRequest) {
    /**
     * @internal
     */
    FinalizeDeviceClaimRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinalizeDeviceClaimRequest = exports.FinalizeDeviceClaimRequest || (exports.FinalizeDeviceClaimRequest = {}));
var FinalizeDeviceClaimResponse;
(function (FinalizeDeviceClaimResponse) {
    /**
     * @internal
     */
    FinalizeDeviceClaimResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinalizeDeviceClaimResponse = exports.FinalizeDeviceClaimResponse || (exports.FinalizeDeviceClaimResponse = {}));
var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreconditionFailedException = exports.PreconditionFailedException || (exports.PreconditionFailedException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var GetDeviceMethodsRequest;
(function (GetDeviceMethodsRequest) {
    /**
     * @internal
     */
    GetDeviceMethodsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceMethodsRequest = exports.GetDeviceMethodsRequest || (exports.GetDeviceMethodsRequest = {}));
var GetDeviceMethodsResponse;
(function (GetDeviceMethodsResponse) {
    /**
     * @internal
     */
    GetDeviceMethodsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceMethodsResponse = exports.GetDeviceMethodsResponse || (exports.GetDeviceMethodsResponse = {}));
var InitiateDeviceClaimRequest;
(function (InitiateDeviceClaimRequest) {
    /**
     * @internal
     */
    InitiateDeviceClaimRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateDeviceClaimRequest = exports.InitiateDeviceClaimRequest || (exports.InitiateDeviceClaimRequest = {}));
var InitiateDeviceClaimResponse;
(function (InitiateDeviceClaimResponse) {
    /**
     * @internal
     */
    InitiateDeviceClaimResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateDeviceClaimResponse = exports.InitiateDeviceClaimResponse || (exports.InitiateDeviceClaimResponse = {}));
var InvokeDeviceMethodRequest;
(function (InvokeDeviceMethodRequest) {
    /**
     * @internal
     */
    InvokeDeviceMethodRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvokeDeviceMethodRequest = exports.InvokeDeviceMethodRequest || (exports.InvokeDeviceMethodRequest = {}));
var InvokeDeviceMethodResponse;
(function (InvokeDeviceMethodResponse) {
    /**
     * @internal
     */
    InvokeDeviceMethodResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvokeDeviceMethodResponse = exports.InvokeDeviceMethodResponse || (exports.InvokeDeviceMethodResponse = {}));
var RangeNotSatisfiableException;
(function (RangeNotSatisfiableException) {
    /**
     * @internal
     */
    RangeNotSatisfiableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RangeNotSatisfiableException = exports.RangeNotSatisfiableException || (exports.RangeNotSatisfiableException = {}));
var ListDeviceEventsRequest;
(function (ListDeviceEventsRequest) {
    /**
     * @internal
     */
    ListDeviceEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceEventsRequest = exports.ListDeviceEventsRequest || (exports.ListDeviceEventsRequest = {}));
var ListDeviceEventsResponse;
(function (ListDeviceEventsResponse) {
    /**
     * @internal
     */
    ListDeviceEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceEventsResponse = exports.ListDeviceEventsResponse || (exports.ListDeviceEventsResponse = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResponse;
(function (ListDevicesResponse) {
    /**
     * @internal
     */
    ListDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesResponse = exports.ListDevicesResponse || (exports.ListDevicesResponse = {}));
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
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UnclaimDeviceRequest;
(function (UnclaimDeviceRequest) {
    /**
     * @internal
     */
    UnclaimDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnclaimDeviceRequest = exports.UnclaimDeviceRequest || (exports.UnclaimDeviceRequest = {}));
var UnclaimDeviceResponse;
(function (UnclaimDeviceResponse) {
    /**
     * @internal
     */
    UnclaimDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnclaimDeviceResponse = exports.UnclaimDeviceResponse || (exports.UnclaimDeviceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateDeviceStateRequest;
(function (UpdateDeviceStateRequest) {
    /**
     * @internal
     */
    UpdateDeviceStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceStateRequest = exports.UpdateDeviceStateRequest || (exports.UpdateDeviceStateRequest = {}));
var UpdateDeviceStateResponse;
(function (UpdateDeviceStateResponse) {
    /**
     * @internal
     */
    UpdateDeviceStateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceStateResponse = exports.UpdateDeviceStateResponse || (exports.UpdateDeviceStateResponse = {}));
//# sourceMappingURL=models_0.js.map