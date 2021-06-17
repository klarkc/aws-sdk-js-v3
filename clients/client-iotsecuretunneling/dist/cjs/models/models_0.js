"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.OpenTunnelResponse = exports.OpenTunnelRequest = exports.LimitExceededException = exports.ListTunnelsResponse = exports.TunnelSummary = exports.ListTunnelsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.DescribeTunnelResponse = exports.Tunnel = exports.TimeoutConfig = exports.Tag = exports.TunnelStatus = exports.DestinationConfig = exports.DescribeTunnelRequest = exports.ConnectionState = exports.ConnectionStatus = exports.ResourceNotFoundException = exports.CloseTunnelResponse = exports.CloseTunnelRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CloseTunnelRequest;
(function (CloseTunnelRequest) {
    /**
     * @internal
     */
    CloseTunnelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloseTunnelRequest = exports.CloseTunnelRequest || (exports.CloseTunnelRequest = {}));
var CloseTunnelResponse;
(function (CloseTunnelResponse) {
    /**
     * @internal
     */
    CloseTunnelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloseTunnelResponse = exports.CloseTunnelResponse || (exports.CloseTunnelResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "CONNECTED";
    ConnectionStatus["DISCONNECTED"] = "DISCONNECTED";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var ConnectionState;
(function (ConnectionState) {
    /**
     * @internal
     */
    ConnectionState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var DescribeTunnelRequest;
(function (DescribeTunnelRequest) {
    /**
     * @internal
     */
    DescribeTunnelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTunnelRequest = exports.DescribeTunnelRequest || (exports.DescribeTunnelRequest = {}));
var DestinationConfig;
(function (DestinationConfig) {
    /**
     * @internal
     */
    DestinationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationConfig = exports.DestinationConfig || (exports.DestinationConfig = {}));
var TunnelStatus;
(function (TunnelStatus) {
    TunnelStatus["CLOSED"] = "CLOSED";
    TunnelStatus["OPEN"] = "OPEN";
})(TunnelStatus = exports.TunnelStatus || (exports.TunnelStatus = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var TimeoutConfig;
(function (TimeoutConfig) {
    /**
     * @internal
     */
    TimeoutConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeoutConfig = exports.TimeoutConfig || (exports.TimeoutConfig = {}));
var Tunnel;
(function (Tunnel) {
    /**
     * @internal
     */
    Tunnel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tunnel = exports.Tunnel || (exports.Tunnel = {}));
var DescribeTunnelResponse;
(function (DescribeTunnelResponse) {
    /**
     * @internal
     */
    DescribeTunnelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTunnelResponse = exports.DescribeTunnelResponse || (exports.DescribeTunnelResponse = {}));
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
var ListTunnelsRequest;
(function (ListTunnelsRequest) {
    /**
     * @internal
     */
    ListTunnelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTunnelsRequest = exports.ListTunnelsRequest || (exports.ListTunnelsRequest = {}));
var TunnelSummary;
(function (TunnelSummary) {
    /**
     * @internal
     */
    TunnelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TunnelSummary = exports.TunnelSummary || (exports.TunnelSummary = {}));
var ListTunnelsResponse;
(function (ListTunnelsResponse) {
    /**
     * @internal
     */
    ListTunnelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTunnelsResponse = exports.ListTunnelsResponse || (exports.ListTunnelsResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var OpenTunnelRequest;
(function (OpenTunnelRequest) {
    /**
     * @internal
     */
    OpenTunnelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpenTunnelRequest = exports.OpenTunnelRequest || (exports.OpenTunnelRequest = {}));
var OpenTunnelResponse;
(function (OpenTunnelResponse) {
    /**
     * @internal
     */
    OpenTunnelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sourceAccessToken && { sourceAccessToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.destinationAccessToken && { destinationAccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(OpenTunnelResponse = exports.OpenTunnelResponse || (exports.OpenTunnelResponse = {}));
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
//# sourceMappingURL=models_0.js.map