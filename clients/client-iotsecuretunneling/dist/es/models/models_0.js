import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var CloseTunnelRequest;
(function (CloseTunnelRequest) {
    /**
     * @internal
     */
    CloseTunnelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloseTunnelRequest || (CloseTunnelRequest = {}));
export var CloseTunnelResponse;
(function (CloseTunnelResponse) {
    /**
     * @internal
     */
    CloseTunnelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloseTunnelResponse || (CloseTunnelResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "CONNECTED";
    ConnectionStatus["DISCONNECTED"] = "DISCONNECTED";
})(ConnectionStatus || (ConnectionStatus = {}));
export var ConnectionState;
(function (ConnectionState) {
    /**
     * @internal
     */
    ConnectionState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionState || (ConnectionState = {}));
export var DescribeTunnelRequest;
(function (DescribeTunnelRequest) {
    /**
     * @internal
     */
    DescribeTunnelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTunnelRequest || (DescribeTunnelRequest = {}));
export var DestinationConfig;
(function (DestinationConfig) {
    /**
     * @internal
     */
    DestinationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationConfig || (DestinationConfig = {}));
export var TunnelStatus;
(function (TunnelStatus) {
    TunnelStatus["CLOSED"] = "CLOSED";
    TunnelStatus["OPEN"] = "OPEN";
})(TunnelStatus || (TunnelStatus = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var TimeoutConfig;
(function (TimeoutConfig) {
    /**
     * @internal
     */
    TimeoutConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeoutConfig || (TimeoutConfig = {}));
export var Tunnel;
(function (Tunnel) {
    /**
     * @internal
     */
    Tunnel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tunnel || (Tunnel = {}));
export var DescribeTunnelResponse;
(function (DescribeTunnelResponse) {
    /**
     * @internal
     */
    DescribeTunnelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTunnelResponse || (DescribeTunnelResponse = {}));
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
export var ListTunnelsRequest;
(function (ListTunnelsRequest) {
    /**
     * @internal
     */
    ListTunnelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTunnelsRequest || (ListTunnelsRequest = {}));
export var TunnelSummary;
(function (TunnelSummary) {
    /**
     * @internal
     */
    TunnelSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TunnelSummary || (TunnelSummary = {}));
export var ListTunnelsResponse;
(function (ListTunnelsResponse) {
    /**
     * @internal
     */
    ListTunnelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTunnelsResponse || (ListTunnelsResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var OpenTunnelRequest;
(function (OpenTunnelRequest) {
    /**
     * @internal
     */
    OpenTunnelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenTunnelRequest || (OpenTunnelRequest = {}));
export var OpenTunnelResponse;
(function (OpenTunnelResponse) {
    /**
     * @internal
     */
    OpenTunnelResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.sourceAccessToken && { sourceAccessToken: SENSITIVE_STRING })), (obj.destinationAccessToken && { destinationAccessToken: SENSITIVE_STRING }))); };
})(OpenTunnelResponse || (OpenTunnelResponse = {}));
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
//# sourceMappingURL=models_0.js.map