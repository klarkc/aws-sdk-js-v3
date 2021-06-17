"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFoundException = exports.NotAuthorizedException = exports.InvalidEndpointException = exports.InvalidArgumentException = exports.GetMediaOutput = exports.GetMediaInput = exports.StartSelector = exports.StartSelectorType = exports.ConnectionLimitExceededException = exports.ClientLimitExceededException = void 0;
var ClientLimitExceededException;
(function (ClientLimitExceededException) {
    /**
     * @internal
     */
    ClientLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientLimitExceededException = exports.ClientLimitExceededException || (exports.ClientLimitExceededException = {}));
var ConnectionLimitExceededException;
(function (ConnectionLimitExceededException) {
    /**
     * @internal
     */
    ConnectionLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionLimitExceededException = exports.ConnectionLimitExceededException || (exports.ConnectionLimitExceededException = {}));
var StartSelectorType;
(function (StartSelectorType) {
    StartSelectorType["CONTINUATION_TOKEN"] = "CONTINUATION_TOKEN";
    StartSelectorType["EARLIEST"] = "EARLIEST";
    StartSelectorType["FRAGMENT_NUMBER"] = "FRAGMENT_NUMBER";
    StartSelectorType["NOW"] = "NOW";
    StartSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    StartSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(StartSelectorType = exports.StartSelectorType || (exports.StartSelectorType = {}));
var StartSelector;
(function (StartSelector) {
    /**
     * @internal
     */
    StartSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSelector = exports.StartSelector || (exports.StartSelector = {}));
var GetMediaInput;
(function (GetMediaInput) {
    /**
     * @internal
     */
    GetMediaInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMediaInput = exports.GetMediaInput || (exports.GetMediaInput = {}));
var GetMediaOutput;
(function (GetMediaOutput) {
    /**
     * @internal
     */
    GetMediaOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMediaOutput = exports.GetMediaOutput || (exports.GetMediaOutput = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var InvalidEndpointException;
(function (InvalidEndpointException) {
    /**
     * @internal
     */
    InvalidEndpointException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEndpointException = exports.InvalidEndpointException || (exports.InvalidEndpointException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
//# sourceMappingURL=models_0.js.map