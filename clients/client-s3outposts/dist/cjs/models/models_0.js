"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEndpointsResult = exports.ListEndpointsRequest = exports.Endpoint = exports.EndpointStatus = exports.NetworkInterface = exports.DeleteEndpointRequest = exports.ValidationException = exports.ResourceNotFoundException = exports.InternalServerException = exports.CreateEndpointResult = exports.CreateEndpointRequest = exports.ConflictException = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateEndpointRequest;
(function (CreateEndpointRequest) {
    /**
     * @internal
     */
    CreateEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointRequest = exports.CreateEndpointRequest || (exports.CreateEndpointRequest = {}));
var CreateEndpointResult;
(function (CreateEndpointResult) {
    /**
     * @internal
     */
    CreateEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointResult = exports.CreateEndpointResult || (exports.CreateEndpointResult = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DeleteEndpointRequest;
(function (DeleteEndpointRequest) {
    /**
     * @internal
     */
    DeleteEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointRequest = exports.DeleteEndpointRequest || (exports.DeleteEndpointRequest = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["AVAILABLE"] = "AVAILABLE";
    EndpointStatus["PENDING"] = "PENDING";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var ListEndpointsRequest;
(function (ListEndpointsRequest) {
    /**
     * @internal
     */
    ListEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsRequest = exports.ListEndpointsRequest || (exports.ListEndpointsRequest = {}));
var ListEndpointsResult;
(function (ListEndpointsResult) {
    /**
     * @internal
     */
    ListEndpointsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsResult = exports.ListEndpointsResult || (exports.ListEndpointsResult = {}));
//# sourceMappingURL=models_0.js.map